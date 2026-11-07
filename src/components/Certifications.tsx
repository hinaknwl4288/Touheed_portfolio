import { useMemo, useState } from "react";
import {
  certificateFilters,
  certificates,
  documentedTraining,
  type Certificate,
} from "../data/certificates";
import { CertificateModal } from "./CertificateModal";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Certifications() {
  const [filter, setFilter] = useState<(typeof certificateFilters)[number]>("All");
  const [index, setIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? certificates : certificates.filter((item) => item.category === filter)),
    [filter],
  );

  const openCertificate = (item: Certificate) => {
    const found = visible.findIndex((cert) => cert.id === item.id);
    setIndex(found);
  };

  return (
    <section id="certifications" className="bg-navy-2/60 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Professional Development"
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {certificateFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                filter === item
                  ? "bg-burgundy text-white"
                  : "border border-white/10 text-muted hover:-translate-y-0.5 hover:text-ink"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.03}>
              <button
                type="button"
                onClick={() => openCertificate(item)}
                className="group w-full overflow-hidden rounded-2xl border border-white/8 bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-navy">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs tracking-[0.16em] text-cyan uppercase">{item.year}</p>
                  <h3 className="mt-1 line-clamp-2 font-medium text-ink">{item.title}</h3>
                  <p className="mt-1 line-clamp-1 text-sm text-muted">{item.issuer}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-3xl border border-white/8 bg-card p-6">
          <h3 className="font-display text-lg font-semibold">Additional documented training</h3>
          <p className="mt-2 text-sm text-muted">
            Listed from the CV. Original certificate files for these items were not included in the supplied archive, so they are shown here without images.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {documentedTraining.map((item) => (
              <li key={item.title} className="rounded-xl border border-white/8 bg-navy-2 p-4">
                <p className="font-medium text-ink">{item.title}</p>
                <p className="text-sm text-muted">
                  {item.issuer} · {item.year}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <CertificateModal
        certificates={visible}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </section>
  );
}
