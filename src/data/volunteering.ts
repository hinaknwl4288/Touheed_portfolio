export type VolunteerItem = {
  title: string;
  year: string;
  role: string;
  description: string;
};

export const volunteering: VolunteerItem[] = [
  {
    title: "Humans of Burewala (HOB) Ramadan Drive",
    year: "2026",
    role: "Volunteer",
    description:
      "Supported planning and execution of welfare activities for underprivileged families during Ramadan.",
  },
  {
    title: "CGIS Talk Series",
    year: "2025",
    role: "Event Manager",
    description:
      'Managed "Frontiers in GIS for Sustainable Future", organized by Smart Sensing for Climate and Development (SCD), CGIS, Punjab University Lahore.',
  },
  {
    title: "Ramadan Internship",
    year: "2024",
    role: "Operations Intern",
    description:
      "Contributed to planning, coordination, and execution of community welfare initiatives.",
  },
  {
    title: "Machine Learning and Cloud Computing for Crop Classification Workshop",
    year: "2024",
    role: "Workshop Manager",
    description:
      "Managed workshop organized by SCD, CGIS, Punjab University Lahore.",
  },
  {
    title: "Achai Winter Internship Cohort-1",
    year: "2024",
    role: "Member",
    description:
      "Assisted in planning and implementing community service initiatives and social welfare campaigns.",
  },
];

export const languages = [
  { name: "English", level: "Proficient" },
  { name: "Urdu", level: "Native" },
] as const;

export const conference = {
  year: "2025",
  title: "STEM Final Year Project Presentation",
  presented:
    "Monitoring Groundwater Storage Dynamics and Trend Analysis from 2003–2022 in the Indus Basin",
  venue: "University of Engineering and Technology (UET), Lahore, Pakistan",
  role: "Participant and Presenter",
  image: "/assets/certificates/stem-2026-uet-lahore.jpg",
} as const;
