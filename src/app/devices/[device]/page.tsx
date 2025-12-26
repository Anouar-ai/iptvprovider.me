
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { howToArticles, getSafeArticleData } from "@/lib/how-to";
import { Check, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import InternalLinks from "@/components/shared/InternalLinks";
import { Schema } from "@/components/shared/Schema";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateProductSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { plans } from "@/lib/site-data/pricing";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getPlaceholderImage } from "@/lib/server/image-blur-server";

type Props = {
  params: Promise<{ device: string; }>;
};

type ArticleType = ReturnType<typeof getSafeArticleData> & {
  image?: {
    imageUrl: string;
    imageHint: string;
    width?: number;
    height?: number;
    blurDataURL?: string;
  }
};

async function getArticleData(deviceId: string): Promise<ArticleType> {
  const article = getSafeArticleData(deviceId);
  if (!article) return undefined as any;

  const imageInfo = PlaceHolderImages.find(img => img.id === `guide-image-${article.id}`);
  if (!imageInfo) return { ...article, image: undefined };

  const blurDataURL = await getPlaceholderImage(imageInfo.imageUrl);
  return {
    ...article,
    image: {
      ...imageInfo,
      blurDataURL,
    },
  };
}


function StructuredData({ article }: { article: ArticleType }) {
  if (!article) return null;
  const { id, title, description, steps, faqs, image, datePublished, dateModified, primaryKeyword, totalTime } = article;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';

  const articleSchema = generateArticleSchema({
    headline: title,
    description,
    image: image?.imageUrl,
    datePublished,
    dateModified,
    url: `${baseUrl}/devices/${id}`,
  });

  const howToSchema = generateHowToSchema({
    name: title,
    description: description,
    totalTime: totalTime,
    image: image ? {
      url: image.imageUrl,
      width: image.width,
      height: image.height
    } : undefined,
    steps: steps.map((step, index) => ({
      name: step.title,
      text: step.description,
      url: `${baseUrl}/devices/${id}#step-${index + 1}`,
    })),
  });

  const faqSchema = faqs ? generateFAQPageSchema(faqs) : null;

  const lowPrice = Math.min(...plans.map(p => p.price_monthly));
  const highPrice = Math.max(...plans.map(p => p.price_monthly));

  const productSchema = generateProductSchema({
    name: "IPTV Provider Subscription",
    description: `Our premium IPTV Provider is fully compatible with ${primaryKeyword}. Follow our guide to get set up.`,
    image: "https://images-cdn.ubuy.co.in/633fee9c3a16a463ad2f7388-iptv-subscription-not-box-including.jpg",
    ratingValue: "4.8",
    reviewCount: "2547",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: lowPrice.toFixed(2),
      highPrice: highPrice.toFixed(2),
      offerCount: plans.length,
    }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${baseUrl}/` },
    { name: "Devices", item: `${baseUrl}/devices` },
    { name: title, item: `${baseUrl}/devices/${id}` }
  ]);

  return (
    <>
      <Schema id="article" schema={articleSchema} />
      <Schema id="how-to" schema={howToSchema} />
      {faqSchema && <Schema id="faq" schema={faqSchema} />}
      <Schema id="product" schema={productSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
    </>
  );
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { device } = await params;
  const article = getSafeArticleData(device);

  if (!article) {
    notFound();
  }

  const { title, description } = article;

  return generatePageMetadata({
    title,
    description,
    canonical: `/devices/${device}`,
    robots: 'index,follow',
  });
}

export default async function HowToPage({ params }: { params: Promise<{ device: string }> }) {
  const { device } = await params;
  const article = await getArticleData(device);

  if (!article) {
    notFound();
  }

  const { title, description, steps, extraSections, faqs, image, primaryKeyword, id, totalTime, dateModified } = article;
  const totalTimeInMinutes = totalTime?.replace('PT', '').replace('M', '');

  return (
    <>
      <StructuredData article={article} />
      <main className="py-16 sm:py-24">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/devices" className="hover:text-primary">
                  Devices
                </Link>
              </li>
              <li>/</li>
              <li>
                {title}
              </li>
            </ol>
          </nav>
          <article>
            <header className="mb-8 text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <div className="my-8 max-w-3xl mx-auto text-left">
                <div className="p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border-l-4 border-primary shadow-sm">
                  <p className="text-xl font-semibold mb-4">
                    Want to watch 20,000+ live TV channels on your {primaryKeyword} for just $15/month? <span className="text-primary">You're in the right place.</span>
                  </p>
                  <p className="mb-4 text-base">
                    In this guide, you'll learn exactly how to install IPTV on your {primaryKeyword} in under {totalTimeInMinutes || '5'} minutes—even if you've never done it before.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4 pt-4 border-t border-primary/10">
                    {totalTimeInMinutes && (
                      <div className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>Est. Time: {totalTimeInMinutes} min</span>
                      </div>
                    )}
                    <div className="inline-flex items-center gap-2">
                      <span>Updated: <time dateTime={dateModified} suppressHydrationWarning>{new Date(dateModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Table of Contents */}
            <section className="mb-12 max-w-3xl mx-auto">
              <div className="p-6 border-2 rounded-xl bg-muted/30">
                <h2 className="font-bold text-xl mb-4">📋 Quick Navigation</h2>
                <nav className="grid md:grid-cols-2 gap-2">
                  <Link href="#requirements" className="block text-sm hover:text-primary transition-colors">→ What You'll Need</Link>
                  <Link href="#steps" className="block text-sm hover:text-primary transition-colors">→ Setup Steps</Link>
                  {faqs && <Link href="#faq" className="block text-sm hover:text-primary transition-colors">→ FAQs</Link>}
                  <Link href="#related" className="block text-sm hover:text-primary transition-colors">→ Related Guides</Link>
                </nav>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-lg dark:prose-invert max-w-none">

                  {/* Visual Comparison: Cable vs IPTV */}
                  <div className="my-12 grid md:grid-cols-2 gap-6 not-prose">
                    <div className="p-6 border-2 border-red-500/20 rounded-xl bg-red-500/5">
                      <h3 className="font-bold text-xl mb-4 text-red-600 flex items-center gap-2">
                        <span className="text-2xl">📺</span> Without IPTV
                      </h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2 text-muted-foreground"><span className="text-red-500 font-bold">✕</span> Cable TV: $100+/month</li>
                        <li className="flex items-start gap-2 text-muted-foreground"><span className="text-red-500 font-bold">✕</span> Limited channel selection</li>
                        <li className="flex items-start gap-2 text-muted-foreground"><span className="text-red-500 font-bold">✕</span> Long-term contracts</li>
                      </ul>
                    </div>
                    <div className="p-6 border-2 border-green-500/20 rounded-xl bg-green-500/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                      <h3 className="font-bold text-xl mb-4 text-green-600 flex items-center gap-2">
                        <span className="text-2xl">🚀</span> With IPTV on {primaryKeyword}
                      </h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span className="font-medium">Only $15/month</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> 20,000+ Live Channels</li>
                        <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> No contracts, cancel anytime</li>
                      </ul>
                    </div>
                  </div>

                  <Card id="requirements" className="not-prose my-8 scroll-mt-20">
                    <CardHeader>
                      <CardTitle>What You'll Need</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 my-0">
                        <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> A compatible {primaryKeyword}</li>
                        <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> A stable internet connection</li>
                        <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> An active IPTV subscription</li>
                        <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> Your M3U link or credentials</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Pro Tip Box */}
                  <div className="my-8 p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg not-prose">
                    <p className="text-sm m-0">
                      <strong>💡 Pro Tip:</strong> For the best streaming experience on {primaryKeyword}, we recommend using a wired Ethernet connection if possible. This ensures buffer-free 4K streaming!
                    </p>
                  </div>

                  <h2 id="steps" className="font-headline text-3xl scroll-mt-20">Step-by-Step Installation Guide for {primaryKeyword}</h2>
                  <p>Follow these simple steps to get our IPTV Provider running on your {primaryKeyword}. The entire process should only take a few minutes.</p>
                  <div className="space-y-8 mt-8">
                    {steps.map((step, index) => (
                      <div key={index} id={`step-${index + 1}`} className="flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</div>
                          {index < steps.length - 1 && <div className="w-px flex-grow bg-border" />}
                        </div>
                        <div>
                          <h3 className="font-headline text-2xl font-semibold mt-1 mb-2">{step.title}</h3>
                          <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: step.description }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {extraSections?.map(section => (
                    <div key={section.id} className="my-12">
                      <h2 className="font-headline text-3xl">{section.title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    </div>
                  ))}

                  <div className="my-16 p-8 bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-2xl border border-primary/20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    <h3 className="font-headline text-3xl font-bold mb-4">Ready to Transform Your {primaryKeyword}?</h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      You've set up the device – now unlock its full potential. Get instant access to 20,000+ channels and 60,000+ movies & shows today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-primary/25 transition-all">
                        <Link href="/pricing">Get Instant Access Now</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                        <Link href="/iptv-free-trial">Start Free 24h Trial</Link>
                      </Button>
                    </div>
                    <p className="mt-6 text-xs text-muted-foreground">
                      <span className="text-green-500">●</span> Instant delivery via email • 24/7 Support • 7-Day Money Back Guarantee
                    </p>
                  </div>

                  {/* Related Devices */}
                  <div id="related" className="not-prose my-12 scroll-mt-20">
                    <h2 className="font-headline text-3xl mb-6">Related Setup Guides</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* We need to fetch related posts asynchronously. 
                          Ideally, this should be a server component or use the server function directly if this is a server page. 
                          Since this is a Server Component, we can import the logic directly. 
                      */}
                      {(await import('@/lib/linking')).getRelatedPosts(id, 4).then(related => related.map((device) => (
                        <Link
                          key={device.id}
                          href={`/devices/${device.id}`}
                          className="group p-4 border-2 rounded-lg hover:border-primary/40 transition-all hover:shadow-md"
                        >
                          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                            {device.primaryKeyword}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {device.description}
                          </p>
                        </Link>
                      )))}
                    </div>
                    <div className="mt-4 text-center">
                      <Button asChild variant="outline">
                        <Link href="/devices">View All Device Guides</Link>
                      </Button>
                    </div>
                  </div>

                  {faqs && (
                    <>
                      <h2 id="faq" className="font-headline text-3xl scroll-mt-20">Frequently Asked Questions</h2>
                      <Accordion type="single" collapsible>
                        {faqs.map((faq, i) => (
                          <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>

                            <AccordionContent>
                              <p>{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </>
                  )}
                </div>
              </div>
              <aside className="lg:col-span-1 space-y-8">
                {image && image.blurDataURL && (
                  <Card>
                    <CardContent className="p-0">
                      <Image
                        src={image.imageUrl}
                        alt={`${primaryKeyword} - ${title}`}
                        width={image.width || 600}
                        height={image.height || 400}
                        data-ai-hint={image.imageHint}
                        priority
                        className="object-cover rounded-lg w-full h-auto"
                        placeholder="blur"
                        blurDataURL={image.blurDataURL}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </CardContent>
                  </Card>
                )}
                <InternalLinks currentId={id} />
              </aside>
            </div>

            {/* Author Bio */}
            <section className="mt-16 max-w-3xl mx-auto border-t pt-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold">
                  IT
                </div>
                <div>
                  <h3 className="font-semibold text-lg">About the IPTV Expert Team</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Our team has been testing and documenting IPTV setup procedures across all major devices since 2018. We've helped thousands of users successfully install IPTV on their {primaryKeyword} and other devices.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Last Updated: {new Date(dateModified).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • Published: {new Date(article.datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </section>

          </article>
        </Container>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return howToArticles.map((article) => ({
    device: article.id,
  }));
}
