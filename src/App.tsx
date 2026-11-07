import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Research } from "./components/Research";
import { Certifications } from "./components/Certifications";
import { Volunteering } from "./components/Volunteering";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Volunteering />
        <Contact />
      </main>
      <footer className="py-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#080d1a] transition-colors duration-300">
        <div className="section-shell text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Touheed Anwar Khan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;