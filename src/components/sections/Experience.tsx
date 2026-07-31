import ScrollReveal from "@/components/ScrollReveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-panel/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="font-hud text-xs uppercase tracking-[0.3em] text-magenta">
            04 // Quest Log
          </span>
          <h2 className="mt-3 font-display text-3xl text-text-hi sm:text-4xl">
            Experience
          </h2>
        </ScrollReveal>

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
