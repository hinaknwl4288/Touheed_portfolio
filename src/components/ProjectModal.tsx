 import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../data/projects";
import { MapPlaceholder } from "./ui/MapPlaceholder";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 bg-black/75"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-navy-2 p-5 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 rounded-full border border-white/10 p-2 text-ink hover:border-cyan hover:text-cyan"
            >
              <X size={18} />
            </button>
            <p className="text-xs tracking-[0.22em] text-cyan uppercase">{project.category}</p>
            <h3 id="project-modal-title" className="font-display mt-2 pr-10 text-2xl font-semibold">
              {project.title}
            </h3>
            {project.year ? <p className="mt-1 text-sm text-muted">{project.year}</p> : null}
            <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
            {project.tools ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full bg-card px-3 py-1 text-xs text-cyan">
                    {tool}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="mt-6 grid gap-4">
              {project.images.length ? (
                project.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${project.title} visual`}
                    className="w-full rounded-2xl border border-white/8 object-contain bg-navy"
                  />
                ))
              ) : (
                <MapPlaceholder label={project.title} note={project.imageNote} />
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
