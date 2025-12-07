import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
    const title = "IPTV Blog: Guides, Comparisons & Expert Tips";
    const description = "Expert guides on IPTV providers, device setup, troubleshooting, and industry news. Stay updated with the latest in streaming technology.";

    return generatePageMetadata({
        title,
        description,
        canonical: "/blog",
    });
}

const blogPosts = [
    {
        title: "Best IPTV Provider in 2026: Real Comparison",
        description: "We tested 50+ IPTV providers for 30 days. Here are the only 5 worth your money, ranked by channels, stability, and value.",
        slug: "best-iptv-provider-2026",
        date: "2026-01-01",
        category: "Comparison",
        readTime: "12 min read"
    },
    {
        title: "IPTV vs Cable TV: Which is Better in 2026?",
        description: "Detailed comparison of IPTV vs Cable TV: cost, channels, quality, installation, and more. Save $1,500+/year by switching.",
        slug: "iptv-vs-cable-tv",
        date: "2026-01-01",
        category: "Comparison",
        readTime: "10 min read"
    },
    {
        title: "IPTV vs Streaming Services: Netflix, Hulu, Disney+ Comparison",
        description: "Compare IPTV with Netflix, Hulu, Disney+. Get live TV + on-demand content for $15/month instead of $100+/month.",
        slug: "iptv-vs-streaming-services",
        date: "2026-01-01",
        category: "Comparison",
        readTime: "8 min read"
    },
    {
        title: "Cheap IPTV Providers 2026: Best Budget Options",
        description: "Find the best cheap IPTV providers under $15/month. Learn what to avoid and how to get quality IPTV for less.",
        slug: "cheap-iptv-providers",
        date: "2026-01-01",
        category: "Guide",
        readTime: "7 min read"
    },
    {
        title: "How to Setup IPTV: Complete Step-by-Step Guide",
        description: "Learn how to setup IPTV on any device in 5 minutes. Fire TV, Android TV, Smart TV, phones, and more.",
        slug: "how-to-setup-iptv",
        date: "2026-01-01",
        category: "Tutorial",
        readTime: "6 min read"
    },
    {
        title: "IPTV Troubleshooting Guide: Fix Buffering & Common Issues",
        description: "Complete troubleshooting guide for IPTV. Fix buffering, freezing, login errors, and more with step-by-step solutions.",
        slug: "iptv-troubleshooting-guide",
        date: "2026-01-01",
        category: "Support",
        readTime: "8 min read"
    },
    {
        title: "IPTV VPN Guide: Do You Need a VPN for IPTV?",
        description: "Complete guide to using VPN with IPTV. Best VPNs, setup instructions, and how to prevent ISP throttling.",
        slug: "iptv-vpn-guide",
        date: "2026-01-01",
        category: "Security",
        readTime: "7 min read"
    }
];

export default function BlogIndex() {
    return (
        <main className="py-16 sm:py-24">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        IPTV Blog & Guides
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Expert insights, comparisons, and tutorials to help you get the most out of your IPTV service.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <Card key={post.slug} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <Calendar className="h-4 w-4" />
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                                <CardDescription className="text-base">{post.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto">
                                <Button asChild variant="outline" className="w-full">
                                    <Link href={`/blog/${post.slug}`}>
                                        Read Article
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </main>
    );
}
