import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import type { Certificate } from "../data/certificates";

type CertificateModalProps = {
  certificates: Certificate[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function CertificateModal({
  certificates,
  index,
  onClose,
  onIndexChange,
}: CertificateModalProps) {
  const [zoom, setZoom] = useState(1);
  const active = index === null ? null : certificates[index];

  useEffect(() => {
    setZoom(1);
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndexChange((index + 1) % certificates.length);
      if (event.key === "ArrowLeft") {
        onIndexChange((index - 1 + certificates.length) % certificates.length);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, certificates.length, onClose, onIndexChange]);

  return (
    <AnimatePresence>
      {active && index !== null ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/85"
            aria-label="Close certificate preview"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#070b16]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 py-3">
              <div className="min-w-0">
                <h3 id="certificate-modal-title" className="truncate font-medium text-ink">
                  {active.title}
                </h3>
                <p className="truncate text-sm text-muted">
                  {active.issuer}
                  {active.date ? ` · ${active.date}` : ""}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Zoom out"
                  onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
                  className="rounded-full border border-white/10 p-2 hover:text-cyan"
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Zoom in"
                  onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))}
                  className="rounded-full border border-white/10 p-2 hover:text-cyan"
                >
                  <ZoomIn size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={onClose}
                  className="rounded-full border border-white/10 p-2 hover:text-cyan"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto p-4">
              <img
                src={active.image}
                alt={active.title}
                className="max-h-[72vh] w-auto max-w-full object-contain transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
              />
              <button
                type="button"
                aria-label="Previous certificate"
                onClick={() =>
                  onIndexChange((index - 1 + certificates.length) % certificates.length)
                }
                className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                aria-label="Next certificate"
                onClick={() => onIndexChange((index + 1) % certificates.length)}
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
