
import { MetadataRoute } from 'next'
import { howToArticles } from '@/lib/how-to';
import { allCountries } from '@/lib/countries';

import { siteConfig } from '@/lib/site-config';

const baseUrl = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {

  const devicePages: MetadataRoute.Sitemap = howToArticles.map((article) => ({
    url: `${baseUrl}/devices/${article.id}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const countryPages: MetadataRoute.Sitemap = allCountries.map((country) => ({
    url: `${baseUrl}/country/${country.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const staticPages: MetadataRoute.Sitemap = [
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
    {
      url: `${baseUrl}/blog/iptv-vpn-guide`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [
    ...staticPages,
    ...devicePages,
    ...countryPages,
  ]
}
