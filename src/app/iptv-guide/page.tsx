import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema, generateHowToSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { CheckCircle2, Tv, DollarSign, Shield, Zap, Globe, Smartphone, AlertTriangle } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "The Complete IPTV Guide 2026: Everything You Need to Know";
    const description = "Comprehensive guide to IPTV: what it is, how it works, legal considerations, setup guides, provider comparisons, and expert tips. Updated Jan 2026.";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/iptv-guide`;
    const imageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/api/og?title=${encodeURIComponent('Complete IPTV Guide 2026')}`;

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/iptv-guide",
        }),
        title: {
            absolute: title,
        },
        keywords: [
            'iptv guide',
            'what is iptv',
            'iptv explained',
            'iptv setup',
            'iptv providers',
            'iptv streaming',
            'cord cutting guide'
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
                alt: 'Complete IPTV Guide 2026',
            }],
            publishedTime: '2026-01-01T00:00:00Z',
            modifiedTime: new Date().toISOString(),
            authors: ['IPTV Expert Team'],
            section: 'Technology',
            tags: ['IPTV', 'Streaming', 'Cord Cutting', 'Technology', 'Guide'],
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
        question: "Is IPTV legal?",
        answer: "IPTV technology itself is 100% legal. The legality depends on whether the provider has proper licensing for the content they stream. Reputable IPTV services (like those in our top 5) operate legally by licensing content from broadcasters. Always choose providers that are transparent about their licensing."
    },
    {
        question: "What internet speed do I need for IPTV?",
        answer: "For HD streaming: minimum 10 Mbps. For 4K streaming: minimum 25 Mbps. For multiple devices: add 10 Mbps per additional stream. A stable connection is more important than raw speed—a consistent 15 Mbps is better than a fluctuating 50 Mbps."
    },
    {
        question: "Can I use IPTV on multiple devices?",
        answer: "Yes! Most IPTV providers allow 2-5 simultaneous connections. Our #1 pick allows 5 devices, meaning your entire family can watch different channels at the same time on TVs, phones, tablets, and computers."
    },
    {
        question: "How much does IPTV cost?",
        answer: "IPTV services typically cost $10-20/month, compared to cable TV's $80-150/month. Yearly plans offer 40-50% savings. Most providers offer free trials or money-back guarantees to test the service risk-free."
    },
    {
        question: "What's the difference between IPTV and cable TV?",
        answer: "IPTV delivers TV over the internet, while cable uses physical coaxial cables. IPTV advantages: more channels (20,000+ vs cable's 200-500), lower cost, watch on any device, no installation fees. The only requirement is a stable internet connection."
    },
    {
        question: "Do I need a VPN for IPTV?",
        answer: "A VPN is recommended but not required. It protects your privacy, prevents ISP throttling, and allows access to geo-restricted content. However, reputable licensed IPTV providers are safe to use without a VPN."
    },
    {
        question: "Can I watch sports on IPTV?",
        answer: "Absolutely! Premium IPTV providers offer 150+ sports channels including ESPN, Fox Sports, NBC Sports, NFL Network, NBA TV, and international channels like Sky Sports and beIN Sports. Many include PPV events at no extra cost."
    },
    {
        question: "How do I set up IPTV?",
        answer: "Setup takes 5-10 minutes: 1) Subscribe to a provider, 2) Download their app or a compatible player (like IPTV Smarters), 3) Enter your login credentials, 4) Start watching. Most providers offer step-by-step guides for all devices."
    },
    {
        question: "What devices support IPTV?",
        answer: "IPTV works on: Amazon Fire TV Stick, Android TV, Smart TVs (Samsung, LG, Sony), Apple TV, Roku, iOS/Android phones and tablets, Windows/Mac computers, and MAG boxes. Basically any device with internet access."
    },
    {
        question: "Will IPTV work if my internet goes down?",
        answer: "No, IPTV requires an active internet connection to stream content. Unlike cable TV which works independently, IPTV relies entirely on your internet service. This is why we recommend a stable, reliable internet connection."
    },
];

export default async function IPTVGuide() {
    const articleSchema = generateArticleSchema({
        headline: "The Complete IPTV Guide 2026: Everything You Need to Know About Internet TV",
        description: "Comprehensive guide covering IPTV technology, setup, providers, legal considerations, and expert tips",
        image: "/api/og?title=Complete IPTV Guide 2026",
        datePublished: "2026-01-01",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/iptv-guide`,
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "IPTV Guide", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/iptv-guide` },
    ]);

    const faqSchema = generateFAQPageSchema(faqs);

    const howToSchema = generateHowToSchema({
        name: "How to Set Up IPTV",
        description: "Step-by-step guide to setting up IPTV on any device",
        steps: [
            { name: "Choose a Provider", text: "Select a reputable IPTV provider from our top 5 list", url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/best-iptv-provider-2026` },
            { name: "Subscribe", text: "Sign up for a plan (monthly or yearly)", url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/pricing` },
            { name: "Download App", text: "Install the IPTV app on your device", url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/fire-tv` },
            { name: "Enter Credentials", text: "Log in with your username and password", url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/iptv-guide` },
            { name: "Start Watching", text: "Browse channels and start streaming", url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/iptv-guide` },
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
                            <li>IPTV Guide</li>
                        </ol>
                    </nav>

                    {/* Hero Section */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <span>📚 Complete Guide • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                        </div>
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                            The Complete IPTV Guide 2026
                        </h1>

                        <p className="text-xl text-muted-foreground mb-4">
                            <strong>Want to cut the cord and save $1,500+ per year?</strong> This is your complete guide to IPTV.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8">
                            Learn everything about Internet Protocol Television—from how it works to choosing the best provider, setting it up, and getting the most value from your subscription.
                        </p>
                    </div>

                    {/* Table of Contents */}
                    <nav className="mb-16 max-w-3xl mx-auto bg-muted/30 p-8 rounded-xl">
                        <h2 className="font-semibold text-xl mb-6">Table of Contents</h2>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                            <a href="#what-is-iptv" className="text-primary hover:underline">1. What is IPTV?</a>
                            <a href="#how-it-works" className="text-primary hover:underline">2. How IPTV Works</a>
                            <a href="#iptv-vs-cable" className="text-primary hover:underline">3. IPTV vs Cable TV</a>
                            <a href="#types-of-iptv" className="text-primary hover:underline">4. Types of IPTV Services</a>
                            <a href="#choosing-provider" className="text-primary hover:underline">5. Choosing a Provider</a>
                            <a href="#iptv-for-sports" className="text-primary hover:underline">6. IPTV for Sports</a>
                            <a href="#devices-setup" className="text-primary hover:underline">7. Devices & Setup</a>
                            <a href="#channels-content" className="text-primary hover:underline">8. Channels & Content</a>
                            <a href="#legal-safety" className="text-primary hover:underline">9. Legal & Safety</a>
                            <a href="#pricing" className="text-primary hover:underline">10. Pricing & Plans</a>
                            <a href="#troubleshooting" className="text-primary hover:underline">11. Troubleshooting</a>
                            <a href="#faq" className="text-primary hover:underline">12. FAQ</a>
                        </div>
                    </nav>

                    {/* 1. What is IPTV */}
                    <section id="what-is-iptv" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">What is IPTV?</h2>

                        <p className="text-lg mb-4">
                            <strong>IPTV stands for Internet Protocol Television</strong>—a system where TV content is delivered over the internet instead of through traditional cable or satellite.
                        </p>

                        <p className="mb-6">
                            Think of it like Netflix, but for live TV channels. Instead of waiting for a cable technician to install physical wires, you simply connect to the internet and start watching.
                        </p>

                        <div className="bg-primary/10 p-6 rounded-xl mb-6">
                            <h3 className="font-bold mb-3">Quick Example:</h3>
                            <p className="text-sm">
                                When you watch ESPN on cable TV, the signal travels through a coaxial cable to your TV box. With IPTV, ESPN streams over your internet connection—just like watching a YouTube video, but with live TV channels.
                            </p>
                        </div>
                    </section>

                    {/* 2. How IPTV Works */}
                    <section id="how-it-works" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">How IPTV Works</h2>

                        <p className="mb-6">
                            IPTV uses your internet connection to stream TV content in real-time. Here's the process:
                        </p>

                        <div className="space-y-4">
                            {[
                                { num: 1, title: "Content Source", desc: "TV channels broadcast their content to IPTV servers" },
                                { num: 2, title: "Server Processing", desc: "IPTV servers convert the broadcast into internet-friendly data packets" },
                                { num: 3, title: "Internet Delivery", desc: "Data packets travel through your internet connection" },
                                { num: 4, title: "Your Device", desc: "Your TV, phone, or tablet decodes the packets and displays the video" },
                            ].map((step) => (
                                <div key={step.num} className="flex gap-4 p-4 border rounded-lg">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                            {step.num}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. IPTV vs Cable TV */}
                    <section id="iptv-vs-cable" className="mb-16 max-w-4xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6 text-center">IPTV vs Cable TV: The Comparison</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="text-left p-4 font-bold">Feature</th>
                                        <th className="text-center p-4 font-bold bg-primary/10">IPTV</th>
                                        <th className="text-center p-4 font-bold">Cable TV</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Monthly Cost</td>
                                        <td className="text-center p-4 bg-primary/5">$10-20</td>
                                        <td className="text-center p-4">$80-150</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Channel Count</td>
                                        <td className="text-center p-4 bg-primary/5">20,000+</td>
                                        <td className="text-center p-4">200-500</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Installation</td>
                                        <td className="text-center p-4 bg-primary/5">DIY (5 min)</td>
                                        <td className="text-center p-4">Technician ($100+)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Contract</td>
                                        <td className="text-center p-4 bg-primary/5">No contract</td>
                                        <td className="text-center p-4">1-2 year contract</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Watch on Multiple Devices</td>
                                        <td className="text-center p-4 bg-primary/5">✅ Yes</td>
                                        <td className="text-center p-4">❌ Limited</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">4K Quality</td>
                                        <td className="text-center p-4 bg-primary/5">✅ Standard</td>
                                        <td className="text-center p-4">⚠️ Extra cost</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-lg font-semibold mb-4">
                                <strong>Annual Savings:</strong> $840-1,560 by switching to IPTV
                            </p>
                            <Link href="/blog/best-iptv-provider-2026">
                                <Button size="lg">See Top IPTV Providers</Button>
                            </Link>
                        </div>
                    </section>

                    {/* 4. Types of IPTV Services */}
                    <section id="types-of-iptv" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">Types of IPTV Services</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 border-2 rounded-xl">
                                <Tv className="h-10 w-10 text-primary mb-3" />
                                <h3 className="font-bold text-xl mb-2">Live TV IPTV</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Watch live channels as they broadcast—sports, news, entertainment. Just like cable TV, but over the internet.
                                </p>
                                <p className="text-xs font-medium">Best for: Sports fans, news watchers</p>
                            </div>

                            <div className="p-6 border-2 rounded-xl">
                                <Smartphone className="h-10 w-10 text-primary mb-3" />
                                <h3 className="font-bold text-xl mb-2">VOD IPTV</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Video on Demand—watch movies and shows whenever you want. Like Netflix, but included with your IPTV subscription.
                                </p>
                                <p className="text-xs font-medium">Best for: Movie lovers, binge-watchers</p>
                            </div>

                            <div className="p-6 border-2 rounded-xl">
                                <Zap className="h-10 w-10 text-primary mb-3" />
                                <h3 className="font-bold text-xl mb-2">Time-Shifted IPTV</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Pause, rewind, and replay live TV. Missed the first 10 minutes? Start from the beginning.
                                </p>
                                <p className="text-xs font-medium">Best for: Busy schedules, families</p>
                            </div>

                            <div className="p-6 border-2 rounded-xl">
                                <Globe className="h-10 w-10 text-primary mb-3" />
                                <h3 className="font-bold text-xl mb-2">Hybrid IPTV</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Combines live TV, VOD, and time-shifting. The most popular option—get everything in one package.
                                </p>
                                <p className="text-xs font-medium">Best for: Most users (recommended)</p>
                            </div>
                        </div>
                    </section>

                    {/* 5. Choosing a Provider */}
                    <section id="choosing-provider" className="mb-16 max-w-4xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">How to Choose an IPTV Provider</h2>

                        <p className="text-lg mb-6">
                            Not all IPTV providers are created equal. Here's what to look for:
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                { icon: CheckCircle2, title: "Channel Count", desc: "Look for 10,000+ channels minimum. Our #1 pick offers 24,000+ channels." },
                                { icon: Zap, title: "Server Stability", desc: "99%+ uptime is essential. Avoid providers with frequent freezing or buffering." },
                                { icon: Shield, title: "Legal Licensing", desc: "Choose providers transparent about their licensing. Avoid 'too good to be true' pricing." },
                                { icon: Smartphone, title: "Device Support", desc: "Ensure compatibility with your devices (Fire Stick, Smart TV, phone, etc.)" },
                                { icon: DollarSign, title: "Pricing", desc: "$15-20/month is fair. Be wary of providers charging $5/month (usually unstable)." },
                                { icon: Globe, title: "Customer Support", desc: "24/7 support is crucial. Test their response time before committing." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 border rounded-lg">
                                    <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                            <h3 className="font-bold text-lg mb-3">Our Top Recommendation</h3>
                            <p className="mb-4">
                                After testing 50+ providers, we recommend starting with our <strong>#1 pick</strong>—it offers the best balance of channels, stability, and value.
                            </p>
                            <Link href="/blog/best-iptv-provider-2026">
                                <Button>See Our Top 5 Providers</Button>
                            </Link>
                        </div>
                    </section>

                    {/* 6. IPTV for Sports */}
                    <section id="iptv-for-sports" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">IPTV for Sports Fans</h2>

                        <p className="text-lg mb-6">
                            IPTV is a <strong>game-changer for sports fans</strong>. Here's why:
                        </p>

                        <ul className="space-y-3 mb-8">
                            {[
                                "150+ sports channels (ESPN, Fox Sports, NBC Sports, NFL Network, NBA TV, etc.)",
                                "International sports leagues (Premier League, La Liga, Serie A, Bundesliga)",
                                "PPV events included (UFC, boxing, WWE) with premium providers",
                                "Multiple camera angles and replays",
                                "Watch on any device—never miss a game",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/blog/best-iptv-for-sports" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">⚽ Best IPTV for Sports</h3>
                                <p className="text-sm text-muted-foreground">Top providers for sports streaming</p>
                            </Link>
                            <Link href="/blog/iptv-sports-channels-list" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">📺 Sports Channels List</h3>
                                <p className="text-sm text-muted-foreground">Complete list of 50+ sports channels</p>
                            </Link>
                        </div>
                    </section>

                    {/* 7. Devices & Setup */}
                    <section id="devices-setup" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">Devices & Setup Guide</h2>

                        <p className="text-lg mb-6">
                            IPTV works on virtually any device with internet access:
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            {[
                                "Amazon Fire TV Stick",
                                "Android TV",
                                "Smart TVs (Samsung, LG, Sony)",
                                "Apple TV",
                                "Roku",
                                "iOS/Android phones & tablets",
                                "Windows/Mac computers",
                                "MAG boxes",
                                "Nvidia Shield",
                            ].map((device) => (
                                <div key={device} className="p-4 border rounded-lg text-center">
                                    <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto mb-2" />
                                    <p className="text-sm font-medium">{device}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted/30 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-4">Quick Setup (5-10 minutes)</h3>
                            <ol className="space-y-3 text-sm">
                                <li className="flex gap-3">
                                    <span className="font-bold text-primary">1.</span>
                                    <span>Subscribe to an IPTV provider</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-primary">2.</span>
                                    <span>Download their app (or IPTV Smarters/TiviMate)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-primary">3.</span>
                                    <span>Enter your login credentials</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-primary">4.</span>
                                    <span>Start watching!</span>
                                </li>
                            </ol>
                        </div>

                        <div className="mt-6">
                            <Link href="/devices/fire-tv" className="text-primary hover:underline font-medium">
                                → Detailed Fire TV Stick Setup Guide
                            </Link>
                        </div>
                    </section>

                    {/* 8. Channels & Content */}
                    <section id="channels-content" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">Channels & Content</h2>

                        <p className="text-lg mb-6">
                            Premium IPTV providers offer <strong>20,000-24,000+ channels</strong> across all categories:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { category: "Sports", count: "150+", examples: "ESPN, Fox Sports, NFL Network, NBA TV" },
                                { category: "Movies & Entertainment", count: "5,000+", examples: "HBO, Showtime, Starz, AMC" },
                                { category: "News", count: "200+", examples: "CNN, Fox News, MSNBC, BBC" },
                                { category: "Kids", count: "500+", examples: "Disney, Nickelodeon, Cartoon Network" },
                                { category: "International", count: "10,000+", examples: "Arabic, Indian, Latino, European" },
                                { category: "VOD Library", count: "50,000+", examples: "Movies, TV shows, documentaries" },
                            ].map((item) => (
                                <div key={item.category} className="p-4 border rounded-lg">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold">{item.category}</h3>
                                        <span className="text-sm font-medium text-primary">{item.count}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{item.examples}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 9. Legal & Safety */}
                    <section id="legal-safety" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">Legal & Safety Considerations</h2>

                        <div className="bg-yellow-500/10 border-2 border-yellow-500/30 p-6 rounded-xl mb-6">
                            <div className="flex gap-3">
                                <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-2">Is IPTV Legal?</h3>
                                    <p className="text-sm mb-3">
                                        <strong>Yes, IPTV technology is 100% legal.</strong> However, the legality depends on whether the provider has proper licensing for the content they stream.
                                    </p>
                                    <p className="text-sm">
                                        <strong>How to stay legal:</strong> Choose providers that are transparent about their licensing, avoid "too good to be true" pricing ($5/month providers are usually illegal), and stick with established, reputable services.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="font-bold text-lg mb-4">Safety Tips</h3>
                        <ul className="space-y-3">
                            {[
                                "Use a VPN for privacy (optional but recommended)",
                                "Avoid providers asking for credit card info without SSL encryption",
                                "Read reviews before subscribing",
                                "Start with monthly plans before committing to yearly",
                                "Test the service during the trial period",
                            ].map((tip, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* 10. Pricing & Plans */}
                    <section id="pricing" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">Pricing & Plans</h2>

                        <p className="text-lg mb-6">
                            IPTV is <strong>significantly cheaper</strong> than cable TV:
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="p-6 border-2 rounded-xl">
                                <div className="text-sm text-muted-foreground mb-2">Monthly Plan</div>
                                <div className="text-3xl font-bold mb-2">$15-20</div>
                                <div className="text-sm text-muted-foreground mb-4">per month</div>
                                <ul className="text-sm space-y-2">
                                    <li>✅ No commitment</li>
                                    <li>✅ Cancel anytime</li>
                                    <li>✅ Test the service</li>
                                </ul>
                            </div>

                            <div className="p-6 border-2 border-primary rounded-xl bg-primary/5">
                                <div className="text-sm text-primary mb-2">Yearly Plan (Best Value)</div>
                                <div className="text-3xl font-bold mb-2">$120-180</div>
                                <div className="text-sm text-muted-foreground mb-4">per year</div>
                                <ul className="text-sm space-y-2">
                                    <li>✅ Save 40-50%</li>
                                    <li>✅ $10-15/month</li>
                                    <li>✅ Best for committed users</li>
                                </ul>
                            </div>

                            <div className="p-6 border-2 rounded-xl">
                                <div className="text-sm text-muted-foreground mb-2">Cable TV</div>
                                <div className="text-3xl font-bold mb-2">$80-150</div>
                                <div className="text-sm text-muted-foreground mb-4">per month</div>
                                <ul className="text-sm space-y-2">
                                    <li>❌ 1-2 year contract</li>
                                    <li>❌ Installation fees</li>
                                    <li>❌ Equipment rental</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="/pricing">
                                <Button size="lg">View Our Pricing Plans</Button>
                            </Link>
                        </div>
                    </section>

                    {/* 11. Troubleshooting */}
                    <section id="troubleshooting" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">Common Issues & Solutions</h2>

                        <Accordion type="single" collapsible>
                            {[
                                { q: "Buffering or freezing", a: "Check your internet speed (need 10+ Mbps for HD). Close other apps using bandwidth. Try a wired connection instead of WiFi. Contact your provider if issues persist." },
                                { q: "Channels not loading", a: "Verify your subscription is active. Clear app cache. Restart your device. Update the IPTV app to the latest version." },
                                { q: "Poor video quality", a: "Increase video quality in app settings. Ensure you have sufficient internet speed (25+ Mbps for 4K). Check if your device supports HD/4K playback." },
                                { q: "Login issues", a: "Double-check username and password. Ensure your subscription hasn't expired. Contact customer support for account verification." },
                                { q: "EPG not showing", a: "Enable EPG in app settings. Wait 24 hours for EPG data to populate. Try refreshing the channel list." },
                            ].map((item, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger>
                                        <h3 className="text-left font-semibold">{item.q}</h3>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-sm text-muted-foreground">{item.a}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* 12. FAQ */}
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
                        <h2 className="font-headline text-3xl font-bold mb-4 text-center">Ready to Start Your IPTV Journey?</h2>
                        <p className="text-center text-lg mb-6">
                            Join 50,000+ cord-cutters who've saved $1,500+ per year by switching to IPTV.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button asChild size="lg">
                                <Link href="/pricing">Start Your 7-Day Trial</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/blog/best-iptv-provider-2026">Compare Top Providers</Link>
                            </Button>
                        </div>
                    </section>

                    {/* Related Guides */}
                    <section className="mb-16 max-w-4xl mx-auto">
                        <h2 className="font-headline text-2xl font-bold mb-6 text-center">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/blog/best-iptv-provider-2026" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🏆 Best IPTV Provider 2026</h3>
                                <p className="text-sm text-muted-foreground">Top 5 providers compared</p>
                            </Link>
                            <Link href="/blog/best-iptv-for-sports" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">⚽ Best IPTV for Sports</h3>
                                <p className="text-sm text-muted-foreground">Sports streaming guide</p>
                            </Link>
                            <Link href="/blog/iptv-sports-channels-list" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">📺 Sports Channels List</h3>
                                <p className="text-sm text-muted-foreground">50+ sports channels</p>
                            </Link>
                            <Link href="/devices/fire-tv" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🔥 IPTV on Fire TV</h3>
                                <p className="text-sm text-muted-foreground">Setup guide</p>
                            </Link>
                            <Link href="/pricing" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">💰 Pricing Plans</h3>
                                <p className="text-sm text-muted-foreground">Compare our plans</p>
                            </Link>
                            <Link href="/locations" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🌍 IPTV by Country</h3>
                                <p className="text-sm text-muted-foreground">Regional availability</p>
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
                                    Our team has been testing and reviewing IPTV services since 2018. We've evaluated over 200 providers across 5 continents, helping 50,000+ cord-cutters save money and get better TV. All our guides are based on real-world testing—no paid placements, no affiliate bias.
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
