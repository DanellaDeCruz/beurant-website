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
  imageCount: number;
  /** 1-based index of the featured image within the processed set; defaults to 1. */
  coverIndex?: number;
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
];

export const projects: Project[] = [
  {
    slug: "dehiwala-residence",
    category: "residential-interiors",
    title: "Dehiwala Residence",
    imageCount: 18,
    coverIndex: 4,
  },
  {
    slug: "aarawild-luxury-villas-kandalama",
    category: "residential-interiors",
    title: "Aarawild Luxury Villas, Kandalama",
    location: "Kandalama",
    imageCount: 7,
    coverIndex: 6,
  },
  {
    slug: "sense-lk",
    category: "retail-commercial",
    title: "Sense.lk",
    imageCount: 5,
  },
  {
    slug: "mns-homeware-bambalapitiya",
    category: "retail-commercial",
    title: "MNS Homeware, Bambalapitiya",
    location: "Bambalapitiya",
    imageCount: 11,
    coverIndex: 2,
  },
  {
    slug: "hardware-store",
    category: "retail-commercial",
    title: "Hardware Store Fit-Out",
    imageCount: 10,
    coverIndex: 5,
  },
  {
    slug: "small-office-rooms",
    category: "retail-commercial",
    title: "Small Office Rooms",
    imageCount: 6,
    coverIndex: 3,
  },
  {
    slug: "fish-and-chips",
    category: "retail-commercial",
    title: "Fish & Chips Outlet",
    imageCount: 9,
    coverIndex: 1,
  },
  {
    slug: "jat-holdings-stall",
    category: "exhibition-stalls-events",
    title: "JAT Holdings Exhibition Stall",
    imageCount: 6,
    coverIndex: 2,
  },
  {
    slug: "sysco-labs-stall",
    category: "exhibition-stalls-events",
    title: "Sysco Labs Exhibition Stall",
    imageCount: 4,
  },
  {
    slug: "exhibition-stall-design",
    category: "exhibition-stalls-events",
    title: "Exhibition Stall Design - AOD",
    imageCount: 4,
    coverIndex: 4,
  },
  {
    slug: "pod-designs",
    category: "exhibition-stalls-events",
    title: "Pod Design - HUTCH",
    imageCount: 6,
    coverIndex: 5,
  },
  {
    slug: "delo-truck",
    category: "exhibition-stalls-events",
    title: "Delo Truck Branding",
    imageCount: 7,
    coverIndex: 4,
  },
  {
    slug: "virtusa-event-setup",
    category: "exhibition-stalls-events",
    title: "Virtusa Event Setup",
    imageCount: 3,
  },
  {
    slug: "world-health-organisation",
    category: "corporate-institutional",
    title: "World Health Organisation (WHO)",
    imageCount: 8,
    coverIndex: 1,
  },
  {
    slug: "united-nations",
    category: "corporate-institutional",
    title: "United Nations",
    imageCount: 7,
    coverIndex: 1,
  },
  {
    slug: "orient-insurance",
    category: "corporate-institutional",
    title: "Orient Insurance",
    imageCount: 12,
    coverIndex: 6,
  },
  {
    slug: "dimo-academy",
    category: "corporate-institutional",
    title: "DIMO Academy",
    imageCount: 5,
    coverIndex: 2,
  },
  {
    slug: "tata-flagship-showroom",
    category: "corporate-institutional",
    title: "TATA Flagship Showroom",
    imageCount: 7,
    coverIndex: 7,
  },
  {
    slug: "tata-showroom-network",
    category: "corporate-institutional",
    title: "TATA Showroom Network",
    location: "Batticaloa, Galle, Katugastota & Kurunegala",
    imageCount: 4,
    coverIndex: 3,
  },
  {
    slug: "beurant-identity-cw-mackie",
    category: "corporate-institutional",
    title: "Beurant Identity — C.W. Mackie",
    imageCount: 9,
  },
  {
    slug: "aquinas-conceptual-pod",
    category: "exhibition-stalls-events",
    title: "Aquinas Conceptual Pod",
    imageCount: 6,
  },
  {
    slug: "car-park-commercial-design",
    category: "retail-commercial",
    title: "Car Park Commercial Design",
    imageCount: 36,
  },
  {
    slug: "courtyard-design-residential",
    category: "residential-interiors",
    title: "Courtyard Residence",
    imageCount: 14,
  },
  {
    slug: "elephant-house-sip-sip",
    category: "retail-commercial",
    title: "Elephant House — “Sip Sip” Mobile Kiosk",
    imageCount: 11,
  },
  {
    slug: "residential-concept-01",
    category: "residential-interiors",
    title: "Residential Concept 01",
    imageCount: 7,
  },
  {
    slug: "residential-concept-02",
    category: "residential-interiors",
    title: "Residential Concept 02",
    imageCount: 5,
  },
  {
    slug: "residential-concept-03",
    category: "residential-interiors",
    title: "Residential Concept 03",
    imageCount: 43,
  },
  {
    slug: "melsiripura-residence",
    category: "residential-interiors",
    title: "Melsiripura Residence",
    location: "Melsiripura",
    imageCount: 5,
  },
  {
    slug: "maharaja-group-conceptual",
    category: "exhibition-stalls-events",
    title: "Maharaja Group Conceptual Display",
    imageCount: 9,
  },
  {
    slug: "ranpath-packaging",
    category: "retail-commercial",
    title: "Ranpath Packaging Design",
    imageCount: 15,
  },
  {
    slug: "shakthi-gym-kandana",
    category: "retail-commercial",
    title: "Shakthi Gym, Kandana",
    location: "Kandana",
    imageCount: 5,
  },
  {
    slug: "sozo-life-mobile-bar",
    category: "retail-commercial",
    title: "Sozo Life Mobile Bar",
    imageCount: 5,
  },
  {
    slug: "truly-ceylon-packaging",
    category: "retail-commercial",
    title: "Truly Ceylon Packaging",
    imageCount: 13,
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
  const n = pad(project.coverIndex ?? 1);
  return `/images/${project.category}/${project.slug}/thumb/${n}.webp`;
}

export function fullCoverImage(project: Project): string {
  const n = pad(project.coverIndex ?? 1);
  return `/images/${project.category}/${project.slug}/full/${n}.webp`;
}

export function fullImageAt(project: Project, index: number): string {
  return `/images/${project.category}/${project.slug}/full/${pad(index)}.webp`;
}

export function galleryImages(
  project: Project
): { full: string; thumb: string }[] {
  const cover = project.coverIndex ?? 1;
  const order = [
    cover,
    ...Array.from({ length: project.imageCount }, (_, i) => i + 1).filter(
      (i) => i !== cover
    ),
  ];
  return order.map((i) => {
    const n = pad(i);
    return {
      full: `/images/${project.category}/${project.slug}/full/${n}.webp`,
      thumb: `/images/${project.category}/${project.slug}/thumb/${n}.webp`,
    };
  });
}

// Headline stats shown on the Home hero and the About page — edit the
// values here to update both at once.
export const siteStats = [
  { value: "150+", label: "Projects delivered" },
  { value: "75+", label: "Different clients" },
  { value: "8+", label: "Years of experience" },
];

// Which project represents each category's showcase photo on the Services
// page. Edit the slug here to change it — no need to reorder the projects
// list above.
export const categoryShowcaseSlug: Record<string, string> = {
  "residential-interiors": "dehiwala-residence",
  "retail-commercial": "fish-and-chips",
  "exhibition-stalls-events": "jat-holdings-stall",
  "corporate-institutional": "united-nations",
};

export const featuredProjectSlugs = [
  "aarawild-luxury-villas-kandalama",
  "tata-flagship-showroom",
  "exhibition-stall-design",
  "mns-homeware-bambalapitiya",
  "beurant-identity-cw-mackie",
];
