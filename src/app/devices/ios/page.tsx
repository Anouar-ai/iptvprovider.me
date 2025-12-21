import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Smartphone, Apple, AppWindow, Play } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "How to Watch IPTV on iPhone & iPad (2025 iOS Guide)";
    const description = "The best IPTV apps for iOS. Install IPTV Smarters, GSE Smart IPTV, or iPlayTV on your iPhone or iPad. No jailbreak required.";

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices/ios",
        }),
        keywords: [
            'iptv iphone',
            'iptv ipad',
            'gse smart iptv ios',
            'iptv smarters ios',
            '247 iptv ios',
            'watch tv on iphone',
        ],
    };
}

const steps = [
    {
        name: "Download 'GSE Smart IPTV' or 'Smarters Lite'",
        text: "Open the Apple App Store. Search for **'GSE Smart IPTV'** (Recommended) or **'IPTV Smarters Player Lite'**. Both are safe and do not require jailbreaking.",
        url: "#step-1"
    },
    {
        name: "Add New Playlist",
        text: "Open the app. Look for the '+' button to add a playlist. Select **'Xtream Codes API'** (this is usually the best option).",
        url: "#step-2"
    },
    {
        name: "Enter Login Details",
        text: "Input the Playlist Name (any name), Server URL, Username, and Password sent to you in your welcome email.",
        url: "#step-3"
    },
    {
        name: "Load Channels",
        text: "Tap 'Login' or 'Add'. The app will take 10-20 seconds to download your channel list and EPG.",
        url: "#step-4"
    },
    {
        name: "Start Watching",
        text: "Browse by category (Sports, Movies, UK, USA) and tap to play. Using high-efficiency format (HLS) works best on LTE/5G.",
        url: "#step-5"
    }
];

const faqs = [
    {
        question: "Does Apple allow IPTV apps?",
        answer: "Yes, 'Player' apps like GSE and Smarters are 100% legal and allowed on the App Store because they don't contain any content themselves. You provide the content via your subscription with us."
    },
    {
        question: "Can I AirPlay to my TV?",
        answer: "Yes! Most iOS IPTV apps support AirPlay. You can start a movie on your iPhone and cast it directly to your Apple TV or AirPlay 2 compatible Smart TV."
    },
    {
        question: "Will it drain my battery?",
        answer: "Streaming HD video is intensive. We recommend reducing the brightness or using WiFi to save battery. On 5G, you can expect about 15-20% drain per hour of watching."
    },
];

export default async function iOSPage() {
    const articleSchema = generateArticleSchema({
        headline: "How to Watch IPTV on iPhone and iPad",
        description: "Guide to GSE Smart IPTV and Smarters on iOS.",
        image: "/api/og?title=iOS IPTV Guide",
        datePublished: "2025-01-09",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/ios`,
    });

    const howToSchema = generateHowToSchema({
        name: "Install IPTV on iPhone",
        description: "Setup GSE Smart IPTV on iOS",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/ios`,
        steps: steps,
        image: { url: "/api/og?title=iOS Setup" }
    });

    const faqSchema = generateFAQPageSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Devices", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices` },
        { name: "iOS", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/ios` },
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
                            <li>iOS (iPhone/iPad)</li>
                        </ol>
                    </nav>

                    <article className="max-w-4xl mx-auto">
                        <header className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Apple className="h-4 w-4" />
                                <span>iOS Guide • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                Watch IPTV on Your iPhone or iPad
                            </h1>
                            <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary text-left mb-8">
                                <p className="text-lg leading-relaxed">
                                    <strong>The best way to watch IPTV on iPhone or iPad is to use the "GSE Smart IPTV" or "IPTV Smarters Lite" app from the Apple App Store.</strong> These apps are verified by Apple for security and support the efficient HLS streaming protocol used by premium providers, ensuring smooth playback on mobile networks.
                                </p>
                            </div>
                            <p className="text-xl text-muted-foreground">
                                With over <strong>1 billion active iPhones</strong> (Source: Apple Earnings 2024), iOS is the most secure platform for IPTV, as all apps are strictly vetted against malware unlike open Android marketplaces.
                            </p>
                        </header>

                        {/* Steps */}
                        <section className="mb-16">
                            <h2 className="font-headline text-3xl font-bold mb-8">Setup Instructions (GSE Smart IPTV)</h2>
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

                        {/* Warning */}
                        <section className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 mb-16 rounded-r-xl">
                            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-500 mb-2">
                                Tip: Use "Movies" Mode
                            </h3>
                            <p className="text-blue-700 dark:text-blue-400">
                                Most iOS apps sort content into "Live TV", "Movies", and "Series". If you want to binge-watch a show, use the VOD (Video on Demand) section for Netflix-style playback with pause/rewind.
                            </p>
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
                            <h2 className="font-headline text-3xl font-bold mb-4">Get Mobile Access</h2>
                            <p className="text-lg mb-6 text-muted-foreground">
                                Watch anywhere in the world.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button asChild size="lg">
                                    <Link href="/pricing">View Plans</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="/iptv-free-trial">Free Trial</Link>
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
   - HowToSchema: Implemented (GSE Setup)
   - FAQPage: Implemented
   - BreadcrumbList: Implemented

2. Meta Tags:
   - Title: "How to Watch IPTV on iPhone & iPad (2025 iOS Guide)"
   - Description: "The best IPTV apps for iOS..."
   - Keywords: "iptv iphone", "gse smart iptv", "iptv smarters ios"

3. Internal Linking:
   - Linked to /pricing
   - Linked to /iptv-free-trial
*/
