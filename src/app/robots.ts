import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config';

/**
 * Robots.txt Configuration - AI & Search Engine Optimized
 * 
 * Configuration for:
 * - Traditional search engines (Google, Bing, etc.)
 * - AI crawlers (GPTBot, PerplexityBot, Claude, etc.)
 * - AI training bots (blocked for content protection)
 * 
 * Key paths:
 * - /_next/static/ → Allowed (fonts, CSS, JS for page rendering)
 * - /_next/image/  → Allowed (optimized images)
 * - /api/          → Blocked (technical endpoints, not pages)
 * - /_next/data/   → Blocked (internal data fetching, no SEO value)
 * - /llms.txt      → Allowed (AI model information file)
 * - /ai.txt        → Allowed (AI crawler instructions)
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // ========== DEFAULT CRAWLERS ==========
            {
                userAgent: '*',
                allow: ['/', '/_next/static/', '/_next/image/', '/llms.txt', '/ai.txt'],
                disallow: ['/api/', '/_next/data/', '/admin/', '/staging/', '/private/', '/checkout'],
            },

            // ========== AI ASSISTANT CRAWLERS (Allowed) ==========
            // These bots fetch content to answer user queries in real-time
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                userAgent: 'anthropic-ai',
                allow: '/',
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: 'YouBot',
                allow: '/',
            },
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
            },

            // ========== AI TRAINING BOTS (Blocked) ==========
            // These bots scrape content for training datasets
            {
                userAgent: 'GPTBot',
                disallow: ['/'],
            },
            {
                userAgent: 'CCBot',
                disallow: ['/'],
            },
            {
                userAgent: 'Google-Extended-Training',
                disallow: ['/'],
            },
            {
                userAgent: 'FacebookBot',
                disallow: ['/'],
            },
            {
                userAgent: 'Bytespider',
                disallow: ['/'],
            },

            // ========== SEO CRAWLERS (Special Rules) ==========
            {
                userAgent: 'AhrefsBot',
                allow: '/',
                crawlDelay: 10,
            },
            {
                userAgent: 'SemrushBot',
                allow: '/',
                crawlDelay: 10,
            },
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    }
}
