import ScrollReveal from "@/components/ScrollReveal";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 bg-panel/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <span className="font-hud text-xs uppercase tracking-[0.3em] text-magenta">
            02 // Inventory
          </span>
          <h2 className="mt-3 font-display text-3xl text-text-hi sm:text-4xl">
            Skills &amp; Tools
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.label} delay={i * 0.1}>
              <div className="h-full rounded-md border border-panel-border bg-panel p-6">
                <h3 className="font-hud text-xs uppercase tracking-widest text-cyan">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-text-hi sm:text-base"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-cyan" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
