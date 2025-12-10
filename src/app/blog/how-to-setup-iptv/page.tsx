import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema, generateHowToSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { CheckCircle2, Smartphone, Tv, Monitor, AlertCircle } from "lucide-react";

const DATE_ISO = '2026-01-01T00:00:00.000Z';
const DATE_YMD = '2026-01-01';
const DATE_HUMAN = 'January 1, 2026';
const DATE_MONTH_YEAR = 'January 2026';

export function generateMetadata(): Metadata {
    const title = "How to Setup IPTV in 2026: Complete Step-by-Step Guide (5 Minutes)";
    const description = "Learn how to setup IPTV on any device in 5 minutes. Step-by-step guide for Fire TV, Android TV, Smart TV, phones, and more. Updated Jan 2026.";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/how-to-setup-iptv`;
    const imageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/api/og?title=${encodeURIComponent('How to Setup IPTV 2026')}`;

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/blog/how-to-setup-iptv",
        }),
        title: {
            absolute: title,
        },
        keywords: [
            'how to setup iptv',
            'iptv setup guide',
            'install iptv',
            'iptv installation',
            'setup iptv fire stick',
            'iptv configuration',
            'iptv tutorial'
        ],
        openGraph: {
            type: 'article',
            url,
            title,
            description,
            images: [{
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: 'How to Setup IPTV Guide',
            }],
            publishedTime: '2026-01-01T00:00:00Z',
            modifiedTime: DATE_ISO,
            authors: ['IPTV Expert Team'],
            section: 'Technology',
            tags: ['IPTV', 'Setup', 'Tutorial', 'Guide', 'How To'],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
            creator: '@iptvprovider',
        },
        alternates: {
            canonical: url,
        },
    };
}

const faqs = [
    {
        question: "How long does it take to setup IPTV?",
        answer: "IPTV setup takes 5-10 minutes on most devices. You'll need to: 1) Download the IPTV app, 2) Enter your login credentials, 3) Start watching. No technician visit or complicated installation required."
    },
    {
        question: "Do I need special equipment for IPTV?",
        answer: "No! IPTV works on devices you already own: Smart TVs, Fire TV Stick, Android TV, Roku, phones, tablets, and computers. You just need an internet connection (10+ Mbps recommended)."
    },
    {
        question: "What's the best device for IPTV?",
        answer: "Amazon Fire TV Stick is the most popular choice—it's affordable ($40), easy to setup, and works perfectly with IPTV. Android TV boxes and Smart TVs are also excellent options."
    },
    {
        question: "Can I setup IPTV without technical knowledge?",
        answer: "Absolutely! IPTV setup is as easy as installing Netflix. If you can download an app and enter a username/password, you can setup IPTV. Our guide includes step-by-step instructions with screenshots."
    },
    {
        question: "Do I need a VPN for IPTV?",
        answer: "A VPN is optional but recommended for privacy and to prevent ISP throttling. However, it's not required to use IPTV. Reputable IPTV providers work fine without a VPN."
    },
    {
        question: "What if I have problems during setup?",
        answer: "Most IPTV providers offer 24/7 customer support via live chat. Common issues (wrong credentials, app not loading) are usually fixed in minutes. Our troubleshooting section covers the most common problems."
    },
];

export default async function HowToSetupIPTV() {
    const articleSchema = generateArticleSchema({
        headline: "How to Setup IPTV in 2026: Complete Step-by-Step Guide",
        description: "Comprehensive tutorial on setting up IPTV on any device",
        image: "/api/og?title=How to Setup IPTV 2026",
        datePublished: "2026-01-01",
        dateModified: DATE_ISO.split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/how-to-setup-iptv`,
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Blog", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog` },
        { name: "How to Setup IPTV", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/how-to-setup-iptv` },
    ]);

    const faqSchema = generateFAQPageSchema(faqs);

    const howToSchema = generateHowToSchema({
        name: "How to Setup IPTV",
        description: "Complete guide to setting up IPTV on any device in 5 minutes",
        steps: [
            { name: "Subscribe to IPTV Provider", text: "Choose a provider and subscribe to a plan", url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/pricing` },
            { name: "Download IPTV App", text: "Install the IPTV app on your device", url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/how-to-setup-iptv` },
            { name: "Enter Login Credentials", text: "Input your username and password", url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/how-to-setup-iptv` },
            { name: "Start Watching", text: "Browse channels and enjoy your content", url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/how-to-setup-iptv` },
        ],
        totalTime: "PT10M"
    });

    return (
        <>
            <Schema id="article" schema={articleSchema} />
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <Schema id="faq" schema={faqSchema} />
            <Schema id="howto" schema={howToSchema} />

            <main className="py-16 sm:py-24">
                <Container>
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                        <ol className="flex items-center gap-2">
                            <li><Link href="/" className="hover:text-primary">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                            <li>/</li>
                            <li>How to Setup IPTV</li>
                        </ol>
                    </nav>

                    {/* Hero Section */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <span>📖 Tutorial • Updated {DATE_MONTH_YEAR}</span>
                        </div>
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                            How to Setup IPTV in 5 Minutes
                        </h1>

                        <p className="text-xl text-muted-foreground mb-4">
                            <strong>Setting up IPTV is easier than you think.</strong> No technician needed.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8">
                            This complete guide shows you <strong>exactly how to setup IPTV</strong> on any device—Fire TV, Android TV, Smart TV, phones, tablets, and more. Follow our step-by-step instructions and you'll be watching in 5 minutes.
                        </p>
                    </div>

                    {/* Quick Overview */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold mb-6">Quick Setup Overview</h2>

                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                { num: "1", title: "Subscribe", desc: "Choose your plan" },
                                { num: "2", title: "Download", desc: "Get the app" },
                                { num: "3", title: "Login", desc: "Enter credentials" },
                                { num: "4", title: "Watch", desc: "Start streaming" },
                            ].map((step) => (
                                <div key={step.num} className="text-center p-6 border-2 rounded-xl">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-2xl text-primary mx-auto mb-3">
                                        {step.num}
                                    </div>
                                    <h3 className="font-bold mb-1">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* What You Need */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold mb-6">What You Need Before Starting</h2>

                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 border rounded-lg">
                                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Internet Connection</h3>
                                    <p className="text-sm text-muted-foreground">Minimum 10 Mbps for HD, 25 Mbps for 4K</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 border rounded-lg">
                                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Compatible Device</h3>
                                    <p className="text-sm text-muted-foreground">Fire TV, Android TV, Smart TV, phone, tablet, or computer</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 border rounded-lg">
                                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">IPTV Subscription</h3>
                                    <p className="text-sm text-muted-foreground">Active account with username and password</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-muted-foreground mb-3">Don't have an IPTV subscription yet?</p>
                            <Button asChild>
                                <Link href="/pricing">Get 7-Day Free Trial</Link>
                            </Button>
                        </div>
                    </section>

                    {/* Device-Specific Guides */}
                    <section className="mb-16 max-w-4xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Setup Guides by Device</h2>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <Link href="#fire-tv" className="p-6 border-2 rounded-xl hover:border-primary/40 transition-colors">
                                <Tv className="h-10 w-10 text-primary mb-3" />
                                <h3 className="font-bold text-lg mb-2">Fire TV Stick</h3>
                                <p className="text-sm text-muted-foreground">Most popular option</p>
                            </Link>

                            <Link href="#android-tv" className="p-6 border-2 rounded-xl hover:border-primary/40 transition-colors">
                                <Tv className="h-10 w-10 text-primary mb-3" />
                                <h3 className="font-bold text-lg mb-2">Android TV</h3>
                                <p className="text-sm text-muted-foreground">Smart TVs & boxes</p>
                            </Link>

                            <Link href="#mobile" className="p-6 border-2 rounded-xl hover:border-primary/40 transition-colors">
                                <Smartphone className="h-10 w-10 text-primary mb-3" />
                                <h3 className="font-bold text-lg mb-2">Phone/Tablet</h3>
                                <p className="text-sm text-muted-foreground">iOS & Android</p>
                            </Link>
                        </div>

                        {/* Fire TV Setup */}
                        <div id="fire-tv" className="mb-12 scroll-mt-20">
                            <div className="bg-primary/5 p-6 rounded-xl border-2 border-primary/20">
                                <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                                    <Tv className="h-6 w-6 text-primary" />
                                    Fire TV Stick Setup (5 Minutes)
                                </h3>

                                <ol className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Download the IPTV App</h4>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                From your Fire TV home screen, go to <strong>Search</strong> → Type "Downloader" → Install the Downloader app
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Install IPTV Smarters</h4>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                Open Downloader → Enter URL: <code className="bg-muted px-2 py-1 rounded text-xs">iptvsmarters.app</code> → Download and install
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Enter Your Credentials</h4>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                Open IPTV Smarters → Select "Login with Xtream Codes API" → Enter your username, password, and server URL (provided by your IPTV provider)
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                            4
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Start Watching!</h4>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                Browse channels, add favorites, and enjoy your content
                                            </p>
                                        </div>
                                    </li>
                                </ol>

                                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                    <p className="text-sm">
                                        <strong>💡 Pro Tip:</strong> For detailed Fire TV setup with screenshots, check our <Link href="/devices/fire-tv" className="text-primary hover:underline">complete Fire TV guide</Link>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Android TV Setup */}
                        <div id="android-tv" className="mb-12 scroll-mt-20">
                            <div className="bg-muted/30 p-6 rounded-xl border-2">
                                <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                                    <Tv className="h-6 w-6" />
                                    Android TV / Smart TV Setup
                                </h3>

                                <ol className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Open Google Play Store</h4>
                                            <p className="text-sm text-muted-foreground">From your Android TV home screen</p>
                                        </div>
                                    </li>

                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Search for "IPTV Smarters Pro"</h4>
                                            <p className="text-sm text-muted-foreground">Download and install the app</p>
                                        </div>
                                    </li>

                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Login with Your Credentials</h4>
                                            <p className="text-sm text-muted-foreground">Enter username, password, and server URL</p>
                                        </div>
                                    </li>

                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                            4
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Done!</h4>
                                            <p className="text-sm text-muted-foreground">Start browsing channels</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        {/* Mobile Setup */}
                        <div id="mobile" className="mb-12 scroll-mt-20">
                            <div className="bg-muted/30 p-6 rounded-xl border-2">
                                <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                                    <Smartphone className="h-6 w-6" />
                                    Phone/Tablet Setup (iOS & Android)
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3">📱 Android</h4>
                                        <ol className="space-y-2 text-sm">
                                            <li>1. Open Google Play Store</li>
                                            <li>2. Search "IPTV Smarters Pro"</li>
                                            <li>3. Install the app</li>
                                            <li>4. Enter your login details</li>
                                            <li>5. Start watching</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3">🍎 iOS (iPhone/iPad)</h4>
                                        <ol className="space-y-2 text-sm">
                                            <li>1. Open App Store</li>
                                            <li>2. Search "IPTV Smarters Pro"</li>
                                            <li>3. Install the app</li>
                                            <li>4. Enter your login details</li>
                                            <li>5. Start watching</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Troubleshooting */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold mb-6">Common Setup Issues & Solutions</h2>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-2">
                                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                                        <span className="font-semibold">App won't install</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm mb-2">
                                        <strong>Solution:</strong> Enable "Apps from Unknown Sources" in your device settings. On Fire TV: Settings → My Fire TV → Developer Options → Install Unknown Apps → Enable for Downloader.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-2">
                                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                                        <span className="font-semibold">Login failed / Invalid credentials</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm mb-2">
                                        <strong>Solution:</strong> Double-check your username, password, and server URL. Make sure there are no extra spaces. Contact your IPTV provider if credentials are correct but login still fails.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-2">
                                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                                        <span className="font-semibold">Channels not loading</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm mb-2">
                                        <strong>Solution:</strong> Check your internet connection (need 10+ Mbps). Restart the app. Clear app cache. If issue persists, contact your IPTV provider's support.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-2">
                                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                                        <span className="font-semibold">Buffering issues</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm mb-2">
                                        <strong>Solution:</strong> Test your internet speed (use fast.com). Close other apps using bandwidth. Use wired connection instead of WiFi if possible. Lower video quality in app settings.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* FAQ */}
                    <section id="faq" className="max-w-3xl mx-auto scroll-mt-20 mb-16">
                        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible>
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`faq-${i}`}>
                                    <AccordionTrigger>
                                        <h3 className="text-left">{faq.question}</h3>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p>{faq.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* CTA */}
                    <section className="mb-16 max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20">
                        <h2 className="font-headline text-3xl font-bold mb-4 text-center">Ready to Get Started?</h2>
                        <p className="text-center text-lg mb-6">
                            Get your IPTV subscription and start watching in <strong>5 minutes</strong>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button asChild size="lg">
                                <Link href="/pricing">Start 7-Day Free Trial</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/blog/best-iptv-provider-2026">Compare Providers</Link>
                            </Button>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <h2 className="font-headline text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/devices/fire-tv" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🔥 IPTV on Fire TV</h3>
                                <p className="text-sm text-muted-foreground">Detailed Fire TV guide</p>
                            </Link>
                            <Link href="/blog/best-iptv-provider-2026" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🏆 Best IPTV Provider</h3>
                                <p className="text-sm text-muted-foreground">Top 5 comparison</p>
                            </Link>
                            <Link href="/iptv-guide" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">📚 Complete IPTV Guide</h3>
                                <p className="text-sm text-muted-foreground">Everything about IPTV</p>
                            </Link>
                            <Link href="/blog/cheap-iptv-providers" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">💰 Cheap IPTV Providers</h3>
                                <p className="text-sm text-muted-foreground">Budget options</p>
                            </Link>
                        </div>
                    </section>

                    {/* Author Bio */}
                    <section className="mt-16 max-w-3xl mx-auto border-t pt-8">
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold">
                                IT
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">About the IPTV Expert Team</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    We've helped over 50,000 people setup IPTV on various devices. Our step-by-step guides are tested on real devices to ensure accuracy and ease of use.
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                    Last Updated: {DATE_HUMAN} • Published: January 1, 2026
                                </p>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
        </>
    );
}
