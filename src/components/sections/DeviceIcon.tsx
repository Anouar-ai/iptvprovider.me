"use client";

import type { IconType } from "react-icons";
import * as siIcons from "react-icons/si";
import * as lucideIcons from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DeviceIconProps {
  name: string;
  iconName: string;
}

const allIcons = { ...siIcons, ...lucideIcons };

export function DeviceIcon({ name, iconName }: DeviceIconProps) {
  const Icon = (allIcons as Record<string, IconType>)[iconName];

  if (!Icon) {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="group flex h-16 w-16 items-center justify-center rounded-lg bg-muted/50 transition-colors hover:bg-primary/10">
            <Icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
