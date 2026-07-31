import ScrollReveal from "@/components/ScrollReveal";
import SectionIntro from "@/components/SectionIntro";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 bg-panel/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionIntro index="04" label="Quest Log" heading="Experience" />

        <ol className="relative mt-12 flex flex-col gap-10 border-l border-panel-border pl-8">
          {experience.map((entry, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <li className="relative">
                <span
                  aria-hidden
                  className="glow-cyan absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-cyan"
                />
                <span className="font-hud text-xs uppercase tracking-widest text-amber">
                  {entry.period}
                </span>
                <h3 className="mt-1 font-display text-lg text-text-hi sm:text-xl">
                  {entry.title}
                </h3>
                <p className="mt-0.5 text-sm text-magenta">{entry.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-mid sm:text-base">
                  {entry.description}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
