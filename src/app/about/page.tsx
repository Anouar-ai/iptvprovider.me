import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { Schema } from "@/components/shared/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import Link from 'next/link';

export function generateMetadata(): Metadata {
    return generatePageMetadata({
        title: 'About IPTV Provider | Our Mission & Team',
        description: 'Learn about the team behind IPTV Provider. We are IT experts and cord-cutting enthusiasts dedicated to helping you find the best streaming solutions.',
        canonical: '/about',
    });
}

export default function AboutPage() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me';

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "About", item: `${baseUrl}/about` },
    ]);

    // AboutPage schema for Knowledge Graph
    const aboutPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': `${baseUrl}/about`,
        name: 'About IPTV Provider',
        description: 'Learn about IPTV Provider, our mission, team, and commitment to providing the best IPTV streaming solutions worldwide.',
        mainEntity: {
            '@id': `${baseUrl}/#organization`
        },
        publisher: {
            '@id': `${baseUrl}/#organization`
        }
    };

    return (
        <main className="py-16 sm:py-24">
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <Schema id="about-page" schema={aboutPageSchema} />
            <Container>
                <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                    <ol className="flex items-center gap-2">
                        <li><Link href="/" className="hover:text-primary">Home</Link></li>
                        <li>/</li>
                        <li>About Us</li>
                    </ol>
                </nav>
                <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                    <header className="mb-12 text-center">
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                            Empowering Your Cord-Cutting Journey
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We separate the signal from the noise in the world of IPTV, giving you the honest facts you need to stream with confidence.
                        </p>
                    </header>

                    <section className="grid md:grid-cols-2 gap-12 items-center my-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                            <p>
                                Welcome to <strong>IPTV Provider</strong>, founded in 2025 by industry veteran Marcus Chen. We are a dedicated team of IT professionals, network engineers, and streaming media enthusiasts who have been navigating the world of internet TV since its early days.
                            </p>
                            <p>
                                Frustrated by the overwhelming amount of outdated information, scams, and confusing technical jargon online, we decided to build the ultimate resource for honest, reliable IPTV advice. Our goal is simple: to help you save money on cable bills without sacrificing the quality or reliability of your entertainment.
                            </p>
                            <p className="text-sm text-muted-foreground mt-4">
                                <strong>Founded:</strong> 2025 | <strong>Team Size:</strong> 4 experts | <strong>Service Area:</strong> Worldwide
                            </p>
                        </div>
                        <div className="bg-muted p-8 rounded-2xl border-l-4 border-primary">
                            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                            <ul className="space-y-4 list-none pl-0">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold text-xl">✓</span>
                                    <span><strong>Transparency:</strong> We are open about how we test and what we recommend.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold text-xl">✓</span>
                                    <span><strong>Expertise:</strong> Our guides are written by real tech experts, not just copywriters.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold text-xl">✓</span>
                                    <span><strong>User-First:</strong> We prioritize your experience and safety above all else.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="my-16">
                        <h2 className="text-center text-3xl font-bold mb-8">Why Trust Us?</h2>
                        <div className="grid sm:grid-cols-3 gap-8 text-center">
                            <div className="p-6 rounded-xl bg-card border shadow-sm">
                                <div className="text-4xl mb-4">🖥️</div>
                                <h3 className="text-xl font-bold mb-2">Hands-On Testing</h3>
                                <p className="text-sm text-muted-foreground">We verify every service and device on real hardware before writing a single word.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-card border shadow-sm">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="text-xl font-bold mb-2">Security Focused</h3>
                                <p className="text-sm text-muted-foreground">We understand the importance of privacy and always recommend safe, secure practices.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-card border shadow-sm">
                                <div className="text-4xl mb-4">🕒</div>
                                <h3 className="text-xl font-bold mb-2">Always Updated</h3>
                                <p className="text-sm text-muted-foreground">The streaming world moves fast. We update our guides constantly to keep you ahead.</p>
                            </div>
                        </div>
                    </section>


                    <section className="bg-primary/5 rounded-2xl p-8 my-16 text-center">
                        <h2 className="text-2xl font-bold mb-4">Join Thousands of Happy Streamers</h2>
                        <p className="mb-6 max-w-2xl mx-auto">
                            Ready to ditch the cable box? Explore our setup guides or check out our top-rated provider reviews to get started today.
                        </p>
                    </section>
                </article>
            </Container>
        </main>
    );
}
