"use client";

import { motion } from "motion/react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionIntro from "@/components/SectionIntro";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionIntro index="03" label="Unlockables" heading="Projects" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const locked = project.status === "in-progress";
            return (
              <ScrollReveal key={project.id} delay={i * 0.08}>
                <motion.div
                  whileHover={locked ? undefined : { y: -6 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden rounded-md border p-6 transition-colors duration-300 ${
                    locked
                      ? "border-panel-border bg-panel/50"
                      : "border-panel-border bg-panel hover:border-cyan/60"
                  }`}
                >
                  {!locked && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(280px circle at var(--x,50%) var(--y,50%), rgba(0,240,255,0.10), transparent 70%)",
                      }}
                    />
                  )}

                  <div className="relative flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg text-text-hi sm:text-xl">
                      {project.title}
                    </h3>
                    <span
                      className={`shrink-0 font-hud text-[10px] uppercase tracking-widest ${
                        locked ? "text-text-mid" : "text-amber"
                      }`}
                    >
                      {locked ? "Locked" : "Unlocked"}
                    </span>
                  </div>

                  <p className="relative mt-3 text-sm text-text-mid sm:text-base">
                    {project.summary}
                  </p>

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-panel-border px-2 py-1 font-hud text-[10px] uppercase tracking-wider text-text-mid"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {locked && (
                    <div
                      aria-hidden
                      className="absolute inset-0 flex items-center justify-center bg-void/60 backdrop-blur-[1px]"
                    >
                      <span className="font-display text-2xl text-text-mid">?</span>
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
