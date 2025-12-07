"use client";

import { IPTVProvider } from "@/lib/data/iptv-providers";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Star, TrendingUp } from "lucide-react";
import Link from "next/link";

interface ProviderCardProps {
    provider: IPTVProvider;
    detailed?: boolean;
}

export function ProviderCard({ provider, detailed = false }: ProviderCardProps) {
    return (
        <Card className={`relative ${provider.rank === 1 ? 'border-primary border-2 shadow-lg' : ''}`}>
            {provider.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        {provider.badge}
                    </Badge>
                </div>
            )}

            <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-muted-foreground">#{provider.rank}</span>
                    <CardTitle className="text-2xl">{provider.name}</CardTitle>
                </div>

                <div className="flex items-center justify-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(provider.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                        />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                        {provider.rating} ({provider.reviewCount.toLocaleString()} reviews)
                    </span>
                </div>

                <CardDescription className="text-lg font-semibold">
                    ${provider.price.monthly}/month
                    <span className="text-sm text-muted-foreground ml-2">
                        or ${provider.price.yearly}/year
                    </span>
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Key Features */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span>{provider.features.channels.toLocaleString()}+ channels</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span>{provider.features.vod.toLocaleString()}+ VOD</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {provider.features.quality4K ? (
                            <Check className="h-4 w-4 text-green-500" />
                        ) : (
                            <X className="h-4 w-4 text-red-500" />
                        )}
                        <span>4K Quality</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {provider.features.support247 ? (
                            <Check className="h-4 w-4 text-green-500" />
                        ) : (
                            <X className="h-4 w-4 text-red-500" />
                        )}
                        <span>24/7 Support</span>
                    </div>
                </div>

                {/* Performance Metrics */}
                {detailed && (
                    <div className="space-y-2 pt-4 border-t">
                        <h4 className="font-semibold text-sm">Performance Metrics</h4>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center p-2 bg-muted rounded">
                                <div className="font-bold text-lg text-green-600">{provider.performance.uptime}%</div>
                                <div className="text-muted-foreground">Uptime</div>
                            </div>
                            <div className="text-center p-2 bg-muted rounded">
                                <div className="font-bold text-lg text-blue-600">{provider.performance.freezeRate}%</div>
                                <div className="text-muted-foreground">Freeze Rate</div>
                            </div>
                            <div className="text-center p-2 bg-muted rounded">
                                <div className="font-bold text-lg text-purple-600">{provider.performance.zappingSpeed}s</div>
                                <div className="text-muted-foreground">Zapping</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Pros */}
                <div className="space-y-2">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Pros
                    </h4>
                    <ul className="space-y-1 text-sm">
                        {provider.pros.slice(0, detailed ? undefined : 3).map((pro, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span>{pro}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cons */}
                <div className="space-y-2">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                        <X className="h-4 w-4 text-red-500" />
                        Cons
                    </h4>
                    <ul className="space-y-1 text-sm">
                        {provider.cons.slice(0, detailed ? undefined : 2).map((con, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-red-500 mt-0.5">✗</span>
                                <span>{con}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Best For */}
                <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm">
                        <span className="font-semibold">Best for:</span> {provider.bestFor}
                    </p>
                </div>

                {/* CTA */}
                <Button asChild className="w-full" size="lg" variant={provider.rank === 1 ? "default" : "outline"}>
                    <Link href={provider.website || "/pricing"}>
                        {provider.rank === 1 ? "Get Started Now" : "Learn More"}
                    </Link>
                </Button>

                {provider.trialDays > 0 && (
                    <p className="text-xs text-center text-muted-foreground">
                        {provider.trialDays}-day trial • {provider.refundDays}-day money-back guarantee
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
