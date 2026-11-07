import { skillGroups } from "../data/skills";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[var(--color-background)]">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Expertise"
          subtitle="Skills are presented as documented competencies, without invented proficiency percentages."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/20 card-glow transition-all duration-300">
                <div className="border-b border-[var(--color-border)] pb-4 mb-4">
                  <h3 className="font-display text-xl font-bold text-[var(--color-text-heading)] flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" />
                    <span>{group.title}</span>
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-secondary-bg)] px-3.5 py-2.5 text-sm font-semibold text-[var(--color-text-main)] transition-all hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-card)]"
                    >
                      <CheckCircle2 size={16} className="text-[var(--color-primary)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
