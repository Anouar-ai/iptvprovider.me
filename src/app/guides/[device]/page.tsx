import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { howToArticles } from "@/lib/how-to";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

type Props = {
  params: { device: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = howToArticles.find((p) => p.id === params.device);

  if (!article) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: `${article.title} | IPTV Service`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `/guides/${article.id}`,
    },
  };
}

export default function HowToPage({ params }: { params: { device: string } }) {
  const article = howToArticles.find((p) => p.id === params.device);

  if (!article) {
    notFound();
  }

  const deviceImage = PlaceHolderImages.find(img => img.id === article.id);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": article.title,
    "description": article.description,
    "image": deviceImage ? {
        "@type": "ImageObject",
        "url": deviceImage.imageUrl,
        "width": deviceImage.width,
        "height": deviceImage.height
    } : undefined,
    "step": article.steps.map((step, index) => ({
      "@type": "HowToStep",
      "name": step.title,
      "text": step.description,
      "url": `${process.env.NEXT_PUBLIC_BASE_URL}/guides/${article.id}#step-${index + 1}`,
      "position": index + 1,
    })),
    "totalTime": "PT5M",
  };

  const faqSchema = article.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPTV Service Subscription",
    "description": `Our premium IPTV service is fully compatible with ${article.id.replace('-', ' ')} devices. Follow our guide to get set up.`,
    "brand": {
      "@type": "Brand",
      "name": "IPTV Service"
    },
    "offers": {
        "@type": "Offer",
        "price": "14.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "/pricing"
    }
  }


  return (
    <>
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
                    <span itemProp="name">{article.title}</span>
                    <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>
          <article>
            <header className="mb-12 text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                {article.description}
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                      <h2 className="font-headline text-3xl">Step-by-Step Installation Guide</h2>
                      <p>Follow these simple steps to get our IPTV service running on your {article.id.replace('-', ' ')}. The entire process should only take a few minutes.</p>
                      <div className="space-y-8 mt-8">
                      {article.steps.map((step, index) => (
                          <div key={index} id={`step-${index + 1}`} className="flex gap-6">
                              <div className="flex flex-col items-center">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</div>
                                  {index < article.steps.length - 1 && <div className="w-px flex-grow bg-border" />}
                              </div>
                              <div>
                                  <h3 className="font-headline text-2xl font-semibold mt-1 mb-2">{step.title}</h3>
                                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: step.description }} />
                              </div>
                          </div>
                      ))}
                      </div>

                      {article.extraSections?.map(section => (
                        <div key={section.id} className="my-12">
                            <h2 className="font-headline text-3xl">{section.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                      ))}


                      <div className="my-12 rounded-lg bg-primary/10 p-6 text-center">
                        <h3 className="font-headline text-2xl font-bold">Ready to Start Watching on Your {article.id.charAt(0).toUpperCase() + article.id.slice(1).replace('-', ' ')}?</h3>
                        <p className="mt-2 text-muted-foreground">Get your premium IPTV subscription today and unlock thousands of channels!</p>
                        <Button asChild className="mt-4">
                            <Link href="/pricing">Get Your Subscription Now</Link>
                        </Button>
                      </div>

                      {article.faqs && (
                        <>
                            <h2 className="font-headline text-3xl">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible>
                                {article.faqs.map((faq, i) => (
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
                          <CardTitle>What You'll Need</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="space-y-3">
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> A compatible {article.id.replace('-', ' ')}</li>
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> A stable internet connection</li>
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> An active IPTV subscription</li>
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> Your M3U link or credentials</li>
                          </ul>
                      </CardContent>
                  </Card>

                  {deviceImage && (
                      <Card>
                      <CardContent className="p-0">
                          <div className="relative h-64 w-full">
                          <Image
                              src={deviceImage.imageUrl}
                              alt={`A person using a ${article.id.replace('-', ' ')} to watch IPTV`}
                              data-ai-hint={deviceImage.imageHint}
                              fill
                              className="object-cover rounded-lg"
                          />
                          </div>
                      </CardContent>
                  </Card>
                  )}
                 
              </aside>
            </div>

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
