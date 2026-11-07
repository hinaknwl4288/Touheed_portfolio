export type CertificateCategory =
  | "GIS & Remote Sensing"
  | "AI & Technology"
  | "Professional Development"
  | "Volunteer & Appreciation";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  date?: string;
  category: CertificateCategory;
  image: string;
  note?: string;
};

export const certificateFilters = [
  "All",
  "GIS & Remote Sensing",
  "AI & Technology",
  "Professional Development",
  "Volunteer & Appreciation",
] as const;

export const certificates: Certificate[] = [
  {
    id: "nasa-rs",
    title: "Fundamentals of Remote Sensing",
    issuer: "NASA ARSET",
    year: "2026",
    category: "GIS & Remote Sensing",
    image: "/assets/certificates/Fundamental of RS .png",
  },
  {
    id: "nasa-hyper",
    title: "Hyperspectral Data for Land and Coastal Systems",
    issuer: "NASA ARSET",
    year: "2026",
    category: "GIS & Remote Sensing",
    image: "/assets/certificates/Hyperspectral Data.png",
  },
  {
    id: "hyperspectral-webinar",
    title: "Hyperspectral Data Webinar Certificate",
    issuer: "NASA ARSET / Webinar",
    year: "2026",
    category: "GIS & Remote Sensing",
    image: "/assets/certificates/Hyperspectral Webinar.jpg",
  },
  {
    id: "qgis-beginner",
    title: "QGIS Fundamentals: Complete Beginner's Guide",
    issuer: "GeoPhoenix e-Learning",
    year: "2026",
    category: "GIS & Remote Sensing",
    image: "/assets/certificates/beginner QGIS.jpeg",
  },
  {
    id: "gis-essentials",
    title: "GIS Essentials: Data, Tools & Applications",
    issuer: "Great Learning",
    year: "2026",
    category: "GIS & Remote Sensing",
    image: "/assets/certificates/GIS Essentials.jpeg",
  },
  {
    id: "esri-stories",
    title: "Telling Stories with GIS Maps",
    issuer: "Esri",
    year: "2026",
    category: "GIS & Remote Sensing",
    image: "/assets/certificates/story telling.jpeg",
  },
  {
    id: "esri-climate",
    title: "GIS for Climate Action",
    issuer: "Esri Training (MOOC)",
    year: "2026",
    category: "GIS & Remote Sensing",
    image: "/assets/certificates/climate actions.jpeg",
  },
  {
    id: "geo-uni-rs",
    title: "Introduction to Remote Sensing",
    issuer: "Geo University",
    year: "2024",
    category: "GIS & Remote Sensing",
    image: "/assets/certificates/intro to RS.jpeg",
  },
  {
    id: "ai-tools",
    title: "Exploring AI-Based Research Tools",
    issuer: "Centre for GIS, University of the Punjab",
    year: "2024",
    category: "AI & Technology",
    image: "/assets/certificates/AI Certificatee.jpg",
  },
  {
    id: "stem-uet",
    title: "STEM 2026 Certificate of Participation",
    issuer: "UET Science Society, Lahore",
    year: "2026",
    category: "Professional Development",
    image: "/assets/certificates/UET.jpg",
    note: "All Pakistan Innovation and Technology Summit, UET Lahore.",
  },
  {
    id: "youth-10",
    title: "Alkhidmat Youth Gathering 10",
    issuer: "Alkhidmat Foundation Pakistan",
    year: "2026",
    category: "Volunteer & Appreciation",
    image: "/assets/certificates/youth.jpeg",
  },
  {
    id: "environmetal-management",
    title: "Environmental Management",
    issuer: "Relevant Authority",
    year: "2026",
    category: "Professional Development",
    image: "/assets/certificates/environmetal management.jpeg",
  },
];

export const documentedTraining = [
  {
    title: "Certified Peer Reviewer Course",
    issuer: "Researcher Academy, Elsevier",
    year: "2026",
  },
  {
    title: "QGIS Fundamentals",
    issuer: "NASA ARSET",
    year: "2026",
  },
  {
    title: "Technical Writing Skills",
    issuer: "Researcher Academy, Elsevier",
    year: "2025",
  },
  {
    title: "Machine Learning and Cloud Computing for Crop Classifications and Analysis",
    issuer: "CGIS, University of the Punjab",
    year: "2022–2026",
  },
  {
    title: "Web GIS Programming",
    issuer: "CGIS, University of the Punjab",
    year: "2022–2026",
  },
] as const;
