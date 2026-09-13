import { chapters, subsystems } from "./altiryn";

export type SearchEntry = {
  id: string;
  title: string;
  description: string;
  tag: string;
  keywords: string;
  targetChapter: string;
  subsystem?: string;
};

/** Curated terms/numbers that visitors are likely to search for but that don't map
 *  1:1 onto a chapter title — orbital figures, mass/cost figures, named equations,
 *  and thesis vocabulary — each routed to the chapter that actually explains it. */
const TERMS: SearchEntry[] = [
  {
    id: "term-sbsp",
    title: "Space-based solar power (SBSP)",
    description: "The broader field ALTIRYN sits inside — collecting solar energy in orbit.",
    tag: "CONCEPT",
    keywords: "sbsp space based solar power orbital energy",
    targetChapter: "question",
  },
  {
    id: "term-orbital-velocity",
    title: "Orbital velocity — 7.62 km/s",
    description: "Circular velocity at 500 km altitude, from v = √(μ/r).",
    tag: "ORBIT",
    keywords: "orbital velocity 7.62 km/s speed",
    targetChapter: "orbit",
  },
  {
    id: "term-period",
    title: "Orbital period — 94.5 minutes",
    description: "≈15 orbits/day at 500 km, from T = 2π√(r³/μ).",
    tag: "ORBIT",
    keywords: "period 94.5 minutes orbits per day 15",
    targetChapter: "orbit",
  },
  {
    id: "term-irradiance",
    title: "Solar constant — 1361 W/m²",
    description: "Reference irradiance above the atmosphere used in the energy model.",
    tag: "ENERGY",
    keywords: "1361 w/m2 solar constant irradiance",
    targetChapter: "question",
  },
  {
    id: "term-output",
    title: "Idealized output — 43.55 kW",
    description: "100 m² × 1361 W/m² × 32% efficiency, continuous idealized case.",
    tag: "ENERGY",
    keywords: "43.55 kw output power generation",
    targetChapter: "energy",
  },
  {
    id: "term-daily",
    title: "Daily yield — 1.045 MWh",
    description: "Idealized continuous daily energy output feeding the storage model.",
    tag: "ENERGY",
    keywords: "1.045 mwh daily yield energy per day",
    targetChapter: "energy",
  },
  {
    id: "term-battery-mass",
    title: "Battery mass — 4,751 kg",
    description: "1.045 MWh ÷ 220 Wh/kg — the dominant mass line in the spacecraft budget.",
    tag: "STORAGE",
    keywords: "4751 kg battery mass 220 wh/kg lithium ion",
    targetChapter: "storage",
  },
  {
    id: "term-stefan",
    title: "Stefan–Boltzmann radiation",
    description: "P = εσAT⁴ — the first-order radiator example used for thermal control.",
    tag: "THERMAL",
    keywords: "stefan boltzmann radiator thermal p = epsilon sigma a t^4",
    targetChapter: "thermal",
  },
  {
    id: "term-docking",
    title: "Autonomous docking",
    description: "Capture, alignment and lock sequence that closes the physical return loop.",
    tag: "AUTONOMY",
    keywords: "autonomous docking capture rendezvous",
    targetChapter: "return",
    subsystem: "docking",
  },
  {
    id: "term-ai",
    title: "AI / autonomous control",
    description: "Health monitoring, predictive maintenance, navigation and fault response.",
    tag: "AUTONOMY",
    keywords: "ai predictive maintenance autonomous control intelligence",
    targetChapter: "intelligence",
    subsystem: "control",
  },
  {
    id: "term-return-capsule",
    title: "Return capsule",
    description: "Carries the exchanged battery module through re-entry back to Earth.",
    tag: "LOGISTICS",
    keywords: "return capsule re-entry battery exchange",
    targetChapter: "return",
  },
  {
    id: "term-spacecraft-mass",
    title: "Spacecraft mass — 8,500 kg",
    description: "Total conceptual satellite mass across all subsystems.",
    tag: "MASS",
    keywords: "8500 kg spacecraft mass total",
    targetChapter: "machine",
  },
  {
    id: "term-launch-force",
    title: "Conceptual launch force — ~250 kN",
    description: "Illustrative thrust figure used in the launch-logistics discussion.",
    tag: "LOGISTICS",
    keywords: "250 kn launch force thrust",
    targetChapter: "operations",
  },
  {
    id: "term-cost",
    title: "Lifetime cost — ~$325M",
    description: "Manufacturing + launch + operations + maintenance, summed over the mission.",
    tag: "ECONOMICS",
    keywords: "325m lifetime cost total budget",
    targetChapter: "economics",
  },
  {
    id: "term-cost-per-kwh",
    title: "Cost per kWh — ~$56.8/kWh",
    description: "Conceptual levelized estimate — far above terrestrial solar or wind today.",
    tag: "ECONOMICS",
    keywords: "56.8 cost per kwh levelized economics",
    targetChapter: "economics",
  },
  {
    id: "term-radiation",
    title: "Radiation exposure",
    description: "Solar particles, cosmic radiation and belt exposure drive shielding needs.",
    tag: "RISK",
    keywords: "radiation shielding cosmic rays belt exposure",
    targetChapter: "risk",
    subsystem: "thermal",
  },
  {
    id: "term-debris",
    title: "Orbital debris",
    description: "Collision exposure that grows with fleet size and orbital density.",
    tag: "RISK",
    keywords: "orbital debris collision fleet risk",
    targetChapter: "risk",
  },
  {
    id: "term-trl",
    title: "Technology readiness",
    description: "Which enabling technologies are mature versus still experimental.",
    tag: "FEASIBILITY",
    keywords: "technology readiness level trl mature experimental",
    targetChapter: "feasibility",
  },
  {
    id: "term-roadmap",
    title: "Research roadmap",
    description: "Prototype → exchange demo → constellation → beyond-Earth applications.",
    tag: "FUTURE",
    keywords: "roadmap future prototype demonstration constellation",
    targetChapter: "future",
  },
];

export const searchIndex: SearchEntry[] = [
  ...chapters.map((item) => ({
    id: `chapter-${item.id}`,
    title: item.title,
    description: item.summary,
    tag: item.status,
    keywords: `${item.title} ${item.kicker} ${item.summary} ${item.detail} ${item.metric ?? ""}`,
    targetChapter: item.id,
  })),
  ...subsystems.map((item) => ({
    id: `subsystem-${item.id}`,
    title: item.label.replace(/^\d+\s*·\s*/, ""),
    description: item.what,
    tag: "SUBSYSTEM",
    keywords: `${item.label} ${item.what} ${item.does} ${item.why} ${item.challenge}`,
    targetChapter: "machine",
    subsystem: item.id,
  })),
  ...TERMS,
];

export function searchThesis(query: string, limit = 7): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  return searchIndex
    .map((entry) => {
      const haystack = entry.keywords.toLowerCase();
      const hits = terms.filter((term) => haystack.includes(term)).length;
      return { entry, hits };
    })
    .filter(({ hits }) => hits > 0)
    .sort((a, b) => b.hits - a.hits)
    .slice(0, limit)
    .map(({ entry }) => entry);
}
