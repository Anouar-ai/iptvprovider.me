export interface IndexNowResult {
    success: boolean;
    message: string;
    statusCode?: number;
    processedCount?: number;
}

export class BingIndexingService {
    private static ENDPOINT = 'https://api.indexnow.org/indexnow';
    private static MAX_URLS_PER_REQUEST = 2000; // conservative limit (official is 10k)
    private static MAX_RETRIES = 3;
    private static INITIAL_BACKOFF_MS = 1000;

    private get host(): string {
        return process.env.NEXT_PUBLIC_SITE_URL
            ? new URL(process.env.NEXT_PUBLIC_SITE_URL).host
            : 'www.iptvprovider.me'; // Fallback to hardcoded host if env not set
    }

    private get key(): string {
        return process.env.INDEXNOW_KEY || '48bc54b9d0744723920c74900a89405d';
    }

    private get keyLocation(): string {
        // Assuming the key file is served at root
        return `https://${this.host}/${this.key}.txt`;
    }

    /**
     * Submits a single URL to IndexNow.
     */
    async submitUrl(url: string): Promise<IndexNowResult> {
        return this.submitBatch([url]);
    }

    /**
     * Submits a batch of URLs to IndexNow.
     * Automatically chunks large batches to comply with API limits.
     */
    async submitBatch(urls: string[]): Promise<IndexNowResult> {
        if (!urls.length) {
            return { success: true, message: 'No URLs to submit', processedCount: 0 };
        }

        const chunks = this.chunkArray(urls, BingIndexingService.MAX_URLS_PER_REQUEST);
        const results: IndexNowResult[] = [];

        for (const chunk of chunks) {
            const result = await this.retryOperation(() => this.sendRequest(chunk));
            results.push(result);
        }

        // Aggregate results
        const failed = results.filter(r => !r.success);
        if (failed.length > 0) {
            return {
                success: false,
                message: `Partial failure: ${failed.length}/${results.length} chunks failed. Last error: ${failed[failed.length - 1].message}`,
                statusCode: failed[failed.length - 1].statusCode,
                processedCount: urls.length
            };
        }

        return {
            success: true,
            message: 'All URLs submitted successfully',
            processedCount: urls.length,
            statusCode: 200
        };
    }

    private chunkArray<T>(array: T[], size: number): T[][] {
        const chunked: T[][] = [];
        for (let i = 0; i < array.length; i += size) {
            chunked.push(array.slice(i, i + size));
        }
        return chunked;
    }

    private async sendRequest(urlList: string[]): Promise<IndexNowResult> {
        try {
            const body = {
                host: this.host,
                key: this.key,
                keyLocation: this.keyLocation,
                urlList,
            };

            const response = await fetch(BingIndexingService.ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`API Error ${response.status}: ${text}`);
            }

            return { success: true, message: 'OK', statusCode: response.status };

        } catch (error: any) {
            throw error; // Rethrow to trigger retry
        }
    }

    private async retryOperation<T>(operation: () => Promise<T>): Promise<T> {
        let attempt = 0;
        while (true) {
            try {
                return await operation();
            } catch (error: any) {
                attempt++;
                if (attempt > BingIndexingService.MAX_RETRIES) {
                    // Return a failure result instead of throwing, so other chunks can proceed if needed.
                    // Or strictly throw. For this service, let's catch and return failure to caller.
                    throw error;
                }

                // Don't retry on 400 Bad Request (client error)
                if (error.message.includes('400') || error.message.includes('403')) {
                    throw error;
                }

                const delay = BingIndexingService.INITIAL_BACKOFF_MS * Math.pow(2, attempt - 1);
                console.warn(`[IndexNow] Retrying operation (attempt ${attempt}) in ${delay}ms... Error: ${error.message}`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
}

export const bingIndexingService = new BingIndexingService();
