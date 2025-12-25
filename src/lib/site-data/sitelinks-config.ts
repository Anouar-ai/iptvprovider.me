
export type SitelinkPriority = 'high' | 'medium' | 'low';
export type SitelinkCategory = 'primary' | 'service' | 'content' | 'support';

export const SEO_LIMITS = {
    MAX_DESCRIPTION_LENGTH: 160,
    MIN_DESCRIPTION_LENGTH: 70,
    MAX_NAME_LENGTH: 60,
    OPTIMAL_SITELINKS_COUNT: 6,
    MAX_HIGH_PRIORITY: 6,
} as const;

export interface SitelinkItem {
    name: string;
    url: string;
    description: string;
    priority: SitelinkPriority;
    category: SitelinkCategory;
    keywords?: string[];
    parent?: string;
}

export const sitelinksConfig: SitelinkItem[] = [
    // ===== HIGH PRIORITY (Max 6 for Google Sitelinks) =====
    {
        name: 'IPTV Free Trial - No Credit Card',
        url: '/iptv-free-trial',
        description: 'Start your free IPTV trial today. Access 24,000+ live channels, sports & movies. No credit card required. Instant activation.',
        priority: 'high',
        category: 'service',
        keywords: ['IPTV free trial', 'free IPTV', 'trial'],
    },
    {
        name: 'IPTV Subscription Plans & Pricing',
        url: '/pricing',
        description: 'Affordable IPTV subscription plans from $9.99/month. Choose monthly, quarterly, or annual plans with premium features included.',
        priority: 'high',
        category: 'primary',
        keywords: ['IPTV pricing', 'IPTV subscription plans', 'IPTV cost'],
    },
    {
        name: 'IPTV FAQ - Common Questions Answered',
        url: '/faq',
        description: 'Get answers about IPTV free trials, device compatibility, buffering fixes, activation, and our money-back guarantee policy.',
        priority: 'high',
        category: 'support',
        keywords: ['IPTV FAQ', 'IPTV questions', 'IPTV help'],
    },
    {
        name: 'IPTV Blog: Guides & Expert Tips',
        url: '/blog',
        description: 'Expert IPTV guides, device setup tutorials, troubleshooting tips, and streaming news. Learn from IPTV professionals.',
        priority: 'high',
        category: 'content',
        keywords: ['IPTV blog', 'IPTV guides', 'IPTV tips'],
    },
    {
        name: 'IPTV Service Locations Worldwide',
        url: '/locations',
        description: 'IPTV service available in 100+ countries: USA, UK, Canada, Germany, France, Morocco, and more. Find your region.',
        priority: 'high',
        category: 'service',
        keywords: ['IPTV locations', 'IPTV countries', 'IPTV worldwide'],
    },
    {
        name: 'IPTV Compatible Devices',
        url: '/devices',
        description: 'IPTV works on Smart TV, Fire TV Stick, Android TV, iOS, MAG boxes, and Enigma2. Full device compatibility list.',
        priority: 'high',
        category: 'service',
        keywords: ['IPTV devices', 'IPTV compatibility', 'IPTV Smart TV'],
    },

    // ===== MEDIUM PRIORITY =====
    {
        name: 'Premium IPTV Subscription Service',
        url: '/',
        description: 'Premium IPTV subscription with 24,000+ live channels, HD/4K streaming, and worldwide coverage. Start watching today.',
        priority: 'medium',
        category: 'primary',
        keywords: ['IPTV subscription', 'premium IPTV', 'live channels'],
    },
    {
        name: 'Contact IPTV Support 24/7',
        url: '/contact',
        description: 'Need help? Contact our 24/7 IPTV customer support team via email, WhatsApp, or live chat. Fast response guaranteed.',
        priority: 'medium',
        category: 'support',
        keywords: ['IPTV support', 'IPTV contact', 'IPTV help'],
    },
    {
        name: 'IPTV Service in Morocco',
        url: '/country/morocco',
        description: 'Premium IPTV subscription for Morocco. Watch local Moroccan channels, beIN Sports, and 24,000+ international channels.',
        priority: 'medium',
        category: 'service',
        keywords: ['IPTV Morocco', 'Moroccan IPTV', 'IPTV Maroc'],
        parent: '/locations',
    },

    // ===== LOW PRIORITY =====
    {
        name: 'Complete IPTV Setup Guide',
        url: '/iptv-guide',
        description: 'Step-by-step IPTV installation guide for all devices. Learn how to set up IPTV on any device in under 5 minutes.',
        priority: 'low',
        category: 'content',
        keywords: ['IPTV guide', 'IPTV setup', 'how to install IPTV'],
    },
];

// ===== HELPER FUNCTIONS =====

export function getSitelinksByPriority(priority: SitelinkPriority): SitelinkItem[] {
    return sitelinksConfig.filter(link => link.priority === priority);
}

export function getSitelinksByCategory(category: SitelinkCategory): SitelinkItem[] {
    return sitelinksConfig.filter(link => link.category === category);
}

export function getHighPrioritySitelinks(): SitelinkItem[] {
    return sitelinksConfig
        .filter(link => link.priority === 'high')
        .slice(0, SEO_LIMITS.MAX_HIGH_PRIORITY);
}

export function getPrimaryNavSitelinks(): SitelinkItem[] {
    return sitelinksConfig.filter(link => link.category === 'primary');
}

export function getSitelinksSorted(): SitelinkItem[] {
    const priorityOrder: Record<SitelinkPriority, number> = {
        high: 0,
        medium: 1,
        low: 2,
    };
    return [...sitelinksConfig].sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
}

export function getTopSitelinks(count: number = SEO_LIMITS.OPTIMAL_SITELINKS_COUNT): SitelinkItem[] {
    return getSitelinksSorted().slice(0, count);
}

export function getSitelinkByUrl(url: string): SitelinkItem | undefined {
    return sitelinksConfig.find(link => link.url === url);
}

export function getSitelinksWithFullUrls(baseUrl: string): (SitelinkItem & { fullUrl: string })[] {
    const cleanBaseUrl = baseUrl.replace(/\/$/, '');
    return sitelinksConfig.map(link => ({
        ...link,
        fullUrl: `${cleanBaseUrl}${link.url}`,
    }));
}

// ===== SEO SCHEMA GENERATORS =====

export function generateWebsiteSchema(
    baseUrl: string, 
    siteName: string,
    options?: { hasSearch?: boolean; searchPath?: string }
): object {
    const cleanBaseUrl = baseUrl.replace(/\/$/, '');
    const { hasSearch = false, searchPath = '/search' } = options || {};
    
    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${cleanBaseUrl}/#website`,
        'name': siteName,
        'url': cleanBaseUrl,
    };

    if (hasSearch) {
        schema.potentialAction = {
            '@type': 'SearchAction',
            'target': {
                '@type': 'EntryPoint',
                'urlTemplate': `${cleanBaseUrl}${searchPath}?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        };
    }

    return schema;
}

export function generateSiteNavigationSchema(baseUrl: string): object {
    const cleanBaseUrl = baseUrl.replace(/\/$/, '');
    
    return {
        '@context': 'https://schema.org',
        '@graph': getTopSitelinks().map((link, index) => ({
            '@type': 'SiteNavigationElement',
            'position': index + 1,
            'name': link.name,
            'description': link.description,
            'url': `${cleanBaseUrl}${link.url}`,
        }))
    };
}

// ✅ FIXED: Breadcrumb now always includes current page
export function generateBreadcrumbSchema(
    baseUrl: string, 
    currentPage: SitelinkItem
): object {
    const cleanBaseUrl = baseUrl.replace(/\/$/, '');
    
    if (currentPage.url === '/') {
        return {};
    }

    const items: object[] = [
        {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': cleanBaseUrl
        }
    ];

    let position = 2;

    // Add parent if exists AND is found
    if (currentPage.parent) {
        const parentPage = getSitelinkByUrl(currentPage.parent);
        if (parentPage) {
            items.push({
                '@type': 'ListItem',
                'position': position++,
                'name': parentPage.name,
                'item': `${cleanBaseUrl}${parentPage.url}`
            });
        }
    }

    // ✅ ALWAYS add current page
    items.push({
        '@type': 'ListItem',
        'position': position,
        'name': currentPage.name,
        'item': `${cleanBaseUrl}${currentPage.url}`
    });
    
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': items
    };
}

// ===== ENHANCED VALIDATION =====

export function validateSitelinks(): { 
    valid: boolean; 
    errors: string[]; 
    warnings: string[];
    seoScore: number;
} {
    const errors: string[] = [];
    const warnings: string[] = [];
    const urls = new Set<string>();
    const names = new Set<string>();
    let seoScore = 100;

    const highPriorityCount = sitelinksConfig.filter(l => l.priority === 'high').length;
    if (highPriorityCount > SEO_LIMITS.MAX_HIGH_PRIORITY) {
        warnings.push(`Too many high-priority items (${highPriorityCount}). Google shows max ${SEO_LIMITS.MAX_HIGH_PRIORITY} sitelinks.`);
        seoScore -= 5;
    }
    if (highPriorityCount < SEO_LIMITS.MAX_HIGH_PRIORITY) {
        warnings.push(`Only ${highPriorityCount} high-priority items. Consider adding ${SEO_LIMITS.MAX_HIGH_PRIORITY - highPriorityCount} more.`);
        seoScore -= 2;
    }

    sitelinksConfig.forEach((link, index) => {
        if (urls.has(link.url)) {
            errors.push(`Duplicate URL: "${link.url}" at index ${index}`);
            seoScore -= 15;
        }
        urls.add(link.url);

        if (names.has(link.name.toLowerCase())) {
            errors.push(`Duplicate name: "${link.name}" at index ${index}`);
            seoScore -= 10;
        }
        names.add(link.name.toLowerCase());

        if (!link.url.startsWith('/')) {
            errors.push(`URL should start with /: "${link.url}"`);
            seoScore -= 10;
        }

        if (link.url !== '/' && link.url.endsWith('/')) {
            warnings.push(`Remove trailing slash: "${link.url}"`);
            seoScore -= 2;
        }

        if (!link.name.trim()) {
            errors.push(`Empty name at index ${index}`);
            seoScore -= 20;
        }
        if (!link.description.trim()) {
            errors.push(`Empty description at index ${index}`);
            seoScore -= 20;
        }

        if (link.description.length > SEO_LIMITS.MAX_DESCRIPTION_LENGTH) {
            warnings.push(`Description too long (${link.description.length}/${SEO_LIMITS.MAX_DESCRIPTION_LENGTH}): "${link.name}"`);
            seoScore -= 3;
        }
        if (link.description.length < SEO_LIMITS.MIN_DESCRIPTION_LENGTH) {
            warnings.push(`Description too short (${link.description.length}/${SEO_LIMITS.MIN_DESCRIPTION_LENGTH}): "${link.name}"`);
            seoScore -= 3;
        }
        if (link.name.length > SEO_LIMITS.MAX_NAME_LENGTH) {
            warnings.push(`Name too long (${link.name.length}/${SEO_LIMITS.MAX_NAME_LENGTH}): "${link.name}"`);
            seoScore -= 3;
        }

        if (link.name.toLowerCase() === 'home') {
            warnings.push(`Generic name "Home" - use descriptive name with keywords`);
            seoScore -= 5;
        }
        if (link.name.includes('#1') || link.name.toLowerCase().includes('best') || link.name.toLowerCase().includes('top rated')) {
            warnings.push(`Superlative claim in "${link.name}" - may violate Google guidelines`);
            seoScore -= 5;
        }

        if (link.keywords) {
            if (link.keywords.length === 0) {
                warnings.push(`Empty keywords array for "${link.name}"`);
                seoScore -= 1;
            }
            link.keywords.forEach(keyword => {
                if (!keyword.trim()) {
                    warnings.push(`Empty keyword in "${link.name}"`);
                    seoScore -= 1;
                }
            });
        }

        if (link.parent && !getSitelinkByUrl(link.parent)) {
            warnings.push(`Parent URL "${link.parent}" not found for "${link.name}"`);
            seoScore -= 2;
        }

        const hasIPTVKeyword = link.name.toLowerCase().includes('iptv') || 
                               link.description.toLowerCase().includes('iptv');
        if (!hasIPTVKeyword && link.priority === 'high') {
            warnings.push(`High-priority "${link.name}" missing primary keyword "IPTV"`);
            seoScore -= 3;
        }
    });

    return { 
        valid: errors.length === 0, 
        errors, 
        warnings,
        seoScore: Math.max(0, seoScore)
    };
}

// ===== EXPORT FOR SITEMAP =====

export function getSitemapEntries(baseUrl: string): { 
    url: string; 
    priority: number; 
    changefreq: string;
    lastmod: string;
}[] {
    const cleanBaseUrl = baseUrl.replace(/\/$/, '');
    const priorityMap: Record<SitelinkPriority, number> = {
        high: 0.8,
        medium: 0.6,
        low: 0.4,
    };
    const freqMap: Record<SitelinkPriority, string> = {
        high: 'daily',
        medium: 'weekly',
        low: 'monthly',
    };

    return sitelinksConfig.map(link => ({
        url: `${cleanBaseUrl}${link.url}`,
        priority: link.url === '/' ? 1.0 : priorityMap[link.priority],
        changefreq: freqMap[link.priority],
        lastmod: new Date().toISOString().split('T')[0],
    }));
}
