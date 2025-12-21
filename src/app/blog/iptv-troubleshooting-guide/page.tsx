import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { AlertTriangle, Wifi, Video, Settings, Zap, RefreshCw } from "lucide-react";
import { DirectAnswer } from "@/components/shared/DirectAnswer";
import { Glossary } from "@/components/shared/Glossary";

export function generateMetadata(): Metadata {
    const title = "IPTV Troubleshooting Guide 2025: Fix Buffering, Freezing & Common Issues";
    const description = "Complete IPTV troubleshooting guide. Fix buffering, freezing, login errors, and more. Step-by-step solutions for all common IPTV problems. Updated Jan 2025.";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-troubleshooting-guide`;
    const imageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/api/og?title=${encodeURIComponent('IPTV Troubleshooting Guide')}`;

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/blog/iptv-troubleshooting-guide",
        }),
        title: {
            absolute: title,
        },
        keywords: [
            'iptv troubleshooting',
            'iptv buffering fix',
            'iptv freezing',
            'iptv not working',
            'fix iptv problems',
            'iptv issues',
            'iptv error fix'
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
                alt: 'IPTV Troubleshooting Guide',
            }],
            publishedTime: '2025-01-01T00:00:00Z',
            modifiedTime: new Date().toISOString(),
            authors: ['IPTV Expert Team'],
            section: 'Technology',
            tags: ['IPTV', 'Troubleshooting', 'Fix', 'Guide', 'Support'],
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
        question: "Why does my IPTV keep buffering?",
        answer: "Buffering is usually caused by slow internet speed (need 10+ Mbps for HD, 25+ for 4K), WiFi interference, or server issues. Solutions: Test your internet speed, use wired connection instead of WiFi, close other apps using bandwidth, or contact your provider if the issue persists."
    },
    {
        question: "Why do channels freeze during live sports?",
        answer: "Sports events cause high server load. Solutions: Switch to a backup server (if available in your app), lower video quality temporarily, or upgrade to a premium provider with better infrastructure. Cheap providers ($5-10/month) often freeze during big games."
    },
    {
        question: "How do I fix 'Invalid Credentials' error?",
        answer: "Double-check your username, password, and server URL for typos or extra spaces. Ensure your subscription is active and hasn't expired. If credentials are correct, contact your provider—they may need to reset your account."
    },
    {
        question: "Why is my EPG (TV Guide) not showing?",
        answer: "EPG takes 24 hours to populate after first login. Solutions: Enable EPG in app settings, wait 24 hours, refresh the channel list, or manually update EPG from app settings. Some providers require EPG to be enabled on their website."
    },
    {
        question: "Can I fix buffering without upgrading my internet?",
        answer: "Yes! Try: Using wired Ethernet instead of WiFi, closing background apps, lowering video quality in app settings, restarting your router, or using a VPN to prevent ISP throttling. These often solve buffering without needing faster internet."
    },
    {
        question: "What should I do if IPTV stops working suddenly?",
        answer: "First, check if your subscription expired. Then, test your internet connection. Restart the app and your device. Clear app cache. If still not working, contact your provider's support—there may be server maintenance or account issues."
    },
];

export default async function IPTVTroubleshooting() {
    const articleSchema = generateArticleSchema({
        headline: "IPTV Troubleshooting Guide 2025: Fix Common Issues",
        description: "Complete guide to troubleshooting IPTV problems including buffering, freezing, and login errors",
        image: "/api/og?title=IPTV Troubleshooting Guide",
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-troubleshooting-guide`,
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Blog", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog` },
        { name: "IPTV Troubleshooting Guide", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/blog/iptv-troubleshooting-guide` },
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
                            <li>IPTV Troubleshooting Guide</li>
                        </ol>
                    </nav>

                    {/* Hero Section */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <span>🔧 Troubleshooting • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                        </div>
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                            IPTV Troubleshooting Guide 2025
                        </h1>

                        <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary text-left mb-8">
                            <p className="text-lg leading-relaxed">
                                <strong>The primary way to fix most IPTV issues (buffering or freezing) is to switch from a WiFi connection to a wired Ethernet cable, as this eliminates signal interference.</strong> If that isn't possible, restarting your router and clearing the cache of your IPTV application solves 90% of playback problems.
                            </p>
                        </div>

                        <p className="text-xl text-muted-foreground mb-4">
                            <strong>IPTV not working? Buffering? Freezing?</strong> We'll fix it.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8">
                            This complete troubleshooting guide covers <strong>every common IPTV problem</strong> with step-by-step solutions. From buffering and freezing to login errors—we've got you covered.
                        </p>
                    </div>

                    {/* Quick Fixes */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold mb-6">⚡ Quick Fixes (Try These First)</h2>

                        <div className="space-y-3">
                            {[
                                { icon: RefreshCw, title: "Restart the App", desc: "Close and reopen your IPTV app. Fixes 50% of issues." },
                                { icon: Zap, title: "Restart Your Device", desc: "Power off your Fire Stick/TV, wait 30 seconds, power back on." },
                                { icon: Wifi, title: "Check Internet Connection", desc: "Test speed at fast.com. Need 10+ Mbps for HD, 25+ for 4K." },
                                { icon: Settings, title: "Clear App Cache", desc: "Go to app settings → Clear cache/data → Restart app." },
                            ].map((fix, i) => (
                                <div key={i} className="flex gap-4 p-4 border-2 border-primary/20 rounded-lg bg-primary/5">
                                    <fix.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold mb-1">{fix.title}</h3>
                                        <p className="text-sm text-muted-foreground">{fix.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Common Problems */}
                    <section className="mb-16 max-w-4xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Common Problems & Solutions</h2>

                        <Accordion type="single" collapsible className="space-y-4">
                            {/* Buffering */}
                            <AccordionItem value="buffering" className="border-2 rounded-xl px-6">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-3">
                                        <Video className="h-6 w-6 text-red-500" />
                                        <div className="text-left">
                                            <h3 className="font-bold text-lg">Constant Buffering / Freezing</h3>
                                            <p className="text-sm text-muted-foreground">Most common issue</p>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2">Causes:</h4>
                                            <ul className="space-y-1 text-sm text-muted-foreground">
                                                <li>• Slow internet speed (under 10 Mbps)</li>
                                                <li>• WiFi interference or weak signal</li>
                                                <li>• Too many devices using bandwidth</li>
                                                <li>• ISP throttling IPTV traffic</li>
                                                <li>• Server overload (cheap providers)</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-2">Solutions:</h4>
                                            <ol className="space-y-2 text-sm">
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">1.</span>
                                                    <span><strong>Test internet speed</strong> at fast.com. Need 10+ Mbps for HD, 25+ for 4K.</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">2.</span>
                                                    <span><strong>Use wired Ethernet</strong> instead of WiFi. Eliminates WiFi interference.</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">3.</span>
                                                    <span><strong>Close background apps</strong> using bandwidth (Netflix, downloads, etc.).</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">4.</span>
                                                    <span><strong>Lower video quality</strong> in app settings (switch from 4K to HD).</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">5.</span>
                                                    <span><strong>Restart your router</strong>. Unplug for 30 seconds, plug back in.</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">6.</span>
                                                    <span><strong>Use a VPN</strong> to prevent ISP throttling (<Link href="/blog/iptv-vpn-guide" className="text-primary hover:underline">see our VPN guide</Link>).</span>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Login Issues */}
                            <AccordionItem value="login" className="border-2 rounded-xl px-6">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-3">
                                        <AlertTriangle className="h-6 w-6 text-yellow-500" />
                                        <div className="text-left">
                                            <h3 className="font-bold text-lg">Login Failed / Invalid Credentials</h3>
                                            <p className="text-sm text-muted-foreground">Can't access account</p>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2">Solutions:</h4>
                                            <ol className="space-y-2 text-sm">
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">1.</span>
                                                    <span><strong>Check for typos</strong> in username, password, and server URL.</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">2.</span>
                                                    <span><strong>Remove extra spaces</strong> before/after credentials (common copy-paste error).</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">3.</span>
                                                    <span><strong>Verify subscription is active</strong>. Check if payment went through.</span>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Channels Not Loading */}
                            <AccordionItem value="channels" className="border-2 rounded-xl px-6">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-3">
                                        <AlertTriangle className="h-6 w-6 text-orange-500" />
                                        <div className="text-left">
                                            <h3 className="font-bold text-lg">Channels Not Loading / Black Screen</h3>
                                            <p className="text-sm text-muted-foreground">No video playback</p>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2">Solutions:</h4>
                                            <ol className="space-y-2 text-sm">
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">1.</span>
                                                    <span><strong>Wait 10-15 seconds</strong>. Some channels take time to load.</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">2.</span>
                                                    <span><strong>Try a different channel</strong>. If others work, the specific channel may be down.</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">3.</span>
                                                    <span><strong>Change video player</strong> in app settings (try VLC, MX Player, or ExoPlayer).</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold text-primary">4.</span>
                                                    <span><strong>Update channel list</strong>. Go to app settings → Refresh/Update playlist.</span>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* AIO: Glossary */}
                    <section className="mb-16 max-w-3xl mx-auto">
                        <Glossary
                            title="Troubleshooting Dictionary"
                            items={[
                                { term: "ISP Throttling", definition: "When your internet provider intentionally slows down your speed because they detect you are streaming video, causing buffering." },
                                { term: "Packet Loss", definition: "Data getting lost between the server and your device, resulting in skipping frames or freezing." },
                                { term: "Cache", definition: "Temporary data stored by your app. If it gets corrupted, it can cause the app to crash or run slowly. Clearing it often fixes issues." },
                                { term: "Hardware Decoding", definition: "Using your device's dedicated video chip to play streams. It's smoother than 'Software Decoding' but might not support all formats." }
                            ]}
                        />
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
                        <h2 className="font-headline text-3xl font-bold mb-4 text-center">Tired of IPTV Problems?</h2>
                        <p className="text-center text-lg mb-6">
                            Switch to a <strong>reliable provider with 99.8% uptime</strong> and 24/7 support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button asChild size="lg">
                                <Link href="/pricing">Try Our Service Free for 7 Days</Link>
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
                            <Link href="/blog/how-to-setup-iptv" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">📖 How to Setup IPTV</h3>
                                <p className="text-sm text-muted-foreground">Complete setup guide</p>
                            </Link>
                            <Link href="/blog/best-iptv-provider-2025" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🏆 Best IPTV Provider</h3>
                                <p className="text-sm text-muted-foreground">Top 5 comparison</p>
                            </Link>
                            <Link href="/blog/iptv-vpn-guide" className="p-6 border rounded-lg hover:bg-muted transition-colors">
                                <h3 className="font-semibold text-lg mb-2">🔒 IPTV VPN Guide</h3>
                                <p className="text-sm text-muted-foreground">Privacy & Throttling Fixes</p>
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
                                    Our support team has resolved over 10,000 IPTV issues. This troubleshooting guide is based on real customer problems and proven solutions that work.
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                    Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • Published: January 1, 2025
                                </p>
                            </div>
                        </div>
                    </section>
                </Container>
            </main >
            {/* 
            TECHNICAL SEO RECOMMENDATIONS:
            1. Schema Markup: 
               - ArticleSchema: Implemented
               - FAQPage: Implemented
               - BreadcrumbList: Implemented
            
            2. Meta Tags:
               - Title: "IPTV Troubleshooting Guide 2025: Fix Buffering..."
               - Description: "Complete guide to fixing IPTV issues..."
               - Keywords: "iptv buffering", "iptv freezing", "iptv help"
               - Canonical: Self-referencing
            
            3. Internal Linking:
               - Linked to /pricing
               - Linked to /blog/best-iptv-provider-2025
               - Linked to /how-to-setup-iptv
            */}
        </>
    );
}
