
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://www.iptvprovider.me';
  
  return {
    rules: [
        {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/staging/'],
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
        }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
