import { languages, volunteering } from "../data/volunteering";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Volunteering() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Community" title="Community Engagement & Leadership" />
        <div className="grid gap-4 lg:grid-cols-2">
          {volunteering.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/20 card-glow transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs tracking-[0.2em] text-cyan uppercase font-semibold">{item.year}</p>
                  <p className="text-xs text-primary font-medium">{item.role}</p>
                </div>
                <h3 className="font-display mt-3 text-lg font-semibold text-text-main dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-muted dark:text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-display mb-5 text-2xl font-semibold text-slate-900 dark:text-white">Languages</h3>
          <div className="grid gap-4 sm:grid-cols-1">
            <Reveal>
              <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/20 card-glow transition-all duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {languages.map((language) => (
                    <div key={language.name} className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)]">
                      <h4 className="text-base font-semibold text-[var(--color-text-heading)]">{language.name}</h4>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">{language.level}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
