// One-off/rerunnable pipeline: reads raw project photography from the sibling
// "Bevan aiya" source folder and writes optimized WebP derivatives into
// public/images/<category>/<slug>/{full,thumb}/NNN.webp. Raw originals never
// get committed — only these derivatives do.
import { existsSync } from "node:fs";
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");
const SOURCE_ROOT = path.resolve(PROJECT_ROOT, "..", "Bevan aiya");
const OUTPUT_ROOT = path.join(PROJECT_ROOT, "public", "images");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png"]);
const FULL_WIDTH = 1920;
const THUMB_WIDTH = 600;
const FULL_QUALITY = 78;
const THUMB_QUALITY = 75;

/**
 * Each entry describes one project's photo source and where it lands.
 * `dir` is a folder under SOURCE_ROOT, or omitted when `files` gives
 * root-level source files directly.
 * `match` optionally filters filenames within a shared folder (used for the
 * multi-project "all-dimo-projects" dump, split by filename prefix).
 */
const PROJECTS = [
  {
    category: "residential-interiors",
    slug: "dehiwala-residence",
    dir: "wetransfer_dehiwala-residential-project_2026-07-23_0639",
  },
  {
    category: "residential-interiors",
    slug: "aarawild-luxury-villas-kandalama",
    dir: "wetransfer_aarawild-luxury-villas-kandalama_2026-07-23_0528",
  },
  {
    category: "retail-commercial",
    slug: "sense-lk",
    dir: "wetransfer_computer-shop-sense-lk_2026-07-23_0958",
  },
  {
    category: "retail-commercial",
    slug: "mns-homeware-bambalapitiya",
    dir: "wetransfer_mns-homeware-bambalapitiya_2026-07-23_0918",
  },
  {
    category: "retail-commercial",
    slug: "hardware-store",
    dir: "wetransfer_hardware-store_2026-07-23_0932",
  },
  {
    category: "retail-commercial",
    slug: "small-office-rooms",
    dir: "wetransfer_small-office-rooms_2026-07-23_0942",
  },
  {
    category: "retail-commercial",
    slug: "fish-and-chips",
    dir: "wetransfer_fish-chips_2026-07-23_0933",
  },
  {
    category: "exhibition-stalls-events",
    slug: "jat-holdings-stall",
    dir: "wetransfer_stall-design-jat-holdings_2026-07-23_0939",
  },
  {
    category: "exhibition-stalls-events",
    slug: "sysco-labs-stall",
    dir: "wetransfer_stall-design-sysco-labs_2026-07-23_0945",
  },
  {
    category: "exhibition-stalls-events",
    slug: "exhibition-stall-design",
    dir: "wetransfer_stall-design_2026-07-23_0929",
  },
  {
    category: "exhibition-stalls-events",
    slug: "pod-designs",
    dir: "wetransfer_pod-designs_2026-07-23_0940",
  },
  {
    category: "exhibition-stalls-events",
    slug: "delo-truck",
    dir: "wetransfer_delo-truck_2026-07-23_0620",
  },
  {
    category: "exhibition-stalls-events",
    slug: "virtusa-event-setup",
    dir: "wetransfer_virtusa_2026-07-23_1000",
  },
  {
    category: "corporate-institutional",
    slug: "world-health-organisation",
    dir: "wetransfer_world-health-organisation-un-who_2026-07-23_0928",
  },
  {
    category: "corporate-institutional",
    slug: "united-nations",
    dir: "wetransfer_united-nations_2026-07-23_0855",
  },
  {
    category: "corporate-institutional",
    slug: "orient-insurance",
    dir: "wetransfer_orient-insurance_2026-07-23_0926",
  },
  {
    category: "corporate-institutional",
    slug: "dimo-academy",
    dir: "wetransfer_all-dimo-projects_2026-07-23_0854",
    match: (name) => name.startsWith("DIMO_Academy"),
    extraFiles: ["DIMO Academy.jpg"],
  },
  {
    category: "corporate-institutional",
    slug: "tata-flagship-showroom",
    dir: "wetransfer_all-dimo-projects_2026-07-23_0854",
    match: (name) => name.startsWith("TATA_Flagship") && name.toLowerCase().endsWith(".jpg"),
  },
  {
    category: "corporate-institutional",
    slug: "tata-showroom-network",
    dir: "wetransfer_all-dimo-projects_2026-07-23_0854",
    match: (name) => /^TATA_(Galle|Katugastota|Kurunegala)/.test(name),
    extraFiles: ["TATA_Batticaloa.jpg"],
  },
  {
    category: "branding-graphic-design",
    slug: "beurant-identity-cw-mackie",
    dir: "wetransfer_my-logo-c-w-mackie-project_2026-07-23_0525",
    match: (name) => name.toLowerCase().startsWith("cwm"),
  },
];

function pad(n) {
  return String(n).padStart(3, "0");
}

async function listSourceFiles(project) {
  const files = [];
  if (project.dir) {
    const dirPath = path.join(SOURCE_ROOT, project.dir);
    const entries = await readdir(dirPath);
    for (const name of entries) {
      const ext = path.extname(name).toLowerCase();
      if (!IMAGE_EXT.has(ext)) continue;
      if (project.match && !project.match(name)) continue;
      files.push(path.join(dirPath, name));
    }
    files.sort();
  }
  if (project.extraFiles) {
    for (const name of project.extraFiles) {
      files.push(path.join(SOURCE_ROOT, name));
    }
  }
  return files;
}

async function processProject(project) {
  const files = await listSourceFiles(project);
  if (files.length === 0) {
    console.warn(`! No source images found for ${project.category}/${project.slug}`);
    return { ...project, count: 0 };
  }

  const fullDir = path.join(OUTPUT_ROOT, project.category, project.slug, "full");
  const thumbDir = path.join(OUTPUT_ROOT, project.category, project.slug, "thumb");
  await mkdir(fullDir, { recursive: true });
  await mkdir(thumbDir, { recursive: true });

  let index = 0;
  for (const filePath of files) {
    index += 1;
    const outName = `${pad(index)}.webp`;
    const image = sharp(filePath).rotate();

    await image
      .clone()
      .resize({ width: FULL_WIDTH, withoutEnlargement: true })
      .webp({ quality: FULL_QUALITY })
      .toFile(path.join(fullDir, outName));

    await image
      .clone()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: THUMB_QUALITY })
      .toFile(path.join(thumbDir, outName));
  }

  console.log(`✓ ${project.category}/${project.slug}: ${index} images`);
  return { ...project, count: index };
}

async function processLogo() {
  const logoDir = path.join(
    SOURCE_ROOT,
    "wetransfer_my-logo-c-w-mackie-project_2026-07-23_0525"
  );
  const brandOut = path.join(PROJECT_ROOT, "public", "brand");
  await mkdir(brandOut, { recursive: true });

  const variants = [
    ["Beurant_RGB-01.png", "beurant-mark.png"],
    ["Beurant_RGB-Blue.png", "beurant-mark-blue.png"],
  ];

  for (const [src, dest] of variants) {
    const srcPath = path.join(logoDir, src);
    if (!existsSync(srcPath)) {
      console.warn(`! Missing logo source: ${src}`);
      continue;
    }
    await sharp(srcPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .png({ quality: 90 })
      .toFile(path.join(brandOut, dest));
  }
  console.log("✓ brand marks processed");
}

async function processFounderPortrait() {
  const srcPath = path.join(
    SOURCE_ROOT,
    "wetransfer_graduation-pictures_2026-07-23_1001",
    "02.png"
  );
  if (!existsSync(srcPath)) {
    console.warn("! Missing founder portrait source: graduation 02.png");
    return;
  }
  const brandOut = path.join(PROJECT_ROOT, "public", "brand");
  await mkdir(brandOut, { recursive: true });
  await sharp(srcPath)
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(brandOut, "founder-portrait.webp"));
  console.log("✓ founder portrait processed");
}

async function main() {
  if (!existsSync(SOURCE_ROOT)) {
    throw new Error(`Source folder not found: ${SOURCE_ROOT}`);
  }

  const results = [];
  for (const project of PROJECTS) {
    results.push(await processProject(project));
  }
  await processLogo();
  await processFounderPortrait();

  console.log("\nSummary:");
  for (const r of results) {
    console.log(`  ${r.category}/${r.slug}: ${r.count}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
