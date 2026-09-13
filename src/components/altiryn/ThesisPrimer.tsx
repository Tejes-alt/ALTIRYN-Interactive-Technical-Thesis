import { Button } from "@/components/ui/button";
import type { CSSProperties } from "react";

const architecture = [
  "SOLAR GENERATION",
  "MODULAR BATTERY",
  "AUTONOMOUS EXCHANGE",
  "RETURN CAPSULE",
  "EARTH RECOVERY",
  "ENERGY EXTRACTION",
  "REFURBISHMENT",
  "RELAUNCH",
  "ORBIT",
];

const layers = [
  [
    "ORBITAL",
    "Solar satellites · batteries · control · docking · navigation · thermal · communications",
  ],
  ["LOGISTICS", "Return capsules · battery exchange · rendezvous · reusable launches"],
  [
    "EARTH",
    "Recovery · extraction · inspection · refurbishment · launch preparation · mission control",
  ],
  [
    "INTELLIGENCE",
    "Health monitoring · prediction · optimization · navigation · faults · fleet coordination",
  ],
  [
    "ENGINEERING / BUSINESS",
    "Mass · energy · thermal · reliability · cost · scalability · risk · feasibility",
  ],
];

const domains = [
  ["AEROSPACE", "Structure · orbit · thermal · radiation · navigation · communications · launch"],
  ["ENERGY", "Photovoltaics · conversion · batteries · extraction · efficiency"],
  ["ROBOTICS", "Rendezvous · docking · servicing · fault response"],
  ["AI / COMPUTATION", "Monitoring · prediction · optimization · decisions · coordination"],
  ["LOGISTICS", "Battery movement · recovery · refurbishment · orbital transfer"],
  ["SYSTEMS", "Interfaces · dependencies · failure modes · operations · scalability"],
  ["ECONOMICS", "Manufacturing · launch · operations · maintenance · cost per energy"],
  [
    "RISK / SAFETY",
    "Debris · radiation · battery · docking · launch · thermal · communications · AI",
  ],
];

const network: ReadonlyArray<readonly [string, string]> = [
  ["SPACE-BASED SOLAR", "energy"],
  ["ORBITAL MECHANICS", "orbit"],
  ["SPACECRAFT DESIGN", "machine"],
  ["PHOTOVOLTAICS", "energy"],
  ["BATTERY SYSTEMS", "storage"],
  ["AUTONOMOUS DOCKING", "return"],
  ["AI", "intelligence"],
  ["LOGISTICS", "operations"],
  ["ECONOMICS", "economics"],
  ["RISK", "risk"],
  ["FEASIBILITY", "feasibility"],
  ["FUTURE TECHNOLOGY", "future"],
];

export function ArchitectureLoop() {
  return (
    <div className="architecture-loop" aria-label="ALTIRYN physical battery-return architecture">
      <div className="legacy-path">
        <span>TRADITIONAL CONCEPT</span>
        <b>SOLAR GENERATION → WIRELESS TRANSMISSION → EARTH RECEIVER</b>
      </div>
      <div className="return-path">
        {architecture.map((item, index) => (
          <div key={item}>
            <i>{String(index + 1).padStart(2, "0")}</i>
            <b>{item}</b>
            {index < architecture.length - 1 && <span>→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function EcosystemLayers() {
  return (
    <div className="ecosystem-layers">
      {layers.map(([title, text], index) => (
        <div key={title}>
          <i>{String(index + 1).padStart(2, "0")}</i>
          <b>{title}</b>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

export function SystemsMatrix() {
  return (
    <div className="systems-matrix">
      {domains.map(([title, text]) => (
        <div key={title}>
          <b>{title}</b>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

export function ThesisNetwork() {
  return (
    <div className="thesis-network" aria-label="Interactive thesis domain map">
      <div className="network-core">
        <small>ALTIRYN</small>
        <b>INTEGRATED SYSTEM</b>
      </div>
      {network.map(([label, target], index) => (
        <Button
          key={label}
          variant="ghost"
          style={{ "--node-index": index } as CSSProperties}
          onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}

export function MinuteSequence() {
  return (
    <div className="minute-sequence">
      {[
        "SUN",
        "SPACE-BASED SOLAR ARRAY",
        "ELECTRICITY",
        "MODULAR BATTERY",
        "AUTONOMOUS EXCHANGE",
        "RETURN CAPSULE",
        "EARTH",
        "ENERGY EXTRACTION",
        "REFURBISHMENT",
        "RELAUNCH",
        "ORBIT",
      ].map((item, index) => (
        <div key={item}>
          <i>{String(index + 1).padStart(2, "0")}</i>
          <b>{item}</b>
        </div>
      ))}
    </div>
  );
}
