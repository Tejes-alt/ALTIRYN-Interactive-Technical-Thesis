import { useMemo, useState, type ReactNode } from "react";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { masses, orbitAt, solarAt } from "@/lib/altiryn";
import { useExperience } from "@/stores/experience";

type LabKey = "orbit" | "solar" | "battery" | "thermal" | "mass" | "fleet" | "economics";
type ModuleCopy = { what: string; why: string; how: string; meaning: string; limitation: string };

const MODULES: Record<LabKey, ModuleCopy> = {
  orbit: {
    what: "A circular low-Earth-orbit reference at adjustable altitude.",
    why: "Altitude sets orbital speed, period, access, radiation exposure and rendezvous timing.",
    how: "Velocity follows v = √(μ/r); period follows T = 2π√(r³/μ).",
    meaning: "At 500 km, ALTIRYN travels about 7.62 km/s and circles Earth every 94.5 minutes.",
    limitation:
      "Circular two-body approximation; perturbations, station-keeping and optimized trajectories are excluded.",
  },
  solar: {
    what: "An ideal photovoltaic output model using collector area and conversion efficiency.",
    why: "Generation determines how quickly storage can charge and how much energy enters the logistics loop.",
    how: "Electrical power = area × 1,361 W/m² × photovoltaic efficiency.",
    meaning: "The thesis reference produces 43.55 kW, or 1.045 MWh over an ideal continuous day.",
    limitation:
      "Excludes eclipses, pointing, wiring, conversion, temperature, degradation and operational losses.",
  },
  battery: {
    what: "A first-order estimate of the lithium-ion mass required to store one ideal day of generation.",
    why: "Physical energy return makes storage the dominant spacecraft mass and logistics constraint.",
    how: "Battery mass = stored energy ÷ assumed pack-level specific energy.",
    meaning: "At 220 Wh/kg, 1.045 MWh requires about 4,751 kg of cells and modules.",
    limitation:
      "Does not add reserves, containment, BMS, connectors, cooling, aging or depth-of-discharge margins.",
  },
  thermal: {
    what: "A basic estimate of heat rejected by a radiator in vacuum.",
    why: "Solar arrays, batteries, computers and communications hardware generate or absorb heat without atmospheric convection.",
    how: "Radiated power follows P = εσAT⁴ for emissivity 0.90 and radiator area 12 m².",
    meaning: "At 300 K, the conceptual surface rejects approximately 4.96 kW.",
    limitation:
      "This is not a full thermal network, transient model, orbital heat balance or CFD analysis.",
  },
  mass: {
    what: "The thesis reference allocation for an 8,500 kg conceptual spacecraft.",
    why: "Mass drives structure, launch force, maneuverability, cost and the feasibility of repeated logistics.",
    how: "Subsystem estimates are summed; a 3g launch case gives force F = ma.",
    meaning: "Battery storage contributes 4,751 kg—more than half of total reference mass.",
    limitation:
      "No detailed structural sizing, load-path analysis, margins or flight-qualified CAD is included.",
  },
  fleet: {
    what: "A scale study extending one conceptual spacecraft to a coordinated fleet.",
    why: "Useful infrastructure would require throughput, redundancy and servicing beyond a single vehicle.",
    how: "Ideal unit power and energy are multiplied by fleet count before logistics losses.",
    meaning:
      "Scale increases energy, but also collision exposure, launches, docking demand and capital risk.",
    limitation:
      "This is a visualization—not a constellation design, traffic model or deployment commitment.",
  },
  economics: {
    what: "A thesis-level lifetime estimate across manufacture, launch, operations and maintenance.",
    why: "Technical possibility is insufficient if delivered energy remains economically uncompetitive.",
    how: "$35M + $50M + $135M + $105M produces an estimated $325M lifecycle total.",
    meaning: "The reference estimate is approximately $56.8/kWh and is presently difficult.",
    limitation:
      "Conceptual costs are not bids, market forecasts, commercial plans or guaranteed economics.",
  },
};

function Parameter({
  label,
  value,
  unit,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="lab-parameter">
      <div>
        <span>{label}</span>
        <strong>
          {value.toLocaleString()} {unit}
        </strong>
      </div>
      <Slider
        aria-label={label}
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(next) => {
          const first = next[0];
          if (first !== undefined) onChange(first);
        }}
      />
    </div>
  );
}

function Insight({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="lab-insight">
      <small>{label}</small>
      <p>{children}</p>
    </div>
  );
}

export function EngineeringLab() {
  const [active, setActive] = useState<LabKey>("orbit");
  const [altitude, setAltitude] = useState(500);
  const [area, setArea] = useState(100);
  const [efficiency, setEfficiency] = useState(32);
  const [density, setDensity] = useState(220);
  const [temperature, setTemperature] = useState(300);
  const fleet = useExperience((state) => state.fleet);
  const setWorldFleet = useExperience((state) => state.setFleet);
  const orbit = useMemo(() => orbitAt(altitude), [altitude]);
  const solar = useMemo(() => solarAt(area, efficiency / 100), [area, efficiency]);
  const batteryMass = (solar.dayMwh * 1_000_000) / density;
  const thermalKw = (0.9 * 5.670374419e-8 * 12 * temperature ** 4) / 1000;

  const content: Record<
    LabKey,
    { equation: string; controls?: ReactNode; result: ReactNode; visual: ReactNode }
  > = {
    orbit: {
      equation: "v = √(μ/r)   ·   T = 2π√(r³/μ)",
      controls: (
        <Parameter
          label="Altitude"
          value={altitude}
          unit="km"
          min={200}
          max={2000}
          step={10}
          onChange={setAltitude}
        />
      ),
      result: (
        <>
          <b>{orbit.velocity.toFixed(2)} km/s</b>
          <b>{orbit.periodMinutes.toFixed(1)} min</b>
          <b>{orbit.orbitsPerDay.toFixed(1)} orbits/day</b>
        </>
      ),
      visual: (
        <div className="lab-orbit-visual">
          <i />
          <span>EARTH</span>
          <b>{altitude.toLocaleString()} KM</b>
        </div>
      ),
    },
    solar: {
      equation: "P = A × 1,361 W/m² × η",
      controls: (
        <>
          <Parameter
            label="Collector area"
            value={area}
            unit="m²"
            min={20}
            max={300}
            step={5}
            onChange={setArea}
          />
          <Parameter
            label="Efficiency"
            value={efficiency}
            unit="%"
            min={15}
            max={45}
            step={1}
            onChange={setEfficiency}
          />
        </>
      ),
      result: (
        <>
          <b>{solar.powerKw.toFixed(2)} kW</b>
          <b>{solar.dayMwh.toFixed(3)} MWh/day</b>
          <b>{solar.yearMwh.toFixed(1)} MWh/year</b>
        </>
      ),
      visual: (
        <div className="lab-energy-visual">
          {Array.from({ length: 24 }, (_, index) => (
            <i key={index} />
          ))}
        </div>
      ),
    },
    battery: {
      equation: "m = E ÷ ρₑ",
      controls: (
        <Parameter
          label="Li-ion density"
          value={density}
          unit="Wh/kg"
          min={120}
          max={500}
          step={5}
          onChange={setDensity}
        />
      ),
      result: (
        <>
          <b>{batteryMass.toFixed(0)} kg</b>
          <b>{(batteryMass / 1000).toFixed(2)} tonnes</b>
        </>
      ),
      visual: (
        <div className="lab-battery-visual">
          {Array.from({ length: 12 }, (_, index) => (
            <i key={index} />
          ))}
        </div>
      ),
    },
    thermal: {
      equation: "P = εσAT⁴",
      controls: (
        <Parameter
          label="Temperature"
          value={temperature}
          unit="K"
          min={240}
          max={360}
          step={1}
          onChange={setTemperature}
        />
      ),
      result: (
        <>
          <b>{thermalKw.toFixed(2)} kW</b>
          <span>ε 0.90 · A 12 m²</span>
        </>
      ),
      visual: (
        <div className="lab-thermal-visual">
          <i style={{ transform: `scaleX(${(temperature - 240) / 120})` }} />
          <span>RADIATIVE HEAT REJECTION</span>
        </div>
      ),
    },
    mass: {
      equation: "mₜ = Σmᵢ   ·   F = ma",
      result: (
        <>
          <b>8,500 kg</b>
          <b>≈250 kN at 3g</b>
        </>
      ),
      visual: (
        <div className="lab-mass-visual">
          {masses.map(([name, mass]) => (
            <div key={name}>
              <span>{name}</span>
              <i style={{ width: `${mass / 47.51}%` }} />
              <b>{mass.toLocaleString()} kg</b>
            </div>
          ))}
        </div>
      ),
    },
    fleet: {
      equation: "Eƒ = Eᵤ × N",
      controls: (
        <Parameter
          label="Spacecraft"
          value={fleet}
          unit="units"
          min={1}
          max={1000}
          step={1}
          onChange={setWorldFleet}
        />
      ),
      result: (
        <>
          <b>{((solar.powerKw * fleet) / 1000).toFixed(2)} MW ideal</b>
          <b>{(solar.dayMwh * fleet).toFixed(1)} MWh/day</b>
        </>
      ),
      visual: (
        <div className="lab-fleet-visual">
          {Array.from({ length: 40 }, (_, index) => (
            <i key={index} className={index < Math.ceil(fleet / 25) ? "active" : ""} />
          ))}
        </div>
      ),
    },
    economics: {
      equation: "$35M + $50M + $135M + $105M",
      result: (
        <>
          <b>$325M</b>
          <b>≈$56.8/kWh</b>
        </>
      ),
      visual: (
        <div className="lab-cost-visual">
          {[
            ["MANUFACTURE", 35],
            ["LAUNCH", 50],
            ["OPERATIONS", 135],
            ["MAINTENANCE", 105],
          ].map(([name, value]) => (
            <div key={name}>
              <span>{name}</span>
              <i style={{ width: `${Number(value) / 1.35}%` }} />
              <b>${value}M</b>
            </div>
          ))}
        </div>
      ),
    },
  };
  return (
    <div className="lab-shell">
      <Tabs value={active} onValueChange={(value) => setActive(value as LabKey)}>
        <TabsList className="lab-tabs" aria-label="Engineering modules">
          {Object.keys(MODULES).map((tab) => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        {(Object.keys(MODULES) as LabKey[]).map((tab) => (
          <TabsContent key={tab} value={tab} className="lab-module">
            <div className="lab-context">
              <Insight label="WHAT IS THIS?">{MODULES[tab].what}</Insight>
              <Insight label="WHY DOES ALTIRYN NEED IT?">{MODULES[tab].why}</Insight>
            </div>
            <div className="lab-workbench">
              <div className="lab-calculation">
                <small>CALCULATION</small>
                <h3>{content[tab].equation}</h3>
                <p>{MODULES[tab].how}</p>
                {content[tab].controls}
              </div>
              <div className="result-stack">
                <small>LIVE RESULT</small>
                {content[tab].result}
              </div>
              <div className="lab-visual">{content[tab].visual}</div>
            </div>
            <div className="lab-interpretation">
              <Insight label="ENGINEERING INTERPRETATION">{MODULES[tab].meaning}</Insight>
              <Insight label="LIMITATION / ASSUMPTION">{MODULES[tab].limitation}</Insight>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
