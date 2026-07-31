import ScrollReveal from "@/components/ScrollReveal";
import SectionIntro from "@/components/SectionIntro";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionIntro index="05" label="Party Reviews" heading="Testimonials" />

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-md border border-panel-border bg-panel p-6">
                <blockquote className="text-sm leading-relaxed text-text-hi sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-hud text-xs uppercase tracking-wider text-cyan">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-xs text-text-mid">{testimonial.role}</p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
