/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://www.iptvprovider.me',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
        // additionalSitemaps removed to prevent self-referencing sitemap issue
    }
};

export default config;
