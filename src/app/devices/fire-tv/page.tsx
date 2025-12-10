import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateProductSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Flame, Download, Settings, Tv, AlertTriangle } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "How to Install IPTV on Firestick (2026) | Easy 2-Minute Guide";
    const description = "The ultimate guide to installing IPTV on Amazon Fire TV Stick 4K & Max. Step-by-step sideloading instructions using Downloader. No buffering.";

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices/fire-tv",
        }),
        keywords: [
            'iptv firestick',
            'install iptv fire tv',
            'sideload iptv firestick',
            'downloader app firestick',
            'iptv smarters firestick',
            'tivimate firestick',
            'watch live tv firestick',
        ],
    };
}

const steps = [
    {
        name: "Enable Developer Options",
        text: "Go to Settings > My Fire TV > About. Click 'Fire TV Stick' 7 times quickly until it says 'You are a developer'. Then go back, open Developer Options, and turn ON 'Apps from Unknown Sources'.",
        url: "#step-1"
    },
    {
        name: "Install 'Downloader'",
        text: "Go to the Home screen, click Search, type 'Downloader', and install the orange app by AFTVnews.",
        url: "#step-2"
    },
    {
        name: "Download IPTV Smarters Pro",
        text: "Open Downloader. In the URL bar, type this code: **78522** (or iptvsmarters.com/smarters.apk) and click Go. The app will download.",
        url: "#step-3"
    },
    {
        name: "Install & Log In",
        text: "Click Install. Open the app. Select 'Login with Xtream Codes API'. Enter the details from your subscription email (Server URL, Username, Password).",
        url: "#step-4"
    },
    {
        name: "Watch in 4K",
        text: "Click 'Add User'. Browse 20,000+ channels and start streaming immediately!",
        url: "#step-5"
    }
];

const faqs = [
    {
        question: "Is it safe to unlock Developer Options?",
        answer: "Yes, absolutely. 'Jailbreaking' a Firestick just means enabling the ability to install apps not found in the Amazon App Store (like IPTV Smarters). It does not void your warranty or damage the device."
    },
    {
        question: "Which Firestick is best for IPTV?",
        answer: "We strongly recommend the 'Fire TV Stick 4K Max'. It has a faster processor and more WiFi bandwidth (WiFi 6), which significantly reduces buffering compared to the older 'Lite' models."
    },
    {
        question: "Do I need a VPN on Firestick?",
        answer: "If you are in the UK or USA, yes. ISPs like Virgin, BT, AT&T, and Verizon often throttle IPTV traffic. Installing a VPN directly on your Firestick (available in the App Store) prevents this."
    },
];

export default async function FireTVPage() {
    const articleSchema = generateArticleSchema({
        headline: "How to Install IPTV on Amazon Firestick in 2026",
        description: "Complete guide to sideloading IPTV apps on Fire TV.",
        image: "/api/og?title=Firestick IPTV Guide",
        datePublished: "2026-01-05",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/fire-tv`,
    });

    const howToSchema = generateHowToSchema({
        name: "Install IPTV on Fire TV Stick",
        description: "Sideload IPTV Smarters on Firestick",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/fire-tv`,
        steps: steps,
        image: { url: "/api/og?title=Firestick Setup" }
    });

    const faqSchema = generateFAQPageSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Devices", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices` },
        { name: "Fire TV", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/fire-tv` },
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
                            <li>Fire TV</li>
                        </ol>
                    </nav>

                    <article className="max-w-4xl mx-auto">
                        <header className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Flame className="h-4 w-4" />
                                <span>#1 Streaming Device • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                The Ultimate Firestick IPTV Setup Guide
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Amazon Firestick is the king of IPTV. Unlock its full potential with our easy "Downloader" method.
                            </p>
                        </header>

                        {/* App Choice */}
                        <section className="mb-16 grid md:grid-cols-2 gap-8">
                            <div className="border-2 border-primary/20 bg-primary/5 rounded-xl p-8 flex flex-col items-center text-center">
                                <h3 className="text-2xl font-bold mb-2">IPTV Smarters Pro</h3>
                                <p className="text-muted-foreground mb-4">Best for beginners. Free, easy to use, and nice interface.</p>
                                <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">Recommended</span>
                            </div>
                            <div className="border rounded-xl p-8 flex flex-col items-center text-center bg-card">
                                <h3 className="text-2xl font-bold mb-2">TiviMate Premium</h3>
                                <p className="text-muted-foreground mb-4">The absolute best quality. Requires a small paid license but worth it for the DVR.</p>
                                <span className="inline-block bg-muted text-muted-foreground text-xs font-bold px-2 py-1 rounded">Advanced</span>
                            </div>
                        </section>

                        {/* Steps */}
                        <section className="mb-16">
                            <h2 className="font-headline text-3xl font-bold mb-8">Installation Instructions</h2>
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

                        {/* Troubleshooting Box */}
                        <section className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-400 p-6 mb-16 rounded-r-xl">
                            <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-500 mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Common Issue: "App Not Installed"
                            </h3>
                            <p className="text-yellow-700 dark:text-yellow-400">
                                If you get an error when installing, it usually means your Firestick is almost full.
                                Go to <strong>Settings &gt; Applications &gt; Manage Installed Applications</strong> and delete unused apps to free up at least 200MB of space.
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
                            <h2 className="font-headline text-3xl font-bold mb-4">Ready to Stream?</h2>
                            <p className="text-lg mb-6 text-muted-foreground">
                                Get your login details instantly.
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
