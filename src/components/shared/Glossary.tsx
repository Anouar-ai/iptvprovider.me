
import * as React from "react"
import { cn } from "@/lib/utils"

interface GlossaryItem {
    term: string
    definition: string
}

interface GlossaryProps {
    title?: string
    items: GlossaryItem[]
    className?: string
}

export function Glossary({ title = "Key Terminology", items, className }: GlossaryProps) {
    return (
        <div className={cn("my-8 rounded-xl border bg-card p-6 shadow-sm", className)}>
            <h3 className="font-headline text-2xl font-bold mb-6">{title}</h3>
            <dl className="grid gap-6 sm:grid-cols-2">
                {items.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <dt className="font-semibold text-primary text-lg">
                            {item.term}
                        </dt>
                        <dd className="text-muted-foreground text-sm leading-relaxed">
                            {item.definition}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
