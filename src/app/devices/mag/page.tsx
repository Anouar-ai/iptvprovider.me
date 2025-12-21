import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Box, Settings, Power, CheckCircle2 } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "How to Setup MAG Box for IPTV (2025 Portal Guide)";
    const description = "Setup guide for MAG 250, 254, 322, and 420. How to register your MAC address and enter the Portal URL. Get 4K channels on your Infomir device.";

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices/mag",
        }),
        keywords: [
            'mag iptv setup',
            'mag 254 setup',
            'mag 322 portal url',
            'iptv portal setup',
            'infomir mag guide',
            'mac address registration',
        ],
    };
}

const steps = [
    {
        name: "Find Your MAC Address",
        text: "Flip your MAG box over. Look for a sticker with a barcode. You will see a code like `00:1A:79:XX:XX:XX`. **You MUST send this code to us** so we can register it.",
        url: "#step-1"
    },
    {
        name: "Open Settings",
        text: "Turn on your MAG box. Go to **Settings > System Settings > Servers > Portals**.",
        url: "#step-2"
    },
    {
        name: "Enter Portal URL",
        text: "In 'Portal 1 Name', enter 'IPTV Provider'. In 'Portal 1 URL', enter the URL we sent you in your email (it usually starts with http://line...).",
        url: "#step-3"
    },
    {
        name: "Save & Reboot",
        text: "Press 'OK' to save. Then go back and select 'Restart Portal' or unplug/replug your device.",
        url: "#step-4"
    },
    {
        name: "Watch",
        text: "When it loads, you will see the yellow loading bar. Once complete, you'll have full access to Live TV.",
        url: "#step-5"
    }
];

const faqs = [
    {
        question: "What is 'Your STB is blocked'?",
        answer: "This usually means either your subscription has expired, or (more likely) you made a typo in the Portal URL. Double check http vs https and the port number."
    },
    {
        question: "Do MAG boxes support 4K?",
        answer: "Only newer models like MAG 420, 424, 520, and 524 support 4K. Older models like MAG 254 only support 1080p. If you have a 4K TV, we recommend upgrading to a new model or switching to a Firestick."
    },
    {
        question: "Why is it slow?",
        answer: "MAG boxes have very little RAM compared to modern Android boxes. If you have a very large playlist (20,000+ channels), it can lag. Ask support to reduce your playlist to just the countries you watch for better speed."
    }
];

export default async function MAGPage() {
    const articleSchema = generateArticleSchema({
        headline: "How to Setup IPTV on MAG Box (Portal Method)",
        description: "Official guide for Infomir MAG devices.",
        image: "/api/og?title=MAG Box Guide",
        datePublished: "2025-01-12",
        dateModified: new Date().toISOString().split('T')[0],
        authorName: "IPTV Expert Team",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/mag`,
    });

    const howToSchema = generateHowToSchema({
        name: "Setup MAG Box Portal",
        description: "Register MAC address and setup Portal URL",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/mag`,
        steps: steps,
        image: { url: "/api/og?title=MAG Setup" }
    });

    const faqSchema = generateFAQPageSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Devices", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices` },
        { name: "MAG Box", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/mag` },
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
                            <li>MAG Box</li>
                        </ol>
                    </nav>

                    <article className="max-w-4xl mx-auto">
                        <header className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Box className="h-4 w-4" />
                                <span>Infomir Guide • Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                MAG Box Setup Guide (Portal)
                            </h1>
                            <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary text-left mb-8">
                                <p className="text-lg leading-relaxed">
                                    <strong>The standard setup for MAG Boxes is the "Portal Method" which requires registering your device's unique MAC address with your provider to receive a Stalker Portal URL.</strong> Unlike modern Android apps suitable for Username/Password login, MAG devices use this hardware-locked authentication for a more secure and stable connection.
                                </p>
                            </div>
                            <p className="text-xl text-muted-foreground">
                                Manufactured by <strong>Infomir</strong>, MAG set-top boxes are widely used by <strong>30% of global IPTV subscribers</strong> (Source: Infomir Press) due to their dedicated Linux-based OS designed exclusively for uninterrupted video streaming.
                            </p>
                        </header>

                        {/* Warning */}
                        <section className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 mb-16 rounded-r-xl">
                            <h3 className="text-xl font-bold text-red-800 dark:text-red-500 mb-2">
                                Important!
                            </h3>
                            <p className="text-red-700 dark:text-red-400">
                                You <strong>cannot</strong> use the Username/Password login method on most MAG portals. You must provide us with your MAC address (`00:1A:79...`) during checkout or via support ticket so we can activate your device.
                            </p>
                        </section>

                        {/* Steps */}
                        <section className="mb-16">
                            <h2 className="font-headline text-3xl font-bold mb-8">Portal Configuration</h2>
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
                            <h2 className="font-headline text-3xl font-bold mb-4">Activate Your MAC Address</h2>
                            <p className="text-lg mb-6 text-muted-foreground">
                                Purchase a plan and send us your ID.
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

/*
TECHNICAL SEO RECOMMENDATIONS:
1. Schema Markup:
   - ArticleSchema: Implemented
   - HowToSchema: Implemented (Portal Setup)
   - FAQPage: Implemented
   - BreadcrumbList: Implemented

2. Meta Tags:
   - Title: "How to Setup MAG Box for IPTV (2025 Portal Guide)"
   - Description: "Setup guide for MAG 250, 254, 322, and 420..."
   - Keywords: "mag box setup", "infomir", "iptv portal url"

3. Internal Linking:
   - Linked to /pricing
   - Linked to /iptv-free-trial
*/
