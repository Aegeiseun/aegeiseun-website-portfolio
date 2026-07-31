import ScrollReveal from "@/components/ScrollReveal";
import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-panel/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <span className="font-hud text-xs uppercase tracking-[0.3em] text-magenta">
            06 // Continue?
          </span>
          <h2 className="mt-3 font-display text-3xl text-text-hi sm:text-4xl">
            Contact
          </h2>
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
          © {new Date().getFullYear()} Aegeiseun
        </p>
      </div>
    </section>
  );
}
