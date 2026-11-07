export const site = {
  name: "Touheed Anwar Khan",
  shortName: "Touheed Anwar",
  identity:
    "GIS Developer & Data Analyst",
  titles: ["GIS DEVELOPER", "DATA ANALYST"],
  location: "Lahore, Pakistan",
  email: "touheedak4@gmail.com",
  phone: "+92-302-0777484",
  phoneHref: "tel:+923020777484",
  linkedin: "https://www.linkedin.com/in/touheed-anwar-khan-b024463b4/",
  cvPath: "/cv/Touheed-Anwar-Khan-CV.pdf",
  profileImage: "/images/WhatsApp Image 2026-11-03 at 4.23.13 PM.jpeg", // Updated path for the new profile image
  intro:
    "Transforming geospatial data into meaningful insights through GIS, remote sensing, spatial analysis, and modern geospatial technologies.",
  about: [
    "As a dedicated GIS Developer and Data Analyst, I leverage geographical information systems and data analytics to derive actionable insights and create innovative solutions. With a strong foundation in spatial analysis, remote sensing, and programming, I am passionate about transforming complex data into clear, understandable, and impactful visual representations. My goal is to contribute to projects that make a difference, whether in environmental management, urban planning, or resource optimization.",
    "I am proficient in various GIS software and programming languages, always eager to learn new technologies and apply them to real-world challenges. My commitment to continuous learning and problem-solving drives me to deliver high-quality results in every endeavor.",
  ],
  education: {
    degree: "BS Geographical Information System",
    university: "University of the Punjab",
    campus: "Centre for GIS",
    year: "2026",
    location: "Lahore, Pakistan",
    prior: {
      title: "F.Sc. Pre-Engineering",
      place: "Superior College for Boys, Burewala, Pakistan",
      year: "2022",
    },
  },
  research: {
    title:
      "Monitoring Groundwater Storage Dynamics and Trend Analysis from 2003–2022 in the Indus Basin",
    period: "2003–2022",
    studyArea: "Indus Basin",
    overview:
      "Research focused on monitoring groundwater storage dynamics and analyzing long-term trends across the Indus Basin from 2003 to 2022.",
    themes: [
      "Groundwater storage dynamics",
      "Long-term trend analysis",
      "Earth observation",
      "Hydrological intelligence",
      "Climate-related risk",
    ],
  },
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;
