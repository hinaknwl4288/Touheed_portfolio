import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(111,26,42,0.08),transparent_36%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.06),transparent_32%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.05),transparent_40%)]" />
      <div className="map-grid absolute inset-0 opacity-40" />

      <div className="section-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs font-bold tracking-[0.32em] text-primary uppercase"
          >
            Hello, I&apos;m
          </motion.p>

          <h1 className="font-display text-5xl leading-[0.92] font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-navy">
            {"TOUHEED".split("").map((letter, index) => (
              <motion.span
                key={`t-${index}`}
                className="inline-block"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.04, duration: 0.45 }}
              >
                {letter}
              </motion.span>
            ))}
            <span className="mt-2 block text-primary">
              {"ANWAR KHAN".split("").map((letter, index) => (
                <motion.span
                  key={`a-${index}`}
                  className="inline-block"
                  initial={reduce ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 + index * 0.035, duration: 0.45 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 text-sm font-bold tracking-[0.18em] text-muted uppercase"
          >
            {site.titles.join("  ·  ")}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.55 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_10px_30px_rgba(111,26,42,0.25)]"
            >
              Explore My Work
            </a>
            <a
              href={site.cvPath}
              download
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-text-main transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              Download My CV
            </a>
            <div className="flex items-center gap-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-full border border-slate-200 p-2.5 text-muted transition-all hover:scale-110 hover:border-primary hover:text-primary"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email Touheed Anwar Khan"
                className="rounded-full border border-slate-200 p-2.5 text-muted transition-all hover:scale-110 hover:border-primary hover:text-primary"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-cyan to-indigo opacity-50 blur-xl animate-pulse" />
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan to-primary opacity-30 blur-lg" />
          <div className="relative overflow-hidden rounded-full border-[6px] border-white dark:border-slate-800 shadow-[0_20px_80px_rgba(111,26,42,0.25)]">
            <img
              src={site.profileImage}
              alt="Professional portrait of Touheed Anwar Khan"
              className="aspect-square w-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 py-2 text-xs tracking-[0.18em] text-muted uppercase backdrop-blur shadow-lg">
            31.5204° N · 74.3587° E
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[0.24em] text-muted uppercase"
      >
        <span>Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
