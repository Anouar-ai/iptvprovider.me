import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
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
