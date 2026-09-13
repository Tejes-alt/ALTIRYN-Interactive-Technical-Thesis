type Brief = { what: string; why: string; how: string; assumption: string; limitation: string };

const briefs: Record<string, Brief> = {
  question: {
    what: "A comparison between orbital and ground-level solar collection.",
    why: "It establishes why moving collection above the atmosphere is worth studying.",
    how: "The thesis compares the 1,361 W/m² solar constant with a simplified 1,000 W/m² ground reference.",
    assumption: "The ground value is a reference, not a location-specific yield model.",
    limitation: "The comparison excludes weather, latitude, seasons and total system efficiency.",
  },
  earth: {
    what: "The energy environment on either side of the atmosphere.",
    why: "Atmospheric attenuation and intermittency affect terrestrial collection.",
    how: "The reference difference is (1,361−1,000)÷1,000 = 36.1%.",
    assumption: "Both values are treated as simplified irradiance references.",
    limitation:
      "Higher incident flux does not prove higher delivered energy after orbital logistics.",
  },
  orbit: {
    what: "A 500 km circular low-Earth-orbit reference.",
    why: "Orbit determines speed, period, illumination, access and rendezvous windows.",
    how: "Two-body equations produce 7.62 km/s and a 94.5-minute period.",
    assumption: "Earth is treated as a point mass and the orbit as circular.",
    limitation: "No perturbation, station-keeping or optimized trajectory design is included.",
  },
  machine: {
    what: "An 8,500 kg conceptual serviceable spacecraft architecture.",
    why: "Generation, storage and exchange only work when supporting subsystems operate together.",
    how: "Structure integrates arrays, battery racks, avionics, thermal control, navigation, communications and docking.",
    assumption:
      "Geometry communicates subsystem relationships rather than flight-qualified dimensions.",
    limitation:
      "No full structural analysis, detailed load cases or hardware qualification exists.",
  },
  energy: {
    what: "An ideal photovoltaic generation estimate.",
    why: "Generated power determines battery charging time and system throughput.",
    how: "100 m² × 1,361 W/m² × 32% = 43.55 kW.",
    assumption: "Continuous illumination and constant conversion efficiency.",
    limitation:
      "Eclipses, pointing, wiring, conversion, thermal and degradation losses are excluded.",
  },
  storage: {
    what: "One ideal day of generated energy stored in lithium-ion modules.",
    why: "The battery is the physical energy payload returned to Earth.",
    how: "1.045 MWh ÷ 220 Wh/kg = approximately 4,751 kg.",
    assumption: "220 Wh/kg is used as a conceptual pack-level reference.",
    limitation: "Containment, reserve capacity, aging, BMS and cooling can increase real mass.",
  },
  thermal: {
    what: "Heat rejection and radiation exposure in the orbital environment.",
    why: "Vacuum removes convective cooling while batteries and electronics still produce heat.",
    how: "P = εσAT⁴ gives about 4.96 kW for 12 m², ε 0.90 and 300 K.",
    assumption: "Uniform temperature and emissivity in a first-order radiation example.",
    limitation: "No full thermal network, CFD, transient cycling or detailed radiation analysis.",
  },
  return: {
    what: "A reusable physical battery exchange and return loop.",
    why: "It is ALTIRYN’s alternative to wireless energy transmission.",
    how: "Charge, transfer, re-entry, recovery, extraction, refurbishment, launch and docking repeat as one cycle.",
    assumption:
      "Autonomous servicing and reusable logistics can eventually meet the required cadence.",
    limitation: "Modular orbital battery transport remains experimental and unvalidated.",
  },
  intelligence: {
    what: "A proposed autonomy layer joining sensors, models and spacecraft actions.",
    why: "Continuous fleet operations and docking cannot depend on constant manual control.",
    how: "Telemetry feeds health monitoring, prediction, optimization, navigation, fault detection and coordination.",
    assumption: "Algorithms can be verified with safe boundaries and degraded modes.",
    limitation: "The interface is simulated; it is not evidence of trained or flight-validated AI.",
  },
  operations: {
    what: "The complete ground-to-orbit operating lifecycle.",
    why: "Energy delivery depends on recovery and relaunch as much as collection.",
    how: "Manufacture, test, launch, commission, exchange, recover, extract, inspect and refurbish form one chain.",
    assumption: "Reusable assets can sustain repeat operations.",
    limitation: "No commercial rollout plan, launch manifest or demonstrated turnaround exists.",
  },
  fleet: {
    what: "A future infrastructure-scale constellation study.",
    why: "A single spacecraft cannot establish utility-scale throughput or redundancy.",
    how: "Ideal unit output scales arithmetically while coordination and logistics grow more complex.",
    assumption: "Common vehicles and interoperable servicing can support a fleet.",
    limitation: "The 1,000-unit view is a scale thought experiment, not a deployment plan.",
  },
  economics: {
    what: "A conceptual lifetime cost estimate.",
    why: "Delivered energy must compete with terrestrial systems, not only function technically.",
    how: "Manufacturing, launch, operations and maintenance total approximately $325M.",
    assumption: "The thesis cost categories and 15-year ideal energy estimate are used.",
    limitation: "Values are not vendor quotes, audited forecasts or guaranteed economics.",
  },
  risk: {
    what: "An interacting register of technical, operational and economic hazards.",
    why: "Failure in one subsystem can propagate across the energy and logistics chain.",
    how: "Redundancy, isolation, aborts, shielding, monitoring and inspection are proposed mitigations.",
    assumption: "Mitigation concepts can reduce—but never remove—exposure.",
    limitation: "No full probabilistic safety assessment or experimental validation is included.",
  },
  feasibility: {
    what: "A comparison of mature enabling technology and unresolved integration.",
    why: "Independent maturity does not guarantee a viable combined architecture.",
    how: "PV, BMS and navigation are mature; battery transport and orbital energy logistics are not.",
    assumption: "Existing technologies can be adapted to compatible interfaces.",
    limitation: "Integration, scaling, testing and economics remain open research problems.",
  },
  future: {
    what: "A staged research path from models to demonstrations.",
    why: "The largest uncertainties should be retired before fleet-scale commitments.",
    how: "CAD and simulation precede docking tests, experimental exchange and any constellation study.",
    assumption: "Each phase advances only after evidence supports the next.",
    limitation: "Roadmap stages are research priorities, not dates or commitments.",
  },
};

export function ChapterBrief({ id, fallback }: { id: string; fallback: string }) {
  const brief = briefs[id];
  if (!brief) return <p>{fallback}</p>;
  return (
    <div className="chapter-brief">
      {[
        ["WHAT", brief.what],
        ["WHY", brief.why],
        ["HOW", brief.how],
        ["ASSUMPTION", brief.assumption],
        ["LIMITATION", brief.limitation],
      ].map(([label, text]) => (
        <div key={label}>
          <small>{label}</small>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
