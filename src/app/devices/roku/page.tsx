import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateBreadcrumbSchema, generateHowToSchema, generateFAQPageSchema, generateProductSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Tv, MonitorSmartphone, Wifi, CheckCircle2, AlertCircle } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "How to Install IPTV on Roku (2026 Guide) | Web Video Caster Method";
    const description = "Roku doesn't have a native IPTV app. Learn the best workaround to watch IPTV on Roku using Web Video Caster or Screen Mirroring. 5-minute setup guide.";

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices/roku",
        }),
        keywords: [
            'iptv for roku',
            'install iptv on roku',
            'roku iptv app',
            'iptv smarters roku',
            'watch iptv on roku',
            'web video caster roku',
        ],
    };
}

const steps = [
    {
        name: "Install Web Video Caster on Phone",
        text: "Since Roku has no native IPTV apps, download 'Web Video Caster' (free) on your Android or iOS smartphone.",
        url: "#step-1"
    },
    {
        name: "Install Web Video Caster Receiver on Roku",
        text: "Go to the Roku Channel Store on your TV, search for 'Web Video Caster Receiver', and install it.",
        url: "#step-2"
    },
    {
        name: "Setup IPTV in Mobile App",
        text: "Open Web Video Caster on your phone. Tap the 3-line menu -> 'IPTV' -> tap the '+' icon. Enter your M3U URL (provided in your subscription email).",
        url: "#step-3"
    },
    {
        name: "Connect and Cast",
        text: "Tap the 'Cast' icon in the mobile app and select your Roku device. Click on any channel in the mobile app, and it will start playing on your Roku TV!",
        url: "#step-4"
    }
];

const faqs = [
    {
        question: "Is there a native IPTV app for Roku?",
        answer: "No. Roku does not allow 'unverified' IPTV apps like Smarters or TiviMate in its store. The best and most reliable method is using Web Video Caster (guides above) or Screen Mirroring."
    },
    {
        question: "Can I use IPTV Smarters on Roku?",
        answer: "Not directly. A version existed years ago but was removed. To use Smarters, you must install it on your Android phone and use the 'Screen Mirroring' feature to send the display to your Roku."
    },
    {
        question: "Is Web Video Caster free?",
        answer: "Yes, the basic version is free and works perfectly for streaming IPTV to Roku. There is a premium version to remove ads, which we recommend if you use it daily."
    },
];

export default async function RokuPage() {
    const articleSchema = generateArticleSchema({
        headline: "How to Install IPTV on Roku in 2026 (Working Method)",
        description: "Complete guide to watching IPTV on Roku using Web Video Caster workaround.",
        image: "/api/og?title=IPTV on Roku Guide",
        datePublished: "2026-01-10",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/roku`,
    });

    const howToSchema = generateHowToSchema({
        name: "How to Watch IPTV on Roku (Web Video Caster Method)",
        description: "Step-by-step guide to casting IPTV channels to Roku",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/roku`,
        steps: steps,
        image: { url: "/api/og?title=Roku Setup Guide" }
    });

    const faqSchema = generateFAQPageSchema(faqs);

    // Product schema for the service itself being sold on this landing page
    const productSchema = generateProductSchema({
        name: "Roku IPTV Subscription",
        description: "Premium IPTV service compatible with Roku via casting",
        image: "/api/og?title=Roku IPTV",
        price: "16.00",
        ratingValue: "4.7",
        reviewCount: "850"
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
                                <Tv className="h-4 w-4" />
                                <span>Roku Setup Guide • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                How to Watch IPTV on Roku (2026)
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Roku doesn't support native IPTV apps, but don't worry. Here is the <strong>#1 working method</strong> to stream 20,000+ channels on your Roku device in 5 minutes.
                            </p>
                        </header>

                        {/* Warning Box */}
                        <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-6 mb-12 rounded-r-xl">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg text-amber-800 dark:text-amber-500 mb-1">Important Note for Roku Users</h3>
                                    <p className="text-sm text-amber-700 dark:text-amber-400">
                                        Do not waste time looking for "IPTV Smarters" or "TiviMate" in the Roku Channel Store. They do not exist. You MUST use a "Casting" method or "Screen Mirroring". We recommend <strong>Web Video Caster</strong> as the most stable solution.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Steps */}
                        <section className="mb-16">
                            <h2 className="font-headline text-3xl font-bold mb-8">Installation Guide (Web Video Caster Method)</h2>
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

                        {/* Alternative Method */}
                        <section className="mb-16 p-8 bg-muted/30 rounded-xl border-2 border-dashed">
                            <h2 className="font-headline text-2xl font-bold mb-4 flex items-center gap-2">
                                <MonitorSmartphone className="h-6 w-6" /> Alternative: Screen Mirroring
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                If you prefer not to use Web Video Caster, you can simply mirror your phone's screen:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-sm ml-2">
                                <li>Detailed guide: Go to Roku Settings {'>'} System {'>'} Screen Mirroring {'>'} Always Allow.</li>
                                <li>On Android: Open Quick Settings {'>'} Select "Smart View" or "Cast".</li>
                                <li>On iPhone: Open Control Center {'>'} Select "Screen Mirroring".</li>
                                <li>Open IPTV Smarters on your phone and it will show on your TV!</li>
                            </ol>
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
                            <h2 className="font-headline text-3xl font-bold mb-4">Get the Best Roku IPTV Subscription</h2>
                            <p className="text-lg mb-6 text-muted-foreground">
                                Our service is perfectly optimized for casting to Roku. Try it today risk-free.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button asChild size="lg">
                                    <Link href="/pricing">View Roku Plans</Link>
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
