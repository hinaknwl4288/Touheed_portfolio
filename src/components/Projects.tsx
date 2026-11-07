import { useMemo, useState } from "react";
import { projectFilters, projects, type Project } from "../data/projects";
import { ProjectModal } from "./ProjectModal";
import { MapPlaceholder } from "./ui/MapPlaceholder";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All Projects");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () =>
      filter === "All Projects"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="bg-navy-2/60 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Exploring geospatial intelligence through real-world applications"
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                filter === item
                  ? "bg-cyan text-navy"
                  : "border border-white/10 text-muted hover:-translate-y-0.5 hover:text-ink"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/20 card-glow transition-all duration-300 hover:-translate-y-1.5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {project.images[0] ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <MapPlaceholder label="Visual placeholder" note={project.imageNote} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs tracking-[0.2em] text-cyan uppercase">{project.category}</p>
                  <h3 className="font-display mt-2 text-lg font-semibold text-ink">{project.title}</h3>
                  {project.year ? <p className="mt-1 text-xs text-burgundy">{project.year}</p> : null}
                  <p className="mt-2.5 line-clamp-3 text-xs leading-6 text-muted">{project.description}</p>
                  <div className="mt-auto pt-4">
                    <button
                      type="button"
                      onClick={() => setActive(project)}
                      className="rounded-full border border-white/12 px-3.5 py-1.5 text-xs text-ink transition-all hover:border-cyan hover:text-cyan"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
