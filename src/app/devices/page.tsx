import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateCollectionPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { howToArticles } from "@/lib/how-to";
import { Tv, Smartphone, Monitor, Tablet } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "IPTV Setup Guides for All Devices | Fire TV, Android, iOS, Smart TVs";
    const description = "Step-by-step IPTV setup guides for all devices. Learn how to install and configure IPTV on Fire TV Stick, Android, iOS, Smart TVs, and more.";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices`;

    return {
        ...generatePageMetadata({
            title,
            description,
            canonical: "/devices",
        }),
        title: {
            absolute: title,
        },
        keywords: [
            // Device-specific (high priority)
            'IPTV for Firestick', 'IPTV for Fire TV', 'best IPTV app Firestick',
            'IPTV for Android', 'IPTV Android TV', 'Android IPTV player',
            'IPTV for Smart TV', 'IPTV Samsung TV', 'IPTV LG TV',
            'IPTV for iPhone', 'IPTV iOS', 'IPTV for Apple TV',
            'IPTV for Roku', 'IPTV for Windows PC', 'IPTV for Mac',
            // Setup/Installation
            'install IPTV', 'IPTV setup guide', 'how to install IPTV',
            'IPTV Smarters Pro', 'TiviMate setup', 'IPTV player configuration'
        ],
    };
}

export default async function DevicesPage() {
    const collectionSchema = generateCollectionPageSchema({
        name: "IPTV Setup Guides",
        description: "Comprehensive setup guides for installing IPTV on all major devices and platforms",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices`,
        items: howToArticles.map(article => ({
            name: article.title,
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices/${article.id}`,
        })),
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Devices", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/devices` },
    ]);

    // Group devices by category
    const streamingDevices = howToArticles.filter(a => ['fire-tv', 'roku', 'apple-tv'].includes(a.id));
    const mobileDevices = howToArticles.filter(a => ['android', 'ios'].includes(a.id));
    const smartTVs = howToArticles.filter(a => ['samsung-tv', 'lg-tv', 'smart-tv'].includes(a.id));
    const computers = howToArticles.filter(a => ['windows', 'macos'].includes(a.id));
    const otherDevices = howToArticles.filter(a => ['mag', 'troubleshooting'].includes(a.id));

    return (
        <>
            <Schema id="collection" schema={collectionSchema} />
            <Schema id="breadcrumb" schema={breadcrumbSchema} />

            <main className="py-16 sm:py-24">
                <Container>
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                        <ol className="flex items-center gap-2">
                            <li><Link href="/" className="hover:text-primary">Home</Link></li>
                            <li>/</li>
                            <li>Devices</li>
                        </ol>
                    </nav>

                    {/* Hero Section */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                            IPTV Setup Guides
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Step-by-step instructions to install and configure IPTV on any device. Choose your device below to get started.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/pricing">Get Started with IPTV</Link>
                        </Button>
                    </div>

                    {/* Streaming Devices */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Tv className="h-8 w-8 text-primary" />
                            <h2 className="font-headline text-3xl font-bold tracking-tight">Streaming Devices</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {streamingDevices.map((device) => (
                                <Link
                                    key={device.id}
                                    href={`/devices/${device.id}`}
                                    className="group p-6 border-2 rounded-xl hover:border-primary/40 transition-all hover:shadow-lg hover:-translate-y-1"
                                >
                                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                                        {device.primaryKeyword}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                                        {device.description}
                                    </p>
                                    <div className="text-sm font-medium text-primary">
                                        View Setup Guide →
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Mobile Devices */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Smartphone className="h-8 w-8 text-primary" />
                            <h2 className="font-headline text-3xl font-bold tracking-tight">Mobile Devices</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {mobileDevices.map((device) => (
                                <Link
                                    key={device.id}
                                    href={`/devices/${device.id}`}
                                    className="group p-6 border-2 rounded-xl hover:border-primary/40 transition-all hover:shadow-lg hover:-translate-y-1"
                                >
                                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                                        {device.primaryKeyword}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                                        {device.description}
                                    </p>
                                    <div className="text-sm font-medium text-primary">
                                        View Setup Guide →
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Smart TVs */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Tablet className="h-8 w-8 text-primary" />
                            <h2 className="font-headline text-3xl font-bold tracking-tight">Smart TVs</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {smartTVs.map((device) => (
                                <Link
                                    key={device.id}
                                    href={`/devices/${device.id}`}
                                    className="group p-6 border-2 rounded-xl hover:border-primary/40 transition-all hover:shadow-lg hover:-translate-y-1"
                                >
                                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                                        {device.primaryKeyword}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                                        {device.description}
                                    </p>
                                    <div className="text-sm font-medium text-primary">
                                        View Setup Guide →
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Computers */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Monitor className="h-8 w-8 text-primary" />
                            <h2 className="font-headline text-3xl font-bold tracking-tight">Computers</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {computers.map((device) => (
                                <Link
                                    key={device.id}
                                    href={`/devices/${device.id}`}
                                    className="group p-6 border-2 rounded-xl hover:border-primary/40 transition-all hover:shadow-lg hover:-translate-y-1"
                                >
                                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                                        {device.primaryKeyword}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                                        {device.description}
                                    </p>
                                    <div className="text-sm font-medium text-primary">
                                        View Setup Guide →
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Other Devices & Troubleshooting */}
                    {otherDevices.length > 0 && (
                        <section className="mb-16">
                            <h2 className="font-headline text-3xl font-bold mb-6">Other Devices & Help</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {otherDevices.map((device) => (
                                    <Link
                                        key={device.id}
                                        href={`/devices/${device.id}`}
                                        className="group p-6 border-2 rounded-xl hover:border-primary/40 transition-all hover:shadow-lg"
                                    >
                                        <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                                            {device.primaryKeyword}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {device.description}
                                        </p>
                                        <div className="text-sm font-medium text-primary">
                                            View Guide →
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA Section */}
                    <section className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20 text-center">
                        <h2 className="font-headline text-3xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-lg mb-6">
                            Choose your subscription plan and start streaming on any device in minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button asChild size="lg">
                                <Link href="/pricing">View Pricing Plans</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/iptv-free-trial">Start Free Trial</Link>
                            </Button>
                        </div>
                    </section>
                </Container>
            </main>
        </>
    );
}
