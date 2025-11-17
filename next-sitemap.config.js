/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://yoursite.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            // Example of disallowing a path:
            // { userAgent: '*', disallow: '/admin' },
        ],
        additionalSitemaps: [
            `${process.env.SITE_URL || 'https://yoursite.com'}/sitemap.xml`,
        ],
        // To add a crawl-delay, uncomment the following line:
        // crawlDelay: 5, 
    }
}
