
import { MetadataRoute } from 'next'
import { howToArticles } from '@/lib/how-to';
import { allCountries } from '@/lib/countries';

import { siteConfig } from '@/lib/site-config';
import { getSitemapEntries } from '@/lib/site-data/sitelinks-config';

const baseUrl = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {

  // 1. Define Static Device IDs (to exclude from dynamic generation)
  const staticDeviceIds = [
    'roku',
    'apple-tv',
    'fire-tv',
    'samsung-tv',
    'lg-tv',
    'android',
    'ios',
    'windows',
    'macos',
    'mag',
    'troubleshooting',
  ];

  // 2. Generate Dynamic Device Pages (excluding static ones)
  const devicePages: MetadataRoute.Sitemap = howToArticles
    .filter((article) => !staticDeviceIds.includes(article.id))
    .map((article) => ({
      url: `${baseUrl}/devices/${article.id}`,
      lastModified: new Date(article.dateModified),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  // 3. Generate Static Device Pages (Hardcoded 0.9 priority)
  // 3. Generate Static Device Pages (Hardcoded 0.9 priority)
  const staticDevicePages: MetadataRoute.Sitemap = staticDeviceIds.map(id => ({
    url: `${baseUrl}/devices/${id}`,
    lastModified: new Date(),
    changeFrequency: (id === 'troubleshooting') ? 'monthly' : 'monthly',
    priority: (id === 'troubleshooting') ? 0.8 : 0.9,
  }));

  // 4. Country Pages
  const countryPages: MetadataRoute.Sitemap = allCountries.map((country) => ({
    url: `${baseUrl}/country/${country.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 5. Core Pages (Source regarding priorities/frequencies from sitelinks-config)
  const corePages: MetadataRoute.Sitemap = getSitemapEntries(baseUrl).map(entry => ({
      url: entry.url,
      lastModified: new Date(entry.lastmod),
      changeFrequency: entry.changefreq as 'daily' | 'weekly' | 'monthly' | 'yearly',
      priority: entry.priority,
  }));

  // 6. Blog Pages
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-iptv-provider-2025`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/iptv-vs-cable-tv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/iptv-vs-streaming-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cheap-iptv-providers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-setup-iptv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/iptv-troubleshooting-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/iptv-vpn-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // 7. Additional Static Pages
  const additionalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // review-process page excluded: mixed identity issue (seller vs reviewer)
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [
    ...corePages,
    ...staticDevicePages,
    ...devicePages,
    ...countryPages,
    ...blogPages,
    ...additionalPages,
  ]
}
