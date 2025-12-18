import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config';

/**
 * Robots.txt Configuration
 * 
 * IMPORTANT: Blocking /api/ and /_next/ is INTENTIONAL and CORRECT.
 * 
 * Google Search Console may show "Blocked by robots.txt" warnings for:
 * - /api/og?title=... (Open Graph image generation endpoints)
 * - /_next/static/... (Next.js internal assets: fonts, JS, CSS)
 * 
 * This is NOT a bug! These should NOT be indexed because:
 * 1. /api/ routes are technical endpoints, not user-facing pages
 * 2. /_next/ contains internal build assets with no SEO value
 * 3. Blocking them saves crawl budget for actual content pages
 * 
 * To resolve GSC warnings: Validate Fix → Acknowledge as intentional
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                // These paths are intentionally blocked - see comment above
                disallow: ['/api/', '/admin/', '/staging/', '/private/', '/_next/'],
            },
            {
                userAgent: 'GPTBot',
                disallow: ['/'],
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'anthropic-ai',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: 'CCBot',
                disallow: ['/'],
            }
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
    }
}
