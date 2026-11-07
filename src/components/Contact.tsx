import { site } from "../data/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#080d1a] transition-colors duration-300">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Feel free to reach out for collaborations or inquiries."
        />
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 text-text-main dark:text-slate-100">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="flex items-center gap-4">
              <Mail className="text-primary" />
              <a href={`mailto:${site.email}`} className="hover:text-primary transition-colors">{site.email}</a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-primary" />
              <span>{site.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-primary" />
              <span>{site.location}</span>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="text-primary" />
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn Profile</a>
            </div>
          </div>
          <div className="text-text-main dark:text-slate-100">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form action={`mailto:${site.email}`} method="post" encType="text/plain" className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-text-main dark:text-white" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-text-main dark:text-white" />
              <textarea name="message" placeholder="Your Message" required rows={4} className="w-full p-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-text-main dark:text-white" />
              <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}