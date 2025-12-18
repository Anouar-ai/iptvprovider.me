import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config';

/**
 * Robots.txt Configuration
 * 
 * Allows crawling of static assets and optimized images for better page rendering.
 * Blocks API routes and internal data fetching endpoints.
 * 
 * - /_next/static/ → Allowed (fonts, CSS, JS for page rendering)
 * - /_next/image/  → Allowed (optimized images)
 * - /api/          → Blocked (technical endpoints, not pages)
 * - /_next/data/   → Blocked (internal data fetching, no SEO value)
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/_next/static/', '/_next/image/'],
                disallow: ['/api/', '/_next/data/', '/admin/', '/staging/', '/private/'],
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
