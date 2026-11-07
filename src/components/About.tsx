import { Earth, Globe2, Map, Satellite } from "lucide-react";
import { site } from "../data/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const focusAreas = [
  {
    title: "GIS & Geospatial Analysis",
    icon: Map,
    text: "Spatial analysis, thematic mapping, and geospatial intelligence for decision support.",
  },
  {
    title: "Remote Sensing & Earth Observation",
    icon: Satellite,
    text: "Working with Earth observation data to understand environmental and landscape change.",
  },
  {
    title: "Web GIS Development",
    icon: Globe2,
    text: "GIS-integrated web and enterprise applications for interactive mapping and analysis.",
  },
  {
    title: "Environmental & Climate Intelligence",
    icon: Earth,
    text: "Applying geospatial methods to climate-related risk, hydrology, and sustainability questions.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="About Me" title="Discover My Journey in Geospatial Technology" />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-8 text-muted">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="rounded-3xl border border-white/8 bg-card p-6 shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
              <p className="text-xs tracking-[0.22em] text-cyan uppercase">Academic profile</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-muted">Degree</dt>
                  <dd className="mt-1 font-medium text-ink">{site.education.degree}</dd>
                </div>
                <div>
                  <dt className="text-muted">University</dt>
                  <dd className="mt-1 font-medium text-ink">
                    {site.education.campus}, {site.education.university}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Graduation</dt>
                  <dd className="mt-1 font-medium text-ink">{site.education.year}</dd>
                </div>
                <div>
                  <dt className="text-muted">Location</dt>
                  <dd className="mt-1 font-medium text-ink">{site.education.location}</dd>
                </div>
                <div className="border-t border-white/8 pt-4">
                  <dt className="text-muted">Earlier education</dt>
                  <dd className="mt-1 font-medium text-ink">
                    {site.education.prior.title}, {site.education.prior.year}
                  </dd>
                  <dd className="mt-1 text-muted">{site.education.prior.place}</dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.05}>
              <article className="group h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/20 card-glow transition-all duration-300 hover:-translate-y-1">
                <area.icon className="mb-4 text-cyan transition-transform duration-300 group-hover:scale-110" size={22} />
                <h3 className="font-display text-lg font-semibold text-ink">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{area.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
