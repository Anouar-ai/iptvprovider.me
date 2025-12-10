import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Laptop, Apple, AppWindow } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "How to Watch IPTV on Mac (2026 macOS Guide)";
    const description = "Best IPTV players for MacBook and iMac. Setup guide for IPTV Smarters Pro (Mac version) and GSE Smart IPTV. High-quality streaming.";

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices/macos",
        }),
        keywords: [
            'iptv mac',
            'iptv macos',
            'iptv smarters mac',
            'gse smart iptv mac',
            'watch tv on macbook',
        ],
    };
}

const steps = [
    {
        name: "Download IPTV Smarters",
        text: "Download the Mac version of IPTV Smarters Pro from the official website. It is a `.dmg` file.",
        url: "#step-1"
    },
    {
        name: "Install & Trust",
        text: "Open the .dmg and drag the app to Applications. You might need to go to System Settings > Privacy & Security to allow the app to run.",
        url: "#step-2"
    },
    {
        name: "Enter Xtream Codes",
        text: "Launch the app. Choose 'Login with Xtream Codes API'. Enter the details (URL, User, Pass) from your subscription email.",
        url: "#step-3"
    },
    {
        name: "Watch",
        text: "Enjoy full HD streaming on your Retina display.",
        url: "#step-4"
    }
];

const faqs = [
    {
        question: "Is there a better app than Smarters for Mac?",
        answer: "Currently, IPTV Smarters is the most reliable dedicated app. You can also use 'GSE Smart IPTV' (available on the Mac App Store) or simply use VLC Media Player if you just want to play a stream quickly."
    },
    {
        question: "Does it support M1/M2/M3 chips?",
        answer: "Yes, the latest versions of IPTV Smarters and VLC run natively on Apple Silicon for smooth, battery-efficient performance."
    }
];

export default async function MacOSPage() {
    const articleSchema = generateArticleSchema({
        headline: "How to Watch IPTV on MacBook & iMac",
        description: "Guide to IPTV Smarters on macOS.",
        image: "/api/og?title=Mac IPTV Guide",
        datePublished: "2026-01-11",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/macos`,
    });

    const howToSchema = generateHowToSchema({
        name: "Install IPTV on Mac",
        description: "Setup IPTV Smarters on macOS",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/macos`,
        steps: steps,
        image: { url: "/api/og?title=Mac Setup" }
    });

    const faqSchema = generateFAQPageSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Devices", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices` },
        { name: "macOS", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/macos` },
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
                            <li>macOS</li>
                        </ol>
                    </nav>

                    <article className="max-w-4xl mx-auto">
                        <header className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Apple className="h-4 w-4" />
                                <span>Apple Silicon Optimized • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                Watch IPTV on Your Mac
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Seamless streaming for your MacBook Air, MacBook Pro, or iMac.
                            </p>
                        </header>

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
                            <h2 className="font-headline text-3xl font-bold mb-4">Start Watching</h2>
                            <p className="text-lg mb-6 text-muted-foreground">
                                Instant delivery. No waiting.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button asChild size="lg">
                                    <Link href="/pricing">View Packages</Link>
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
