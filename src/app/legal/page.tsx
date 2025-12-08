import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Alertcircle, FileWarning, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Legal Disclaimer | Is IPTV Legal? | IPTV Provider Guide',
    description: 'Read our legal disclaimer regarding IPTV services. We do not host content. We provide educational information about streaming technology.',
};

export default function LegalPage() {
    return (
        <main className="py-16 sm:py-24">
            <Container>
                <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                    <header className="mb-12 text-center">
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                            Legal Disclaimer
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Please read this disclaimer carefully before using our website or following any of our guides.
                        </p>
                    </header>

                    <Alert variant="destructive" className="my-8 border-red-500/50 bg-red-500/10 dark:text-red-200">
                        <FileWarning className="h-5 w-5" />
                        <AlertTitle className="text-lg font-bold">Important Notice</AlertTitle>
                        <AlertDescription className="text-base">
                            The IPTV Provider Guide does NOT host, provide, archive, store, distribute, or stream any media content. We do not own, manage, control, run, maintain, or have any access to the servers or entities involved in indexing/telecasting media of any kind.
                        </AlertDescription>
                    </Alert>

                    <section className="space-y-12 my-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">1. Educational Purpose Only</h2>
                            <p>
                                All content on this website, including articles, guides, reviews, and tutorials, is strictly for <strong>educational and informational purposes only</strong>. The intent is to inform users about the technologies involved in the IPTV industry (setup boxes, apps, and streaming protocols).
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">2. Third-Party Services</h2>
                            <p>
                                We may review or mention third-party IPTV providers or applications. We have no affiliation with these third-party services and cannot guarantee their content, legality, or safety.
                            </p>
                            <p>
                                We do not verify whether every individual IPTV service holds the proper licensing for the content that they deliver. It is the end-user's sole responsibility to ensure that they are accessing media that is available in the public domain or that they have the legal right to view.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">3. Copyright Infringement</h2>
                            <p>
                                We strongly oppose piracy and copyright infringement. We advise all our readers to check their local laws regarding streaming and to use only verified, legal streaming services. If you believe any tool or service mentioned on our site infringes on your copyright, please contact the developer or provider of that service directly, as we have no control over their operations.
                            </p>
                        </div>

                        <div className="bg-muted p-8 rounded-xl">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <HelpCircle className="h-6 w-6 text-primary" />
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Is IPTV Legal?</h3>
                                    <p className="text-sm">
                                        Yes, the technology itself (Internet Protocol Television) is 100% legal. It is simply a method of delivering content over the internet. Major legal services like Netflix, Hulu, and YouTube TV use this technology. However, there are providers who use this technology to distribute copyrighted content without permission, which is illegal.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Do you sell IPTV subscriptions?</h3>
                                    <p className="text-sm">
                                        No. We are an informational blog and review site. We do not sell, resell, or distribute any IPTV subscriptions or content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </article>
            </Container>
        </main>
    );
}
