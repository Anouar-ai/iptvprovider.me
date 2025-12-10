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
    const title = "How to Watch IPTV on Samsung Smart TV (2026 Guide)";
    const description = "Best IPTV apps for Samsung Tizen OS. Step-by-step setup guide for IBO Player, Set IPTV, and Nanomid. No extra box needed.";

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices/samsung-tv",
        }),
        keywords: [
            'iptv samsung tv',
            'samsung smart iptv',
            'ibo player samsung',
            'set iptv samsung',
            'iptv smarters samsung',
            'tizen iptv',
        ],
    };
}

const steps = [
    {
        name: "Open Samsung App Store",
        text: "On your remote, press Home and navigate to 'Apps'.",
        url: "#step-1"
    },
    {
        name: "Search for 'IBO Player'",
        text: "Search for 'IBO Player' (Recommended) or 'Set IPTV'. Note: 'IPTV Smarters' is often removed from the Samsung store, so we recommend IBO as the most stable alternative.",
        url: "#step-2"
    },
    {
        name: "Get Mac Address",
        text: "Open the app. You will see a 'Device ID' or 'MAC Address' along with a 'Device Key'. Write these down or take a photo.",
        url: "#step-3"
    },
    {
        name: "Upload Playlist via Browser",
        text: "On your phone or PC, go to the IBO Player website (iboplayer.com). Enter your Device ID and Key, then paste the M3U URL from your subscription email.",
        url: "#step-4"
    },
    {
        name: "Restart App",
        text: "Restart the app on your TV. Your channels will now load!",
        url: "#step-5"
    }
];

const faqs = [
    {
        question: "Are these apps free?",
        answer: "Most Samsung IPTV apps (IBO, Set IPTV, Nanomid) offer a 7-day free trial. After that, you must pay a small one-time activation fee (usually €5-€15) to the app developer. This is separate from your IPTV subscription."
    },
    {
        question: "Why can't I find IPTV Smarters?",
        answer: "Samsung frequently removes IPTV Smarters from various regional stores due to copyright complaints. If you can't find it, don't worry—apps like IBO Player are actually faster and support 4K better on Tizen OS."
    },
    {
        question: "My Samsung TV is older (pre-2016). Will it work?",
        answer: "Likely not well. Older Samsung TVs have slow processors that struggle with modern live streams. We highly recommend buying a cheap Amazon Firestick 4K (`$30`) and plugging it into the HDMI port for a much better experience."
    },
];

export default async function SamsungTVPage() {
    const articleSchema = generateArticleSchema({
        headline: "How to Install IPTV on Samsung Smart TV (2026)",
        description: "Guide to IBO Player and Set IPTV on Tizen OS.",
        image: "/api/og?title=Samsung IPTV Guide",
        datePublished: "2026-01-06",
        dateModified: '2026-01-01',
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/samsung-tv`,
    });

    const howToSchema = generateHowToSchema({
        name: "Install IPTV on Samsung TV",
        description: "Setup IBO Player on Samsung Tizen",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/samsung-tv`,
        steps: steps,
        image: { url: "/api/og?title=Samsung Setup" }
    });

    const faqSchema = generateFAQPageSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Devices", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices` },
        { name: "Samsung TV", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/samsung-tv` },
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
                            <li>Samsung TV</li>
                        </ol>
                    </nav>

                    <article className="max-w-4xl mx-auto">
                        <header className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Monitor className="h-4 w-4" />
                                <span>Tizen OS Guide • Updated {'January 2026'}</span>
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                Watch IPTV on Your Samsung Smart TV
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                No messy cables or extra boxes. Use the best native apps for Samsung Tizen to stream in 4K directly.
                            </p>
                        </header>

                        {/* App Recommendation */}
                        <section className="mb-16 bg-muted/30 p-8 rounded-xl border">
                            <h2 className="font-headline text-2xl font-bold mb-6 text-center">Best Native Apps for Samsung</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-2 text-primary">1. IBO Player (Top Pick)</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Fastest loading times and modern interface. Handles large playlists (20k+ channels) easily without crashing.</p>
                                    <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">Excellent 4K Support</span>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-2">2. Set IPTV</h3>
                                    <p className="text-sm text-muted-foreground mb-4">A classic, reliable option. Simple interface but robust connection.</p>
                                </div>
                            </div>
                        </section>

                        {/* Steps */}
                        <section className="mb-16">
                            <h2 className="font-headline text-3xl font-bold mb-8">Setup Guide (IBO Player)</h2>
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
                        <section className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 mb-16 rounded-r-xl">
                            <h3 className="text-xl font-bold text-red-800 dark:text-red-500 mb-2 flex items-center gap-2">
                                <CreditCard className="h-5 w-5" />
                                App Activation Fees
                            </h3>
                            <p className="text-red-700 dark:text-red-400">
                                Please note: We do NOT own IBO Player or Set IPTV. They are 3rd party apps. After their 7-day trial, you must pay them an activation fee (~€8) to keep using the app. This is industry standard for Smart TVs.
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
                            <h2 className="font-headline text-3xl font-bold mb-4">Get Your Playlist Link</h2>
                            <p className="text-lg mb-6 text-muted-foreground">
                                You need an active M3U link to put into the app. Get yours now.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button asChild size="lg">
                                    <Link href="/pricing">Get Subscription</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="/iptv-free-trial">Free 24h Test</Link>
                                </Button>
                            </div>
                        </section>
                    </article>
                </Container>
            </main>
        </>
    );
}
