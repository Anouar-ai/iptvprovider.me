import { NextRequest, NextResponse } from 'next/server';
import { bingIndexingService } from '@/lib/bing-indexing';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, urls } = body;

    // Validate input (accept either single 'url' or array 'urls')
    if (!url && (!urls || !Array.isArray(urls) || urls.length === 0)) {
      return NextResponse.json(
        { error: 'Invalid request. Provide "url" (string) or "urls" (array of strings).' },
        { status: 400 }
      );
    }

    const targetUrls: string[] = urls || [url];

    // Use the service to submit
    // The service handles chunking, retries, and key configuration
    try {
      const result = await bingIndexingService.submitBatch(targetUrls);

      if (!result.success) {
        return NextResponse.json(
          { error: result.message },
          { status: result.statusCode || 500 }
        );
      }

      return NextResponse.json({
        message: 'URLs submitted to IndexNow successfully.',
        count: result.processedCount
      });

    } catch (e: any) {
      // Catch service-level errors (like max retries exceeded)
      return NextResponse.json(
        { error: `IndexNow submission failed: ${e.message}` },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('IndexNow API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
