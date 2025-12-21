import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { CheckCircle2, XCircle, Tv, DollarSign, Zap } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "IPTV vs Streaming Services 2025: Netflix, Hulu, Disney+ Comparison";
    const description = "IPTV vs Netflix, Hulu, Disney+: Which is better? Compare live TV, cost, channels, and content. Get both for less than one streaming service. Updated Jan 2025.";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-vs-streaming-services`;
    const imageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/api/og?title=${encodeURIComponent('IPTV vs Streaming Services')}`;

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/blog/iptv-vs-streaming-services",
        }),
        title: {
            absolute: title,
        },
        keywords: [
            'iptv vs streaming',
            'iptv vs netflix',
            'iptv vs hulu',
            'live tv streaming',
            'iptv streaming services',
            'cord cutting',
            'streaming comparison'
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
                alt: 'IPTV vs Streaming Services Comparison',
            }],
            publishedTime: '2025-01-01T00:00:00Z',
            modifiedTime: new Date().toISOString(),
            authors: ['IPTV Expert Team'],
            section: 'Technology',
            tags: ['IPTV', 'Streaming', 'Netflix', 'Hulu', 'Disney+', 'Comparison'],
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
        other: {
            'article:published_time': '2025-01-01T00:00:00Z',
            'article:modified_time': new Date().toISOString(),
            'article:author': 'IPTV Expert Team',
        }
    };
}

const faqs = [
    {
        question: "Is IPTV better than Netflix and Hulu?",
        answer: "They serve different purposes. IPTV provides live TV channels (sports, news, etc.) while Netflix/Hulu offer on-demand content. IPTV is better if you want live TV, sports, and news. The best solution? Get IPTV ($15/month) which often includes VOD content similar to Netflix, saving you from paying for multiple streaming services."
    },
    {
        question: "Can IPTV replace all my streaming subscriptions?",
        answer: "Yes! Premium IPTV services include 50,000+ VOD movies and shows (like Netflix), plus 20,000+ live TV channels (which Netflix doesn't have). You get everything in one subscription for $15/month instead of paying $50-80/month for Netflix + Hulu + Disney+ + live TV."
    },
    {
        question: "Does IPTV have live sports like traditional TV?",
        answer: "Yes! IPTV offers 150+ sports channels including ESPN, Fox Sports, NFL Network, NBA TV, and more. Streaming services like Netflix and Hulu don't offer live sports. This is IPTV's biggest advantage over traditional streaming platforms."
    },
    {
        question: "How much does IPTV cost compared to streaming services?",
        answer: "IPTV: $15/month for everything. Streaming services combined: Netflix ($15) + Hulu ($18) + Disney+ ($14) + YouTube TV ($73) = $120/month. IPTV saves you $105/month or $1,260/year."
    },
    {
        question: "Can I watch IPTV on the same devices as Netflix?",
        answer: "Yes! IPTV works on all the same devices: Smart TVs, Fire TV Stick, Roku, Apple TV, phones, tablets, and computers. The experience is similar to Netflix—just open the app and start watching."
    },
    {
        question: "Does IPTV have the same shows as Netflix?",
        answer: "IPTV includes 50,000+ movies and shows in its VOD library, covering most popular content. While the exact catalog differs from Netflix, you'll find similar content plus the added benefit of 20,000+ live TV channels that Netflix doesn't offer."
    },
];

export default async function IPTVvsStreaming() {
    const articleSchema = generateArticleSchema({
        headline: "IPTV vs Streaming Services 2025: Complete Comparison",
        description: "Comprehensive comparison of IPTV vs Netflix, Hulu, Disney+, and other streaming services",
        image: "/api/og?title=IPTV vs Streaming Services",
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-vs-streaming-services`,
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Blog", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog` },
        { name: "IPTV vs Streaming Services", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-vs-streaming-services` },
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
                            <li>IPTV vs Streaming Services</li>
                        </ol>
                    </nav>

                    {/* Hero Section - Direct Answer Protocol */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <span>📺 Comparison • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                        </div>
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                            IPTV vs Streaming Services: Which is Better in 2025?
                        </h1>

                        <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary text-left mb-8">
                            <p className="text-lg leading-relaxed">
                                <strong>IPTV is a superior alternative to multiple streaming subscriptions because it combines live TV, sports, and on-demand movies into a single $15/month service, whereas stacking Netflix, Hulu, and YouTube TV costs over $120/month.</strong> For users who want both live events and movie libraries without "subscription fatigue," IPTV offers the most complete solution.
                            </p>
                        </div>

                        <p className="text-xl text-muted-foreground mb-4">
                            <strong>Paying $100+/month for standard streaming apps?</strong> You are overpaying.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8">
                            We compared IPTV with popular streaming services (Netflix, Hulu, Disney+, YouTube TV) to show you how to get <strong>live TV + on-demand content for 10x less</strong>.
                        </p>
                    </div>

                    {/* Table of Contents */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <div className="p-6 border-2 rounded-xl bg-muted/30">
                            <h2 className="font-bold text-xl mb-4">📋 Table of Contents</h2>
                            <nav className="space-y-2">
                                <Link href="#problem" className="block text-sm hover:text-primary transition-colors">→ The Streaming Subscription Problem</Link>
                                <Link href="#solution" className="block text-sm hover:text-primary transition-colors">→ The IPTV Solution</Link>
                                <Link href="#comparison" className="block text-sm hover:text-primary transition-colors">→ Detailed Comparison</Link>
                                <Link href="#use-cases" className="block text-sm hover:text-primary transition-colors">→ Which is Better for You?</Link>
                                <Link href="#faq" className="block text-sm hover:text-primary transition-colors">→ Frequently Asked Questions</Link>
                            </nav>
                        </div>
                    </section>

                    {/* The Problem */}
                    <section id="problem" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">The "Streamflation" Problem</h2>
                        <p className="text-lg mb-6">
                            Recent studies show the average American household now pays for <strong>4.4 streaming services</strong>, with costs rising 24% year-over-year (Source: <a href="https://www.deloitte.com/us/en/insights/industry/technology/digital-media-trends-consumption-habits-survey.html" target="_blank" rel="nofollow noreferrer" className="text-primary hover:underline">Deloitte Digital Media Trends</a>).
                        </p>

                        <div className="space-y-3 mb-6">
                            {[
                                { service: "Netflix (Standard)", price: "$15.49/month", content: "Movies & shows (no live TV)" },
                                { service: "Hulu (No Ads)", price: "$17.99/month", content: "Shows & limited live TV" },
                                { service: "Disney+ (Premium)", price: "$13.99/month", content: "Disney content only" },
                                { service: "YouTube TV", price: "$72.99/month", content: "Live TV channels" },
                            ].map((item) => (
                                <div key={item.service} className="flex justify-between items-center p-4 border rounded-lg">
                                    <div>
                                        <div className="font-semibold">{item.service}</div>
                                        <div className="text-sm text-muted-foreground">{item.content}</div>
                                    </div>
                                    <div className="font-bold text-red-600">{item.price}</div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-xl">
                            <div className="text-center">
                                <div className="text-sm text-muted-foreground mb-2">Total Monthly Bundle:</div>
                                <div className="text-4xl font-bold text-red-600 mb-2">~$120.46</div>
                                <div className="text-sm text-muted-foreground">over $1,400/year for fragmented content</div>
                            </div>
                        </div>
                    </section>

                    {/* The Solution */}
                    <section id="solution" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-6">The IPTV Solution</h2>

                        <p className="text-lg mb-6">
                            <strong>One IPTV subscription replaces all of them:</strong>
                        </p>

                        <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-xl mb-6">
                            <div className="text-center mb-6">
                                <div className="text-sm text-muted-foreground mb-2">IPTV Monthly Cost:</div>
                                <div className="text-4xl font-bold text-green-600 mb-2">$15.99</div>
                                <div className="text-sm text-muted-foreground">Everything in one place</div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <h3 className="font-semibold mb-3">What You Get:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>20,000+ live TV channels</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>50,000+ movies & shows (VOD)</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>150+ sports channels</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>All news channels (CNN, Fox, MSNBC)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-semibold mb-3">Replaces:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Netflix (VOD content)</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Hulu (shows + live TV)</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Disney+ (movies & shows)</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>YouTube TV (live channels)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20">
                            <h3 className="font-bold text-xl mb-3 text-center">Annual Savings with IPTV</h3>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">~$1,250</div>
                                <p className="text-sm text-muted-foreground">per year by consolidating subscriptions</p>
                            </div>
                        </div>
                    </section>

                    {/* Detailed Comparison */}
                    <section id="comparison" className="mb-16 max-w-4xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Detailed Comparison</h2>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="text-left p-4 font-bold">Feature</th>
                                        <th className="text-center p-4 font-bold bg-primary/10">IPTV</th>
                                        <th className="text-center p-4 font-bold">Netflix</th>
                                        <th className="text-center p-4 font-bold">Hulu + Live TV</th>
                                        <th className="text-center p-4 font-bold">YouTube TV</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Monthly Cost</td>
                                        <td className="text-center p-4 bg-primary/5 font-semibold text-green-600">$15.99</td>
                                        <td className="text-center p-4">$15.49</td>
                                        <td className="text-center p-4">$76.99</td>
                                        <td className="text-center p-4">$72.99</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Live TV Channels</td>
                                        <td className="text-center p-4 bg-primary/5 font-semibold text-green-600">20,000+</td>
                                        <td className="text-center p-4">❌ None</td>
                                        <td className="text-center p-4">90+</td>
                                        <td className="text-center p-4">100+</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">VOD Content</td>
                                        <td className="text-center p-4 bg-primary/5">✅ 50,000+</td>
                                        <td className="text-center p-4">✅ Large library</td>
                                        <td className="text-center p-4">✅ Included</td>
                                        <td className="text-center p-4">⚠️ Limited</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Sports Channels</td>
                                        <td className="text-center p-4 bg-primary/5 font-semibold text-green-600">150+</td>
                                        <td className="text-center p-4">❌ None</td>
                                        <td className="text-center p-4">30+</td>
                                        <td className="text-center p-4">35+</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">News Channels</td>
                                        <td className="text-center p-4 bg-primary/5">✅ All major</td>
                                        <td className="text-center p-4">❌ None</td>
                                        <td className="text-center p-4">✅ Included</td>
                                        <td className="text-center p-4">✅ Included</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">International Content</td>
                                        <td className="text-center p-4 bg-primary/5 font-semibold text-green-600">10,000+ channels</td>
                                        <td className="text-center p-4">⚠️ Limited</td>
                                        <td className="text-center p-4">⚠️ Limited</td>
                                        <td className="text-center p-4">❌ Minimal</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-medium">Simultaneous Streams</td>
                                        <td className="text-center p-4 bg-primary/5">5</td>
                                        <td className="text-center p-4">2-4</td>
                                        <td className="text-center p-4">2</td>
                                        <td className="text-center p-4">3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Use Cases */}
                    <section id="use-cases" className="mb-16 max-w-3xl mx-auto scroll-mt-20">
                        <h2 className="font-headline text-3xl font-bold mb-8">Which is Better for You?</h2>

                        <div className="space-y-6">
                            <div className="border-2 border-primary/20 rounded-xl p-6">
                                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                    <Tv className="h-6 w-6 text-primary" />
                                    Choose IPTV if you want:
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Live TV channels (news, sports, entertainment)",
                                        "Sports coverage (NFL, NBA, Premier League, UFC)",
                                        "International content from 150+ countries",
                                        "Everything in one subscription",
                                        "Save $1,500+ per year",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-2 border-muted rounded-xl p-6">
                                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                    <DollarSign className="h-6 w-6 text-muted-foreground" />
                                    Choose Streaming Services if you:
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Only watch on-demand content (no live TV needed)",
                                        "Don't watch sports or news",
                                        "Prefer Netflix's original content exclusively",
                                        "Don't mind paying for multiple subscriptions",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <XCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Best of Both Worlds */}
                    <section className="mb-16 max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20">
                        <h2 className="font-headline text-2xl font-bold mb-4 text-center">💡 Pro Tip: Best of Both Worlds</h2>
                        <p className="text-center mb-6">
                            Get IPTV ($15.99/month) for live TV and sports, plus keep Netflix ($15.49/month) for exclusive originals.
                        </p>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">$31.48/month</div>
                            <p className="text-sm text-muted-foreground mb-4">vs $120+/month for standard bundles</p>
                            <p className="font-semibold text-green-600">Save ~$90/month ($1,080/year)</p>
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
                        <h2 className="font-headline text-3xl font-bold mb-4 text-center">Ready to Simplify Your Streaming?</h2>
                        <p className="text-center text-lg mb-6">
                            Get <strong>live TV + on-demand content</strong> for less than the cost of Netflix Premium.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button asChild size="lg">
                                <Link href="/pricing">Start Your 7-Day Trial</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/blog/best-iptv-provider-2025">Compare Top Providers</Link>
                            </Button>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <h2 className="font-headline text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/blog/iptv-vs-cable-tv" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">⚖️ IPTV vs Cable TV</h3>
                                <p className="text-sm text-muted-foreground">Complete comparison</p>
                            </Link>
                            <Link href="/blog/best-iptv-provider-2025" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🏆 Best IPTV Provider 2025</h3>
                                <p className="text-sm text-muted-foreground">Top 5 providers</p>
                            </Link>
                            <Link href="/iptv-guide" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">📚 Complete IPTV Guide</h3>
                                <p className="text-sm text-muted-foreground">Everything about IPTV</p>
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
                                    Our team has been analyzing streaming services and IPTV providers since 2018. We've helped thousands of cord-cutters save money by finding the right balance between IPTV and traditional streaming services.
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                    Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • Published: January 1, 2025
                                </p>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
            {/* 
            TECHNICAL SEO RECOMMENDATIONS:
            1. Schema Markup: 
               - ArticleSchema: Implemented
               - FAQPage: Implemented
               - BreadcrumbList: Implemented
            
            2. Meta Tags:
               - Title: "IPTV vs Streaming Services 2025: Netflix, Hulu..."
               - Description: "Comparison of cost, channels, quality..."
               - Keywords: "iptv vs netflix", "iptv vs hulu", "cord cutting 2025"
               - Canonical: Self-referencing
            
            3. Internal Linking:
               - Linked to /pricing
               - Linked to /blog/best-iptv-provider-2025
               - Linked to /iptv-guide
            */}
        </>
    );
}
