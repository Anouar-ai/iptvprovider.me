/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://www.iptvprovider.me',
    generateRobotsTxt: false, // Using dynamic robots.ts for comprehensive bot rules
};

export default config;
