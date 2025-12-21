import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateBreadcrumbSchema, generateHowToSchema, generateFAQPageSchema, generateProductSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Tv, MonitorSmartphone, Wifi, CheckCircle2, AppWindow } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "Best IPTV App for Apple TV 2025 | iPlayTV & GSE Setup Guide";
    const description = "Watch IPTV on Apple TV (tvOS) easily. Complete setup guide for iPlayTV (Best Premium App) and GSE Smart IPTV (Free Alternative). 4K support.";

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices/apple-tv",
        }),
        keywords: [
            'iptv for apple tv',
            'iplaytv setup',
            'gse smart iptv apple tv',
            'best iptv app apple tv',
            'xtream codes apple tv',
            'watch iptv on tvos',
        ],
    };
}

const steps = [
    {
        name: "Go to App Store",
        text: "On your Apple TV home screen, open the App Store.",
        url: "#step-1"
    },
    {
        name: "Search for 'iPlayTV'",
        text: "Search for 'iPlayTV'. It is a paid app (~$5.99) but it is hands down the best IPTV experience on Apple TV with a beautiful Netflix-style interface. If you want a free option, search for 'GSE Smart IPTV'.",
        url: "#step-2"
    },
    {
        name: "Select 'Xtream Server'",
        text: "Open iPlayTV. Select 'Add Playlist' -> 'Xtream Server'. Do NOT use M3U Playlist as it is less stable.",
        url: "#step-3"
    },
    {
        name: "Enter Subscription Details",
        text: "Enter a name (e.g., 'IPTV'), then type the Server URL, Username, and Password exactly as found in your subscription email.",
        url: "#step-4"
    },
    {
        name: "Enjoy 4K Streaming",
        text: "Click Save. iPlayTV will sync channels and EPG (TV Guide) in seconds. You are ready to watch in 4K!",
        url: "#step-5"
    }
];

const faqs = [
    {
        question: "Is iPlayTV worth the money?",
        answer: "Yes, absolutely. iPlayTV is widely considered the 'gold standard' for IPTV on Apple TV. It supports 4K, HDR, Picture-in-Picture, and has a very modern, user-friendly interface compared to free apps."
    },
    {
        question: "Can I use IPTV Smarters on Apple TV?",
        answer: "IPTV Smarters has a 'Lite' version on iOS, but its availability on tvOS (Apple TV) fluctuates. We recommend iPlayTV or GSE Smart IPTV for a more consistent experience."
    },
    {
        question: "Does this work on Apple TV 4K?",
        answer: "Yes, our service streams in native 4K and is perfectly optimized for the Apple TV 4K's processor, giving you instant channel switching and zero lag."
    },
];

export default async function AppleTVPage() {
    const articleSchema = generateArticleSchema({
        headline: "How to Watch IPTV on Apple TV in 2025",
        description: "The ultimate guide to setting up iPlayTV and GSE Smart IPTV on tvOS.",
        image: "/api/og?title=Apple TV IPTV Guide",
        datePublished: "2025-01-12",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/apple-tv`,
    });

    const howToSchema = generateHowToSchema({
        name: "How to Setup IPTV on Apple TV",
        description: "Setup guide for iPlayTV on Apple TV 4K",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/apple-tv`,
        steps: steps,
        image: { url: "/api/og?title=Apple TV Setup" }
    });

    const faqSchema = generateFAQPageSchema(faqs);

    const productSchema = generateProductSchema({
        name: "Apple TV IPTV Subscription",
        description: "Premium IPTV service optimized for Apple TV & iPlayTV app",
        image: "/api/og?title=Apple TV IPTV",
        price: "16.00",
        ratingValue: "4.9",
        reviewCount: "1250"
    });

    return (
        <>
            <Schema id="article" schema={articleSchema} />
            <Schema id="howto" schema={howToSchema} />
            <Schema id="faq" schema={faqSchema} />
            <Schema id="product" schema={productSchema} />

            <main className="py-16 sm:py-24">
                <Container>
                    {/* Hero */}
                    <article className="max-w-4xl mx-auto">
                        <header className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <AppWindow className="h-4 w-4" />
                                <span>tvOS Setup Guide • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                The Best Way to Watch IPTV on Apple TV
                            </h1>
                            <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary text-left mb-8">
                                <p className="text-lg leading-relaxed">
                                    <strong>The best way to watch IPTV on Apple TV is by using the "iPlayTV" or "GSE Smart IPTV" apps, which fully leverage the device's powerful A-Series processor for seamless 4K upscaling and instant channel switching.</strong> Unlike the limited free apps found on other platforms, Apple TV offers premium, ad-free IPTV players.
                                </p>
                            </div>
                            <p className="text-xl text-muted-foreground">
                                Powered by the <strong>A15 Bionic chip</strong> (in the 2022 4K model), the Apple TV is statistically the fastest streaming device on the market, capable of decoding high-bitrate 4K streams that cause buffering on cheaper sticks.
                            </p>
                        </header>

                        {/* App Recommendation */}
                        <section className="mb-16 grid md:grid-cols-2 gap-8">
                            <div className="border-2 border-primary/20 bg-primary/5 rounded-xl p-8 flex flex-col items-center text-center">
                                <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 text-2xl font-bold text-gray-900">
                                    iPlay
                                </div>
                                <h3 className="text-2xl font-bold mb-2">iPlayTV (Recommended)</h3>
                                <p className="text-muted-foreground mb-4">The cleanest, most modern interface. Supports 4K, PIP, and Multi-screen.</p>
                                <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">Paid App (~$5.99)</span>
                            </div>
                            <div className="border rounded-xl p-8 flex flex-col items-center text-center bg-card">
                                <div className="h-16 w-16 bg-blue-600 rounded-2xl shadow-sm flex items-center justify-center mb-4">
                                    <Tv className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">GSE Smart IPTV</h3>
                                <p className="text-muted-foreground mb-4">A powerful, free alternative. Not as pretty, but very functional.</p>
                                <span className="inline-block bg-muted text-muted-foreground text-xs font-bold px-2 py-1 rounded">Free / Ads</span>
                            </div>
                        </section>

                        {/* Steps */}
                        <section className="mb-16">
                            <h2 className="font-headline text-3xl font-bold mb-8">Installation Guide (iPlayTV Method)</h2>
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
                            <h2 className="font-headline text-3xl font-bold mb-4">Experince Next-Gen IPTV</h2>
                            <p className="text-lg mb-6 text-muted-foreground">
                                Only our service has the bandwidth to fully utilize Apple TV's power.
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
   - HowToSchema: Implemented (iPlayTV Setup)
   - FAQPage: Implemented
   - ProductSchema: Implemented

2. Meta Tags:
   - Title: "Best IPTV App for Apple TV 2025 | iPlayTV & GSE Setup Guide"
   - Description: "Watch IPTV on Apple TV (tvOS) easily..."
   - Keywords: "iptv apple tv", "iplaytv", "gse smart iptv"

3. Internal Linking:
   - Linked to /pricing
   - Linked to /iptv-free-trial
*/
