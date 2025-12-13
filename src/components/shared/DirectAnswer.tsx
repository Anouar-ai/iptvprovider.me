
import * as React from "react"
import { cn } from "@/lib/utils"
import { Info } from "lucide-react"

interface DirectAnswerProps {
    question: string
    answer: string
    bulletPoints?: string[]
    className?: string
}

export function DirectAnswer({ question, answer, bulletPoints, className }: DirectAnswerProps) {
    return (
        <div
            className={cn(
                "my-8 rounded-lg border-l-4 border-primary bg-muted/30 p-6",
                className
            )}
            itemScope
            itemType="https://schema.org/QAPage"
        >
            <div
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
            >
                <div className="flex items-start gap-3 mb-3">
                    <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <h2 className="text-xl font-bold font-headline mt-0" itemProp="name">
                        {question}
                    </h2>
                </div>

                <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                >
                    <div itemProp="text">
                        <p className="text-lg leading-relaxed mb-4 text-foreground/90 font-medium">
                            {answer}
                        </p>

                        {bulletPoints && bulletPoints.length > 0 && (
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                {bulletPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
