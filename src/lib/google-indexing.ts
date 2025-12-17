import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

export type IndexingType = 'URL_UPDATED' | 'URL_DELETED';

export interface IndexingResult {
    url: string;
    status: 'success' | 'failed';
    code?: number;
    message?: string;
    type?: IndexingType;
}

export class GoogleIndexingService {
    private static SCOPES = ['https://www.googleapis.com/auth/indexing'];
    private static MAX_RETRIES = 3;
    private static INITIAL_BACKOFF_MS = 1000;

    private getCredentials() {
        if (!process.env.GOOGLE_INDEXING_SERVICE_ACCOUNT_BASE64) {
            throw new Error('GOOGLE_INDEXING_SERVICE_ACCOUNT_BASE64 is not set');
        }
        const decodedKey = Buffer.from(process.env.GOOGLE_INDEXING_SERVICE_ACCOUNT_BASE64, 'base64').toString('utf-8');
        return JSON.parse(decodedKey);
    }

    private async getAuthClient(): Promise<JWT> {
        const credentials = this.getCredentials();
        const jwtClient = new google.auth.JWT(
            credentials.client_email,
            undefined,
            credentials.private_key,
            GoogleIndexingService.SCOPES
        );
        await jwtClient.authorize();
        return jwtClient;
    }

    /**
     * Publishes a single URL update to the Google Indexing API.
     * Includes automatic retries for rate limits.
     */
    async publishUrl(url: string, type: IndexingType = 'URL_UPDATED'): Promise<IndexingResult> {
        try {
            const auth = await this.getAuthClient();
            const indexing = google.indexing({ version: 'v3', auth });

            return await this.retryOperation(async () => {
                await indexing.urlNotifications.publish({
                    requestBody: {
                        url,
                        type,
                    },
                });
                return { url, status: 'success', type };
            });
        } catch (error: any) {
            console.error(`Failed to separate index URL ${url}:`, error.message);
            return {
                url,
                status: 'failed',
                code: error.code || 500,
                message: error.message || 'Unknown error',
                type
            };
        }
    }

    /**
     * Publishes a batch of URLs.
     * Processes them with controlled concurrency to avoid overwhelming the API.
     */
    async publishBatch(urls: string[], type: IndexingType = 'URL_UPDATED', concurrency: number = 5): Promise<IndexingResult[]> {
        const results: IndexingResult[] = [];

        // Process in chunks
        for (let i = 0; i < urls.length; i += concurrency) {
            const chunk = urls.slice(i, i + concurrency);
            const promises = chunk.map(url => this.publishUrl(url, type));
            const chunkResults = await Promise.all(promises);
            results.push(...chunkResults);
        }

        return results;
    }

    /**
     * Gets the current notification status of a URL.
     */
    async getStatus(url: string) {
        try {
            const auth = await this.getAuthClient();
            const indexing = google.indexing({ version: 'v3', auth });

            const res = await indexing.urlNotifications.getMetadata({
                url: encodeURIComponent(url)
            });

            return res.data;
        } catch (error: any) {
            console.error(`Failed to get status for URL ${url}:`, error.message);
            throw error;
        }
    }

    private async retryOperation<T>(operation: () => Promise<T>): Promise<T> {
        let attempt = 0;
        while (true) {
            try {
                return await operation();
            } catch (error: any) {
                attempt++;
                if (attempt > GoogleIndexingService.MAX_RETRIES || (error.code !== 429 && error.code < 500)) {
                    throw error;
                }

                const delay = GoogleIndexingService.INITIAL_BACKOFF_MS * Math.pow(2, attempt - 1);
                console.log(`Retrying operation (attempt ${attempt}) in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
}

export const indexingService = new GoogleIndexingService();
