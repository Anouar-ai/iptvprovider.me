

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { howToArticles } from "@/lib/how-to";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { getRelatedPosts } from "@/lib/linking";
import InternalLinks from "@/components/shared/InternalLinks";
import type { Post } from "@/lib/linking";


type Props = {
  params: { device: string; };
};

function StructuredData({ article }: { article: Post }) {
    const { id, title, description, steps, faqs, image, datePublished, dateModified, wikidataId, primaryKeyword } = article;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://digitallizard-iptv.vercel.app';

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image?.imageUrl,
        datePublished: datePublished,
        dateModified: dateModified,
        author: {
            '@type': 'Organization',
            name: 'DigitalLizard IPTV',
        },
        publisher: {
            '@type': 'Organization',
            name: 'DigitalLizard IPTV',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/guides/${id}`,
        },
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: title,
        description: description,
        image: image ? {
            "@type": "ImageObject",
            "url": image.imageUrl,
            "width": image.width,
            "height": image.height
        } : undefined,
        step: steps.map((step, index) => ({
            "@type": "HowToStep",
            name: step.title,
            text: step.description,
            url: `${baseUrl}/guides/${id}#step-${index + 1}`,
            position: index + 1,
        })),
        totalTime: "PT5M",
        about: wikidataId ? {
            "@type": "Thing",
            "name": primaryKeyword,
            "sameAs": `https://www.wikidata.org/wiki/${wikidataId}`
        } : undefined
    };

    const faqSchema = faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "IPTV Service Subscription",
        description: `Our premium IPTV service is fully compatible with ${article.primaryKeyword}. Follow our guide to get set up.`,
        brand: {
            "@type": "Brand",
            name: "IPTV Service"
        },
        offers: {
            "@type": "Offer",
            price: "14.99",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "/pricing"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${baseUrl}/`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Guides",
                "item": `${baseUrl}/guides`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": title,
                "item": `${baseUrl}/guides/${id}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            {faqSchema && <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = howToArticles.find((p) => p.id === params.device);

  if (!article) {
    return {
      title: "Guide Not Found",
    };
  }

  const { title, description, keywords, image } = article;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      images: image ? [{ url: image.imageUrl }] : [],
    },
    alternates: {
      canonical: `/guides/${params.device}`,
    },
  };
}

export default async function HowToPage({ params }: { params: { device: string }}) {
  const article = howToArticles.find((p) => p.id === params.device);

  if (!article) {
    notFound();
  }
  
  const relatedPosts = await getRelatedPosts(params.device);
  const relatedLinks = relatedPosts.map(post => ({
    href: `/guides/${post.id}`,
    title: post.title,
    keyword: post.title,
  }));

  const { title, description, steps, extraSections, faqs, image, primaryKeyword } = article;

  return (
    <>
      <StructuredData article={article} />
      <main className="py-16 sm:py-24">
        <Container>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
              <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/" itemProp="item" className="hover:text-primary">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li>/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/guides" itemProp="item" className="hover:text-primary">
                    <span itemProp="name">Guides</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                 <li>/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <span itemProp="name">{title}</span>
                    <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>
          <article itemScope itemType="https://schema.org/Article">
            <header className="mb-12 text-center">
              <h1 itemProp="headline" className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                {description}
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                  <div itemProp="articleBody" className="prose prose-lg dark:prose-invert max-w-none">
                      <h2 className="font-headline text-3xl">Step-by-Step Installation Guide for {primaryKeyword}</h2>
                      <p>This guide provides the direct steps to get our IPTV service running on your {primaryKeyword}. The process takes about 5 minutes.</p>
                      <div className="space-y-8 mt-8">
                      {steps.map((step, index) => (
                          <div key={index} id={`step-${index + 1}`} className="flex gap-6">
                              <div className="flex flex-col items-center">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</div>
                                  {index < steps.length - 1 && <div className="w-px flex-grow bg-border" />}
                              </div>
                              <div>
                                  <h3 className="font-headline text-2xl font-semibold mt-1 mb-2">{step.title}</h3>
                                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: step.description }} />
                              </div>
                          </div>
                      ))}
                      </div>

                      {extraSections?.map(section => (
                        <div key={section.id} className="my-12">
                            <h2 className="font-headline text-3xl">{section.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                      ))}

                      <div className="my-12 rounded-lg bg-primary/10 p-6 text-center">
                        <h3 className="font-headline text-2xl font-bold">Get Your Subscription for {primaryKeyword}</h3>
                        <p className="mt-2 text-muted-foreground">Purchase a premium IPTV plan to unlock thousands of channels instantly.</p>
                        <Button asChild className="mt-4">
                            <Link href="/pricing">View Subscription Plans</Link>
                        </Button>
                      </div>

                      {faqs && (
                        <>
                            <h2 className="font-headline text-3xl">Frequently Asked Questions about {primaryKeyword} IPTV</h2>
                            <Accordion type="single" collapsible>
                                {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                    <AccordionTrigger itemProp="name">{faq.question}</AccordionTrigger>
                                    <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p itemProp="text">{faq.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                ))}
                            </Accordion>
                        </>
                      )}
                  </div>
              </div>
              <aside className="lg:col-span-1 space-y-8">
                   <Card>
                      <CardHeader>
                          <CardTitle>Installation Requirements</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="space-y-3">
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> A compatible {primaryKeyword}</li>
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> A stable internet connection (&gt;25 Mbps)</li>
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> An active IPTV subscription</li>
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> Your M3U link or Xtream Code credentials</li>
                          </ul>
                      </CardContent>
                  </Card>

                  {image && (
                      <Card>
                      <CardContent className="p-0">
                          <div className="relative h-64 w-full">
                          <Image
                              src={image.imageUrl}
                              alt={`${primaryKeyword} - ${title}`}
                              data-ai-hint={image.imageHint}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover rounded-lg"
                          />
                          </div>
                      </CardContent>
                  </Card>
                  )}
                  <InternalLinks relatedLinks={relatedLinks} />
              </aside>
            </div>

             <section id="final-checklist" className="mt-16 border-t pt-12">
              <h2 className="font-headline text-3xl text-center">Final Checklist for Your {primaryKeyword} IPTV Setup</h2>
              <p className="text-center text-muted-foreground mt-2">Ensure you have completed these steps for a successful installation.</p>
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <li className="rounded-lg border bg-card p-4">
                  <Check className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">App Installed</h3>
                  <p className="text-sm text-muted-foreground">The correct IPTV player app is installed on your {primaryKeyword}.</p>
                </li>
                <li className="rounded-lg border bg-card p-4">
                  <Check className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Credentials Entered</h3>
                  <p className="text-sm text-muted-foreground">You have accurately entered your username, password, and server URL.</p>
                </li>
                <li className="rounded-lg border bg-card p-4">
                  <Check className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Content Loaded</h3>
                  <p className="text-sm text-muted-foreground">Channels and VOD have successfully loaded in the app.</p>
                </li>
              </ul>
              <div className="text-center mt-8">
                  <Button asChild>
                    <Link href="/pricing">Get Your IPTV Subscription</Link>
                  </Button>
              </div>
            </section>

            <div className="text-center mt-16">
              <Link href="/guides" className="text-primary font-semibold hover:underline">
                  &larr; Back to All Guides
              </Link>
            </div>

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
