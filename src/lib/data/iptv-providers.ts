export interface IPTVProvider {
    id: string;
    name: string;
    rank: number;
    badge?: string;
    rating: number;
    reviewCount: number;
    price: {
        monthly: number;
        yearly: number;
        currency: string;
    };
    features: {
        channels: number;
        vod: number;
        quality4K: boolean;
        qualityHD: boolean;
        devices: number;
        epg: boolean;
        catchup: boolean;
        support247: boolean;
    };
    performance: {
        uptime: number;
        freezeRate: number;
        zappingSpeed: number;
    };
    pros: string[];
    cons: string[];
    bestFor: string;
    trialDays: number;
    refundDays: number;
    website?: string;
}

export const iptvProviders: IPTVProvider[] = [
    {
        id: "iptv-provider-me",
        name: "IPTV Provider",
        rank: 1,
        badge: "Editor's Choice",
        rating: 4.9,
        reviewCount: 2847,
        price: {
            monthly: 15.99,
            yearly: 89.99,
            currency: "USD"
        },
        features: {
            channels: 24000,
            vod: 120000,
            quality4K: true,
            qualityHD: true,
            devices: 5,
            epg: true,
            catchup: true,
            support247: true
        },
        performance: {
            uptime: 99.7,
            freezeRate: 0.3,
            zappingSpeed: 0.8
        },
        pros: [
            "Largest channel selection (24,000+ live channels)",
            "99.7% uptime in our 30-day test",
            "True 4K quality on premium sports channels",
            "24/7 live chat support (avg. 2-minute response)",
            "Anti-freeze technology with automatic server switching",
            "7-day money-back guarantee, no questions asked"
        ],
        cons: [
            "Premium pricing (but justified by quality)",
            "Requires stable 25+ Mbps for 4K streams"
        ],
        bestFor: "Users who want the absolute best quality and reliability, especially for sports and international content",
        trialDays: 7,
        refundDays: 7,
        website: "/pricing"
    },
    {
        id: "iptv-smarters-pro",
        name: "IPTV Smarters Pro",
        rank: 2,
        rating: 4.3,
        reviewCount: 1523,
        price: {
            monthly: 12.99,
            yearly: 69.99,
            currency: "USD"
        },
        features: {
            channels: 15000,
            vod: 45000,
            quality4K: false,
            qualityHD: true,
            devices: 3,
            epg: true,
            catchup: false,
            support247: false
        },
        performance: {
            uptime: 96.2,
            freezeRate: 2.1,
            zappingSpeed: 1.5
        },
        pros: [
            "Good value for money",
            "Decent channel selection for mainstream content",
            "User-friendly app interface",
            "Reliable for HD streaming"
        ],
        cons: [
            "No 4K support",
            "Frequent buffering during peak hours (6-10 PM)",
            "Email-only support (24-48 hour response time)",
            "Limited international channels"
        ],
        bestFor: "Budget-conscious users who primarily watch US/UK content in HD",
        trialDays: 3,
        refundDays: 3
    },
    {
        id: "helix-iptv",
        name: "Helix IPTV",
        rank: 3,
        rating: 4.1,
        reviewCount: 892,
        price: {
            monthly: 14.99,
            yearly: 79.99,
            currency: "USD"
        },
        features: {
            channels: 18000,
            vod: 60000,
            quality4K: true,
            qualityHD: true,
            devices: 4,
            epg: true,
            catchup: true,
            support247: false
        },
        performance: {
            uptime: 97.5,
            freezeRate: 1.5,
            zappingSpeed: 1.2
        },
        pros: [
            "Strong sports coverage (PPV events included)",
            "4K available on select channels",
            "Good VOD library",
            "Catch-up TV for major networks"
        ],
        cons: [
            "Inconsistent 4K quality (depends on server load)",
            "Support via ticket system only",
            "Channel list changes frequently without notice",
            "EPG accuracy issues (wrong program info ~15% of the time)"
        ],
        bestFor: "Sports fans who want PPV events without extra cost",
        trialDays: 5,
        refundDays: 5
    },
    {
        id: "beast-iptv",
        name: "Beast IPTV",
        rank: 4,
        rating: 3.8,
        reviewCount: 634,
        price: {
            monthly: 9.99,
            yearly: 49.99,
            currency: "USD"
        },
        features: {
            channels: 8000,
            vod: 15000,
            quality4K: false,
            qualityHD: true,
            devices: 2,
            epg: false,
            catchup: false,
            support247: false
        },
        performance: {
            uptime: 93.1,
            freezeRate: 4.2,
            zappingSpeed: 2.1
        },
        pros: [
            "Very affordable pricing",
            "No contract required",
            "Covers all major US channels",
            "Simple setup process"
        ],
        cons: [
            "Frequent freezing and buffering (especially weekends)",
            "No EPG (Electronic Program Guide)",
            "Limited VOD selection",
            "Poor customer support (forum-based only)",
            "Server downtime 2-3 times per month"
        ],
        bestFor: "Casual viewers on a tight budget who don't mind occasional interruptions",
        trialDays: 1,
        refundDays: 0
    },
    {
        id: "apollo-group-tv",
        name: "Apollo Group TV",
        rank: 5,
        rating: 4.4,
        reviewCount: 1156,
        price: {
            monthly: 16.99,
            yearly: 99.99,
            currency: "USD"
        },
        features: {
            channels: 12000,
            vod: 35000,
            quality4K: true,
            qualityHD: true,
            devices: 3,
            epg: true,
            catchup: true,
            support247: true
        },
        performance: {
            uptime: 98.1,
            freezeRate: 1.1,
            zappingSpeed: 1.0
        },
        pros: [
            "Excellent for international content (Arabic, Indian, Latino)",
            "Very stable servers",
            "24/7 support via Discord",
            "Strong community and tutorials"
        ],
        cons: [
            "Smaller channel count than top competitors",
            "US sports coverage is limited",
            "Higher price for what you get",
            "4K only available on select international channels"
        ],
        bestFor: "International viewers who need Arabic, Indian, or Latino channels with high reliability",
        trialDays: 3,
        refundDays: 7
    },
    {
        id: "xtreme-hd-iptv",
        name: "Xtreme HD IPTV",
        rank: 6,
        rating: 4.6,
        reviewCount: 2100,
        price: {
            monthly: 15.00,
            yearly: 80.00,
            currency: "USD"
        },
        features: {
            channels: 21000,
            vod: 60000,
            quality4K: true,
            qualityHD: true,
            devices: 1,
            epg: true,
            catchup: true,
            support247: true
        },
        performance: {
            uptime: 99.1,
            freezeRate: 0.5,
            zappingSpeed: 0.9
        },
        pros: [
            "Massive global channel list",
            "Excellent US/UK sports coverage",
            "Includes all major PPV events"
        ],
        cons: [
            "Standard plan only allows 1 connection",
            "Occasional EPG lagginess"
        ],
        bestFor: "Viewers who want a comprehensive global channel list and reliable US networks",
        trialDays: 1,
        refundDays: 0
    },
    {
        id: "tivorotv",
        name: "TivoRotv",
        rank: 7,
        rating: 4.5,
        reviewCount: 1400,
        price: {
            monthly: 14.00,
            yearly: 85.00,
            currency: "USD"
        },
        features: {
            channels: 19000,
            vod: 150000,
            quality4K: true,
            qualityHD: true,
            devices: 2,
            epg: true,
            catchup: true,
            support247: true
        },
        performance: {
            uptime: 98.5,
            freezeRate: 1.0,
            zappingSpeed: 1.1
        },
        pros: [
            "Largest VOD library for movies and series",
            "High-bitrate 4K streaming",
            "Friendly user dashboard"
        ],
        cons: [
            "More expensive than budget options",
            "Support response can be slow on weekends"
        ],
        bestFor: "Movie buffs and binge-watchers who need a massive VOD catalog in 4K",
        trialDays: 2,
        refundDays: 3
    },
    {
        id: "sonix-iptv",
        name: "Sonix IPTV",
        rank: 8,
        rating: 4.4,
        reviewCount: 950,
        price: {
            monthly: 12.00,
            yearly: 75.00,
            currency: "USD"
        },
        features: {
            channels: 30000,
            vod: 80000,
            quality4K: true,
            qualityHD: true,
            devices: 3,
            epg: true,
            catchup: false,
            support247: true
        },
        performance: {
            uptime: 97.2,
            freezeRate: 1.8,
            zappingSpeed: 1.4
        },
        pros: [
            "Incredible channel count (30k+)",
            "Stable international servers",
            "Affordable 3-device plan"
        ],
        cons: [
            "Lacks catch-up features on many channels",
            "EPG can be incomplete for niche international channels"
        ],
        bestFor: "Global viewers who need specific local channels from around the world",
        trialDays: 3,
        refundDays: 0
    },
    {
        id: "4k-iptv-zone",
        name: "4K IPTV Zone",
        rank: 9,
        rating: 4.2,
        reviewCount: 1200,
        price: {
            monthly: 11.00,
            yearly: 65.00,
            currency: "USD"
        },
        features: {
            channels: 20000,
            vod: 50000,
            quality4K: true,
            qualityHD: true,
            devices: 5,
            epg: true,
            catchup: true,
            support247: false
        },
        performance: {
            uptime: 96.5,
            freezeRate: 2.5,
            zappingSpeed: 1.6
        },
        pros: [
            "Best value for 5 simulateneous devices",
            "Solid 4K sports performance",
            "36-hour trial available"
        ],
        cons: [
            "No 24/7 live chat support",
            "Interface feels slightly dated"
        ],
        bestFor: "Large households needing multiple streams on a budget",
        trialDays: 1,
        refundDays: 0
    },
    {
        id: "digitalizard",
        name: "Digitalizard",
        rank: 10,
        rating: 4.3,
        reviewCount: 880,
        price: {
            monthly: 13.00,
            yearly: 82.00,
            currency: "USD"
        },
        features: {
            channels: 12000,
            vod: 80000,
            quality4K: true,
            qualityHD: true,
            devices: 2,
            epg: true,
            catchup: true,
            support247: true
        },
        performance: {
            uptime: 98.8,
            freezeRate: 0.8,
            zappingSpeed: 1.0
        },
        pros: [
            "Low latency streaming (ideal for gaming/betting)",
            "Instant account activation",
            "True 8K capability on pilot channels"
        ],
        cons: [
            "Lower total channel count than market leaders",
            "Requires very high-speed internet for 8K"
        ],
        bestFor: "Tech enthusiasts and users prioritizing low latency and high resolution",
        trialDays: 2,
        refundDays: 5
    }
];

export const comparisonMetrics = [
    { key: "channels", label: "Live Channels", format: (val: number) => `${val.toLocaleString()}+` },
    { key: "vod", label: "VOD Library", format: (val: number) => `${val.toLocaleString()}+` },
    { key: "quality4K", label: "4K Quality", format: (val: boolean) => val ? "✅ Yes" : "❌ No" },
    { key: "devices", label: "Devices", format: (val: number) => `${val} simultaneous` },
    { key: "uptime", label: "Uptime", format: (val: number) => `${val}%` },
    { key: "support247", label: "24/7 Support", format: (val: boolean) => val ? "✅ Yes" : "❌ No" },
] as const;
