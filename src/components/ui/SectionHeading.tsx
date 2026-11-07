import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary dark:text-cyan uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
