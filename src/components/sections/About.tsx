import ScrollReveal from "@/components/ScrollReveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="font-hud text-xs uppercase tracking-[0.3em] text-magenta">
            01 // Character Profile
          </span>
          <h2 className="mt-3 font-display text-3xl text-text-hi sm:text-4xl">
            {about.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-8 flex flex-col gap-5">
          {about.paragraphs.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-text-mid sm:text-lg">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
