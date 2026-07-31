import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionIntro from "@/components/SectionIntro";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionIntro index="01" label="Character Profile" heading={about.heading} />

        <div className="mt-10 grid gap-10 md:grid-cols-[240px_1fr] md:items-start">
          <ScrollReveal>
            <div className="mx-auto w-full max-w-[240px]">
              <div className="glow-cyan scanlines relative aspect-square overflow-hidden rounded-md border-2 border-cyan/70 bg-panel">
                <Image
                  src="/images/jp-portrait.png"
                  alt="Portrait of JP"
                  fill
                  sizes="240px"
                  className="object-cover object-top"
                  priority
                />
                {/* corner brackets */}
                <span className="absolute left-1.5 top-1.5 h-3 w-3 border-l-2 border-t-2 border-amber" />
                <span className="absolute right-1.5 top-1.5 h-3 w-3 border-r-2 border-t-2 border-amber" />
                <span className="absolute bottom-1.5 left-1.5 h-3 w-3 border-b-2 border-l-2 border-amber" />
                <span className="absolute bottom-1.5 right-1.5 h-3 w-3 border-b-2 border-r-2 border-amber" />
              </div>
              <p className="mt-3 text-center font-hud text-[10px] uppercase tracking-widest text-text-mid">
                Lvl 99 // Player Profile
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            {about.paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-text-mid sm:text-lg">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
