"use client";

import { motion } from "motion/react";

type SectionIntroProps = {
  index: string;
  label: string;
  heading: string;
};

const viewport = { once: true, margin: "-100px" } as const;

export default function SectionIntro({ index, label, heading }: SectionIntroProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative block w-fit"
      >
        <span className="font-hud text-xs uppercase tracking-[0.3em] text-magenta">
          {`${index} // ${label}`}
        </span>
        <motion.span
          aria-hidden
          initial={{ opacity: 0.9, scale: 0.5 }}
          whileInView={{ opacity: 0, scale: 2.6 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pointer-events-none absolute -left-3 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-amber/70 blur-md"
        />
      </motion.div>

      <div className="relative mt-3 block w-fit">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl text-text-hi sm:text-4xl"
        >
          {heading}
        </motion.h2>
        <motion.span
          aria-hidden
          initial={{ scaleX: 0, opacity: 1 }}
          whileInView={{ scaleX: 1, opacity: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-x-0 -bottom-1 h-0.5 origin-left bg-gradient-to-r from-cyan via-magenta to-transparent"
        />
      </div>
    </div>
  );
}
