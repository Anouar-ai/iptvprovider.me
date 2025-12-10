import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { CheckCircle2, XCircle, Shield, Zap, Globe, Lock } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "IPTV VPN Guide 2026: Do You Need a VPN for IPTV? (Complete Guide)";
    const description = "Complete guide to using VPN with IPTV. Learn if you need a VPN, best VPNs for IPTV, setup instructions, and how to prevent ISP throttling. Updated Jan 2026.";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-vpn-guide`;
    const imageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/api/og?title=${encodeURIComponent('IPTV VPN Guide 2026')}`;

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/blog/iptv-vpn-guide",
        }),
        title: {
            absolute: title,
        },
        keywords: [
            'iptv vpn',
            'vpn for iptv',
            'best vpn for iptv',
            'iptv with vpn',
            'do i need vpn for iptv',
            'iptv vpn setup',
            'vpn iptv streaming'
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
                alt: 'IPTV VPN Guide 2026',
            }],
            publishedTime: '2026-01-01T00:00:00Z',
            modifiedTime: new Date().toISOString(),
            authors: ['IPTV Expert Team'],
            section: 'Technology',
            tags: ['IPTV', 'VPN', 'Privacy', 'Security', 'Guide'],
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
        question: "Do I need a VPN for IPTV?",
        answer: "A VPN is not required but recommended. It provides privacy, prevents ISP throttling, and allows access to geo-restricted content. However, reputable licensed IPTV providers work fine without a VPN. Use a VPN if you value privacy or experience ISP throttling."
    },
    {
        question: "Will a VPN slow down my IPTV streaming?",
        answer: "A quality VPN (NordVPN, ExpressVPN) typically reduces speed by only 10-20%, which is negligible for IPTV. You need 10 Mbps for HD and 25 Mbps for 4K—most modern internet plans have plenty of headroom. Free VPNs, however, can cause significant slowdowns."
    },
    {
        question: "What's the best VPN for IPTV?",
        answer: "NordVPN and ExpressVPN are the best for IPTV. They offer fast speeds (minimal buffering), no bandwidth limits, strong encryption, and work on all devices (Fire TV, Android TV, etc.). Avoid free VPNs—they're too slow for streaming."
    },
    {
        question: "Can my ISP see I'm using IPTV with a VPN?",
        answer: "No. A VPN encrypts all your internet traffic, so your ISP only sees encrypted data going to the VPN server. They cannot see that you're using IPTV or what content you're watching."
    },
    {
        question: "Is it legal to use a VPN with IPTV?",
        answer: "Yes, using a VPN is 100% legal in most countries. VPNs are legitimate privacy tools used by millions for various purposes. However, using a VPN doesn't make illegal IPTV services legal—always choose licensed providers."
    },
    {
        question: "How do I setup a VPN for IPTV?",
        answer: "Setup takes 5 minutes: 1) Subscribe to a VPN (NordVPN or ExpressVPN), 2) Download the VPN app on your device, 3) Connect to a server, 4) Open your IPTV app and start watching. The VPN runs in the background automatically."
    },
];

export default async function IPTVVPNGuide() {
    const articleSchema = generateArticleSchema({
        headline: "IPTV VPN Guide 2026: Complete Guide to Using VPN with IPTV",
        description: "Comprehensive guide covering VPN usage with IPTV, best VPNs, setup, and privacy",
        image: "/api/og?title=IPTV VPN Guide 2026",
        datePublished: "2026-01-01",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-vpn-guide`,
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Blog", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog` },
        { name: "IPTV VPN Guide", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-vpn-guide` },
    ]);

    const faqSchema = generateFAQPageSchema(faqs);

    return (
        <>
            <Schema id="article" schema={articleSchema} />
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <Schema id="faq" schema={faqSchema} />

            <main className="py-16 sm:py-24">
                <Container>
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                        <ol className="flex items-center gap-2">
                            <li><Link href="/" className="hover:text-primary">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                            <li>/</li>
                            <li>IPTV VPN Guide</li>
                        </ol>
                    </nav>

                    {/* Hero Section */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <span>🔒 Security Guide • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                        </div>
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                            Do You Need a VPN for IPTV?
                        </h1>

                        <p className="text-xl text-muted-foreground mb-4">
                            <strong>The short answer: Not required, but highly recommended.</strong>
                        </p>

                        <p className="text-lg text-muted-foreground mb-8">
                            This complete guide explains <strong>everything about using VPN with IPTV</strong>—when you need it, which VPNs work best, how to set it up, and how to prevent ISP throttling.
                        </p>
                    </div>

                    {/* Quick Answer */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border-2 border-primary/20">
                            <h2 className="font-bold text-2xl mb-4">Quick Answer</h2>
                            <p className="mb-4">
                                <strong>You don't technically need a VPN for IPTV</strong>, but it's recommended for three reasons:
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span><strong>Privacy:</strong> Hides your streaming activity from your ISP</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span><strong>Prevent Throttling:</strong> Stops ISPs from slowing down your IPTV</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span><strong>Access Content:</strong> Bypass geo-restrictions on channels</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Do You Need VPN */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold mb-6">When You Need a VPN for IPTV</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 border-2 border-green-500/30 rounded-xl bg-green-500/5">
                                <h3 className="font-bold text-xl mb-4 text-green-600">✅ Use a VPN if:</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Your ISP throttles streaming traffic</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>You experience buffering during peak hours</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>You want to access geo-restricted channels</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>You value privacy and don't want ISP tracking</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>You're using public WiFi</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 border-2 border-muted rounded-xl">
                                <h3 className="font-bold text-xl mb-4">⚪ Skip VPN if:</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                        <span>You have fast, unlimited internet (no throttling)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                        <span>You're using a reputable licensed IPTV provider</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                        <span>You don't care about privacy</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                        <span>You want to save $5-10/month on VPN costs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Benefits */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold mb-6">Benefits of Using VPN with IPTV</h2>

                        <div className="space-y-6">
                            <div className="p-6 border-2 rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <Shield className="h-8 w-8 text-primary" />
                                    <h3 className="font-bold text-xl">1. Privacy Protection</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Your ISP can see everything you do online—including what IPTV channels you watch. A VPN encrypts your traffic, making it impossible for your ISP to monitor your streaming activity.
                                </p>
                                <div className="p-3 bg-primary/10 rounded-lg text-sm">
                                    <strong>Without VPN:</strong> ISP sees "User is watching ESPN on IPTV"<br />
                                    <strong>With VPN:</strong> ISP sees "User is connected to VPN server" (encrypted data)
                                </div>
                            </div>

                            <div className="p-6 border-2 rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <Zap className="h-8 w-8 text-primary" />
                                    <h3 className="font-bold text-xl">2. Prevent ISP Throttling</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Many ISPs throttle (slow down) streaming traffic during peak hours to manage bandwidth. Since a VPN hides your activity, ISPs can't detect and throttle your IPTV streams.
                                </p>
                                <div className="p-3 bg-green-500/10 rounded-lg text-sm">
                                    <strong>Result:</strong> Faster, more consistent streaming speeds—especially during evenings and weekends when ISP throttling is most common.
                                </div>
                            </div>

                            <div className="p-6 border-2 rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <Globe className="h-8 w-8 text-primary" />
                                    <h3 className="font-bold text-xl">3. Access Geo-Restricted Content</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Some IPTV channels are only available in specific countries. A VPN lets you connect to servers in different countries, bypassing geo-restrictions.
                                </p>
                                <div className="p-3 bg-blue-500/10 rounded-lg text-sm">
                                    <strong>Example:</strong> Want to watch UK sports channels? Connect to a UK VPN server and access Sky Sports, BT Sport, etc.
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Best VPNs */}
                    <section className="mb-16 max-w-4xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Best VPNs for IPTV in 2026</h2>

                        <div className="space-y-6">
                            {/* NordVPN */}
                            <div className="border-2 border-primary/30 rounded-xl p-6 bg-primary/5">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-bold">#1 BEST FOR IPTV</span>
                                        </div>
                                        <h3 className="font-bold text-2xl">NordVPN</h3>
                                        <div className="flex items-center gap-1 text-sm mt-1">
                                            <span className="text-yellow-500">★★★★★</span>
                                            <span className="font-medium">4.9/5</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-primary">$3.99</div>
                                        <div className="text-sm text-muted-foreground">/month</div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Fastest speeds (minimal buffering)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>6,000+ servers in 60+ countries</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Works on Fire TV, Android TV, all devices</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>No bandwidth limits</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>30-day money-back guarantee</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>24/7 customer support</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* ExpressVPN */}
                            <div className="border-2 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2 py-1 bg-muted rounded text-xs font-bold">#2 RUNNER-UP</span>
                                        </div>
                                        <h3 className="font-bold text-xl">ExpressVPN</h3>
                                        <div className="flex items-center gap-1 text-sm mt-1">
                                            <span className="text-yellow-500">★★★★★</span>
                                            <span className="font-medium">4.8/5</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold">$6.67</div>
                                        <div className="text-sm text-muted-foreground">/month</div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Excellent speeds</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>3,000+ servers in 90+ countries</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>More expensive than NordVPN</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Easy to use</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Surfshark */}
                            <div className="border-2 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2 py-1 bg-muted rounded text-xs font-bold">#3 BUDGET PICK</span>
                                        </div>
                                        <h3 className="font-bold text-xl">Surfshark</h3>
                                        <div className="flex items-center gap-1 text-sm mt-1">
                                            <span className="text-yellow-500">★★★★☆</span>
                                            <span className="font-medium">4.6/5</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold">$2.49</div>
                                        <div className="text-sm text-muted-foreground">/month</div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Cheapest option</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Unlimited devices</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>Slightly slower than NordVPN</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Good for families</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How to Setup */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold mb-6">How to Setup VPN for IPTV (5 Minutes)</h2>

                        <ol className="space-y-4">
                            {[
                                { title: "Subscribe to a VPN", desc: "Choose NordVPN, ExpressVPN, or Surfshark. Sign up for a plan (yearly plans save 40-60%)." },
                                { title: "Download VPN App", desc: "Install the VPN app on your device (Fire TV, Android TV, phone, etc.). Available in app stores." },
                                { title: "Login to VPN", desc: "Open the VPN app and enter your credentials." },
                                { title: "Connect to Server", desc: "Choose a server location (use nearby servers for fastest speeds, or specific countries for geo-restricted content)." },
                                { title: "Open IPTV App", desc: "Launch your IPTV app and start watching. The VPN runs in the background automatically." },
                            ].map((step, i) => (
                                <li key={i} className="flex gap-4 p-4 border rounded-lg">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    {/* Free VPN Warning */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-xl">
                            <div className="flex gap-3 mb-4">
                                <Lock className="h-6 w-6 text-red-500 flex-shrink-0" />
                                <h2 className="font-bold text-xl">⚠️ Avoid Free VPNs for IPTV</h2>
                            </div>
                            <p className="mb-4">
                                Free VPNs are <strong>terrible for IPTV</strong>. Here's why:
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Too slow:</strong> Constant buffering, unwatchable quality</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Data limits:</strong> 500MB-2GB/month (IPTV uses 1-3GB/hour)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Privacy concerns:</strong> Many sell your data to advertisers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Server overload:</strong> Too many users, terrible performance</span>
                                </li>
                            </ul>
                            <div className="mt-4 p-3 bg-green-500/10 rounded-lg text-sm">
                                <strong>Recommendation:</strong> Spend $3-7/month on a quality VPN. It's worth it for smooth, private IPTV streaming.
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section id="faq" className="max-w-3xl mx-auto scroll-mt-20 mb-16">
                        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible>
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
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
                        <h2 className="font-headline text-3xl font-bold mb-4 text-center">Get Secure IPTV Streaming</h2>
                        <p className="text-center text-lg mb-6">
                            Combine our <strong>premium IPTV service</strong> with NordVPN for the best streaming experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button asChild size="lg">
                                <Link href="/pricing">Start IPTV Free Trial</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/blog/best-iptv-provider-2026">Compare IPTV Providers</Link>
                            </Button>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <h2 className="font-headline text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/blog/how-to-setup-iptv" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">📖 How to Setup IPTV</h3>
                                <p className="text-sm text-muted-foreground">Complete setup guide</p>
                            </Link>
                            <Link href="/blog/iptv-troubleshooting-guide" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🔧 Troubleshooting Guide</h3>
                                <p className="text-sm text-muted-foreground">Fix common issues</p>
                            </Link>
                            <Link href="/blog/best-iptv-provider-2026" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🏆 Best IPTV Provider</h3>
                                <p className="text-sm text-muted-foreground">Top 5 comparison</p>
                            </Link>
                            <Link href="/iptv-guide" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">📚 Complete IPTV Guide</h3>
                                <p className="text-sm text-muted-foreground">Everything about IPTV</p>
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
                                    We've tested dozens of VPNs with IPTV services to find the best combinations for speed, privacy, and reliability. Our recommendations are based on real-world testing and user feedback.
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                    Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • Published: January 1, 2026
                                </p>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
        </>
    );
}
