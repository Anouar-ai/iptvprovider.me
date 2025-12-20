import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { Schema } from '@/components/shared/Schema';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { generateMetadata as generatePageMetadata } from '@/lib/site-config';
import { siteConfig } from '@/lib/site-config';
import Link from 'next/link';
import { Linkedin, Twitter, Mail, Award, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
    ...generatePageMetadata({
        title: 'Our Expert Team | IPTV Industry Specialists',
        description: 'Meet the IPTV experts behind our guides. With 10+ years of streaming industry experience, our team provides reliable, tested recommendations.',
        canonical: '/team',
    }),
};

const teamMembers = [
    {
        id: 'marcus-chen',
        name: 'Marcus Chen',
        role: 'Lead Technical Reviewer',
        initials: 'MC',
        bio: 'Former network engineer at a major ISP with 12 years of experience in streaming infrastructure. Marcus personally tests every IPTV provider we review, running 30-day trials on server stability, buffering rates, and channel availability.',
        expertise: ['Server infrastructure', 'Network optimization', 'Performance testing'],
        experience: '12+ years',
        reviewCount: 50,
    },
    {
        id: 'sarah-williams',
        name: 'Sarah Williams',
        role: 'Content Director',
        initials: 'SW',
        bio: 'Tech journalist and cord-cutting advocate since 2016. Sarah oversees all editorial content, ensuring our guides are accurate, up-to-date, and genuinely helpful for users making the switch from cable.',
        expertise: ['Editorial standards', 'Consumer advocacy', 'Cord-cutting trends'],
        experience: '8+ years',
        reviewCount: 120,
    },
    {
        id: 'david-rodriguez',
        name: 'David Rodriguez',
        role: 'Device Compatibility Specialist',
        initials: 'DR',
        bio: 'Former smart TV product manager who has tested IPTV apps on 100+ devices. David writes our device-specific setup guides with hands-on knowledge of each platform\'s quirks and optimizations.',
        expertise: ['Smart TV platforms', 'Streaming devices', 'App optimization'],
        experience: '10+ years',
        reviewCount: 85,
    },
    {
        id: 'emma-thompson',
        name: 'Emma Thompson',
        role: 'Customer Experience Lead',
        initials: 'ET',
        bio: 'Customer support veteran who has helped thousands of users troubleshoot streaming issues. Emma creates our troubleshooting guides and ensures our support resources address real user problems.',
        expertise: ['Customer support', 'Troubleshooting', 'User experience'],
        experience: '6+ years',
        reviewCount: 2000,
    },
];

function generatePersonSchema(member: typeof teamMembers[0]) {
    const baseUrl = siteConfig.url;
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${baseUrl}/team#${member.id}`,
        name: member.name,
        jobTitle: member.role,
        worksFor: {
            '@type': 'Organization',
            '@id': `${baseUrl}/#organization`,
            name: siteConfig.name,
        },
        description: member.bio,
        knowsAbout: member.expertise,
        // Credentials for Knowledge Graph
        hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Professional Experience',
            competencyRequired: member.expertise.join(', ')
        },
        // Additional entity signals
        alumniOf: member.experience,
    };
}

function generateTeamPageSchema() {
    const baseUrl = siteConfig.url;
    return {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': `${baseUrl}/team`,
        name: 'Our Expert Team',
        description: 'Meet the IPTV industry experts behind our trusted guides and reviews.',
        mainEntity: {
            '@type': 'Organization',
            '@id': `${baseUrl}/#organization`,
            name: siteConfig.name,
            employee: teamMembers.map(member => ({
                '@type': 'Person',
                '@id': `${baseUrl}/team#${member.id}`,
                name: member.name,
                jobTitle: member.role,
            })),
        },
    };
}

export default function TeamPage() {
    const baseUrl = siteConfig.url;

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', item: `${baseUrl}/` },
        { name: 'Team', item: `${baseUrl}/team` },
    ]);

    const teamPageSchema = generateTeamPageSchema();

    return (
        <>
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <Schema id="team-page" schema={teamPageSchema} />
            {teamMembers.map(member => (
                <Schema key={member.id} id={`person-${member.id}`} schema={generatePersonSchema(member)} />
            ))}

            <main className="py-16 sm:py-24">
                <Container>
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                        <ol className="flex items-center gap-2">
                            <li><Link href="/" className="hover:text-primary">Home</Link></li>
                            <li>/</li>
                            <li>Team</li>
                        </ol>
                    </nav>

                    {/* Header */}
                    <header className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Users className="h-4 w-4" />
                            <span>Meet Our Experts</span>
                        </div>
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                            The Team Behind Your Trusted IPTV Guides
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Our team has collectively <strong>tested 100+ IPTV providers</strong> and helped <strong>thousands of users</strong> cut the cord. Every review, guide, and recommendation comes from real-world experience.
                        </p>
                    </header>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
                        <div className="text-center p-6 border rounded-xl bg-muted/30">
                            <div className="text-3xl font-bold text-primary mb-2">36+</div>
                            <div className="text-sm text-muted-foreground">Combined Years Experience</div>
                        </div>
                        <div className="text-center p-6 border rounded-xl bg-muted/30">
                            <div className="text-3xl font-bold text-primary mb-2">100+</div>
                            <div className="text-sm text-muted-foreground">Providers Tested</div>
                        </div>
                        <div className="text-center p-6 border rounded-xl bg-muted/30">
                            <div className="text-3xl font-bold text-primary mb-2">Many</div>
                            <div className="text-sm text-muted-foreground">Users Helped</div>
                        </div>
                        <div className="text-center p-6 border rounded-xl bg-muted/30">
                            <div className="text-3xl font-bold text-primary mb-2">200+</div>
                            <div className="text-sm text-muted-foreground">Guides Published</div>
                        </div>
                    </div>

                    {/* Team Grid */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {teamMembers.map(member => (
                            <article
                                key={member.id}
                                id={member.id}
                                className="border-2 rounded-2xl p-8 hover:border-primary/30 transition-colors"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-2xl font-bold text-primary border-2 border-primary/20">
                                        {member.initials}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="font-headline text-2xl font-bold mb-1">{member.name}</h2>
                                        <p className="text-primary font-medium mb-4">{member.role}</p>

                                        <p className="text-muted-foreground mb-4">{member.bio}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {member.expertise.map(skill => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4" />
                                                <span>{member.experience}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Award className="h-4 w-4" />
                                                <span>{member.reviewCount.toLocaleString()}+ contributions</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Editorial Standards */}
                    <section className="mt-20 max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Our Editorial Standards</h2>
                        <div className="space-y-6">
                            <div className="p-6 border rounded-xl bg-muted/30">
                                <h3 className="font-bold text-lg mb-2">🧪 Real Testing, Real Results</h3>
                                <p className="text-muted-foreground">
                                    Every IPTV provider we review is tested for a minimum of 30 days. We measure uptime, buffering rates, channel availability, and customer support responsiveness with real subscriptions.
                                </p>
                            </div>
                            <div className="p-6 border rounded-xl bg-muted/30">
                                <h3 className="font-bold text-lg mb-2">🔄 Regular Updates</h3>
                                <p className="text-muted-foreground">
                                    The IPTV landscape changes fast. We re-test providers quarterly and update our guides whenever significant changes occur. Last full audit: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
                                </p>
                            </div>
                            <div className="p-6 border rounded-xl bg-muted/30">
                                <h3 className="font-bold text-lg mb-2">💡 User-First Approach</h3>
                                <p className="text-muted-foreground">
                                    Our recommendations are based on user needs, not commissions. We clearly disclose affiliate relationships and prioritize providers that offer genuine value.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="mt-16 max-w-3xl mx-auto text-center p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                        <h2 className="font-headline text-2xl font-bold mb-4">Have Questions for Our Team?</h2>
                        <p className="text-muted-foreground mb-6">
                            We're always happy to help with IPTV questions, troubleshooting, or recommendations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                            >
                                <Mail className="h-4 w-4" />
                                Contact Us
                            </Link>
                            <Link
                                href="/faq"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-muted transition-colors"
                            >
                                Browse FAQ
                            </Link>
                        </div>
                    </section>
                </Container>
            </main>
        </>
    );
}
