/**
 * AI Sitemap API Route
 * Serves AI-optimized sitemap in various formats
 * 
 * Usage:
 * - /api/sitemap/ai - AI-focused text sitemap
 * - /api/sitemap/json - JSON format with metadata
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateJsonSitemap, generateAiSitemap } from '@/lib/ai-sitemap';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') || 'json';

    try {
        if (format === 'json') {
            const sitemap = generateJsonSitemap();
            return NextResponse.json(sitemap, {
                headers: {
                    'Cache-Control': 'public, max-age=86400, s-maxage=86400',
                    'X-Robots-Tag': 'noindex',
                },
            });
        }

        if (format === 'ai' || format === 'txt') {
            const sitemap = generateAiSitemap();
            return new NextResponse(sitemap, {
                headers: {
                    'Content-Type': 'text/plain; charset=utf-8',
                    'Cache-Control': 'public, max-age=86400, s-maxage=86400',
                    'X-Robots-Tag': 'noindex',
                },
            });
        }

        return NextResponse.json(
            { error: 'Invalid format. Use ?format=json or ?format=ai' },
            { status: 400 }
        );
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return NextResponse.json(
            { error: 'Failed to generate sitemap' },
            { status: 500 }
        );
    }
}
