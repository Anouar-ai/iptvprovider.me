
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NetflixLogo, DisneyPlusLogo, AppleTVLogo, HBOLogo, ParamountPlusLogo, StarzLogo, CheckmarkLogo } from "../shared/BrandLogos";

const logos = [
  { id: "netflix", component: NetflixLogo },
  { id: "disneyplus", component: DisneyPlusLogo },
  { id: "appletv", component: AppleTVLogo },
  { id: "hbo", component: HBOLogo },
  { id: "paramount", component: ParamountPlusLogo },
  { id: "starz", component: StarzLogo },
  { id: "checkmark", component: CheckmarkLogo },
];

const duplicatedLogos = [...logos, ...logos];

export function LogoCarousel() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto">
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          }}
        >
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-50%"],
              transition: {
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0"
                style={{ flexBasis: `calc(100% / ${logos.length})` }}
              >
                <div className="flex h-16 w-full flex-col items-center justify-center rounded-xl p-4 transition-all duration-300 md:h-24">
                  <div className="relative flex size-8 items-center justify-center text-muted-foreground md:size-14">
                    <div className="flex size-14 items-center justify-center text-muted-foreground [&>svg]:size-full [&>svg]:object-contain">
                      <logo.component />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
