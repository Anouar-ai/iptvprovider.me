"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedUnderlineProps {
    className?: string;
    underlinePath?: string;
    underlineHoverPath?: string;
    underlineDuration?: number;
}

export function AnimatedUnderline({
    className,
    underlinePath = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
    underlineHoverPath = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
    underlineDuration = 1.5,
}: AnimatedUnderlineProps) {
    const pathVariants: Variants = {
        hidden: {
            pathLength: 0,
            opacity: 0,
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: underlineDuration,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.svg
            width="100%"
            height="20"
            viewBox="0 0 300 20"
            className={cn("absolute -bottom-4 left-0", className)}
        >
            <motion.path
                d={underlinePath}
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                    d: underlineHoverPath,
                    transition: { duration: 0.8 },
                }}
            />
        </motion.svg>
    );
}
