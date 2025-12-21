/**
 * AI-Optimized Sitemap Generator
 * 
 * Creates sitemaps optimized for both traditional search engines
 * and AI crawlers (GPTBot, PerplexityBot, Claude, etc.)
 * 
 * Features:
 * - Semantic URL prioritization
 * - AI-friendly lastmod timestamps
 * - Content type hints for AI crawlers
 * - Multi-format exports (XML, JSON, TXT)
 */

import { siteConfig } from '@/lib/site-config';
import { topicClusters, getInternalLinkingStats } from '@/lib/semantic-linking';
import { allCountries } from '@/lib/countries';
import { howToArticles } from '@/lib/how-to';

// Types
export interface SitemapEntry {
    url: string;
    lastmod: string;
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
    contentType?: 'pillar' | 'cluster' | 'support' | 'transactional' | 'informational';
    aiRelevance?: 'high' | 'medium' | 'low';
    keywords?: string[];
}

// ============================================================================
// URL COLLECTIONS
// ============================================================================

/**
 * Get all site URLs with AI-optimized metadata
 */
export function getAllUrls(): SitemapEntry[] {
    const baseUrl = siteConfig.url;
    const now = new Date().toISOString().split('T')[0];

    const urls: SitemapEntry[] = [];

    // ========== CORE PAGES (Highest Priority) ==========
    urls.push(
        {
            url: baseUrl,
            lastmod: now,
            changefreq: 'daily',
            priority: 1.0,
            contentType: 'pillar',
            aiRelevance: 'high',
            keywords: ['iptv provider', 'best iptv', 'iptv streaming'],
        },
        {
            url: `${baseUrl}/pricing`,
            lastmod: now,
            changefreq: 'weekly',
            priority: 0.95,
            contentType: 'transactional',
            aiRelevance: 'high',
            keywords: ['iptv subscription', 'iptv price', 'buy iptv'],
        },
        {
            url: `${baseUrl}/iptv-free-trial`,
            lastmod: now,
            changefreq: 'weekly',
            priority: 0.9,
            contentType: 'transactional',
            aiRelevance: 'high',
            keywords: ['iptv free trial', 'try iptv', 'test iptv'],
        },
        {
            url: `${baseUrl}/iptv-guide`,
            lastmod: now,
            changefreq: 'monthly',
            priority: 0.95,
            contentType: 'pillar',
            aiRelevance: 'high',
            keywords: ['what is iptv', 'iptv guide', 'iptv explained'],
        }
    );

    // ========== DEVICE GUIDES ==========
    urls.push({
        url: `${baseUrl}/devices`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.85,
        contentType: 'pillar',
        aiRelevance: 'high',
        keywords: ['iptv devices', 'iptv setup'],
    });

    // Static device pages
    const staticDevices = [
        'fire-tv', 'samsung-tv', 'lg-tv', 'apple-tv', 'roku',
        'android', 'ios', 'windows', 'macos', 'mag', 'troubleshooting'
    ];

    for (const device of staticDevices) {
        urls.push({
            url: `${baseUrl}/devices/${device}`,
            lastmod: now,
            changefreq: 'monthly',
            priority: device === 'troubleshooting' ? 0.75 : 0.85,
            contentType: 'cluster',
            aiRelevance: 'high',
            keywords: [`iptv ${device}`, `${device} iptv setup`],
        });
    }

    // Dynamic device pages from how-to articles
    for (const article of howToArticles) {
        if (!staticDevices.includes(article.id)) {
            urls.push({
                url: `${baseUrl}/devices/${article.id}`,
                lastmod: article.dateModified,
                changefreq: 'monthly',
                priority: 0.75,
                contentType: 'cluster',
                aiRelevance: 'medium',
                keywords: article.keywords || [],
            });
        }
    }

    // ========== BLOG PAGES ==========
    urls.push({
        url: `${baseUrl}/blog`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.8,
        contentType: 'pillar',
        aiRelevance: 'medium',
    });

    const blogPosts = [
        { slug: 'best-iptv-provider-2025', priority: 0.9 },
        { slug: 'iptv-vs-cable-tv', priority: 0.8 },
        { slug: 'iptv-vs-streaming-services', priority: 0.8 },
        { slug: 'cheap-iptv-providers', priority: 0.8 },
        { slug: 'how-to-setup-iptv', priority: 0.85 },
        { slug: 'iptv-troubleshooting-guide', priority: 0.75 },
        { slug: 'iptv-vpn-guide', priority: 0.75 },
    ];

    for (const post of blogPosts) {
        urls.push({
            url: `${baseUrl}/blog/${post.slug}`,
            lastmod: now,
            changefreq: 'monthly',
            priority: post.priority,
            contentType: 'informational',
            aiRelevance: post.priority >= 0.85 ? 'high' : 'medium',
        });
    }

    // ========== COUNTRY PAGES ==========
    urls.push({
        url: `${baseUrl}/locations`,
        lastmod: now,
        changefreq: 'monthly',
        priority: 0.7,
        contentType: 'pillar',
        aiRelevance: 'medium',
    });

    for (const country of allCountries) {
        urls.push({
            url: `${baseUrl}/country/${country.id}`,
            lastmod: now,
            changefreq: 'monthly',
            priority: 0.7,
            contentType: 'cluster',
            aiRelevance: 'medium',
            keywords: [`iptv ${country.name}`, `${country.name} iptv provider`],
        });
    }

    // ========== SUPPORT PAGES ==========
    urls.push(
        {
            url: `${baseUrl}/faq`,
            lastmod: now,
            changefreq: 'monthly',
            priority: 0.7,
            contentType: 'support',
            aiRelevance: 'high', // FAQs are great for AI
        },
        {
            url: `${baseUrl}/contact`,
            lastmod: now,
            changefreq: 'yearly',
            priority: 0.5,
            contentType: 'support',
            aiRelevance: 'low',
        },
        {
            url: `${baseUrl}/about`,
            lastmod: now,
            changefreq: 'monthly',
            priority: 0.6,
            contentType: 'support',
            aiRelevance: 'medium',
        },
        {
            url: `${baseUrl}/team`,
            lastmod: now,
            changefreq: 'monthly',
            priority: 0.5,
            contentType: 'support',
            aiRelevance: 'medium',
        },
        {
            url: `${baseUrl}/review-process`,
            lastmod: now,
            changefreq: 'monthly',
            priority: 0.5,
            contentType: 'support',
            aiRelevance: 'medium',
        },
        {
            url: `${baseUrl}/legal`,
            lastmod: now,
            changefreq: 'yearly',
            priority: 0.3,
            contentType: 'support',
            aiRelevance: 'low',
        },
        {
            url: `${baseUrl}/privacy`,
            lastmod: now,
            changefreq: 'yearly',
            priority: 0.3,
            contentType: 'support',
            aiRelevance: 'low',
        }
    );

    return urls;
}

// ============================================================================
// SITEMAP GENERATORS
// ============================================================================

/**
 * Generate XML sitemap (standard format)
 */
export function generateXmlSitemap(): string {
    const urls = getAllUrls();

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    for (const entry of urls) {
        xml += '  <url>\n';
        xml += `    <loc>${entry.url}</loc>\n`;
        xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
        xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
        xml += `    <priority>${entry.priority.toFixed(1)}</priority>\n`;
        xml += '  </url>\n';
    }

    xml += '</urlset>';
    return xml;
}

/**
 * Generate JSON sitemap (for AI crawlers)
 */
export function generateJsonSitemap(): object {
    const urls = getAllUrls();
    const stats = getInternalLinkingStats();

    return {
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        dateModified: new Date().toISOString(),
        statistics: {
            totalUrls: urls.length,
            pillars: stats.pillars,
            clusters: stats.clusters,
            supportPages: stats.supportPages,
            topicClusters: stats.topicClusters,
        },
        urls: urls.map((entry) => ({
            url: entry.url,
            title: entry.keywords?.[0] || entry.url.split('/').pop(),
            lastModified: entry.lastmod,
            priority: entry.priority,
            contentType: entry.contentType,
            aiRelevance: entry.aiRelevance,
            keywords: entry.keywords,
        })),
        highPriorityUrls: urls
            .filter((u) => u.aiRelevance === 'high')
            .map((u) => u.url),
    };
}

/**
 * Generate plain text sitemap (simple URL list)
 */
export function generateTxtSitemap(): string {
    const urls = getAllUrls();
    return urls
        .sort((a, b) => b.priority - a.priority)
        .map((entry) => entry.url)
        .join('\n');
}

/**
 * Generate AI-focused sitemap with content hints
 */
export function generateAiSitemap(): string {
    const urls = getAllUrls();

    let content = `# AI Sitemap for ${siteConfig.name}\n`;
    content += `# Generated: ${new Date().toISOString()}\n`;
    content += `# Total Pages: ${urls.length}\n\n`;

    content += '## High Priority (AI-Relevant)\n';
    for (const entry of urls.filter((u) => u.aiRelevance === 'high')) {
        content += `- ${entry.url}\n`;
        if (entry.keywords?.length) {
            content += `  Keywords: ${entry.keywords.join(', ')}\n`;
        }
    }

    content += '\n## Medium Priority\n';
    for (const entry of urls.filter((u) => u.aiRelevance === 'medium')) {
        content += `- ${entry.url}\n`;
    }

    content += '\n## Low Priority (Support Pages)\n';
    for (const entry of urls.filter((u) => u.aiRelevance === 'low')) {
        content += `- ${entry.url}\n`;
    }

    return content;
}

export default {
    getAllUrls,
    generateXmlSitemap,
    generateJsonSitemap,
    generateTxtSitemap,
    generateAiSitemap,
};
