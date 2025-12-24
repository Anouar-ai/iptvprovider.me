
"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { plans } from "@/lib/site-data/pricing";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";
import { Badge } from "../ui/badge";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="Choose Your IPTV Provider Package"
          subtitle="Select the perfect plan from one of the best IPTV providers. All plans come with our full feature set."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <Card className={cn(
                "relative flex h-full flex-col transition-all hover:scale-[1.02] bg-card",
                plan.isPopular && "border-2 border-primary shadow-lg shadow-primary/20"
              )}>
                {plan.isPopular && (
                  <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground hover:bg-accent">Best Value</Badge>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground"> / {plan.duration.toLowerCase()}</span>
                  </CardDescription>
                  {plan.price_monthly !== plan.price && (
                    <p className="text-sm text-muted-foreground">
                      Equivalent to ${plan.price_monthly.toFixed(2)}/month
                    </p>
                  )}
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <WhatsAppButton
                    message={`Hi! I'd like to subscribe to the ${plan.name} plan ($${plan.price})`}
                    utm={{
                      source: 'website',
                      medium: 'cta',
                      campaign: 'pricing',
                      content: `plan_${plan.name.toLowerCase().replace(/\s+/g, '_')}`
                    }}
                    variant={plan.isPopular ? "default" : "outline"}
                    className="w-full"
                  >
                    Subscribe Now
                  </WhatsAppButton>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
