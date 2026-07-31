import ScrollReveal from "@/components/ScrollReveal";
import SectionIntro from "@/components/SectionIntro";
import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-panel/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <SectionIntro index="06" label="Continue?" heading="Contact" />
        <ScrollReveal delay={0.15}>
          <p className="mt-4 text-base text-text-mid sm:text-lg">
            Open to new projects and opportunities — reach out directly.
          </p>
        </ScrollReveal>

        {/*
          No contact form yet. When the Resend-powered form ships, add it as
          its own component here (e.g. <ContactForm />) alongside these direct
          links — this section's layout/props don't need to change.
        */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${contact.email}`}
              className="glow-cyan w-full rounded-sm border border-cyan/60 bg-panel px-6 py-3 font-hud text-xs uppercase tracking-[0.2em] text-cyan transition-colors hover:bg-cyan/10 sm:w-auto"
            >
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-magenta w-full rounded-sm border border-magenta/60 bg-panel px-6 py-3 font-hud text-xs uppercase tracking-[0.2em] text-magenta transition-colors hover:bg-magenta/10 sm:w-auto"
            >
              LinkedIn ▸
            </a>
          </div>
        </ScrollReveal>

        <p className="mt-10 font-hud text-[10px] uppercase tracking-widest text-text-mid">
          © {new Date().getFullYear()} JP
        </p>
      </div>
    </section>
  );
}
