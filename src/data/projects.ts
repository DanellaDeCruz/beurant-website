export type Category = {
  slug: string;
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  location?: string;
  description: string;
  imageCount: number;
};

export type CategoryColor = {
  solid: string;
  tint: string;
  text: string;
};

export const categoryColors: Record<string, CategoryColor> = {
  "residential-interiors": {
    solid: "#B6512C",
    tint: "#F2DFD3",
    text: "#8A3E22",
  },
  "retail-commercial": {
    solid: "#57633B",
    tint: "#E4E8D9",
    text: "#454E2F",
  },
  "exhibition-stalls-events": {
    solid: "#B8862B",
    tint: "#F3E7C9",
    text: "#8C6820",
  },
  "corporate-institutional": {
    solid: "#2C3E5C",
    tint: "#DEE4EC",
    text: "#2C3E5C",
  },
  "branding-graphic-design": {
    solid: "#7A3348",
    tint: "#F0DEE4",
    text: "#7A3348",
  },
};

export const categories: Category[] = [
  {
    slug: "residential-interiors",
    title: "Residential Interiors",
    description:
      "Considered, livable interiors for homes and private residences — from full renovations to bespoke villa interiors.",
  },
  {
    slug: "retail-commercial",
    title: "Retail & Commercial Interiors",
    description:
      "Retail stores, showrooms, offices and food outlets designed to work as hard as the business behind them.",
  },
  {
    slug: "exhibition-stalls-events",
    title: "Exhibition Stalls & Events",
    description:
      "Exhibition stands, pop-up stalls and branded event environments built for impact — and built to travel.",
  },
  {
    slug: "corporate-institutional",
    title: "Corporate & Institutional Projects",
    description:
      "Large-scale fit-outs and installations for corporates and international institutions.",
  },
  {
    slug: "branding-graphic-design",
    title: "Branding & Graphic Design",
    description:
      "Visual identity work — logos, marks and brand systems — alongside the interiors practice.",
  },
];

export const projects: Project[] = [
  {
    slug: "dehiwala-residence",
    category: "residential-interiors",
    title: "Dehiwala Residence",
    description:
      "Placeholder — replace with the brief, scope and outcome for this residential renovation.",
    imageCount: 50,
  },
  {
    slug: "aarawild-luxury-villas-kandalama",
    category: "residential-interiors",
    title: "Aarawild Luxury Villas, Kandalama",
    location: "Kandalama",
    description:
      "Placeholder — replace with details on the villa interiors brief, scope and outcome.",
    imageCount: 7,
  },
  {
    slug: "sense-lk",
    category: "retail-commercial",
    title: "Sense.lk",
    description:
      "Placeholder — replace with details on this retail store fit-out.",
    imageCount: 5,
  },
  {
    slug: "mns-homeware-bambalapitiya",
    category: "retail-commercial",
    title: "MNS Homeware, Bambalapitiya",
    location: "Bambalapitiya",
    description:
      "Placeholder — replace with details on this homeware retail fit-out.",
    imageCount: 16,
  },
  {
    slug: "hardware-store",
    category: "retail-commercial",
    title: "Hardware Store Fit-Out",
    description:
      "Placeholder — replace with details on this hardware store interior and exterior fit-out.",
    imageCount: 11,
  },
  {
    slug: "small-office-rooms",
    category: "retail-commercial",
    title: "Small Office Rooms",
    description:
      "Placeholder — replace with details on this office interiors project.",
    imageCount: 6,
  },
  {
    slug: "fish-and-chips",
    category: "retail-commercial",
    title: "Fish & Chips Outlet",
    description:
      "Placeholder — replace with details on this food outlet fit-out.",
    imageCount: 16,
  },
  {
    slug: "jat-holdings-stall",
    category: "exhibition-stalls-events",
    title: "JAT Holdings Exhibition Stall",
    description:
      "Placeholder — replace with details on the exhibition brief and stand design.",
    imageCount: 11,
  },
  {
    slug: "sysco-labs-stall",
    category: "exhibition-stalls-events",
    title: "Sysco Labs Exhibition Stall",
    description:
      "Placeholder — replace with details on the exhibition brief and stand design.",
    imageCount: 4,
  },
  {
    slug: "exhibition-stall-design",
    category: "exhibition-stalls-events",
    title: "Exhibition Stall Design",
    description:
      "Placeholder — replace with details on this exhibition stand project.",
    imageCount: 4,
  },
  {
    slug: "pod-designs",
    category: "exhibition-stalls-events",
    title: "Pod Designs",
    description:
      "Placeholder — replace with details on this modular pod/kiosk design.",
    imageCount: 6,
  },
  {
    slug: "delo-truck",
    category: "exhibition-stalls-events",
    title: "Delo Truck Branding",
    description:
      "Placeholder — replace with details on this vehicle branding project.",
    imageCount: 7,
  },
  {
    slug: "virtusa-event-setup",
    category: "exhibition-stalls-events",
    title: "Virtusa Event Setup",
    description:
      "Placeholder — replace with details on this corporate event setup.",
    imageCount: 3,
  },
  {
    slug: "world-health-organisation",
    category: "corporate-institutional",
    title: "World Health Organisation (WHO)",
    description:
      "Placeholder — replace with details on this institutional installation.",
    imageCount: 17,
  },
  {
    slug: "united-nations",
    category: "corporate-institutional",
    title: "United Nations",
    description:
      "Placeholder — replace with details on this institutional installation.",
    imageCount: 11,
  },
  {
    slug: "orient-insurance",
    category: "corporate-institutional",
    title: "Orient Insurance",
    description:
      "Placeholder — replace with details on this corporate fit-out.",
    imageCount: 20,
  },
  {
    slug: "dimo-academy",
    category: "corporate-institutional",
    title: "DIMO Academy",
    description:
      "Placeholder — replace with details on this corporate training facility fit-out.",
    imageCount: 5,
  },
  {
    slug: "tata-flagship-showroom",
    category: "corporate-institutional",
    title: "TATA Flagship Showroom",
    description:
      "Placeholder — replace with details on this flagship showroom fit-out.",
    imageCount: 7,
  },
  {
    slug: "tata-showroom-network",
    category: "corporate-institutional",
    title: "TATA Showroom Network",
    location: "Batticaloa, Galle, Katugastota & Kurunegala",
    description:
      "Placeholder — replace with details on this multi-branch showroom rollout.",
    imageCount: 4,
  },
  {
    slug: "beurant-identity-cw-mackie",
    category: "branding-graphic-design",
    title: "Beurant Identity — C.W. Mackie",
    description:
      "Placeholder — replace with details on this brand identity and logo design project.",
    imageCount: 9,
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProjectsByCategory(categorySlug: string): Project[] {
  return projects.filter((p) => p.category === categorySlug);
}

export function getProject(
  categorySlug: string,
  projectSlug: string
): Project | undefined {
  return projects.find(
    (p) => p.category === categorySlug && p.slug === projectSlug
  );
}

function pad(n: number): string {
  return String(n).padStart(3, "0");
}

export function coverImage(project: Project): string {
  return `/images/${project.category}/${project.slug}/thumb/001.webp`;
}

export function fullCoverImage(project: Project): string {
  return `/images/${project.category}/${project.slug}/full/001.webp`;
}

export function galleryImages(
  project: Project
): { full: string; thumb: string }[] {
  return Array.from({ length: project.imageCount }, (_, i) => {
    const n = pad(i + 1);
    return {
      full: `/images/${project.category}/${project.slug}/full/${n}.webp`,
      thumb: `/images/${project.category}/${project.slug}/thumb/${n}.webp`,
    };
  });
}

export const featuredProjectSlugs = [
  "dehiwala-residence",
  "world-health-organisation",
  "jat-holdings-stall",
  "sense-lk",
];
