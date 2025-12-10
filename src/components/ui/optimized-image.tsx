"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
    /** Show skeleton loading animation while image loads */
    showSkeleton?: boolean;
    /** Custom skeleton className */
    skeletonClassName?: string;
    /** Blur data URL for placeholder (uses default gray if not provided) */
    blurDataURL?: string;
    /** Container className */
    containerClassName?: string;
}

const DEFAULT_BLUR = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxwYXRoIGQ9Ik0wIDBoOHY1SDB6IiBmaWxsPSIjMWExYTFhIi8+PC9zdmc+";

export function OptimizedImage({
    src,
    alt,
    className,
    containerClassName,
    showSkeleton = true,
    skeletonClassName,
    blurDataURL = DEFAULT_BLUR,
    fill,
    width,
    height,
    sizes,
    priority,
    ...props
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={cn("relative overflow-hidden", containerClassName)}>
            {/* Skeleton Loading Animation */}
            {showSkeleton && isLoading && !hasError && (
                <div
                    className={cn(
                        "absolute inset-0 bg-muted animate-pulse rounded-inherit",
                        skeletonClassName
                    )}
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                </div>
            )}

            {/* Error State */}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-inherit">
                    <span className="text-muted-foreground text-xs">Failed to load</span>
                </div>
            )}

            {/* Actual Image */}
            <Image
                src={src}
                alt={alt}
                className={cn(
                    "transition-opacity duration-500 ease-in-out",
                    isLoading ? "opacity-0" : "opacity-100",
                    className
                )}
                fill={fill}
                width={!fill ? width : undefined}
                height={!fill ? height : undefined}
                sizes={sizes}
                priority={priority}
                placeholder="blur"
                blurDataURL={blurDataURL}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
                {...props}
            />
        </div>
    );
}

// Gallery component for multiple images
interface ImageGalleryProps {
    images: Array<{
        src: string;
        alt: string;
        blurDataURL?: string;
    }>;
    columns?: 2 | 3 | 4;
    gap?: 'sm' | 'md' | 'lg';
    aspectRatio?: 'square' | 'video' | 'portrait';
}

export function ImageGallery({
    images,
    columns = 3,
    gap = 'md',
    aspectRatio = 'square'
}: ImageGalleryProps) {
    const gapClasses = {
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6'
    };

    const columnClasses = {
        2: 'grid-cols-2',
        3: 'grid-cols-2 md:grid-cols-3',
        4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    };

    const aspectClasses = {
        square: 'aspect-square',
        video: 'aspect-video',
        portrait: 'aspect-[3/4]'
    };

    return (
        <div className={cn("grid", columnClasses[columns], gapClasses[gap])}>
            {images.map((image, index) => (
                <div key={index} className={cn("relative", aspectClasses[aspectRatio])}>
                    <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-lg"
                        blurDataURL={image.blurDataURL}
                        sizes={`(max-width: 768px) 50vw, ${100 / columns}vw`}
                    />
                </div>
            ))}
        </div>
    );
}
