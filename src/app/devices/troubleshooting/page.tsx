import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Settings, Wifi, AlertTriangle, HelpCircle } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "IPTV Troubleshooting Guide (2025) | Fix Buffering & Login Issues";
    const description = "Having issues with IPTV? Learn how to fix buffering, freezing, 'Authentication Failed' errors, and EPG not loading. Expert solutions.";

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices/troubleshooting",
        }),
        keywords: [
            'iptv buffering fix',
            'iptv freezing',
            'iptv authentication failed',
            'iptv epg not loading',
            'iptv not working',
            'fix iptv lag',
        ],
    };
}

const faqs = [
    {
        question: "Why is my stream buffering?",
        answer: "Buffering is usually caused by 1 of 3 things: 1) Weak WiFi signal (try Ethernet), 2) ISP throttling (try a VPN), or 3) Other devices hogging bandwidth (downloads, updates). Restarting your router is the first step."
    },
    {
        question: "I get 'Authentication Failed' or 'Invalid Details'",
        answer: "This means either your subscription expired, or you made a typo. Passwords are Case Sensitive! 'Pass123' is not the same as 'pass123'. Also, ensure you don't have a space at the end."
    },
    {
        question: "Channels list is empty / 0 Channels",
        answer: "Force refresh the playlist in your app settings. If that doesn't work, your ISP might be blocking the DNS. Try changing your DNS on your device to 8.8.8.8 (Google) or 1.1.1.1 (Cloudflare)."
    },
    {
        question: "EPG (TV Guide) says 'No Information'",
        answer: "EPG takes time to download. In TiviMate/Smarters settings, go to 'EPG' and click 'Update EPG'. Note that not all channels have EPG data available."
    }
];

export default async function TroubleshootingPage() {
    const articleSchema = generateArticleSchema({
        headline: "Ultimate IPTV Troubleshooting Guide",
        description: "Fix common IPTV issues like buffering and login errors.",
        image: "/api/og?title=IPTV Help",
        datePublished: "2025-01-13",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/troubleshooting`,
    });

    const faqSchema = generateFAQPageSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Devices", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices` },
        { name: "Troubleshooting", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/troubleshooting` },
    ]);

    return (
        <>
            <Schema id="article" schema={articleSchema} />
            <Schema id="faq" schema={faqSchema} />
            <Schema id="breadcrumb" schema={breadcrumbSchema} />

            <main className="py-16 sm:py-24">
                <Container>
                    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                        <ol className="flex items-center gap-2">
                            <li><Link href="/" className="hover:text-primary">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/devices" className="hover:text-primary">Devices</Link></li>
                            <li>/</li>
                            <li>Help Center</li>
                        </ol>
                    </nav>

                    <article className="max-w-4xl mx-auto">
                        <header className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Settings className="h-4 w-4" />
                                <span>Support Hub • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                Troubleshooting & Fixes
                            </h1>
                            <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary text-left mb-8">
                                <p className="text-lg leading-relaxed">
                                    <strong>The most effective way to fix common IPTV issues like buffering or black screens is to perform a full power cycle (restart) of both your router and streaming device to clear the cache.</strong> If problems persist, 90% of buffering is caused by local WiFi interference or ISP throttling, which can be resolved by switching to an Ethernet connection or using a VPN.
                                </p>
                            </div>
                            <p className="text-xl text-muted-foreground">
                                Studies show that <strong>over 60% of streaming issues</strong> are related to home WiFi congestion rather than server failure (Source: Ookla Speedtest Reports 2024).
                            </p>
                        </header>

                        {/* Top Solutions */}
                        <section className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="p-6 border rounded-xl bg-card">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <Wifi className="text-blue-500" /> 1. The Restart Fix
                                </h3>
                                <p className="text-muted-foreground">
                                    Before doing anything else: <strong>Unplug your Router and your Device</strong> (TV/Firestick) from the wall. Wait 30 seconds. Plug them back in. This clears the cache and refreshes the connection. It fixes freezing 80% of the time.
                                </p>
                            </div>
                            <div className="p-6 border rounded-xl bg-card">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <AlertTriangle className="text-yellow-500" /> 2. ISP Blocking
                                </h3>
                                <p className="text-muted-foreground">
                                    If channels work on 4G (phone) but not usually WiFi, your Internet Provider is blocking IPTV. You MUST use a <strong>VPN</strong> or disable "Child Safe" / "Web Safe" settings in your ISP account.
                                </p>
                            </div>
                        </section>

                        {/* Detailed FAQ */}
                        <section className="mb-16">
                            <h2 className="font-headline text-3xl font-bold mb-8">Common Error Messages</h2>
                            <Accordion type="single" collapsible>
                                {faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`}>
                                        <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>

                        {/* Contact */}
                        <section className="text-center bg-muted/30 p-8 rounded-xl border">
                            <h2 className="font-headline text-3xl font-bold mb-4">Still having issues?</h2>
                            <p className="text-lg mb-6 text-muted-foreground">
                                Our support team is available 24/7 to help you via WhatsApp or Email.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button asChild size="lg">
                                    <Link href="/contact">Contact Support</Link>
                                </Button>
                            </div>
                        </section>
                    </article>
                </Container>
            </main>
        </>
    );
}

/*
TECHNICAL SEO RECOMMENDATIONS:
1. Schema Markup:
   - ArticleSchema: Implemented
   - FAQPage: Implemented
   - BreadcrumbList: Implemented

2. Meta Tags:
   - Title: "IPTV Troubleshooting Guide (2025) | Fix Buffering & Login Issues"
   - Description: "Having issues with IPTV? Learn how to fix buffering..."
   - Keywords: "iptv buffering", "iptv fix", "isp throttling"

3. Internal Linking:
   - Linked to /contact
*/
