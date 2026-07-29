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
    imageCount: 18,
    coverIndex: 4,
  },
  {
    slug: "aarawild-luxury-villas-kandalama",
    category: "residential-interiors",
    title: "Aarawild Luxury Villas, Kandalama",
    location: "Kandalama",
    description:
      "Placeholder — replace with details on the villa interiors brief, scope and outcome.",
    imageCount: 7,
    coverIndex: 6,
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
    imageCount: 11,
    coverIndex: 2,
  },
  {
    slug: "hardware-store",
    category: "retail-commercial",
    title: "Hardware Store Fit-Out",
    description:
      "Placeholder — replace with details on this hardware store interior and exterior fit-out.",
    imageCount: 10,
    coverIndex: 5,
  },
  {
    slug: "small-office-rooms",
    category: "retail-commercial",
    title: "Small Office Rooms",
    description:
      "Placeholder — replace with details on this office interiors project.",
    imageCount: 6,
    coverIndex: 3,
  },
  {
    slug: "fish-and-chips",
    category: "retail-commercial",
    title: "Fish & Chips Outlet",
    description:
      "Placeholder — replace with details on this food outlet fit-out.",
    imageCount: 9,
    coverIndex: 1,
  },
  {
    slug: "jat-holdings-stall",
    category: "exhibition-stalls-events",
    title: "JAT Holdings Exhibition Stall",
    description:
      "Placeholder — replace with details on the exhibition brief and stand design.",
    imageCount: 6,
    coverIndex: 2,
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
    title: "Exhibition Stall Design - AOD",
    description:
      "Placeholder — replace with details on this exhibition stand project.",
    imageCount: 4,
    coverIndex: 4,
  },
  {
    slug: "pod-designs",
    category: "exhibition-stalls-events",
    title: "Pod Design - HUTCH",
    description:
      "Placeholder — replace with details on this modular pod/kiosk design.",
    imageCount: 6,
    coverIndex: 5,
  },
  {
    slug: "delo-truck",
    category: "exhibition-stalls-events",
    title: "Delo Truck Branding",
    description:
      "Placeholder — replace with details on this vehicle branding project.",
    imageCount: 7,
    coverIndex: 4,
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
    imageCount: 8,
    coverIndex: 1,
  },
  {
    slug: "united-nations",
    category: "corporate-institutional",
    title: "United Nations",
    description:
      "Placeholder — replace with details on this institutional installation.",
    imageCount: 7,
    coverIndex: 1,
  },
  {
    slug: "orient-insurance",
    category: "corporate-institutional",
    title: "Orient Insurance",
    description:
      "Placeholder — replace with details on this corporate fit-out.",
    imageCount: 12,
    coverIndex: 6,
    
  },
  {
    slug: "dimo-academy",
    category: "corporate-institutional",
    title: "DIMO Academy",
    description:
      "Placeholder — replace with details on this corporate training facility fit-out.",
    imageCount: 5,
    coverIndex: 2,
  },
  {
    slug: "tata-flagship-showroom",
    category: "corporate-institutional",
    title: "TATA Flagship Showroom",
    description:
      "Placeholder — replace with details on this flagship showroom fit-out.",
    imageCount: 7,
    coverIndex: 7,
  },
  {
    slug: "tata-showroom-network",
    category: "corporate-institutional",
    title: "TATA Showroom Network",
    location: "Batticaloa, Galle, Katugastota & Kurunegala",
    description:
      "Placeholder — replace with details on this multi-branch showroom rollout.",
    imageCount: 4,
    coverIndex: 3,
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

// Which project represents each category's showcase photo on the Services
// page. Edit the slug here to change it — no need to reorder the projects
// list above.
export const categoryShowcaseSlug: Record<string, string> = {
  "residential-interiors": "dehiwala-residence",
  "retail-commercial": "fish-and-chips",
  "exhibition-stalls-events": "jat-holdings-stall",
  "corporate-institutional": "united-nations",
  "branding-graphic-design": "beurant-identity-cw-mackie",
};

export const featuredProjectSlugs = [
  "aarawild-luxury-villas-kandalama",
  "tata-flagship-showroom",
  "exhibition-stall-design",
  "mns-homeware-bambalapitiya",
];
