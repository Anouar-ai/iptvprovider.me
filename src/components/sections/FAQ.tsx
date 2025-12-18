/**
 * FAQ Section Component - PAA Optimized
 * 
 * Uses native HTML details/summary for better SEO crawlability
 * Includes semantic microdata as fallback for JSON-LD schema
 */

import { paaOptimizedFaqs } from "@/lib/site-data/faq";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-16 sm:py-24"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <Container>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us."
        />
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-4">
            {paaOptimizedFaqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-card transition-all hover:border-primary/50 open:border-primary/30 open:bg-card/50"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary
                  className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium transition-colors hover:bg-muted/50 [&::-webkit-details-marker]:hidden"
                >
                  <h3
                    className="text-base font-semibold sm:text-lg pr-4"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>

                <div
                  className="px-6 pb-4 pt-2"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-muted-foreground leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
