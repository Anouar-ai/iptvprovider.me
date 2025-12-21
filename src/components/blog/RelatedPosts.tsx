"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedPost {
    title: string;
    slug: string;
    description: string;
    category: string;
}

const blogPosts: RelatedPost[] = [
    {
        title: "Best IPTV Provider 2025",
        slug: "/blog/best-iptv-provider-2025",
        description: "Top 5 tested IPTV providers ranked by uptime, channels, and value",
        category: "Comparison"
    },
    {
        title: "IPTV vs Cable TV",
        slug: "/blog/iptv-vs-cable-tv",
        description: "Side-by-side comparison: save $1,500+/year by switching",
        category: "Comparison"
    },
    {
        title: "IPTV vs Streaming Services",
        slug: "/blog/iptv-vs-streaming-services",
        description: "How IPTV compares to Netflix, Hulu, Disney+",
        category: "Comparison"
    },
    {
        title: "Cheap IPTV Providers",
        slug: "/blog/cheap-iptv-providers",
        description: "Budget IPTV options under $15/month",
        category: "Guide"
    },
    {
        title: "How to Setup IPTV",
        slug: "/blog/how-to-setup-iptv",
        description: "Step-by-step setup on any device in 5 minutes",
        category: "Tutorial"
    },
    {
        title: "IPTV Troubleshooting Guide",
        slug: "/blog/iptv-troubleshooting-guide",
        description: "Fix buffering, freezing, and common issues",
        category: "Support"
    },
    {
        title: "IPTV VPN Guide",
        slug: "/blog/iptv-vpn-guide",
        description: "Protect your privacy and prevent ISP throttling",
        category: "Security"
    }
];

interface RelatedPostsProps {
    currentSlug: string;
    maxPosts?: number;
    category?: string;
}

export function RelatedPosts({ currentSlug, maxPosts = 3, category }: RelatedPostsProps) {
    // Filter out current post and optionally filter by category
    let filteredPosts = blogPosts.filter(post => post.slug !== currentSlug);

    if (category) {
        // Prioritize same category, then add others
        const sameCategory = filteredPosts.filter(post => post.category === category);
        const otherPosts = filteredPosts.filter(post => post.category !== category);
        filteredPosts = [...sameCategory, ...otherPosts];
    }

    const postsToShow = filteredPosts.slice(0, maxPosts);

    return (
        <section className="mt-16 pt-8 border-t">
            <h2 className="font-headline text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {postsToShow.map((post) => (
                    <Link
                        key={post.slug}
                        href={post.slug}
                        className="group p-6 border rounded-xl hover:border-primary/40 hover:bg-muted/30 transition-all"
                    >
                        <span className="text-xs font-medium text-primary uppercase tracking-wide">
                            {post.category}
                        </span>
                        <h3 className="font-semibold text-lg mt-2 mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            {post.description}
                        </p>
                        <span className="inline-flex items-center text-sm text-primary font-medium">
                            Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                ))}
            </div>
            {/* Link to blog index for more articles */}
            <div className="mt-6 text-center">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-primary hover:underline font-medium"
                >
                    View All Articles <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </section>
    );
}
