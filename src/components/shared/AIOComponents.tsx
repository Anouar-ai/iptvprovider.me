/**
 * AIO (AI Overview) / GEO (Generative Engine Optimization) Components
 * 
 * These components are designed to maximize selection in:
 * - Google AI Overviews (SGE)
 * - Bing Copilot answers
 * - Perplexity AI citations
 * - ChatGPT web browsing responses
 * 
 * Key optimization patterns:
 * 1. Direct Answer Block - Concise, definitive responses
 * 2. Definition Box - Clear term explanations
 * 3. Comparison Table - Structured data for AI extraction
 * 4. Quick Facts - Scannable bullet points
 * 5. Citation Block - Authoritative source references
 */

import { cn } from "@/lib/utils";
import { CheckCircle2, Info, AlertCircle, Lightbulb, Quote, BookOpen } from "lucide-react";

// ============================================================================
// 1. DIRECT ANSWER BLOCK
// For questions like "What is...", "How to...", "Best..."
// ============================================================================
interface DirectAnswerProps {
    question: string;
    answer: string;
    bulletPoints?: string[];
    source?: string;
    className?: string;
}

export function DirectAnswer({
    question,
    answer,
    bulletPoints,
    source,
    className
}: DirectAnswerProps) {
    return (
        <div
            className={cn(
                "my-8 rounded-xl border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent p-6",
                className
            )}
            itemScope
            itemType="https://schema.org/Answer"
            data-speakable="true"
            data-aio="direct-answer"
        >
            <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                        Quick Answer
                    </p>
                    <h3 className="text-lg font-bold text-foreground">{question}</h3>
                </div>
            </div>

            <div itemProp="text">
                <p className="text-base leading-relaxed font-medium text-foreground/90 mb-3">
                    {answer}
                </p>

                {bulletPoints && bulletPoints.length > 0 && (
                    <ul className="list-none space-y-2 mt-4">
                        {bulletPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-primary font-bold">•</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {source && (
                    <p className="mt-4 text-xs text-muted-foreground">
                        Source: <span itemProp="citation">{source}</span>
                    </p>
                )}
            </div>
        </div>
    );
}

// ============================================================================
// 2. DEFINITION BOX
// For clear term definitions that AI can extract
// ============================================================================
interface DefinitionBoxProps {
    term: string;
    definition: string;
    additionalInfo?: string;
    className?: string;
}

export function DefinitionBox({
    term,
    definition,
    additionalInfo,
    className
}: DefinitionBoxProps) {
    return (
        <div
            className={cn(
                "my-6 rounded-lg border border-border bg-card p-5",
                className
            )}
            itemScope
            itemType="https://schema.org/DefinedTerm"
            data-speakable="true"
            data-aio="definition"
        >
            <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    Definition
                </span>
            </div>

            <h4 className="text-xl font-bold mb-2" itemProp="name">
                {term}
            </h4>

            <p className="text-muted-foreground leading-relaxed" itemProp="description">
                <strong className="text-foreground">{term}</strong> {definition}
            </p>

            {additionalInfo && (
                <p className="mt-3 text-sm text-muted-foreground/80 border-t border-border pt-3">
                    {additionalInfo}
                </p>
            )}
        </div>
    );
}

// ============================================================================
// 3. QUICK FACTS BOX
// For scannable information that AIs love to cite
// ============================================================================
interface QuickFactsProps {
    title?: string;
    facts: { label: string; value: string }[];
    className?: string;
}

export function QuickFacts({
    title = "Quick Facts",
    facts,
    className
}: QuickFactsProps) {
    return (
        <div
            className={cn(
                "my-6 rounded-lg border border-primary/20 bg-primary/5 p-5",
                className
            )}
            data-speakable="true"
            data-aio="quick-facts"
        >
            <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-primary" />
                <h4 className="font-bold text-foreground">{title}</h4>
            </div>

            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {facts.map((fact, index) => (
                    <div key={index} className="space-y-1">
                        <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            {fact.label}
                        </dt>
                        <dd className="text-sm font-semibold text-foreground">
                            {fact.value}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

// ============================================================================
// 4. KEY TAKEAWAY
// Highlighted important information for AI extraction
// ============================================================================
interface KeyTakeawayProps {
    children: React.ReactNode;
    variant?: "tip" | "important" | "warning";
    className?: string;
}

export function KeyTakeaway({
    children,
    variant = "tip",
    className
}: KeyTakeawayProps) {
    const variants = {
        tip: {
            icon: Lightbulb,
            label: "Key Takeaway",
            border: "border-emerald-500",
            bg: "bg-emerald-500/10",
            iconColor: "text-emerald-500",
        },
        important: {
            icon: AlertCircle,
            label: "Important",
            border: "border-amber-500",
            bg: "bg-amber-500/10",
            iconColor: "text-amber-500",
        },
        warning: {
            icon: AlertCircle,
            label: "Warning",
            border: "border-red-500",
            bg: "bg-red-500/10",
            iconColor: "text-red-500",
        },
    };

    const config = variants[variant];
    const Icon = config.icon;

    return (
        <div
            className={cn(
                "my-6 rounded-lg border-l-4 p-4",
                config.border,
                config.bg,
                className
            )}
            data-speakable="true"
            data-aio="key-takeaway"
        >
            <div className="flex items-start gap-3">
                <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", config.iconColor)} />
                <div>
                    <p className={cn("text-xs font-semibold uppercase tracking-wide mb-1", config.iconColor)}>
                        {config.label}
                    </p>
                    <div className="text-sm text-foreground/90 leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// 5. AUTHORITY CITATION
// Reference to authoritative sources for credibility
// ============================================================================
interface CitationProps {
    quote: string;
    source: string;
    sourceUrl?: string;
    className?: string;
}

export function Citation({
    quote,
    source,
    sourceUrl,
    className
}: CitationProps) {
    return (
        <blockquote
            className={cn(
                "my-6 rounded-lg border border-border bg-muted/30 p-5",
                className
            )}
            itemScope
            itemType="https://schema.org/Quotation"
            data-aio="citation"
        >
            <div className="flex gap-3">
                <Quote className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                    <p className="italic text-foreground/90 leading-relaxed" itemProp="text">
                        "{quote}"
                    </p>
                    <footer className="mt-3 text-sm">
                        <span className="text-muted-foreground">— </span>
                        {sourceUrl ? (
                            <a
                                href={sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                                itemProp="isBasedOn"
                            >
                                {source}
                            </a>
                        ) : (
                            <cite className="text-muted-foreground not-italic" itemProp="isBasedOn">
                                {source}
                            </cite>
                        )}
                    </footer>
                </div>
            </div>
        </blockquote>
    );
}

// ============================================================================
// 6. COMPARISON TABLE
// Structured comparison for AI extraction
// ============================================================================
interface ComparisonTableProps {
    title?: string;
    headers: string[];
    rows: string[][];
    highlightColumn?: number;
    className?: string;
}

export function ComparisonTable({
    title,
    headers,
    rows,
    highlightColumn,
    className
}: ComparisonTableProps) {
    return (
        <div
            className={cn("my-6 overflow-x-auto", className)}
            data-aio="comparison-table"
        >
            {title && (
                <h4 className="font-bold text-lg mb-3">{title}</h4>
            )}
            <table className="w-full border-collapse rounded-lg overflow-hidden border border-border">
                <thead>
                    <tr className="bg-muted">
                        {headers.map((header, i) => (
                            <th
                                key={i}
                                className={cn(
                                    "px-4 py-3 text-left text-sm font-semibold",
                                    highlightColumn === i && "bg-primary/10 text-primary"
                                )}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={cn(
                                "border-t border-border",
                                rowIndex % 2 === 0 ? "bg-card" : "bg-muted/30"
                            )}
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={cn(
                                        "px-4 py-3 text-sm",
                                        highlightColumn === cellIndex && "bg-primary/5 font-medium"
                                    )}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// ============================================================================
// 7. TL;DR SUMMARY
// Perfect for AI Overview extraction
// ============================================================================
interface TLDRProps {
    summary: string;
    className?: string;
}

export function TLDR({ summary, className }: TLDRProps) {
    return (
        <div
            className={cn(
                "my-6 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-5 border border-primary/20",
                className
            )}
            data-speakable="true"
            data-aio="tldr"
        >
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                TL;DR
            </p>
            <p className="text-base font-medium text-foreground leading-relaxed">
                {summary}
            </p>
        </div>
    );
}

export default {
    DirectAnswer,
    DefinitionBox,
    QuickFacts,
    KeyTakeaway,
    Citation,
    ComparisonTable,
    TLDR,
};
