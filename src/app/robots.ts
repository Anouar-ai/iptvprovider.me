import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://www.iptvprovider.me';
  
  return {
    rules: [
        {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/staging/'],
        }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
