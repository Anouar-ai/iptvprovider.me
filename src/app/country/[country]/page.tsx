
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { allCountries } from "@/lib/countries";
import { Check, Shield, Tv, Zap, MessageCircle, Smartphone } from "lucide-react";
import SemanticContent from "@/components/shared/SemanticContent";
import { FlagIcon } from "@/components/shared/FlagIcon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getCountryPageData } from "@/lib/data/country-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { notFound } from "next/navigation";
import { getCountryById } from "@/lib/countries";


type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countryId } = await params;
  const country = getCountryById(countryId);

  if (!country) {
    notFound();
  }

  const title = `Best IPTV Provider in ${country.name} | Reliable Streaming`;
  const description = `Get the best IPTV Provider in ${country.name} (${country.timezone}). 20,000+ HD/4K channels with instant activation. Language: ${country.language}. Payment in ${country.currency} accepted. 24/7 support for ${country.name} viewers.`;

  return generatePageMetadata({
    title,
    description,
    canonical: `/country/${countryId}`,
  });
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: countryId } = await params;
  const {
    country,
    pageFaqs,
    semanticContent,
    breadcrumbSchema,
    serviceSchema,
    faqSchema
  } = await getCountryPageData(countryId);

  const { name, code } = country;

  return (
    <>
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="service" schema={serviceSchema} />
      <Schema id="faq" schema={faqSchema} />

      <SemanticContent
        primaryEntity={semanticContent.primaryEntity}
        relatedEntities={semanticContent.relatedEntities}
        semanticClusters={semanticContent.semanticClusters}
        contextualKeywords={semanticContent.contextualKeywords}
      />
      <main className="py-16 sm:py-24">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/locations" className="hover:text-primary">Locations</Link>
              </li>
              <li>/</li>
              <li>
                {name}
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl flex items-center justify-center gap-4">
              <FlagIcon countryCode={code} countryName={name} className="h-10 w-10" />
              <span>Premium IPTV Provider in {name}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Experience the best IPTV streaming in {name} with over 20,000 channels, movies, and series in stunning HD & 4K quality. Instant activation and 24/7 support guaranteed.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/pricing">Get Your Plan for {name}</Link>
            </Button>
          </div>

          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us for {name}?</h2>
              <p className="mt-4 text-muted-foreground">We are the top-rated IPTV provider in {name} for a reason. Our service is optimized for viewers in your country, offering unparalleled stability and channel selection.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Tv size={20} className="text-primary" /> Local & International Channels</h3>
                <p className="text-muted-foreground">Get access to all local {name} channels plus thousands of international sports, movies, and news channels.</p>
              </div>
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Zap size={20} className="text-primary" /> Instant Activation</h3>
                <p className="text-muted-foreground">Your IPTV Provider is activated immediately after payment. Start watching in {name} within minutes.</p>
              </div>
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Check size={20} className="text-primary" /> HD/4K Quality</h3>
                <p className="text-muted-foreground">Enjoy a superior viewing experience with crystal clear streaming, perfect for the modern TVs available in {name}.</p>
              </div>
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Shield size={20} className="text-primary" /> Anti-Freeze Technology</h3>
                <p className="text-muted-foreground">Our powerful servers ensure a smooth, buffer-free experience, even during peak times in {name}.</p>
              </div>
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><MessageCircle size={20} className="text-primary" /> 24/7 Support</h3>
                <p className="text-muted-foreground">Our dedicated support team is available 24/7 to assist our customers in {name} with any questions.</p>
              </div>
              <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Smartphone size={20} className="text-primary" /> Works on All Devices</h3>
                <p className="text-muted-foreground">Watch on your Smart TV, Android, iOS, Fire Stick, or computer anywhere in {name}.</p>
              </div>
            </div>
          </section>

          {/* Timezone & Currency Info - Unique per country */}
          <section className="py-8 border-t">
            <div className="mx-auto max-w-3xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-muted/30 rounded-lg dark:bg-card/50">
                  <h3 className="font-headline text-lg font-semibold mb-2">🕐 Service Availability</h3>
                  <p className="text-muted-foreground">Our IPTV service is available 24/7 in {name}. Your timezone is <strong>{country.timezone}</strong>, and our servers ensure optimal streaming at any hour.</p>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg dark:bg-card/50">
                  <h3 className="font-headline text-lg font-semibold mb-2">🌐 Local Language Support</h3>
                  <p className="text-muted-foreground">Service available in <strong>{country.language}</strong> and English. Our interface and customer support accommodate viewers in {name}.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-muted/30 rounded-lg dark:bg-card/50">
                  <h3 className="font-headline text-lg font-semibold mb-2">💳 Payment Methods</h3>
                  <p className="text-muted-foreground">We accept payments in {country.currency} and major international currencies. Pay securely via credit card, PayPal, or cryptocurrency.</p>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg dark:bg-card/50">
                  <h3 className="font-headline text-lg font-semibold mb-2">📱 All Devices Supported</h3>
                  <p className="text-muted-foreground">Watch on Smart TV, Android, iOS, Fire Stick, Roku, or computer. Works perfectly with devices available in {name}.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24 rounded-lg">
            <Container>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">FAQs about IPTV in {name}</h2>
              </div>
              <div className="mx-auto mt-8 max-w-3xl">
                <Accordion type="single" collapsible>
                  {pageFaqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Container>
          </section>

        </Container>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return allCountries.map((country) => ({
    country: country.id,
  }));
}
