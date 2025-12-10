"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface ResponsivePictureProps {
    baseSrc: string;
    alt?: string;
    className?: string;
    sizes?: {
        mobile: { width: number; quality: number };
        tablet: { width: number; quality: number };
        desktop: { width: number; quality: number };
    };
}

export function ResponsivePicture({
    baseSrc,
    alt = "Image",
    className = "",
    sizes = {
        mobile: { width: 420, quality: 91 },
        tablet: { width: 800, quality: 85 },
        desktop: { width: 1200, quality: 70 },
    }
}: ResponsivePictureProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Helper to generate URL. 
    // NOTE: This logic mimics the user's provided example for an image service.
    // If using local images without a loader, this query param might be ignored by the server,
    // but it fulfills the structural request. 
    // For production with local Next.js images, next/image is usually preferred,
    // but this component gives the granular control requested.
    const buildUrl = (width: number, quality: number) => {
        // Check if baseSrc is already an absolute URL or external
        const separator = baseSrc.includes('?') ? '&' : '?';
        return `${baseSrc}${separator}downsize=${width}:*&image-quality=7&output-format=webp&output-quality=${quality}`;
    };

    return (
        <div className={cn("relative w-full overflow-hidden", className)}>
            {/* Loading State */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
                    <span className="sr-only">Loading...</span>
                </div>
            )}

            {/* Error State */}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <span className="text-destructive text-sm">Failed to load</span>
                </div>
            )}

            <picture>
                {/* Mobile */}
                <source
                    media="(max-width: 640px)"
                    srcSet={`
            ${buildUrl(sizes.mobile.width, sizes.mobile.quality)} 1x,
            ${buildUrl(sizes.mobile.width * 2, sizes.mobile.quality - 10)} 2x
          `}
                />

                {/* Tablet */}
                <source
                    media="(max-width: 1024px)"
                    srcSet={`
            ${buildUrl(sizes.tablet.width, sizes.tablet.quality)} 1x,
            ${buildUrl(sizes.tablet.width * 2, sizes.tablet.quality - 10)} 2x
          `}
                />

                {/* Desktop */}
                <source
                    media="(min-width: 1025px)"
                    srcSet={`
            ${buildUrl(sizes.desktop.width, sizes.desktop.quality)} 1x,
            ${buildUrl(sizes.desktop.width * 2, sizes.desktop.quality - 10)} 2x
          `}
                />

                {/* Fallback */}
                <img
                    alt={alt}
                    className={cn(
                        "w-full h-auto object-cover transition-opacity duration-300",
                        isLoading ? 'opacity-0' : 'opacity-100'
                    )}
                    src={buildUrl(sizes.desktop.width, sizes.desktop.quality)}
                    loading="lazy"
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setIsLoading(false);
                        setHasError(true);
                    }}
                />
            </picture>
        </div>
    );
}
