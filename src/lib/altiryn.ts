export type Chapter = {
  id: string;
  number: string;
  title: string;
  kicker: string;
  summary: string;
  detail: string;
  status:
    | "ESTABLISHED"
    | "CONCEPTUAL"
    | "ASSUMED"
    | "SIMULATED"
    | "ESTIMATED"
    | "EXPERIMENTAL"
    | "FUTURE";
  metric?: string;
};

export const chapters: Chapter[] = [
  {
    id: "origin",
    number: "00",
    title: "Origin",
    kicker: "A CONCEPTUAL ENGINEERING STUDY",
    summary: "What if we collected the Sun’s energy above the atmosphere?",
    detail:
      "ALTIRYN investigates a space-based solar architecture that stores energy in modular batteries and physically returns them to Earth. It is a systems study—not a deployed product or validated mission.",
    status: "CONCEPTUAL",
  },
  {
    id: "definition",
    number: "00A",
    title: "What is ALTIRYN?",
    kicker: "AN INTEGRATED ORBITAL ENERGY ECOSYSTEM",
    summary:
      "An AI-managed, modular space-based solar energy system explored as a conceptual engineering study.",
    detail:
      "The central question is whether solar energy can be collected in space, stored in exchangeable battery modules, physically returned to Earth, extracted, refurbished and relaunched as one reusable operating system.",
    status: "CONCEPTUAL",
  },
  {
    id: "architecture",
    number: "00B",
    title: "The difference",
    kicker: "PHYSICAL RETURN, NOT WIRELESS TRANSMISSION",
    summary:
      "ALTIRYN replaces the usual transmitter-to-ground-receiver link with a closed battery logistics loop.",
    detail:
      "This physical battery-return loop is the defining proposal. It links orbital generation to autonomous exchange, re-entry, recovery, terrestrial energy extraction, refurbishment and reusable launch.",
    status: "EXPERIMENTAL",
  },
  {
    id: "ecosystem",
    number: "00C",
    title: "One ecosystem",
    kicker: "ORBIT · LOGISTICS · EARTH · INTELLIGENCE",
    summary:
      "ALTIRYN is not a satellite with solar panels. It is a coordinated system spanning orbit and Earth.",
    detail:
      "The architecture includes generating spacecraft, batteries, docking and navigation; return capsules and launches; recovery and refurbishment; autonomous health, optimization and fleet coordination; and engineering, economics, safety and feasibility analysis.",
    status: "CONCEPTUAL",
  },
  {
    id: "systems",
    number: "00D",
    title: "The integration problem",
    kicker: "WHY THIS IS SYSTEMS ENGINEERING",
    summary:
      "No single technology defines the challenge. Interfaces, dependencies and failure modes do.",
    detail:
      "Aerospace, energy, robotics, AI, logistics, economics and safety must work across a repeated mission lifecycle. The study asks whether those mature and experimental elements can become a coherent architecture.",
    status: "CONCEPTUAL",
  },
  {
    id: "coverage",
    number: "00E",
    title: "What the thesis covers",
    kicker: "16 CHAPTERS · CONNECTED DOMAINS",
    summary:
      "The research follows energy through physics, hardware, autonomy, logistics, economics, risk and future development.",
    detail:
      "Select a domain in the systems map to jump to the corresponding technical scene. Connections matter because every assumption propagates into mass, operations, risk and cost.",
    status: "CONCEPTUAL",
  },
  {
    id: "minute",
    number: "00F",
    title: "The idea in one minute",
    kicker: "FOLLOW ONE UNIT OF ENERGY",
    summary:
      "Sunlight becomes electricity, enters a modular battery, returns to Earth, and begins the loop again.",
    detail:
      "The sequence is conceptual. Each exchange, recovery and relaunch step introduces efficiency, reliability, mass, cost and safety penalties investigated throughout the experience.",
    status: "CONCEPTUAL",
  },
  {
    id: "question",
    number: "01",
    title: "The question",
    kicker: "WHY ORBIT?",
    summary:
      "Terrestrial solar is intermittent. Orbit changes the environment, not the laws of engineering.",
    detail:
      "Night, clouds, weather, seasonal variation, atmospheric loss and land constraints motivate the study. Space-based collection introduces launch, thermal, radiation, storage and logistics penalties of its own.",
    status: "CONCEPTUAL",
    metric: "1361 W/m²",
  },
  {
    id: "earth",
    number: "02",
    title: "Earth / Space",
    kicker: "A SIMPLE REFERENCE COMPARISON",
    summary: "1361 W/m² in space versus approximately 1000 W/m² at ground reference.",
    detail:
      "The thesis derives a 36.1% difference against this simplified reference. It is not a site-specific energy-yield comparison and does not include complete system losses.",
    status: "ASSUMED",
    metric: "+36.1%",
  },
  {
    id: "orbit",
    number: "03",
    title: "Orbit",
    kicker: "LOW EARTH ORBIT · 500 KM",
    summary: "Velocity ≈ 7.62 km/s. Period ≈ 94.5 minutes. Approximately 15 orbits per day.",
    detail:
      "Altitude changes velocity, period, exposure and access. The engineering lab uses v = √(μ/r) and T = 2π√(r³/μ) to update the conceptual orbit live.",
    status: "CONCEPTUAL",
    metric: "94.5 MIN",
  },
  {
    id: "machine",
    number: "04",
    title: "The machine",
    kicker: "8,500 KG CONCEPTUAL SPACECRAFT",
    summary:
      "Structure, generation, storage, autonomy, communications, navigation, docking, thermal control and shielding become one serviceable system.",
    detail:
      "Select a subsystem, orbit the spacecraft and separate the assembly. This representation communicates architecture; it is not flight-qualified CAD.",
    status: "CONCEPTUAL",
    metric: "8.5 t",
  },
  {
    id: "energy",
    number: "05",
    title: "Energy",
    kicker: "IDEALIZED SOLAR MODEL",
    summary: "100 m² × 1361 W/m² × 32% = 43.55 kW.",
    detail:
      "At continuous ideal output: 1.045 MWh/day, 381.5 MWh/year and about 5.72 GWh over 15 years. Real output would be lower after orbital, conversion, thermal, degradation and operational losses.",
    status: "ASSUMED",
    metric: "43.55 kW",
  },
  {
    id: "storage",
    number: "06",
    title: "Storage",
    kicker: "THE DOMINANT MASS",
    summary: "1.045 MWh ÷ 220 Wh/kg = 4,751 kg of lithium-ion battery.",
    detail:
      "Modularity enables handling and replacement, but connectors, locks, thermal interfaces, radiation, BMS, cycle life and safe charge control make storage a central constraint.",
    status: "ESTIMATED",
    metric: "4.75 TONNES",
  },
  {
    id: "thermal",
    number: "07",
    title: "Thermal & radiation",
    kicker: "VACUUM REMOVES CONVECTION",
    summary:
      "Radiators reject heat by radiation. A basic 12 m², ε 0.90, 300 K example gives ≈4.96 kW.",
    detail:
      "P = εσAT⁴ is only a first-order radiative example—not a full thermal simulation. Solar particles, cosmic radiation and belt exposure also drive shielding, redundancy and monitoring.",
    status: "CONCEPTUAL",
    metric: "≈4.96 kW",
  },
  {
    id: "return",
    number: "08",
    title: "The return loop",
    kicker: "THE DEFINING PROPOSAL",
    summary:
      "Charge. Transfer. Separate. Re-enter. Recover. Extract. Refurbish. Relaunch. Rendezvous. Dock. Online.",
    detail:
      "Unlike many space-based solar concepts centered on microwave or laser transmission, ALTIRYN explores physical battery transport. That integration remains experimental and requires substantial development.",
    status: "EXPERIMENTAL",
    metric: "135 CYCLES/YR",
  },
  {
    id: "intelligence",
    number: "09",
    title: "Intelligence",
    kicker: "A NERVOUS SYSTEM, NOT A CHATBOT",
    summary: "Sensors → telemetry → analysis → decision → action.",
    detail:
      "The proposed AI layer supports health monitoring, predictive maintenance, solar optimization, orbital navigation, autonomous docking, fault detection and fleet coordination. All telemetry shown here is simulated.",
    status: "SIMULATED",
  },
  {
    id: "operations",
    number: "10",
    title: "Operations",
    kicker: "GROUND + ORBIT",
    summary:
      "Manufacture, test, launch, commission, generate, exchange, maintain, recover and expand.",
    detail:
      "Recovery, energy extraction, battery refurbishment, launch logistics and mission control must operate as one lifecycle. Reusability is an architectural goal, not a demonstrated outcome.",
    status: "CONCEPTUAL",
  },
  {
    id: "fleet",
    number: "11",
    title: "Fleet",
    kicker: "ONE → 1,000",
    summary: "Scale changes the problem from spacecraft design to infrastructure coordination.",
    detail:
      "Constellations multiply power and logistics throughput, but also rendezvous demand, collision exposure, communications load, servicing complexity and capital risk.",
    status: "FUTURE",
    metric: "1,000",
  },
  {
    id: "engineering",
    number: "12",
    title: "Engineering lab",
    kicker: "CHANGE THE ASSUMPTIONS",
    summary:
      "Explore orbit, solar, battery, thermal, mass, fleet and economics with live calculations.",
    detail:
      "Every output is traceable to an equation and its assumptions. Results are conceptual estimates, not performance guarantees.",
    status: "CONCEPTUAL",
  },
  {
    id: "economics",
    number: "13",
    title: "Economics",
    kicker: "CURRENTLY DIFFICULT",
    summary: "$35M manufacturing + $50M launch + $135M operations + $105M maintenance = $325M.",
    detail:
      "The thesis estimates approximately $56.8/kWh. Early systems would be far more expensive than terrestrial solar or wind and depend on major advances in launch, storage, manufacturing and reuse.",
    status: "ESTIMATED",
    metric: "$56.8/kWh",
  },
  {
    id: "risk",
    number: "14",
    title: "Risk & safety",
    kicker: "NOT SOLVED—MANAGED",
    summary:
      "Battery, docking, AI, communications, radiation, thermal, launch, debris, ground and economic risks interact.",
    detail:
      "Redundant sensing, safe aborts, fault detection, shielding, isolation and inspection are mitigation concepts. They reduce exposure; they do not prove safety.",
    status: "CONCEPTUAL",
  },
  {
    id: "feasibility",
    number: "15",
    title: "Feasibility",
    kicker: "INTEGRATION IS THE CHALLENGE",
    summary:
      "Many enabling technologies exist independently. Modular battery transport and orbital energy logistics do not yet exist at the required scale.",
    detail:
      "Photovoltaics, BMS and orbital navigation are mature; reusable launch, AI and autonomous docking are highly mature; battery transport is experimental; large-scale orbital energy logistics needs more development.",
    status: "EXPERIMENTAL",
  },
  {
    id: "future",
    number: "16",
    title: "Future",
    kicker: "A RESEARCH ROADMAP",
    summary: "Prototype first. Demonstrate exchange. Then ask whether a fleet deserves to exist.",
    detail:
      "Near term: CAD, simulation, AI software, batteries, docking tests and economic refinement. Medium: experimental satellite and exchange. Long: constellations, reusable logistics and robotic servicing. Beyond: lunar, Mars and orbital industry.",
    status: "FUTURE",
  },
  {
    id: "conclusion",
    number: "17",
    title: "Conclusion",
    kicker: "SUN → ORBIT → ENERGY → BATTERY → EARTH → RELAUNCH",
    summary: "ALTIRYN is an engineering question worth exploring.",
    detail: "A conceptual engineering study by Tejes J. Revision 1.0 · June 2026.",
    status: "CONCEPTUAL",
  },
];

export const subsystems = [
  {
    id: "structure",
    label: "01 · PRIMARY STRUCTURE",
    color: "#93a2ad",
    what: "Central bus, frames, panels, mounts and attachment points.",
    does: "Carries launch, orbital and docking loads while locating every subsystem.",
    why: "A reusable modular vehicle needs a stiff reference structure.",
    challenge: "Minimize mass while surviving launch and repeated servicing loads.",
  },
  {
    id: "solar",
    label: "02 · SOLAR GENERATION",
    color: "#c7a14a",
    what: "Segmented deployable photovoltaic wings, hinges and power routing.",
    does: "Converts solar irradiance into regulated electrical power.",
    why: "Generation is the spacecraft’s primary mission function.",
    challenge: "Deployment reliability, tracking, degradation and thermal distortion.",
  },
  {
    id: "battery",
    label: "03 · MODULAR STORAGE",
    color: "#d9724d",
    what: "Removable Li-ion modules, rack, connectors, locks and thermal interface.",
    does: "Stores generated energy for physical transport to Earth.",
    why: "The proposed architecture replaces wireless beaming with logistics.",
    challenge: "At 4,751 kg, storage dominates mass and exchange complexity.",
  },
  {
    id: "control",
    label: "04 · AI / CONTROL",
    color: "#52b8a6",
    what: "Flight computers, processing module and sensor interfaces.",
    does: "Coordinates health, optimization, navigation, faults and docking.",
    why: "Continuous autonomous operations exceed practical manual control.",
    challenge: "Verification, fault containment and safe degraded modes.",
  },
  {
    id: "comms",
    label: "05 · COMMUNICATIONS",
    color: "#71a6cc",
    what: "Conceptual antennas and communication hardware.",
    does: "Carries telemetry, mission commands and fleet coordination data.",
    why: "Ground and orbital assets must share operational state.",
    challenge: "Availability and resilience without assuming unsupported bands or rates.",
  },
  {
    id: "navigation",
    label: "06 · NAVIGATION",
    color: "#d8d4c7",
    what: "Navigation sensors and attitude-control elements.",
    does: "Estimates state and controls orientation, rendezvous and solar pointing.",
    why: "Generation and docking both depend on precise relative geometry.",
    challenge: "Robust autonomy across changing illumination and failure states.",
  },
  {
    id: "docking",
    label: "07 · DOCKING",
    color: "#e3aa63",
    what: "Port, alignment guides, capture locks and power/data interface.",
    does: "Captures the return vehicle and enables battery transfer.",
    why: "It closes the physical energy logistics loop.",
    challenge: "Repeated autonomous capture with safe abort capability.",
  },
  {
    id: "thermal",
    label: "08 · THERMAL",
    color: "#b85e61",
    what: "Radiators, conductive pathways and insulation layers.",
    does: "Moves waste heat from batteries and electronics to radiating surfaces.",
    why: "Vacuum removes convective cooling.",
    challenge: "Maintain safe temperatures through variable loads and attitudes.",
  },
];

export const masses = [
  ["Battery", 4751],
  ["Solar", 850],
  ["Structure", 650],
  ["Shielding", 520],
  ["Misc.", 499],
  ["Power", 320],
  ["Thermal", 260],
  ["Docking", 240],
  ["AI computers", 180],
  ["Communications", 120],
  ["Navigation", 110],
] as const;

export const risks = [
  "Battery thermal event",
  "Docking failure",
  "AI fault",
  "Communications loss",
  "Radiation degradation",
  "Thermal overload",
  "Launch failure",
  "Orbital debris",
  "Ground handling",
  "Economic viability",
];

export function orbitAt(altitudeKm: number) {
  const mu = 398600.4418;
  const radius = 6371 + altitudeKm;
  const velocity = Math.sqrt(mu / radius);
  const periodMinutes = (2 * Math.PI * Math.sqrt(radius ** 3 / mu)) / 60;
  return { velocity, periodMinutes, orbitsPerDay: 1440 / periodMinutes };
}

export function solarAt(area: number, efficiency: number) {
  const powerKw = (area * 1361 * efficiency) / 1000;
  return { powerKw, dayMwh: (powerKw * 24) / 1000, yearMwh: (powerKw * 24 * 365) / 1000 };
}
