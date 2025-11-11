
"use client";

import { motion } from "framer-motion";
import { NetflixLogo, DisneyPlusLogo, AppleTVLogo, HBOLogo, ParamountPlusLogo, StarzLogo } from "../shared/BrandLogos";

const logos = [
  { id: "netflix", component: NetflixLogo },
  { id: "disneyplus", component: DisneyPlusLogo },
  { id: "appletv", component: AppleTVLogo },
  { id: "hbo", component: HBOLogo },
  { id: "paramount", component: ParamountPlusLogo },
  { id: "starz", component: StarzLogo },
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

export function LogoCarousel() {
  return (
    <section className="py-12 sm:py-16">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Including Content From All Major Streaming Platforms
        </p>
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
              x: ["0%", "-25%"],
              transition: {
                ease: "linear",
                duration: 30,
                repeat: Infinity,
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0"
                style={{ flexBasis: `calc(100% / ${logos.length * 2})` }}
              >
                <div className="flex h-12 w-full flex-col items-center justify-center rounded-xl p-4 transition-all duration-300 md:h-16">
                  <div className="relative flex h-8 w-auto items-center justify-center text-muted-foreground md:h-10">
                      <logo.component />
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
