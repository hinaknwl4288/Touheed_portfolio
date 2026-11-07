export type ProjectCategory =
  | "Agricultural Stress Analysis"
  | "Land Surface Temperature"
  | "Land Use/Land Cover Analysis"
  | "Air Quality Mapping"
  | "Literacy Rate Mapping"
  | "Administrative Mapping"
  | "Random Forest Classification"
  | "Middle East Mapping";

export type Project = {
  id: string;
  title: string;
  year?: string;
  description: string;
  category: ProjectCategory;
  tools?: string[];
  images: string[];
  featured?: boolean;
  imageNote?: string;
};

export const projectFilters = [
  "All Projects",
  "Agricultural Stress Analysis",
  "Land Surface Temperature",
  "Land Use/Land Cover Analysis",
  "Air Quality Mapping",
  "Literacy Rate Mapping",
  "Administrative Mapping",
  "Random Forest Classification",
  "Middle East Mapping",
] as const;

export const projects: Project[] = [
  {
    id: "agricultural-stress-vehari",
    title: "Agricultural Stress Analysis — Vehari, Pakistan",
    year: "2026",
    category: "Agricultural Stress Analysis",
    tools: ["Google Earth Engine", "ArcGIS", "Remote Sensing"],
    description:
      "Conducted a geospatial analysis of agricultural stress in Vehari, Pakistan, using Google Earth Engine (GEE) for satellite-based data processing and ArcGIS for further spatial analysis and visualization. The project focused on examining agricultural conditions through remote sensing techniques to identify potential areas of vegetation stress and support agricultural monitoring.",
    images: ["/assets/projects/agricultural-stress-vehari/map.png"],
    featured: false,
  },
  {
    id: "annual-lst-2013-2023",
    title: "Annual Land Surface Temperature Analysis — 2013–2023",
    year: "2023",
    category: "Land Surface Temperature",
    tools: ["Google Earth Engine", "JavaScript", "MODIS MOD11A1"],
    description:
      "Developed a Google Earth Engine workflow to analyze annual Land Surface Temperature (LST) patterns from 2013 to 2023 using the MODIS MOD11A1 Version 6.1 satellite dataset. Daily daytime LST observations were converted to Celsius, aggregated into annual mean temperature images, and analyzed for temporal trends.",
    images: ["/assets/projects/annual-lst-2013-2023/map.png"],
    featured: false,
  },
  {
    id: "lulc-vehari",
    title: "Land Use/Land Cover Analysis — Vehari, Pakistan",
    year: "2026",
    category: "Land Use/Land Cover Analysis",
    tools: ["ArcGIS 10.8", "Sentinel-2", "Copernicus"],
    description:
      "Developed a satellite image processing workflow for Land Use/Land Cover (LULC) analysis of Vehari, Pakistan, using Sentinel-2 imagery obtained from the Copernicus platform, utilizing spectral bands 2, 3, 4, 8, 11, and 12 for raster classification and index calculations.",
    images: ["/assets/projects/lulc-vehari/map.png"],
    featured: false,
  },
  {
    id: "pakistan-aqi-2025",
    title: "Pakistan Air Quality Index (AQI) Mapping — 2025",
    year: "2025",
    category: "Air Quality Mapping",
    tools: ["ArcGIS", "Thematic Mapping", "Spatial Analysis"],
    description:
      "Designed a GIS-based air quality mapping project to visualize the spatial distribution of Air Quality Index (AQI) values across major cities of Pakistan. Compiled verified environmental data and applied graduated symbology to highlight pollution severity levels.",
    images: ["/assets/projects/pakistan-aqi-2025/map.png"],
    featured: false,
  },
  {
    id: "pakistan-literacy-2023",
    title: "Pakistan Literacy Rate Mapping — 2023",
    year: "2023",
    category: "Literacy Rate Mapping",
    tools: ["ArcGIS 10.4.1", "GADM", "Choropleth Mapping"],
    description:
      "Created a provincial-level choropleth map of literacy rates across Pakistan using ArcGIS 10.4.1. Integrated provincial boundary data from GADM with literacy statistics from the Pakistan Economic Survey 2023–24 using Natural Breaks classification.",
    images: ["/assets/projects/pakistan-literacy-2023/map.png"],
    featured: false,
  },
  {
    id: "political-administrative-pakistan",
    title: "Political and Administrative Mapping of Pakistan",
    year: "2026",
    category: "Administrative Mapping",
    tools: ["ArcGIS", "Cartographic Design"],
    description:
      "Developed a political and administrative map of Pakistan using GIS-based cartographic techniques. The map represents administrative divisions, provincial boundaries, major settlements, and transportation networks through thematic colors and symbols.",
    images: ["/assets/projects/political-administrative-pakistan/map.jpg"],
    featured: false,
  },
  {
    id: "random-forest-islamabad",
    title: "Random Forest LULC Classification Islamabad, 2025",
    year: "2025",
    category: "Random Forest Classification",
    tools: ["Random Forest", "Remote Sensing", "Machine Learning"],
    description:
      "Performed a satellite-based Land Use/Land Cover (LULC) classification of Islamabad using the Random Forest machine learning algorithm. Identified and mapped major land cover categories including water bodies, vegetation, built-up areas, and bare soil.",
    images: ["/assets/projects/random-forest-islamabad/map.png"],
    featured: false,
  },
  {
    id: "middle-east-mapping",
    title: "Advanced Cartography: Mapping of the Middle East",
    year: "2026",
    category: "Middle East Mapping",
    tools: ["ArcGIS Pro", "Cartographic Design"],
    description:
      "Created detailed maps of Jordan, Lebanon, Egypt, Saudi Arabia, and Palestine and developed final cartographic layouts using ArcGIS Pro and professional cartographic design principles.",
    images: ["/assets/projects/middle-east-mapping/map.jpg"],
    featured: false,
  },
];
