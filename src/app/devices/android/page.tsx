import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Smartphone, CheckCircle2, Download, Play, Trophy } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "How to Watch IPTV on Android (2025) | TiviMate & Smarters Guide";
    const description = "The best IPTV apps for Android phones, tablets, and TV boxes. Installation guide for TiviMate Premium (the #1 player) and IPTV Smarters Pro.";

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices/android",
        }),
        keywords: [
            'iptv android',
            'tivimate android',
            'iptv smarters android',
            'best iptv player android',
            'watch iptv phone',
            'xtream codes android',
        ],
    };
}

const stepsTiviMate = [
    {
        name: "Download TiviMate",
        text: "Open the Google Play Store on your Android device/box. Search for **'TiviMate IPTV Player'**. There is also a 'Companion' app if you want to pay for premium, but start with the main player.",
        url: "#step-1"
    },
    {
        name: "Open & Add Playlist",
        text: "Launch TiviMate. Select **'Add Playlist'** then choose **'Xtream Codes'** (this is usually the most stable method).",
        url: "#step-2"
    },
    {
        name: "Enter Credentials",
        text: "Enter the Server Address, Username, and Password exactly as they appear in the email we sent you.",
        url: "#step-3"
    },
    {
        name: "Configure EPG (TV Guide)",
        text: "TiviMate will process the playlist. Ensure 'Include VOD' is checked if you want movies. Click 'Next' until you reach the main screen.",
        url: "#step-4"
    },
    {
        name: "Go Premium (Optional but Recommended)",
        text: "The free version works, but 'TiviMate Premium' ($7/year) unlocks Catch-up, multiple playlists, and search. It is highly recommended for the best experience.",
        url: "#step-5"
    }
];

const faqs = [
    {
        question: "Why is TiviMate considered the best?",
        answer: "TiviMate was built specifically for TV remote controls and has a user interface that looks exactly like a high-end cable box. It is faster, cleaner, and more feature-rich (Multi-view, Recording, Catch-up) than any other app."
    },
    {
        question: "Can I watch on my phone while travelling?",
        answer: "Yes! As long as you have an internet connection (WiFi or 4G/5G), you can stream. However, be careful with mobile data—streaming HD video uses about 3GB per hour."
    },
    {
        question: "What about IPTV Smarters?",
        answer: "IPTV Smarters Pro is also an excellent choice, especially for phones/tablets because it has a better touch interface than TiviMate. We recommend Smarters for phones and TiviMate for TV boxes (Nvidia Shield, Chromecast)."
    },
];

export default async function AndroidPage() {
    const articleSchema = generateArticleSchema({
        headline: "How to Install IPTV on Android Devices (2025)",
        description: "Setup guide for TiviMate and Smarters on Android.",
        image: "/api/og?title=Android IPTV Guide",
        datePublished: "2025-01-08",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/android`,
    });

    const howToSchema = generateHowToSchema({
        name: "Install IPTV on Android using TiviMate",
        description: "Setup TiviMate on Android TV",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/android`,
        steps: stepsTiviMate,
        image: { url: "/api/og?title=Android Setup" }
    });

    const faqSchema = generateFAQPageSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Devices", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices` },
        { name: "Android", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/android` },
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
                            <li>Android</li>
                        </ol>
                    </nav>

                    <article className="max-w-4xl mx-auto">
                        <header className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Smartphone className="h-4 w-4" />
                                <span>Android Guide • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                The Best Way to Watch IPTV on Android
                            </h1>
                            <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary text-left mb-8">
                                <p className="text-lg leading-relaxed">
                                    <strong>The best way to watch IPTV on Android is by using TiviMate (for TV boxes) or IPTV Smarters Pro (for phones/tablets), as Android's open ecosystem allows for the most powerful and customizable IPTV players.</strong> Unlike other platforms, Android supports "APK sideloading," giving you access to thousands of streaming apps not found on standard app stores.
                                </p>
                            </div>
                            <p className="text-xl text-muted-foreground">
                                Powering over <strong>70% of the world's mobile devices</strong> (Source: StatCounter 2024), Android is the most versatile platform for IPTV, offering features like multi-screen viewing and background recording that are impossible on closed systems (like Roku).
                            </p>
                        </header>

                        {/* Player Battle */}
                        <section className="mb-16 grid md:grid-cols-2 gap-8">
                            <div className="border-2 border-primary/20 bg-primary/5 rounded-xl p-8 flex flex-col items-center text-center">
                                <div className="h-16 w-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-sm">
                                    TM
                                </div>
                                <h3 className="text-2xl font-bold mb-2">TiviMate (TV Box King)</h3>
                                <p className="text-muted-foreground mb-4">If you use a remote control, use this. Best EPG, recording, and design.</p>
                                <ul className="text-sm space-y-2 mb-4">
                                    <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="h-4 w-4 text-green-600" /> Multi-Screen</li>
                                    <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="h-4 w-4 text-green-600" /> Auto Frame Rate</li>
                                </ul>
                                <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">Best for TV</span>
                            </div>
                            <div className="border rounded-xl p-8 flex flex-col items-center text-center bg-card">
                                <div className="h-16 w-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-sm">
                                    S
                                </div>
                                <h3 className="text-2xl font-bold mb-2">IPTV Smarters (Mobile King)</h3>
                                <p className="text-muted-foreground mb-4">Best touch interface. Perfect for phones and tablets.</p>
                                <span className="inline-block bg-muted text-muted-foreground text-xs font-bold px-2 py-1 rounded">Best for Phone</span>
                            </div>
                        </section>

                        {/* Steps */}
                        <section className="mb-16">
                            <h2 className="font-headline text-3xl font-bold mb-8">Installation Guide (TiviMate Method)</h2>
                            <div className="space-y-6">
                                {stepsTiviMate.map((step, idx) => (
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
                            <h2 className="font-headline text-3xl font-bold mb-4">Start Watching Now</h2>
                            <p className="text-lg mb-6 text-muted-foreground">
                                Instant Setup on Android.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button asChild size="lg">
                                    <Link href="/pricing">Get Started</Link>
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
   - HowToSchema: Implemented (TiviMate Setup)
   - FAQPage: Implemented
   - BreadcrumbList: Implemented

2. Meta Tags:
   - Title: "How to Watch IPTV on Android (2025) | TiviMate & Smarters Guide"
   - Description: "The best IPTV apps for Android phones, tablets, and TV boxes..."
   - Keywords: "iptv android", "tivimate", "android iptv box"

3. Internal Linking:
   - Linked to /pricing
   - Linked to /iptv-free-trial
*/
