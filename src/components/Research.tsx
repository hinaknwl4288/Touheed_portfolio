import { conference } from "../data/volunteering";
import { site } from "../data/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Research() {
  const { research } = site;

  return (
    <section id="research" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Scholarship" title="Research & Academic Interests" />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/20 card-glow transition-all duration-300">
              <p className="text-xs tracking-[0.22em] text-cyan uppercase">Final-year research</p>
              <h3 className="font-display mt-2 text-lg font-semibold text-ink leading-snug">{research.title}</h3>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <dt className="text-[11px] text-muted uppercase">Research period</dt>
                  <dd className="mt-0.5 text-xs text-ink">{research.period}</dd>
                </div>
                <div>
                  <dt className="text-[11px] text-muted uppercase">Study area</dt>
                  <dd className="mt-0.5 text-xs text-ink">{research.studyArea}</dd>
                </div>
              </dl>
              <p className="mt-3.5 text-xs leading-6 text-muted line-clamp-4">{research.overview}</p>
              <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                {research.themes.map((theme) => (
                  <span key={theme} className="rounded-full bg-navy-2 px-2.5 py-0.5 text-[11px] text-cyan">
                    {theme}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article id="conferences" className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/20 card-glow transition-all duration-300">
              <p className="text-xs tracking-[0.22em] text-burgundy uppercase">Conferences & Presentations</p>
              <h3 className="font-display mt-2 text-lg font-semibold text-ink leading-snug">{conference.title}</h3>
              <p className="mt-1 text-xs text-muted">{conference.year} · {conference.role}</p>
              <p className="mt-3.5 text-xs leading-6 text-muted line-clamp-4">
                Presented: {conference.presented}
              </p>
              <div className="mt-auto pt-4">
                <p className="text-xs text-ink font-medium">Venue: {conference.venue}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
