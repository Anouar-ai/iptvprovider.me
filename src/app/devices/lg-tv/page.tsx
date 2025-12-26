import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Monitor, CreditCard, Tv, AlertTriangle } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "How to Install IPTV on LG Smart TV (2026 WebOS Guide)";
    const description = "The best IPTV players for LG WebOS. Setup guide for IPTV Smarters Pro (if available) or IBO Player. Watch 4K sports on your OLED TV.";

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices/lg-tv",
        }),
        keywords: [
            'iptv lg',
            'lg webos iptv',
            'iptv smarters lg',
            'best iptv app lg tv',
            'set iptv lg',
            'smart iptv lg',
        ],
    };
}

const steps = [
    {
        name: "Check Content Store",
        text: "Press the 'Home' button on your Magic Remote. Open the 'LG Content Store' (Apps icon).",
        url: "#step-1"
    },
    {
        name: "Search for 'IPTV Smarters'",
        text: "Search for 'IPTV Smarters Pro'. If it appears, GREAT! Install it. It is the best free option. If NOT (which is common in some regions), search for **'IBO Player'** or **'Xciptv'**.",
        url: "#step-2"
    },
    {
        name: "For Smarters (Xtream Codes)",
        text: "If you installed Smarters: Open it, select 'Login with Xtream Codes', and simply enter your Username, Password, and URL from our email.",
        url: "#step-3"
    },
    {
        name: "For IBO Player (Mac Address)",
        text: "If you installed IBO: Open it to see your Device ID and Key. Go to the IBO website on your phone, enter these details, and paste your M3U Playlist URL.",
        url: "#step-4"
    },
    {
        name: "Enjoy OLED Quality",
        text: "Launch the app. LG OLED TVs have the best picture quality for our 4K HDR streams!",
        url: "#step-5"
    }
];

const faqs = [
    {
        question: "Is IPTV Smarters free on LG?",
        answer: "Yes, IPTV Smarters Pro is completely free on LG WebOS. However, LG sometimes removes it from the store. If you can't find it, you will have to use a paid alternative like IBO Player or Set IPTV."
    },
    {
        question: "Does this work on LG WebOS 2.0?",
        answer: "It might run slowly. We recommend WebOS 4.0 or higher (TVs made after 2018) for the best performance. Older LG TVs often run out of memory when loading large channel lists (20k+ channels)."
    },
    {
        question: "Why do I get 'Stream Error'?",
        answer: "This is often due to the TV's WiFi. The WiFi chip in many Smart TVs is weak. Try connecting an Ethernet cable directly from your router to the back of the TV, or get a Firestick for a better WiFi antenna."
    },
];

export default async function LGTVPage() {
    const articleSchema = generateArticleSchema({
        headline: "How to Watch IPTV on LG Smart TV (WebOS)",
        description: "Guide to IPTV Smarters and IBO Player on LG TV.",
        image: "/api/og?title=LG IPTV Guide",
        datePublished: "2026-01-07",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/lg-tv`,
    });

    const howToSchema = generateHowToSchema({
        name: "Install IPTV on LG TV",
        description: "Setup IPTV Smarters or IBO on LG WebOS",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/lg-tv`,
        steps: steps,
        image: { url: "/api/og?title=LG Setup" }
    });

    const faqSchema = generateFAQPageSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Devices", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices` },
        { name: "LG TV", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/lg-tv` },
    ]);

    return (
        <>
            <Schema id="article" schema={articleSchema} />
            <Schema id="howto" schema={howToSchema} />
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
                            <li>LG TV</li>
                        </ol>
                    </nav>

                    <article className="max-w-4xl mx-auto">
                        <header className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Monitor className="h-4 w-4" />
                                <span>WebOS Guide • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                IPTV on LG Smart TV: The Complete Guide
                            </h1>
                            <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary text-left mb-8">
                                <p className="text-lg leading-relaxed">
                                    <strong>The best way to watch IPTV on LG Smart TV is via the native "IPTV Smarters Pro" app available in the LG Content Store, which offers a free and user-friendly interface for WebOS.</strong> If Smarters is unavailable in your region, "IBO Player" is the premier premium alternative for stable 4K streaming on OLED panels.
                                </p>
                            </div>
                            <p className="text-xl text-muted-foreground">
                                LG's WebOS is renowned for its efficiency, and on <strong>OLED models</strong>, it delivers the highest contrast ratio for IPTV streams, making it the preferred choice for movie enthusiasts.
                            </p>
                        </header>

                        {/* App Recommendation */}
                        <section className="mb-16 bg-muted/30 p-8 rounded-xl border">
                            <h2 className="font-headline text-2xl font-bold mb-6 text-center">Recommended LG Apps</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border-2 border-primary/20">
                                    <h3 className="font-bold text-lg mb-2 text-primary">1. IPTV Smarters (Best)</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Free, fast, and supports Xtream Codes login (Username/Password) which is much easier than uploading playlists.</p>
                                    <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">Try This First</span>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-2">2. IBO Player (Alternative)</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Use this if Smarters is not in your store. Very stable but requires a small activation fee after trial.</p>
                                </div>
                            </div>
                        </section>

                        {/* Steps */}
                        <section className="mb-16">
                            <h2 className="font-headline text-3xl font-bold mb-8">Setup Instructions</h2>
                            <div className="space-y-6">
                                {steps.map((step, idx) => (
                                    <div key={idx} className="flex gap-4 p-6 border rounded-xl bg-card">
                                        <div className="flex-shrink-0 h-10 w-10 bg-primary text-primary-foreground font-bold rounded-full flex items-center justify-center">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">{step.name}</h3>
                                            <p className="text-muted-foreground">{step.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section className="mb-16">
                            <h2 className="font-headline text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible>
                                {faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`}>
                                        <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>

                        {/* CTA */}
                        <section className="text-center bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20">
                            <h2 className="font-headline text-3xl font-bold mb-4">Start Streaming in 4K</h2>
                            <p className="text-lg mb-6 text-muted-foreground">
                                Join thousands of happy LG users.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button asChild size="lg">
                                    <Link href="/pricing">View Plans</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="/iptv-free-trial">Start Free Trial</Link>
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
   - HowToSchema: Implemented (LG WebOS Setup)
   - FAQPage: Implemented
   - BreadcrumbList: Implemented

2. Meta Tags:
   - Title: "How to Install IPTV on LG Smart TV (2026 WebOS Guide)"
   - Description: "The best IPTV players for LG WebOS..."
   - Keywords: "iptv lg", "webos iptv", "smart iptv lg"

3. Internal Linking:
   - Linked to /pricing
   - Linked to /iptv-free-trial
*/
