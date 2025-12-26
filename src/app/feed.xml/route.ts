/**
 * RSS/Atom Feed Generator
 * 
 * Provides an RSS feed for:
 * - Blog posts
 * - AI crawlers (referenced in ai.txt)
 * - Feed readers
 * - Content aggregators
 */

import { NextResponse } from 'next/server';
import { siteConfig } from '@/lib/site-config';

export async function GET() {
    const baseUrl = siteConfig.url;
    const now = new Date().toISOString();

    // Blog posts with metadata
    const blogPosts = [
        {
            title: 'Best IPTV Provider 2026: Complete Review & Comparison',
            slug: 'best-iptv-provider-2026',
            description: 'Comprehensive review of the top IPTV providers in 2026. Compare features, pricing, channels, and find the best IPTV service for your needs.',
            pubDate: '2026-01-01T00:00:00Z',
            category: 'Reviews',
        },
        {
            title: 'IPTV vs Cable TV: Which is Better in 2026?',
            slug: 'iptv-vs-cable-tv',
            description: 'Detailed comparison between IPTV and traditional cable TV. Learn about costs, channels, quality, and which option is right for you.',
            pubDate: '2026-01-01T00:00:00Z',
            category: 'Comparisons',
        },
        {
            title: 'IPTV vs Streaming Services: Complete Comparison',
            slug: 'iptv-vs-streaming-services',
            description: 'Compare IPTV to Netflix, Hulu, Disney+, and other streaming services. Understand the differences and choose the best option.',
            pubDate: '2026-01-01T00:00:00Z',
            category: 'Comparisons',
        },
        {
            title: 'Cheap IPTV Providers 2026: Best Budget Options Under $15/Month',
            slug: 'cheap-iptv-providers',
            description: 'Find affordable IPTV providers without sacrificing quality. Budget-friendly options starting at $5.83/month.',
            pubDate: '2026-01-01T00:00:00Z',
            category: 'Guides',
        },
        {
            title: 'How to Setup IPTV in 2026: Complete Step-by-Step Guide',
            slug: 'how-to-setup-iptv',
            description: 'Learn how to set up IPTV on any device. Complete tutorial with screenshots and troubleshooting tips.',
            pubDate: '2026-01-01T00:00:00Z',
            category: 'Tutorials',
        },
        {
            title: 'IPTV Troubleshooting Guide 2026: Fix Common Issues',
            slug: 'iptv-troubleshooting-guide',
            description: 'Comprehensive guide to fixing IPTV problems including buffering, freezing, login errors, and more.',
            pubDate: '2026-01-01T00:00:00Z',
            category: 'Troubleshooting',
        },
        {
            title: 'IPTV VPN Guide: Best VPNs for IPTV Streaming',
            slug: 'iptv-vpn-guide',
            description: 'Learn why you need a VPN for IPTV and which VPN services work best for streaming.',
            pubDate: '2026-01-01T00:00:00Z',
            category: 'Guides',
        },
    ];

    // Helper function to escape XML special characters
    const escapeXml = (str: string) => {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    };

    // Generate RSS 2.0 feed
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(siteConfig.name)} Blog</title>
    <link>${baseUrl}/blog</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-US</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/IPTV-Provider.png</url>
      <title>${escapeXml(siteConfig.name)}</title>
      <link>${baseUrl}</link>
    </image>
    <copyright>Copyright ${new Date().getFullYear()} ${escapeXml(siteConfig.name)}</copyright>
    <managingEditor>${siteConfig.links.email} (${escapeXml(siteConfig.name)} Team)</managingEditor>
    <webMaster>${siteConfig.links.email} (${escapeXml(siteConfig.name)} Team)</webMaster>
    <category>IPTV</category>
    <category>Streaming</category>
    <category>Technology</category>
    <ttl>1440</ttl>
${blogPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${post.pubDate}</pubDate>
      <category>${post.category}</category>
      <dc:creator>${escapeXml(siteConfig.name)} Team</dc:creator>
      <content:encoded><![CDATA[
        <p>${post.description}</p>
        <p><a href="${baseUrl}/blog/${post.slug}">Read the full article on ${siteConfig.name}</a></p>
      ]]></content:encoded>
    </item>`).join('')}
  </channel>
</rss>`;

    return new NextResponse(rss, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
