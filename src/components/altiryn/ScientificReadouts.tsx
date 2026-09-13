import { masses, risks } from "@/lib/altiryn";

const flow = ["SUN", "PV ARRAY", "DC BUS", "BATTERY", "CAPSULE", "EARTH"];

function Scale({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="science-value">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </div>
  );
}

export function ScientificReadout({ chapter }: { chapter: string }) {
  if (chapter === "question" || chapter === "earth") {
    return (
      <aside className="science-readout flux-readout" aria-label="Solar irradiance comparison">
        <Scale label="ABOVE ATMOSPHERE" value="1,361 W/m²" note="SOLAR CONSTANT REFERENCE" />
        <div className="comparison-axis">
          <i />
          <b>+36.1%</b>
          <i />
        </div>
        <Scale label="GROUND REFERENCE" value="≈1,000 W/m²" note="SIMPLIFIED ASSUMPTION" />
      </aside>
    );
  }
  if (chapter === "orbit") {
    return (
      <aside className="science-readout orbit-readout" aria-label="Orbital mechanics readout">
        <div className="orbit-diagram">
          <i />
          <span>r = 6,871 km</span>
        </div>
        <Scale label="ALTITUDE" value="500 km" note="CIRCULAR LEO" />
        <Scale label="VELOCITY" value="7.62 km/s" note="v = √(μ/r)" />
        <Scale label="PERIOD" value="94.5 min" note="≈15 ORBITS / DAY" />
      </aside>
    );
  }
  if (chapter === "energy") {
    return (
      <aside className="science-readout conversion-readout" aria-label="Energy conversion chain">
        {flow.slice(0, 4).map((item, index) => (
          <span key={item}>
            {item}
            {index < 3 && <i>→</i>}
          </span>
        ))}
        <Scale label="IDEAL DAILY ENERGY" value="1.045 MWh" note="LOSSES EXCLUDED" />
        <Scale label="15-YEAR IDEAL TOTAL" value="≈5.72 GWh" note="NO DEGRADATION APPLIED" />
      </aside>
    );
  }
  if (chapter === "storage" || chapter === "thermal") {
    return (
      <aside className="science-readout storage-readout" aria-label="Battery and thermal readout">
        <div className="battery-cutaway">
          {Array.from({ length: 12 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
        <Scale label="SPECIFIC ENERGY" value="220 Wh/kg" note="ASSUMED LI-ION" />
        <Scale label="BATTERY MASS" value="4,751 kg" note="ESTIMATED" />
        <Scale label="RADIATOR EXAMPLE" value="≈4.96 kW" note="12 m² · ε 0.90 · 300 K" />
      </aside>
    );
  }
  if (chapter === "operations") {
    return (
      <aside className="science-readout system-flow" aria-label="System operations loop">
        {flow.map((item, index) => (
          <span key={item}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            {item}
          </span>
        ))}
      </aside>
    );
  }
  if (chapter === "fleet") {
    return (
      <aside className="science-readout fleet-readout" aria-label="Fleet scale readout">
        <Scale label="REFERENCE UNIT" value="1" note="CONCEPTUAL SPACECRAFT" />
        <div className="fleet-ruler">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <Scale label="INFRASTRUCTURE STUDY" value="1,000" note="FUTURE SCALE · NOT DEPLOYED" />
      </aside>
    );
  }
  if (chapter === "economics") {
    const costs = [
      ["MANUFACTURE", 35],
      ["LAUNCH", 50],
      ["OPERATIONS", 135],
      ["MAINTENANCE", 105],
    ] as const;
    return (
      <aside className="science-readout cost-readout" aria-label="Estimated lifetime cost">
        {costs.map(([name, value]) => (
          <div key={name}>
            <span>{name}</span>
            <i style={{ flexGrow: value }} />
            <b>${value}M</b>
          </div>
        ))}
        <strong>$325M · ≈$56.8/kWh</strong>
        <small>THESIS ESTIMATE · PRESENTLY DIFFICULT</small>
      </aside>
    );
  }
  if (chapter === "risk") {
    return (
      <aside className="science-readout risk-matrix" aria-label="Conceptual risk register">
        {risks.map((risk, index) => (
          <span key={risk} className={index < 4 ? "high" : index < 8 ? "medium" : "low"}>
            <i>{String(index + 1).padStart(2, "0")}</i>
            {risk}
          </span>
        ))}
      </aside>
    );
  }
  if (chapter === "feasibility") {
    const tech = [
      ["PHOTOVOLTAICS", "ESTABLISHED"],
      ["BATTERY MANAGEMENT", "ESTABLISHED"],
      ["AUTONOMOUS DOCKING", "PROPOSED INTEGRATION"],
      ["BATTERY TRANSPORT", "EXPERIMENTAL"],
      ["ORBITAL ENERGY LOGISTICS", "FUTURE"],
    ];
    return (
      <aside className="science-readout trl-readout" aria-label="Technology maturity comparison">
        {tech.map(([name, state], index) => (
          <div key={name}>
            <span>{name}</span>
            <i>
              <b style={{ width: `${25 + index * 14}%` }} />
            </i>
            <small>{state}</small>
          </div>
        ))}
      </aside>
    );
  }
  if (chapter === "future") {
    return (
      <aside className="science-readout roadmap-readout" aria-label="Research roadmap">
        <span>
          <b>NEAR</b>CAD · SIMULATION · DOCKING TESTS
        </span>
        <span>
          <b>MEDIUM</b>EXPERIMENTAL SATELLITE · EXCHANGE
        </span>
        <span>
          <b>LONG</b>CONSTELLATIONS · ROBOTIC SERVICING
        </span>
        <span>
          <b>BEYOND</b>LUNAR · MARS · ORBITAL INDUSTRY
        </span>
      </aside>
    );
  }
  if (chapter === "machine") {
    const total = masses.reduce((sum, [, mass]) => sum + mass, 0);
    return (
      <aside className="science-readout mass-readout" aria-label="Spacecraft mass composition">
        <Scale
          label="REFERENCE MASS"
          value={`${total.toLocaleString()} kg`}
          note="CONCEPTUAL BREAKDOWN"
        />
        <div>
          {masses.slice(0, 5).map(([name, mass]) => (
            <span key={name}>
              <b>{name}</b>
              <i style={{ width: `${mass / 52}%` }} />
              <small>{mass.toLocaleString()}</small>
            </span>
          ))}
        </div>
      </aside>
    );
  }
  return null;
}
