"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TocSection {
    id: string;
    title: string;
    level?: number;
}

interface TableOfContentsProps {
    sections: TocSection[];
    className?: string;
}

export function TableOfContents({ sections, className }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-80px 0px -80% 0px",
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sections]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            // Update URL without triggering navigation
            window.history.pushState(null, "", `#${id}`);
        }
    };

    return (
        <nav
            className={cn(
                "sticky top-20 hidden lg:block max-h-[calc(100vh-5rem)] overflow-auto",
                className
            )}
            aria-label="Table of contents"
        >
            <h2 className="text-sm font-semibold mb-4">On this page</h2>
            <ul className="space-y-2 text-sm border-l border-border">
                {sections.map((section) => (
                    <li
                        key={section.id}
                        className={cn(
                            "pl-4 border-l-2 -ml-px transition-colors",
                            activeId === section.id
                                ? "border-primary text-primary font-medium"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                        )}
                        style={{
                            paddingLeft: section.level ? `${section.level * 0.75}rem` : undefined,
                        }}
                    >
                        <a
                            href={`#${section.id}`}
                            onClick={(e) => handleClick(e, section.id)}
                            className="block hover:text-primary transition-colors"
                        >
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
