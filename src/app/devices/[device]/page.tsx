
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
  if (!article) return undefined;

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
      offerCount: plans.length.toString(),
    }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${baseUrl}/` },
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
                {title}
              </li>
            </ol>
          </nav>
          <article>
            <header className="mb-8 text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                {description}
              </p>
              <div className="mt-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {totalTimeInMinutes && (
                  <div className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Estimated time: {totalTimeInMinutes} minutes</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <span>Updated:</span>
                  <time dateTime={dateModified} suppressHydrationWarning>{new Date(dateModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
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

                  <div className="my-12 rounded-lg bg-primary/10 p-6 text-center">
                    <h3 className="font-headline text-2xl font-bold">Ready to Start Watching on Your {primaryKeyword}?</h3>
                    <p className="mt-2 text-muted-foreground">Get your premium IPTV subscription today and unlock thousands of channels!</p>
                    <Button asChild className="mt-4">
                      <Link href="/pricing">Get Your Subscription Now</Link>
                    </Button>
                  </div>

                  {/* Related Devices */}
                  <div id="related" className="not-prose my-12 scroll-mt-20">
                    <h2 className="font-headline text-3xl mb-6">Related Setup Guides</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {howToArticles
                        .filter(a => a.id !== id)
                        .slice(0, 4)
                        .map((device) => (
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
                        ))}
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
