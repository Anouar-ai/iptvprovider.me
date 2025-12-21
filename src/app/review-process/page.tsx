import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { Check, Shield, Server, Tv, Banknote, Headphones } from 'lucide-react';
import { generateMetadata as generatePageMetadata } from '@/lib/site-config';

export function generateMetadata(): Metadata {
    return generatePageMetadata({
        title: "How We Evaluate IPTV Providers | Our Review Methodology",
        description: "Our strict review process ensures we only recommend the best IPTV services. Learn about our testing criteria: reliability, channel selection, support, and value.",
        canonical: "/review-process",
        noIndex: true, // Noindex due to mixed identity issue (seller vs reviewer)
    });
}

export default function ReviewProcessPage() {
    return (
        <main className="py-16 sm:py-24">
            <Container>
                <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                    <header className="mb-12 text-center">
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                            Our Review Methodology
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We take testing seriously. Before we recommend any IPTV service, it must pass our rigorous 5-point evaluation process. Here is exactly how we do it.
                        </p>
                    </header>

                    <section className="space-y-16 my-16">

                        {/* 1. Reliability */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                                <Server className="h-10 w-10 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mt-0 mb-4">1. Stability & Uptime</h2>
                                <p>
                                    Nothing is worse than a stream that freezes during the big game. We test each service for a minimum of <strong>72 hours</strong> across different times of day—especially peak hours (8 PM - 11 PM)—to monitor for buffering, looping, or downtime.
                                </p>
                                <div className="bg-muted p-4 rounded-lg mt-4">
                                    <span className="font-semibold text-sm">We Look For:</span>
                                    <ul className="list-none pl-0 mt-2 space-y-2 text-sm">
                                        <li className="flex gap-2"><Check className="h-4 w-4 text-green-500" /> Fast channel zapping speed (&lt; 2 seconds)</li>
                                        <li className="flex gap-2"><Check className="h-4 w-4 text-green-500" /> Minimal buffering on standard fiber connections</li>
                                        <li className="flex gap-2"><Check className="h-4 w-4 text-green-500" /> No frequent server maintenance downtime</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2. Channel Selection */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                                <Tv className="h-10 w-10 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mt-0 mb-4">2. Channel & VOD Library</h2>
                                <p>
                                    Quantity matters, but quality is king. We scan the playlist to verify the resolution (HD, FHD, 4K) and check for "fake" 4K channels. We also ensure that the Video-On-Demand (VOD) library is updated with recent movies and series.
                                </p>
                            </div>
                        </div>

                        {/* 3. Security */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                                <Shield className="h-10 w-10 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mt-0 mb-4">3. Privacy & Anonymity</h2>
                                <p>
                                    We only recommend providers that respect user privacy. We check if they require unnecessary personal information during sign-up and if they support anonymous payment methods like Crypto, alongside standard Credit Card options.
                                </p>
                            </div>
                        </div>

                        {/* 4. Support */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                                <Headphones className="h-10 w-10 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mt-0 mb-4">4. Customer Support</h2>
                                <p>
                                    We anonymously test their support channels (WhatsApp, Web Chat, Email). We measure response time and the helpfulness of the staff for common issues like setup assistance or payment verification.
                                </p>
                            </div>
                        </div>

                        {/* 5. Pricing */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                                <Banknote className="h-10 w-10 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mt-0 mb-4">5. Price-to-Value Ratio</h2>
                                <p>
                                    Expensive doesn't always mean better. We compare the features relative to the cost. A service charging $20/month must perform significantly better than one charging $10/month to get our recommendation.
                                </p>
                            </div>
                        </div>

                    </section>

                    <div className="border-t pt-12 text-center">
                        <p className="text-muted-foreground italic">
                            Are you an IPTV Provider? If you think your service can pass our test, contact us for a review. Note that we do not accept payment for better ratings—scores are earned, not bought.
                        </p>
                    </div>
                </article>
            </Container>
        </main>
    );
}
