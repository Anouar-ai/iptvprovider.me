/**
 * Semantic Internal Linking Architecture
 * 
 * Implements topic clustering and contextual linking for:
 * 1. Topic Authority Building - Pillar/cluster content model
 * 2. Entity Disambiguation - Clear internal relationships
 * 3. AI Comprehension - Structured link context
 * 4. User Navigation - Logical content pathways
 */

import { siteConfig } from '@/lib/site-config';

// ============================================================================
// TOPIC CLUSTERS - Define content relationships
// ============================================================================

export interface ContentNode {
    url: string;
    title: string;
    description: string;
    type: 'pillar' | 'cluster' | 'support';
    keywords: string[];
    relatedUrls?: string[];
}

export interface TopicCluster {
    id: string;
    pillar: ContentNode;
    clusters: ContentNode[];
}

// Define your topic clusters
export const topicClusters: TopicCluster[] = [
    {
        id: 'iptv-streaming',
        pillar: {
            url: '/iptv-guide',
            title: 'Complete IPTV Guide 2025',
            description: 'Everything you need to know about IPTV streaming',
            type: 'pillar',
            keywords: ['iptv', 'internet television', 'streaming', 'cord cutting'],
        },
        clusters: [
            {
                url: '/blog/best-iptv-provider-2025',
                title: 'Best IPTV Provider 2025',
                description: 'Top rated IPTV services compared',
                type: 'cluster',
                keywords: ['best iptv', 'iptv providers', 'iptv review'],
            },
            {
                url: '/blog/iptv-vs-cable-tv',
                title: 'IPTV vs Cable TV',
                description: 'Comparing IPTV to traditional cable',
                type: 'cluster',
                keywords: ['iptv vs cable', 'cord cutting', 'tv comparison'],
            },
            {
                url: '/blog/iptv-vs-streaming-services',
                title: 'IPTV vs Streaming Services',
                description: 'IPTV compared to Netflix, Hulu, etc.',
                type: 'cluster',
                keywords: ['iptv vs netflix', 'streaming comparison'],
            },
            {
                url: '/blog/cheap-iptv-providers',
                title: 'Cheap IPTV Providers',
                description: 'Budget-friendly IPTV options',
                type: 'cluster',
                keywords: ['cheap iptv', 'affordable iptv', 'budget streaming'],
            },
        ],
    },
    {
        id: 'iptv-setup',
        pillar: {
            url: '/devices',
            title: 'IPTV Device Guides',
            description: 'Setup guides for all devices',
            type: 'pillar',
            keywords: ['iptv setup', 'iptv devices', 'how to install iptv'],
        },
        clusters: [
            {
                url: '/devices/fire-tv',
                title: 'IPTV on Fire TV Stick',
                description: 'Install IPTV on Amazon Fire TV',
                type: 'cluster',
                keywords: ['firestick iptv', 'fire tv iptv', 'amazon iptv'],
            },
            {
                url: '/devices/samsung-tv',
                title: 'IPTV on Samsung TV',
                description: 'Setup IPTV on Samsung Smart TV',
                type: 'cluster',
                keywords: ['samsung iptv', 'smart tv iptv', 'tizen iptv'],
            },
            {
                url: '/devices/apple-tv',
                title: 'IPTV on Apple TV',
                description: 'Watch IPTV on Apple TV',
                type: 'cluster',
                keywords: ['apple tv iptv', 'tvos iptv', 'iplaytv'],
            },
            {
                url: '/devices/android',
                title: 'IPTV on Android',
                description: 'Android IPTV apps and setup',
                type: 'cluster',
                keywords: ['android iptv', 'iptv smarters', 'tivimate'],
            },
            {
                url: '/devices/troubleshooting',
                title: 'IPTV Troubleshooting',
                description: 'Fix common IPTV problems',
                type: 'support',
                keywords: ['iptv buffering', 'iptv not working', 'fix iptv'],
            },
        ],
    },
    {
        id: 'iptv-service',
        pillar: {
            url: '/pricing',
            title: 'IPTV Subscription Plans',
            description: 'Choose your IPTV subscription plan',
            type: 'pillar',
            keywords: ['iptv subscription', 'iptv pricing', 'buy iptv'],
        },
        clusters: [
            {
                url: '/iptv-free-trial',
                title: 'IPTV Free Trial',
                description: 'Try IPTV free for 24 hours',
                type: 'cluster',
                keywords: ['free trial', 'try iptv', 'test iptv'],
            },
            {
                url: '/faq',
                title: 'IPTV FAQ',
                description: 'Common questions about IPTV',
                type: 'support',
                keywords: ['iptv questions', 'iptv help', 'iptv support'],
            },
            {
                url: '/contact',
                title: 'Contact Support',
                description: 'Get help with your IPTV service',
                type: 'support',
                keywords: ['iptv support', 'contact', 'help'],
            },
        ],
    },
];

// ============================================================================
// SEMANTIC LINK COMPONENT HELPERS
// ============================================================================

/**
 * Get related content for a given URL
 */
export function getRelatedContent(currentUrl: string, limit = 4): ContentNode[] {
    const allNodes: ContentNode[] = [];
    let currentCluster: TopicCluster | undefined;

    // Collect all nodes and find current cluster
    for (const cluster of topicClusters) {
        allNodes.push(cluster.pillar);
        allNodes.push(...cluster.clusters);

        if (
            cluster.pillar.url === currentUrl ||
            cluster.clusters.some((c) => c.url === currentUrl)
        ) {
            currentCluster = cluster;
        }
    }

    if (!currentCluster) {
        // Return most important pages if no cluster match
        return allNodes.filter((n) => n.type === 'pillar').slice(0, limit);
    }

    // Prioritize same-cluster content
    const sameClusterNodes = [
        currentCluster.pillar,
        ...currentCluster.clusters,
    ].filter((n) => n.url !== currentUrl);

    // Get cross-cluster pillars for broader linking
    const otherPillars = topicClusters
        .filter((c) => c.id !== currentCluster!.id)
        .map((c) => c.pillar);

    return [...sameClusterNodes, ...otherPillars].slice(0, limit);
}

/**
 * Get breadcrumb trail for a URL
 */
export function getBreadcrumbs(
    url: string
): { name: string; url: string }[] {
    const breadcrumbs = [{ name: 'Home', url: siteConfig.url }];

    // Find the content in clusters
    for (const cluster of topicClusters) {
        if (cluster.pillar.url === url) {
            breadcrumbs.push({ name: cluster.pillar.title, url: `${siteConfig.url}${url}` });
            return breadcrumbs;
        }

        const clusterContent = cluster.clusters.find((c) => c.url === url);
        if (clusterContent) {
            breadcrumbs.push({
                name: cluster.pillar.title,
                url: `${siteConfig.url}${cluster.pillar.url}`,
            });
            breadcrumbs.push({
                name: clusterContent.title,
                url: `${siteConfig.url}${url}`,
            });
            return breadcrumbs;
        }
    }

    return breadcrumbs;
}

/**
 * Get contextual anchor text for internal links
 */
export function getContextualAnchorText(url: string): string {
    for (const cluster of topicClusters) {
        if (cluster.pillar.url === url) {
            return cluster.pillar.title;
        }
        const node = cluster.clusters.find((c) => c.url === url);
        if (node) {
            return node.title;
        }
    }
    return 'Learn more';
}

// ============================================================================
// CONTEXTUAL LINK SUGGESTIONS
// ============================================================================

interface LinkSuggestion {
    text: string;
    url: string;
    context: string;
    priority: number;
}

/**
 * Get contextual link suggestions based on content keywords
 */
export function getContextualLinks(
    contentKeywords: string[],
    currentUrl: string,
    limit = 3
): LinkSuggestion[] {
    const suggestions: LinkSuggestion[] = [];

    for (const cluster of topicClusters) {
        const allNodes = [cluster.pillar, ...cluster.clusters];

        for (const node of allNodes) {
            if (node.url === currentUrl) continue;

            // Calculate keyword overlap
            const overlap = node.keywords.filter((k) =>
                contentKeywords.some(
                    (ck) => ck.toLowerCase().includes(k) || k.includes(ck.toLowerCase())
                )
            ).length;

            if (overlap > 0) {
                suggestions.push({
                    text: node.title,
                    url: `${siteConfig.url}${node.url}`,
                    context: node.description,
                    priority: overlap + (node.type === 'pillar' ? 2 : 0),
                });
            }
        }
    }

    return suggestions
        .sort((a, b) => b.priority - a.priority)
        .slice(0, limit);
}

// ============================================================================
// INTERNAL LINKING STATS (for SEO audit)
// ============================================================================

export function getInternalLinkingStats() {
    const allNodes: ContentNode[] = [];
    for (const cluster of topicClusters) {
        allNodes.push(cluster.pillar);
        allNodes.push(...cluster.clusters);
    }

    return {
        totalPages: allNodes.length,
        pillars: allNodes.filter((n) => n.type === 'pillar').length,
        clusters: allNodes.filter((n) => n.type === 'cluster').length,
        supportPages: allNodes.filter((n) => n.type === 'support').length,
        topicClusters: topicClusters.length,
    };
}

export default {
    topicClusters,
    getRelatedContent,
    getBreadcrumbs,
    getContextualAnchorText,
    getContextualLinks,
    getInternalLinkingStats,
};
