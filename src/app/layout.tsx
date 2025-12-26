
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Outfit } from 'next/font/google';
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ProgressBar } from '@/components/shared/ProgressBar';
import { Analytics } from "@/components/shared/Analytics";
import { Schema } from "@/components/shared/Schema";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { FloatingWhatsAppButton } from "@/components/shared/WhatsAppButton";
import { TrackingInitializer } from "@/components/tracking/TrackingInitializer";
import { generateOrganizationSchema, generateBrandSchema } from "@/lib/schema";
import { generateWebsiteSchema, generateSiteNavigationSchema } from "@/lib/site-data/sitelinks-config";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
  variable: "--font-outfit",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — IPTV Service in USA, UK & Worldwide`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'IPTV Subscription',
    'best IPTV',
    'IPTV provider',
    'IPTV',
    'streaming service',
    'live TV',
    'VOD',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Canonical and alternate language URLs for international SEO
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': siteConfig.url,
      'en-GB': siteConfig.url,
      'x-default': siteConfig.url,
    },
  },
  // Enhanced OpenGraph tags for Knowledge Graph verification
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA'],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — IPTV Service in USA, UK & Worldwide`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Best Streaming Service`,
        type: 'image/png',
      },
    ],
    // Additional OpenGraph tags for brand verification
    emails: [siteConfig.links.email],
    phoneNumbers: [siteConfig.telephone],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — IPTV Service in USA, UK & Worldwide`,
    description: siteConfig.description,
    creator: '@iptvprovider',
    site: '@iptvprovider',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'WayUe3dolb9UPFpMPHfTYy8CS-T1RkpFYqGvAkW5XqI',
    yandex: '4cafd334f7cdc146',
    other: {
      'msvalidate.01': 'CEC29E9356C1B062CC9637E64D68C778',
    },
  },
  // Canonical URLs are set per-page in generateMetadata() to avoid all pages pointing to homepage
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/IPTV-Provider.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/IPTV-Provider.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },
  // Additional metadata for brand signals
  other: {
    'og:brand': siteConfig.name,
    'og:legal_name': siteConfig.legalName,
    'og:founding_date': siteConfig.foundingDate,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning className={cn(
      "font-body antialiased",
      inter.variable,
      outfit.variable
    )}>
      <head>
        <Schema id="organization" schema={generateOrganizationSchema()} />
        <Schema id="website" schema={generateWebsiteSchema(siteConfig.url, siteConfig.name)} />
        <Schema id="navigation" schema={generateSiteNavigationSchema(siteConfig.url)} />
        <Schema id="brand" schema={generateBrandSchema()} />

        {/* Additional meta tags for brand verification and Knowledge Graph */}
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:type" content="website" />
        <meta property="business:contact_data:street_address" content="Digital Services" />
        <meta property="business:contact_data:locality" content="Global" />
        <meta property="business:contact_data:email" content={siteConfig.links.email} />
        <meta property="business:contact_data:phone_number" content={siteConfig.telephone} />
        <meta property="business:contact_data:website" content={siteConfig.url} />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="application-name" content={siteConfig.name} />

        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://iptvwell.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://cdn.visitors.now" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <link rel="preconnect" href="https://image.tmdb.org" />
        {/* Google Analytics handled by Analytics component in body */}
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TS669NMN');
          `}
        </Script>
        
        {/* Google Analytics + Google Ads (gtag.js) - Consolidated */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              gtag('consent', 'default', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
              });
              
              gtag('js', new Date());
              
              // Google Analytics 4
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname
              });
              
              // Google Ads Conversion Tracking
              gtag('config', 'AW-17824278334');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TS669NMN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ProgressBar />
        <Analytics />
        <Script
          src="https://cdn.visitors.now/v.js"
          data-token="0a9ca441-3262-415a-a3ac-e06859feeeba"
          strategy="lazyOnload"
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          id="ahrefs-analytics"
          strategy="lazyOnload"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TrackingInitializer />
          <div className="relative flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
            >
              Skip to main content
            </a>
            <Navbar />
            <div id="main-content" className="flex-grow">{children}</div>
            <Footer />
          </div>
          <ScrollToTop />
          <FloatingWhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
