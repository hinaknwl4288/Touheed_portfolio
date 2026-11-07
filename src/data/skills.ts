export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "GIS Software & Cartography",
    items: [
      "ArcGIS Pro",
      "QGIS",
      "Spatial Analysis",
      "Spatial Visualization",
      "Web GIS",
      "Cartographic Design",
    ],
  },
  {
    title: "Remote Sensing & Earth Observation",
    items: [
      "Google Earth Engine",
      "ENVI",
      "ERDAS Imagine",
      "Digital Image Processing",
      "LULC Mapping and Change Analysis",
      "Geostatistics",
      "Hyperspectral Data Analysis",
    ],
  },
  {
    title: "Programming & Data Analysis",
    items: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "JavaScript",
      "HTML",
      "CSS",
      "R",
      "SQL (PostgreSQL/PostGIS)",
    ],
  },
  {
    title: "Web Technologies",
    items: ["Leaflet", "OpenLayers", "React (Basic)"],
  },
  {
    title: "Professional Skills",
    items: [
      "Project Management",
      "Presentation",
      "Communication",
      "Teamwork",
      "Problem-solving",
      "Data Visualization",
    ],
  },
];
