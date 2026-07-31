"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";

const letterVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  const name = hero.name.split("");

  return (
    <section
      id="hero"
      className="scanlines relative flex min-h-svh items-center justify-center overflow-hidden px-6"
    >
      {/* Ambient HUD glow field */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-cyan/20 blur-[100px]"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-magenta/20 blur-[110px]"
          animate={{ opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,240,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-hud text-xs uppercase tracking-[0.3em] text-amber"
        >
          {hero.eyebrow}
        </motion.span>

        <h1 className="font-display text-4xl leading-tight text-text-hi sm:text-6xl">
          {name.map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="inline-block text-cyan text-glow-cyan"
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="font-hud text-sm uppercase tracking-widest text-magenta"
        >
          {hero.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="max-w-xl text-base text-text-mid sm:text-lg"
        >
          {hero.tagline}
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="glow-cyan mt-4 rounded-sm border border-cyan/60 bg-panel px-6 py-3 font-hud text-xs uppercase tracking-[0.2em] text-cyan transition-colors hover:bg-cyan/10"
        >
          Press Start ▸ Explore
        </motion.a>
      </div>
    </section>
  );
}
