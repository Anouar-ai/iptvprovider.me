
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { howToArticles, type HowToContent } from "@/lib/how-to";
import { Check } from "lucide-react";

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
      canonical: `/how-to-work/${article.id}`,
    },
  };
}

export default function HowToPage({ params }: { params: { device: string } }) {
  const article = howToArticles.find((p) => p.id === params.device);

  if (!article) {
    notFound();
  }

  return (
    <main className="py-16 sm:py-24">
      <Container>
        <article>
          <header className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              {article.description}
            </p>
          </header>
          
          <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
            <div className="space-y-8">
              {article.steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</div>
                        {index < article.steps.length - 1 && <div className="w-px flex-grow bg-border" />}
                    </div>
                    <div>
                        <h2 className="font-headline text-2xl font-semibold mt-1 mb-2">{step.title}</h2>
                        <p className="text-muted-foreground">{step.description}</p>
                    </div>
                </div>
              ))}
            </div>

            <div className="my-12 rounded-lg bg-primary/10 p-6 text-center">
              <h3 className="font-headline text-2xl font-bold">Ready to Start Watching on Your {article.id.charAt(0).toUpperCase() + article.id.slice(1)}?</h3>
              <p className="mt-2 text-muted-foreground">Get your premium IPTV subscription today and unlock thousands of channels!</p>
              <Button asChild className="mt-4">
                  <Link href="/iptv-subscription">Get Your Subscription Now</Link>
              </Button>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/devices" className="text-primary font-semibold hover:underline">
                &larr; Back to All Devices
            </Link>
          </div>

        </article>
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  return howToArticles.map((article) => ({
    device: article.id,
  }));
}
