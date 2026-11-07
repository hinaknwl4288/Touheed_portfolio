import { experience } from "../data/experience";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="bg-navy-2/60 py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Career" title="Professional Experience" />

        <div className="relative ml-3 border-l border-cyan/25 pl-8 sm:ml-6">
          <span className="absolute top-0 bottom-0 -left-px w-px bg-gradient-to-b from-cyan via-burgundy to-transparent" />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.08}>
                <article className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/20 card-glow transition-all duration-300 hover:-translate-y-1">
                  <span className="absolute top-8 -left-[39px] h-3.5 w-3.5 rounded-full border-2 border-navy bg-cyan sm:-left-[41px]" />
                  <p className="text-xs tracking-[0.2em] text-cyan uppercase">{item.period}</p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-ink">{item.role}</h3>
                  <p className="mt-1 text-sm text-burgundy">{item.organization}</p>
                  <p className="text-sm text-muted">{item.location}</p>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
