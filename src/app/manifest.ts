import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.name,
        short_name: "IPTV Provider",
        description: siteConfig.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#00FF7F',
        orientation: 'portrait-primary',
        categories: ['entertainment', 'lifestyle'],
        icons: [
            {
                src: '/favicon.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
            {
                src: '/IPTV-Provider.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/IPTV-Provider.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    }
}
