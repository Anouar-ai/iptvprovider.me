"use client";

import { IPTVProvider, comparisonMetrics } from "@/lib/data/iptv-providers";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

interface ComparisonTableProps {
    providers: IPTVProvider[];
}

export function ComparisonTable({ providers }: ComparisonTableProps) {
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Provider</TableHead>
                        <TableHead className="text-center">Channels</TableHead>
                        <TableHead className="text-center">VOD</TableHead>
                        <TableHead className="text-center">4K</TableHead>
                        <TableHead className="text-center">Devices</TableHead>
                        <TableHead className="text-center">Uptime</TableHead>
                        <TableHead className="text-center">24/7 Support</TableHead>
                        <TableHead className="text-center">Price/Month</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {providers.map((provider) => (
                        <TableRow key={provider.id} className={provider.rank === 1 ? 'bg-primary/5' : ''}>
                            <TableCell className="font-medium">
                                <div className="flex flex-col gap-1">
                                    <span>{provider.name}</span>
                                    {provider.badge && (
                                        <Badge variant="secondary" className="w-fit text-xs">
                                            {provider.badge}
                                        </Badge>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {provider.features.channels.toLocaleString()}+
                            </TableCell>
                            <TableCell className="text-center">
                                {provider.features.vod.toLocaleString()}+
                            </TableCell>
                            <TableCell className="text-center">
                                {provider.features.quality4K ? (
                                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                                ) : (
                                    <X className="h-5 w-5 text-red-500 mx-auto" />
                                )}
                            </TableCell>
                            <TableCell className="text-center">
                                {provider.features.devices}
                            </TableCell>
                            <TableCell className="text-center">
                                <span className={provider.performance.uptime >= 99 ? 'text-green-600 font-semibold' : ''}>
                                    {provider.performance.uptime}%
                                </span>
                            </TableCell>
                            <TableCell className="text-center">
                                {provider.features.support247 ? (
                                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                                ) : (
                                    <X className="h-5 w-5 text-red-500 mx-auto" />
                                )}
                            </TableCell>
                            <TableCell className="text-center font-semibold">
                                ${provider.price.monthly}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
