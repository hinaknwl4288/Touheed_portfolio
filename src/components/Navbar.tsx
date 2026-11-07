import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { ThemeToggle } from "./ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b ${
        scrolled || open
          ? "border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#080d1a]/90 backdrop-blur-xl shadow-md shadow-indigo-500/5"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between lg:h-20">
        <button
          type="button"
          onClick={() => goTo("home")}
          className="font-display text-sm font-extrabold tracking-[0.22em] text-slate-900 dark:text-white uppercase transition-colors hover:text-primary dark:hover:text-cyan"
        >
          Touheed Anwar
        </button>

        <ul className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const isContact = item.id === "contact";
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => goTo(item.id)}
                  className={`group relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isContact
                      ? "ml-2 bg-primary px-5 text-white hover:-translate-y-0.5 hover:opacity-90 shadow-md shadow-primary/20"
                      : isActive
                        ? "text-primary dark:text-cyan font-bold"
                        : "text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  {!isContact ? (
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left bg-primary dark:bg-cyan transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  ) : null}
                </button>
              </li>
            );
          })}
          <li className="ml-4">
            <ThemeToggle />
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-slate-900 dark:text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 dark:border-white/8 bg-white/95 dark:bg-[#080d1a]/95 lg:hidden shadow-lg"
          >
            <ul className="section-shell flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => goTo(item.id)}
                    className={`w-full rounded-lg px-4 py-3 text-left text-base font-medium ${
                      item.id === "contact"
                        ? "bg-primary text-white font-semibold"
                        : active === item.id
                          ? "text-primary dark:text-cyan font-bold bg-slate-100 dark:bg-slate-800/50"
                          : "text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/30"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="px-2 py-2">
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
