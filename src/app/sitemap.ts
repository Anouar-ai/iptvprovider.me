
import { MetadataRoute } from 'next'
import { howToArticles } from '@/lib/how-to';
import { allCountries } from '@/lib/countries';

import { siteConfig } from '@/lib/site-config';

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
  const staticDevicePages: MetadataRoute.Sitemap = staticDeviceIds.map(id => ({
    url: `${baseUrl}/devices/${id}`,
    lastModified: new Date(),
    changeFrequency: (id === 'troubleshooting') ? 'monthly' : 'monthly', // Troubleshooting is 0.8 usually but here we can standardize or separate
    priority: (id === 'troubleshooting') ? 0.8 : 0.9,
  }));

  // 4. Country Pages
  const countryPages: MetadataRoute.Sitemap = allCountries.map((country) => ({
    url: `${baseUrl}/country/${country.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 5. Core Pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/devices`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/iptv-free-trial`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iptv-guide`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];

  // 6. Blog Pages
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-iptv-provider-2026`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/iptv-vs-cable-tv`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/iptv-vs-streaming-services`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cheap-iptv-providers`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-setup-iptv`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/iptv-troubleshooting-guide`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [
    ...corePages,
    ...staticDevicePages,
    ...devicePages,
    ...countryPages,
    ...blogPages,
  ]
}
