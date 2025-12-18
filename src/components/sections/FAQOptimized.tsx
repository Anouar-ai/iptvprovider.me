/**
 * SEO-Optimized FAQ Component for "People Also Ask" (PAA)
 * 
 * Optimizations for Google PAA:
 * 1. Uses semantic HTML with proper heading hierarchy (h2/h3)
 * 2. Includes itemScope/itemType for inline microdata (backup for JSON-LD)
 * 3. Questions start with trigger words (What, How, Why, Is, Can, Does)
 * 4. Answers are concise (40-60 words) with expandable details
 * 5. Uses details/summary for native accordion (better accessibility)
 */

import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
    shortAnswer?: string; // Concise answer for PAA (40-60 words)
}

interface FAQOptimizedProps {
    faqs: FAQItem[];
    title?: string;
    subtitle?: string;
    showSchema?: boolean;
    className?: string;
}

export function FAQOptimized({
    faqs,
    title = "Frequently Asked Questions",
    subtitle = "Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.",
    className,
}: FAQOptimizedProps) {
    return (
        <section
            id="faq"
            className={cn("py-16 sm:py-24", className)}
            itemScope
            itemType="https://schema.org/FAQPage"
        >
            <Container>
                <SectionHeader title={title} subtitle={subtitle} />
                <Reveal>
                    <div className="mx-auto max-w-3xl space-y-4">
                        {faqs.map((faq, i) => (
                            <FAQAccordionItem key={i} faq={faq} index={i} />
                        ))}
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}

function FAQAccordionItem({ faq, index }: { faq: FAQItem; index: number }) {
    // Use shortAnswer for PAA if available, otherwise truncate
    const paaAnswer = faq.shortAnswer || faq.answer.slice(0, 300);

    return (
        <details
            className="group rounded-lg border border-border bg-card transition-all hover:border-primary/50"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
        >
            <summary
                className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium transition-colors hover:bg-muted/50 [&::-webkit-details-marker]:hidden"
                aria-controls={`faq-answer-${index}`}
            >
                {/* Question with semantic h3 for SEO (visually styled like regular text) */}
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
                id={`faq-answer-${index}`}
                className="px-6 pb-4 pt-2"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
            >
                {/* Main answer text with semantic markup */}
                <p className="text-muted-foreground leading-relaxed" itemProp="text">
                    {faq.answer}
                </p>
            </div>

            {/* Hidden structured data for PAA crawlers */}
            <meta itemProp="name" content={faq.question} />
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer" style={{ display: 'none' }}>
                <meta itemProp="text" content={paaAnswer} />
            </div>
        </details>
    );
}

/**
 * Standalone FAQ Section with built-in schema
 * Use this when you need a complete FAQ section with automatic schema injection
 */
export function FAQSection({
    faqs,
    title,
    subtitle,
    sectionId = "faq",
    className,
}: FAQOptimizedProps & { sectionId?: string }) {
    return (
        <>
            <FAQOptimized
                faqs={faqs}
                title={title}
                subtitle={subtitle}
                className={className}
            />
        </>
    );
}

export default FAQOptimized;
