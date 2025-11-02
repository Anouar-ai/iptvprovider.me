
import { posts } from "@/lib/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.id === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | IPTV Service Blog`,
    description: post.excerpt,
    keywords: ["IPTV", "Macbook", "macOS", "VLC", "IPTV player", "install IPTV", "IPTV on Mac", "M3U playlist Mac"],
    alternates: {
      canonical: `/blog/${post.id}`,
    },
  };
}

// Dummy content for other posts until they are optimized
const getPostContent = (slug: string) => {
    if (slug === 'how-to-install-iptv-on-macbook') {
        return (
            <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
                <p className="lead text-xl text-muted-foreground mb-8">
                    Struggling to figure out how to **install IPTV on your MacBook**? You're in the right place. Unlocking a universe of global entertainment on your Mac is easier than you think. Recent studies show that the global IPTV market is projected to reach **$115.2 billion by 2026**, and Mac users are a growing part of this trend. This guide will walk you through the simplest method using an **M3U playlist** and the ever-reliable VLC Media Player.
                </p>
                <p>By the end of this guide, you will learn:</p>
                <ul>
                    <li>How to choose and install the best media player for IPTV on macOS.</li>
                    <li>The step-by-step process to load your M3U playlist and access thousands of channels.</li>
                    <li>Troubleshooting tips for common issues like buffering or playlist errors.</li>
                </ul>
                <p>Let’s get started and transform your MacBook into a powerful streaming hub. If you don't have a subscription yet, you can get the <Link href="/iptv-subscription/12-months">best value IPTV plan here</Link>.</p>

                <h2 className="font-headline">What You'll Need: The Essential Toolkit</h2>
                <p>Before we dive in, let’s gather the necessary tools. Having these ready will make the process to **install IPTV on your Macbook** incredibly smooth. Think of this as your pre-flight checklist for a journey into limitless entertainment.</p>
                <ul>
                    <li><strong>A Modern MacBook:</strong> Any MacBook, MacBook Pro, or MacBook Air from the last 5-7 years running a recent version of macOS (like Monterey, Ventura, or Sonoma) will work perfectly.</li>
                    <li><strong>A Stable Internet Connection:</strong> For a buffer-free experience, especially with HD and 4K content, a connection speed of **at least 25-50 Mbps is recommended**.</li>
                    <li><strong>An Active IPTV Subscription:</strong> This is your golden ticket. You'll need an active subscription that provides you with an M3U playlist URL. If you don't have one, our <Link href="/iptv-subscription">IPTV subscription service</Link> offers reliable, high-quality streams.</li>
                    <li><strong>A Compatible Media Player:</strong> While there are several options, we'll be using **VLC Media Player**. It's free, open-source, and a powerhouse for handling network streams.</li>
                </ul>

                <h2 className="font-headline">Phase 1: Installing Your IPTV Player (VLC)</h2>
                <p>The first step is to install a media player capable of handling IPTV streams. Our top recommendation for macOS is **VLC Media Player**. It's known as the "play anything" software for a reason and is trusted by millions worldwide.</p>
                
                <h3 className="font-headline text-2xl">How to Install VLC Media Player on macOS</h3>
                <ol>
                    <li>Navigate to the official VideoLAN website: <a href="https://www.videolan.org/vlc/" target="_blank" rel="noopener noreferrer">www.videolan.org</a>. The site will automatically detect your operating system.</li>
                    <li>Click the prominent **"Download VLC"** button. The correct version for your Mac's architecture (Intel or Apple Silicon) will be downloaded.</li>
                    <li>Once the download is complete, open the `.dmg` file from your 'Downloads' folder.</li>
                    <li>A window will appear. Simply **drag the VLC cone icon** into your **Applications folder**.</li>
                    <li>That's it! VLC is now installed. You can launch it from your Applications folder or via Spotlight search.</li>
                </ol>

                <h2 className="font-headline">Phase 2: Loading Your M3U Playlist</h2>
                <p>With VLC ready to go, it's time to connect it to your IPTV service. This is done by adding your unique M3U playlist URL.</p>

                <h3 className="font-headline text-2xl">Adding Your IPTV Stream to VLC</h3>
                <ol>
                    <li>Launch VLC Media Player.</li>
                    <li>From the menu bar at the top of your screen, click **File &rarr; Open Network...** (or use the keyboard shortcut `⌘ + N`).</li>
                    <li>In the dialog box, ensure you are on the **"Network"** tab.</li>
                    <li>Paste your **M3U playlist URL** into the URL field. This is the link you received in your subscription email. Double-check for any typos.</li>
                    <li>Click the **"Open"** button.</li>
                </ol>
                <p>VLC will take a few moments to load the playlist. The first channel on the list may start playing automatically.</p>

                <h2 className="font-headline">Phase 3: Navigating and Watching Channels</h2>
                <p>Now for the fun part! Once the playlist is loaded, you need to access the channel list to browse the thousands of available options.</p>
                <h3 className="font-headline text-2xl">Accessing the Playlist View</h3>
                <ul>
                    <li>In VLC, go to the top menu and click **View &rarr; Playlist** (or use the shortcut `⌘ + Option + P`).</li>
                    <li>The playlist sidebar will appear, showing all the channels and categories included in your subscription.</li>
                    <li>You can use the **search bar** at the top of the playlist to quickly find specific channels.</li>
                    <li>Simply **double-click** on any channel to start streaming.</li>
                </ul>

                <div className="my-12 rounded-lg bg-primary/10 p-8 text-center">
                    <h3 className="font-headline text-2xl font-bold">Ready to Start Watching on Your Mac?</h3>
                    <p className="mt-2 text-muted-foreground">You're just one step away from endless entertainment. Get your premium IPTV subscription today and unlock thousands of channels in stunning HD and 4K quality!</p>
                    <Button asChild className="mt-6">
                        <Link href="/iptv-subscription">Get Your Subscription Now</Link>
                    </Button>
                </div>

                <h2 className="font-headline">Frequently Asked Questions About IPTV on MacBook</h2>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Can I record shows using VLC on my Mac?</AccordionTrigger>
                        <AccordionContent>
                        **Yes, you can record streams in VLC.** While watching a channel, go to "Playback" > "Record" in the menu bar, or use the shortcut `Shift + ⌘ + R`. The recording will be saved to your Movies folder by default.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What if the stream is buffering or lagging?</AccordionTrigger>
                        <AccordionContent>
                        **Buffering is usually an internet speed issue.** First, ensure your connection is stable and meets the 25 Mbps minimum. Try connecting via an Ethernet cable instead of Wi-Fi. If the problem persists, using a reliable VPN can often bypass ISP throttling, which is a common cause of buffering.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3">
                        <AccordionTrigger>My M3U link is not working. What should I do?</AccordionTrigger>
                        <AccordionContent>
                        **First, double-check the URL for any typos.** Copy and paste it directly from your email. If it's correct, the link may have expired or your subscription might be inactive. Contact our 24/7 support with your details, and we'll resolve it for you.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <h2 className="font-headline">Conclusion: Your MacBook Is Now an Entertainment Center</h2>
                <p>Congratulations! You have successfully learned how to **install IPTV on your MacBook**. By following these simple steps, you've transformed your device into a versatile and powerful streaming machine. You now have access to a global library of content right at your fingertips.</p>
                <p>The key takeaways are to use a reliable player like **VLC**, ensure you have a valid **M3U playlist URL** from a trusted <Link href="/iptv-subscription">IPTV provider</Link>, and maintain a stable internet connection for the best experience. Happy streaming!</p>
            </div>
        );
    }

    // Placeholder for other blog posts
    return (
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
            <p>Content for this article is coming soon. Check back later for a full guide!</p>
        </div>
    );
};


export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((img) => img.id === post.image);
  const content = getPostContent(params.slug);

  return (
    <main className="py-16 sm:py-24">
      <Container>
        <article>
          <header className="mb-12 text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Posted on {new Date().toLocaleDateString()}
            </p>
          </header>

          {postImage && (
            <div className="relative h-64 w-full rounded-xl overflow-hidden md:h-96 mb-12">
              <Image
                src={postImage.imageUrl}
                alt={post.title}
                data-ai-hint={postImage.imageHint}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          {content}

          <div className="text-center mt-16">
            <Link href="/blog" className="text-primary font-semibold hover:underline">
                &larr; Back to Blog
            </Link>
          </div>

        </article>
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.id,
  }));
}
