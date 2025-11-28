
import { CheckCircle, Package, Tv } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";

const steps = [
    {
        icon: Package,
        title: "Choose Your Plan",
        description: "Select the subscription plan that best fits your needs, from one month to our best-value 12-month package."
    },
    {
        icon: CheckCircle,
        title: "Get Instant Activation",
        description: "Your login credentials and setup instructions are sent to your email immediately after payment confirmation."
    },
    {
        icon: Tv,
        title: "Start Watching",
        description: "Use our easy-to-follow guides to set up the service on your favorite device and start streaming in minutes."
    }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-muted/30 dark:bg-card/50">
      <Container>
        <SectionHeader
          title="Get Started in 3 Simple Steps"
          subtitle="We've made the process of getting world-class entertainment as simple as possible. Follow these steps and you'll be watching in no time."
        />
        <Reveal>
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
             <div className="absolute top-1/2 left-0 hidden w-full -translate-y-1/2 md:block">
                <div className="w-full border-t-2 border-dashed border-border" />
            </div>
            {steps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background ring-4 ring-muted/30 dark:ring-card/50 shadow-md">
                        <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 font-headline text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
