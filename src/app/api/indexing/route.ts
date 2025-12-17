import { NextRequest, NextResponse } from 'next/server'
import { indexingService } from '@/lib/google-indexing'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, urls, type = 'URL_UPDATED' } = body;

    if (!url && (!urls || !Array.isArray(urls) || urls.length === 0)) {
      return NextResponse.json({ error: 'URL or URLs array is required' }, { status: 400 });
    }

    if (urls && Array.isArray(urls) && urls.length > 0) {
      // Batch processing
      const results = await indexingService.publishBatch(urls, type);
      const failed = results.filter(r => r.status === 'failed');

      return NextResponse.json({
        success: true,
        total: results.length,
        failed_count: failed.length,
        results: results
      });
    } else {
      // Single URL processing
      const result = await indexingService.publishUrl(url, type);

      if (result.status === 'failed') {
        return NextResponse.json({ error: result.message }, { status: result.code || 500 });
      }

      return NextResponse.json(result);
    }
  } catch (error) {
    console.error('Indexing API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'Internal Server Error', details: errorMessage }, { status: 500 });
  }
}
