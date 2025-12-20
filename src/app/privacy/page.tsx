import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { Schema } from "@/components/shared/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | IPTV Provider',
    description: 'Your privacy is important to us. Read our privacy policy to understand how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/` },
        { name: "Privacy Policy", item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iptvprovider.me'}/privacy` },
    ]);

    return (
        <main className="py-16 sm:py-24">
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <Container>
                <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                    <ol className="flex items-center gap-2">
                        <li><Link href="/" className="hover:text-primary">Home</Link></li>
                        <li>/</li>
                        <li>Privacy Policy</li>
                    </ol>
                </nav>
                <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                    <header className="mb-12 text-center">
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Last Updated: December 8, 2025
                        </p>
                    </header>

                    <section className="space-y-8">
                        <p>
                            At <strong>IPTV Provider</strong> ("we", "us", or "our"), accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                            <p>
                                We minimize the data we collect. However, like most standard websites, we may collect:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Log Files:</strong> Includes IP addresses, browser type, ISP, date/time stamp, and referring/exit pages. This is standard protocol for hosting services and is used for analytics.</li>
                                <li><strong>Cookies:</strong> We use cookies to store information about visitors' preferences and the pages on the website that the visitor accessed or visited.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">2. Application of Cookies</h2>
                            <p>
                                We use cookies to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. You can choose to disable cookies through your individual browser options.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">3. Third-Party Privacy Policies</h2>
                            <p>
                                Our Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">4. Children's Information</h2>
                            <p>
                                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                            </p>
                            <p>
                                IPTV Provider does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                            <p>
                                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us via email.
                            </p>
                        </div>
                    </section>

                </article>
            </Container>
        </main>
    );
}
