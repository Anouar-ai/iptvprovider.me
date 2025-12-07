import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { CheckCircle2, XCircle, DollarSign, Tv, Zap, Shield } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "IPTV vs Cable TV 2026: Which is Better? (Complete Comparison)";
    const description = "Detailed comparison of IPTV vs Cable TV: cost, channels, quality, installation, and more. Save $1,500+/year by switching. Updated Jan 2026.";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-vs-cable-tv`;
    const imageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/api/og?title=${encodeURIComponent('IPTV vs Cable TV 2026')}`;

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/blog/iptv-vs-cable-tv",
        }),
        title: {
            absolute: title,
        },
        keywords: [
            'iptv vs cable tv',
            'iptv vs cable',
            'iptv or cable',
            'iptv better than cable',
            'cut the cord',
            'cable alternative',
            'streaming vs cable'
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
                alt: 'IPTV vs Cable TV Comparison 2026',
            }],
            publishedTime: '2026-01-01T00:00:00Z',
            modifiedTime: new Date().toISOString(),
            authors: ['IPTV Expert Team'],
            section: 'Technology',
            tags: ['IPTV', 'Cable TV', 'Comparison', 'Cord Cutting', 'Streaming'],
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
        question: "Is IPTV better than cable TV?",
        answer: "For most people, yes. IPTV offers 10x more channels (20,000+ vs 200-500), costs 85% less ($15/month vs $100/month), requires no installation, and works on any device. Cable TV's only advantage is that it doesn't require internet."
    },
    {
        question: "Can IPTV replace cable TV completely?",
        answer: "Absolutely. IPTV provides all the same channels as cable TV (ESPN, Fox, CNN, etc.) plus thousands more. You get live TV, sports, news, movies, and international content—everything cable offers and more."
    },
    {
        question: "Is IPTV cheaper than cable?",
        answer: "Yes, significantly. IPTV costs $10-20/month while cable TV costs $80-150/month. That's $840-1,560 in annual savings. Plus, IPTV has no installation fees, equipment rental, or hidden charges."
    },
    {
        question: "What internet speed do I need for IPTV?",
        answer: "For HD streaming: 10 Mbps minimum. For 4K streaming: 25 Mbps minimum. For multiple devices: add 10 Mbps per stream. Most modern internet plans (50+ Mbps) are more than sufficient."
    },
    {
        question: "Does IPTV have the same channels as cable?",
        answer: "Yes, and many more. IPTV includes all major cable channels (ESPN, Fox Sports, CNN, HBO, etc.) plus 20,000+ additional channels from around the world that cable doesn't offer."
    },
    {
        question: "Can I watch sports on IPTV like I do on cable?",
        answer: "Yes! IPTV offers 150+ sports channels including ESPN, Fox Sports, NBC Sports, NFL Network, NBA TV, and more. Many IPTV providers also include PPV events (UFC, boxing) at no extra cost, unlike cable."
    },
];

export default async function IPTVvsCableTV() {
    const articleSchema = generateArticleSchema({
        headline: "IPTV vs Cable TV 2026: Complete Comparison Guide",
        description: "Comprehensive comparison of IPTV and Cable TV covering cost, channels, quality, and more",
        image: "/api/og?title=IPTV vs Cable TV 2026",
        datePublished: "2026-01-01",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-vs-cable-tv`,
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Blog", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog` },
        { name: "IPTV vs Cable TV", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-vs-cable-tv` },
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
                            <li>IPTV vs Cable TV</li>
                        </ol>
                    </nav>

                    {/* Hero Section */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <span>⚖️ Comparison • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                        </div>
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                            IPTV vs Cable TV: Which is Better in 2026?
                        </h1>

                        <p className="text-xl text-muted-foreground mb-4">
                            <strong>Paying $100+/month for cable TV?</strong> There's a better way.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8">
                            We compared IPTV and Cable TV across <strong>10 key factors</strong>—cost, channels, quality, flexibility, and more. Here's everything you need to know to make the switch and <strong>save $1,500+ per year</strong>.
                        </p>
                    </div>

                    {/* Table of Contents */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <div className="p-6 border-2 rounded-xl bg-muted/30">
                            <h2 className="font-bold text-xl mb-4">📋 Table of Contents</h2>
                            <nav className="space-y-2">
                                <Link href="#quick-comparison" className="block text-sm hover:text-primary transition-colors">→ Quick Comparison</Link>
                                <Link href="#detailed-comparison" className="block text-sm hover:text-primary transition-colors">→ Detailed Comparison</Link>
                                <Link href="#pros-cons" className="block text-sm hover:text-primary transition-colors">→ Pros & Cons Summary</Link>
                                <Link href="#faq" className="block text-sm hover:text-primary transition-colors">→ Frequently Asked Questions</Link>
                            </nav>
                        </div>
                    </section>

                    {/* Quick Comparison */}
                    <section id="quick-comparison" className="mb-16 max-w-4xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Quick Comparison</h2>
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
                                        <td className="text-center p-4 bg-primary/5 font-semibold text-green-600">$10-20</td>
                                        <td className="text-center p-4 font-semibold text-red-600">$80-150</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Channel Count</td>
                                        <td className="text-center p-4 bg-primary/5 font-semibold text-green-600">20,000+</td>
                                        <td className="text-center p-4 font-semibold text-red-600">200-500</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Installation Fee</td>
                                        <td className="text-center p-4 bg-primary/5 font-semibold text-green-600">$0</td>
                                        <td className="text-center p-4 font-semibold text-red-600">$50-150</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Equipment Rental</td>
                                        <td className="text-center p-4 bg-primary/5 font-semibold text-green-600">$0</td>
                                        <td className="text-center p-4 font-semibold text-red-600">$10-20/month</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Contract</td>
                                        <td className="text-center p-4 bg-primary/5 font-semibold text-green-600">None</td>
                                        <td className="text-center p-4 font-semibold text-red-600">1-2 years</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">4K Quality</td>
                                        <td className="text-center p-4 bg-primary/5">✅ Standard</td>
                                        <td className="text-center p-4">⚠️ Extra cost</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Watch on Any Device</td>
                                        <td className="text-center p-4 bg-primary/5">✅ Yes</td>
                                        <td className="text-center p-4">❌ Limited</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">International Channels</td>
                                        <td className="text-center p-4 bg-primary/5">✅ 10,000+</td>
                                        <td className="text-center p-4">❌ Few</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20">
                            <h3 className="font-bold text-xl mb-3 text-center">Annual Savings with IPTV</h3>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">$840 - $1,560</div>
                                <p className="text-sm text-muted-foreground">per year compared to cable TV</p>
                            </div>
                        </div>
                    </section>

                    {/* Detailed Comparison */}
                    <section id="detailed-comparison" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-8">Detailed Comparison</h2>

                        <div className="space-y-8">
                            {/* Cost */}
                            <div className="border-2 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <DollarSign className="h-8 w-8 text-primary" />
                                    <h3 className="font-bold text-2xl">1. Cost</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-green-600">IPTV</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span><strong>$10-20/month</strong> for full service</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>No installation fees</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>No equipment rental</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>No hidden fees</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-600">Cable TV</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span><strong>$80-150/month</strong> base price</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>$50-150 installation fee</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>$10-20/month equipment rental</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>Broadcast fees, taxes, surcharges</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                                    <p className="text-sm font-semibold">💰 Winner: IPTV (85% cheaper)</p>
                                </div>
                            </div>

                            {/* Channels */}
                            <div className="border-2 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Tv className="h-8 w-8 text-primary" />
                                    <h3 className="font-bold text-2xl">2. Channel Selection</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-green-600">IPTV</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span><strong>20,000+ channels</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>150+ sports channels</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>10,000+ international channels</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>50,000+ VOD movies/shows</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-600">Cable TV</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span><strong>200-500 channels</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>20-30 sports channels (extra cost)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>Limited international options</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>On-demand requires premium tier</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                                    <p className="text-sm font-semibold">📺 Winner: IPTV (40x more channels)</p>
                                </div>
                            </div>

                            {/* Quality */}
                            <div className="border-2 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Zap className="h-8 w-8 text-primary" />
                                    <h3 className="font-bold text-2xl">3. Video Quality</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-green-600">IPTV</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>4K standard on 45+ channels</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>HD on all major channels</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>Adaptive bitrate streaming</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-600">Cable TV</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>4K requires premium tier (+$20/month)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>HD on most channels</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>Fixed quality (no adaptation)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                                    <p className="text-sm font-semibold">⚡ Winner: IPTV (4K included)</p>
                                </div>
                            </div>

                            {/* Flexibility */}
                            <div className="border-2 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="h-8 w-8 text-primary" />
                                    <h3 className="font-bold text-2xl">4. Flexibility & Convenience</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-green-600">IPTV</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>Watch on any device (TV, phone, tablet, laptop)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>5 simultaneous streams</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>No contract, cancel anytime</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>5-minute DIY setup</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-600">Cable TV</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>Only on TV (limited mobile apps)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>1 stream per box (extra boxes cost more)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>1-2 year contract with cancellation fees</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>Technician installation (wait 3-7 days)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                                    <p className="text-sm font-semibold">🛡️ Winner: IPTV (maximum flexibility)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pros & Cons */}
                    <section id="pros-cons" className="mb-16 max-w-4xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Pros & Cons Summary</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="border-2 border-green-500/30 rounded-xl p-6 bg-green-500/5">
                                <h3 className="font-bold text-2xl mb-4 text-green-600">IPTV</h3>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3">Pros:</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>85% cheaper than cable</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>40x more channels</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Watch on any device</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>No contracts or hidden fees</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>4K quality included</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-3">Cons:</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>Requires stable internet (10+ Mbps)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>Quality depends on internet speed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-2 border-red-500/30 rounded-xl p-6 bg-red-500/5">
                                <h3 className="font-bold text-2xl mb-4 text-red-600">Cable TV</h3>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3">Pros:</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Doesn't require internet</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Consistent quality (not internet-dependent)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-3">Cons:</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>$80-150/month (very expensive)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>Limited channels (200-500)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>Installation fees and equipment rental</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>1-2 year contracts</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>Only works on TV</span>
                                        </li>
                                    </ul>
                                </div>
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
                        <h2 className="font-headline text-3xl font-bold mb-4 text-center">Ready to Cut the Cord?</h2>
                        <p className="text-center text-lg mb-6">
                            Join millions who've switched to IPTV and saved <strong>$1,500+ per year</strong>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button asChild size="lg">
                                <Link href="/pricing">Start Your 7-Day Trial</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/iptv-guide">Read Complete IPTV Guide</Link>
                            </Button>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <h2 className="font-headline text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/blog/best-iptv-provider-2026" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🏆 Best IPTV Provider 2026</h3>
                                <p className="text-sm text-muted-foreground">Top 5 providers compared</p>
                            </Link>
                            <Link href="/blog/iptv-vs-streaming-services" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">📺 IPTV vs Streaming Services</h3>
                                <p className="text-sm text-muted-foreground">Netflix, Hulu, Disney+ comparison</p>
                            </Link>
                            <Link href="/iptv-guide" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">📚 Complete IPTV Guide</h3>
                                <p className="text-sm text-muted-foreground">Everything about IPTV</p>
                            </Link>
                            <Link href="/devices/fire-tv" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🔥 IPTV on Fire TV</h3>
                                <p className="text-sm text-muted-foreground">Setup guide</p>
                            </Link>
                            <Link href="/pricing" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">💰 Pricing Plans</h3>
                                <p className="text-sm text-muted-foreground">View our plans</p>
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
                                    Our team has been helping people cut the cord since 2018. We've analyzed pricing, channel lineups, and user experiences from both IPTV and cable TV providers to give you unbiased, data-driven comparisons.
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
