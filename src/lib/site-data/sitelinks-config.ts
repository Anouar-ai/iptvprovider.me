
export type SitelinkPriority = 'high' | 'medium' | 'low';

export interface SitelinkItem {
    name: string;
    url: string;
    description: string;
    priority: SitelinkPriority;
    category: 'primary' | 'service' | 'content' | 'support';
}

export const sitelinksConfig: SitelinkItem[] = [
    // Primary Navigation (High Priority)
    {
        name: 'Home',
        url: '/',
        description: 'Premium IPTV service with 24,000+ live channels, HD/4K streaming, and worldwide coverage',
        priority: 'high',
        category: 'primary',
    },
    {
        name: 'IPTV Free Trial',
        url: '/iptv-free-trial',
        description: 'Start your free IPTV trial today - no credit card required, instant activation',
        priority: 'high',
        category: 'service',
    },
    {
        name: 'Pricing',
        url: '/pricing',
        description: 'Affordable IPTV subscription plans starting from $9.99/month with flexible options',
        priority: 'high',
        category: 'primary',
    },

    // Service Information (Medium Priority)
    {
        name: 'Devices',
        url: '/devices',
        description: 'Compatible with Smart TV, Fire TV, Android, iOS, MAG, and all major streaming devices',
        priority: 'medium',
        category: 'service',
    },
    {
        name: 'Locations',
        url: '/locations',
        description: 'IPTV service available in USA, UK, Canada, and 190+ countries worldwide',
        priority: 'medium',
        category: 'service',
    },

    // Content & Resources (Medium Priority)
    {
        name: 'Blog',
        url: '/blog',
        description: 'IPTV guides, tutorials, news, and tips for cord-cutters and streaming enthusiasts',
        priority: 'medium',
        category: 'content',
    },
    {
        name: 'FAQ',
        url: '/faq',
        description: 'Frequently asked questions about IPTV service, setup, billing, and troubleshooting',
        priority: 'medium',
        category: 'support',
    },
    {
        name: 'Contact',
        url: '/contact',
        description: 'Contact our 24/7 customer support team via email, WhatsApp, or contact form',
        priority: 'medium',
        category: 'support',
    },

    // Additional Pages (Low Priority)
    {
        name: 'IPTV Guide',
        url: '/iptv-guide',
        description: 'Complete guide to IPTV technology, setup instructions, and best practices',
        priority: 'low',
        category: 'content',
    },
];

// Helper function to get sitelinks by priority
export function getSitelinksByPriority(priority: SitelinkPriority): SitelinkItem[] {
    return sitelinksConfig.filter(link => link.priority === priority);
}

// Helper function to get sitelinks by category
export function getSitelinksByCategory(category: SitelinkItem['category']): SitelinkItem[] {
    return sitelinksConfig.filter(link => link.category === category);
}

// Get high priority links for primary sitelinks
export function getPrimarySitelinks(): SitelinkItem[] {
    return sitelinksConfig.filter(link => link.priority === 'high');
}
