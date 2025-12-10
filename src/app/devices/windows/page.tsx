import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Laptop, AppWindow, Play, CheckCircle2 } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "How to Watch IPTV on Windows PC (2026 Guide)";
    const description = "The best IPTV players for Windows 10 & 11. Setup guide for IPTV Smarters Pro and VLC Media Player. Watch live TV on your laptop.";

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices/windows",
        }),
        keywords: [
            'iptv windows',
            'iptv pc',
            'iptv smarters windows',
            'vlc iptv setup',
            'watch tv on laptop',
        ],
    };
}

const steps = [
    {
        name: "Download IPTV Smarters",
        text: "Download the PC version of IPTV Smarters Pro (or 'Smarters Player Lite') from the official operational website. Alternatively, you can use VLC Media Player.",
        url: "#step-1"
    },
    {
        name: "Login with Xtream Codes",
        text: "Open the app. Select 'Login with Xtream Codes API'. This is much faster than loading a large M3U file.",
        url: "#step-2"
    },
    {
        name: "Enter Your Details",
        text: "Copy and paste the Username, Password, and Server URL from the email we sent you.",
        url: "#step-3"
    },
    {
        name: "Start Streaming",
        text: "Click 'Login'. The dashboard will appear. Click 'Live TV' to browse channels or 'Movies' for VOD.",
        url: "#step-4"
    }
];

const faqs = [
    {
        question: "Is Smarters for Windows free?",
        answer: "Yes, the Windows version is generally free. However, the interface is sometimes a bit outdated compared to the Android version. It still works perfectly for streaming."
    },
    {
        question: "Can I use VLC Media Player?",
        answer: "Yes! Open VLC, press Ctrl+N (Open Network Stream), and paste your M3U link. The downside is there is no TV Guide (EPG) or channel categories—just one long list."
    },
    {
        question: "Why is it buffering?",
        answer: "If you are on WiFi, move closer to the router. PCs also have background updates (Windows Update, Steam) that can hog bandwidth. Pause other downloads while watching."
    },
];

export default async function WindowsPage() {
    const articleSchema = generateArticleSchema({
        headline: "How to Watch IPTV on Windows PC",
        description: "Guide to IPTV Smarters and VLC on Windows.",
        image: "/api/og?title=Windows IPTV Guide",
        datePublished: "2026-01-10",
        dateModified: '2026-01-01',
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/windows`,
    });

    const howToSchema = generateHowToSchema({
        name: "Install IPTV on Windows",
        description: "Setup IPTV Smarters on PC",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/windows`,
        steps: steps,
        image: { url: "/api/og?title=Windows Setup" }
    });

    const faqSchema = generateFAQPageSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Devices", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices` },
        { name: "Windows", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/windows` },
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
                            <li>Windows PC</li>
                        </ol>
                    </nav>

                    <article className="max-w-4xl mx-auto">
                        <header className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Laptop className="h-4 w-4" />
                                <span>PC Guide • Updated {'January 2026'}</span>
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                Watch Live TV on Your Windows PC
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Turn your laptop or desktop into a powerful media center. Perfect for work breaks or second screens.
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
                            <h2 className="font-headline text-3xl font-bold mb-4">Get Started</h2>
                            <p className="text-lg mb-6 text-muted-foreground">
                                Instant activation. No hardware needed.
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
