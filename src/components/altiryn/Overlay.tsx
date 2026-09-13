import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X, Maximize2, RotateCcw, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chapters, subsystems } from "@/lib/altiryn";
import { searchThesis } from "@/lib/search-index";
import { useExperience } from "@/stores/experience";
import { EngineeringLab } from "./EngineeringLab";
import { ScientificReadout } from "./ScientificReadouts";
import {
  ArchitectureLoop,
  EcosystemLayers,
  MinuteSequence,
  SystemsMatrix,
  ThesisNetwork,
} from "./ThesisPrimer";
import { ChapterBrief } from "./ChapterBrief";
import { Sidebar } from "./Sidebar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cycleStates = [
  "CHARGE",
  "TRANSFER",
  "SEPARATE",
  "RE-ENTER",
  "RECOVER",
  "EXTRACT",
  "REFURBISH",
  "LAUNCH",
  "RENDEZVOUS",
  "DOCK",
  "ONLINE",
];

const chapterSides: Record<string, "left" | "right" | "center"> = {
  origin: "left",
  definition: "left",
  architecture: "center",
  ecosystem: "left",
  systems: "center",
  coverage: "center",
  minute: "center",
  question: "right",
  earth: "left",
  orbit: "right",
  machine: "left",
  energy: "right",
  storage: "left",
  thermal: "right",
  return: "left",
  intelligence: "right",
  operations: "left",
  fleet: "right",
  engineering: "left",
  economics: "right",
  risk: "left",
  feasibility: "right",
  future: "left",
  conclusion: "center",
};

function SidebarToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const chapter = useExperience((state) => state.chapter);
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Open mission navigator"
      className="mission-toggle"
      onClick={onToggle}
    >
      {open ? <X /> : <span className="index-mark">{String(chapter).padStart(2, "0")}</span>}
    </Button>
  );
}

function KnowledgeSearch({
  open,
  onToggle,
  onClose,
}: {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchThesis(query), [query]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const resultsByTag = useMemo(() => {
    const grouped: Record<string, typeof results> = {};
    results.forEach((r) => {
      if (!grouped[r.tag]) grouped[r.tag] = [];
      grouped[r.tag].push(r);
    });
    return grouped;
  }, [results]);

  const suggestions = [
    { query: "SBSP", label: "Space-based solar power" },
    { query: "7.62 km/s", label: "Orbital velocity" },
    { query: "docking", label: "Autonomous exchange" },
    { query: "battery return", label: "The defining difference" },
    { query: "feasibility", label: "Technology readiness" },
    { query: "fleet", label: "Scaling to 1,000 units" },
  ];

  return (
    <div className={open ? "search-shell open" : "search-shell"}>
      <Button variant="ghost" size="icon" aria-label="Search thesis" onClick={onToggle}>
        {open ? <X /> : <Search />}
      </Button>
      {!open && <kbd className="search-kbd">⌘K</kbd>}
      {open && (
        <div className="search-panel">
          <div className="search-header">
            <label htmlFor="thesis-search">THESIS KNOWLEDGE INDEX</label>
            <input
              ref={inputRef}
              id="thesis-search"
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Orbit, battery, 7.62 km/s, docking…"
              spellCheck={false}
            />
          </div>

          <div className="search-content">
            {query && results.length === 0 && (
              <div className="search-empty">
                <p><strong>No matches found</strong></p>
                <p>Try searching for chapters, subsystems, equations or key figures.</p>
              </div>
            )}

            {query && results.length > 0 && (
              <div className="search-results">
                {Object.entries(resultsByTag).map(([tag, items]) => (
                  <div key={tag} className="search-section">
                    <h4 className="search-tag">{tag}</h4>
                    {items.map((item) => (
                      <button
                        key={item.id}
                        className="search-result"
                        onClick={() => {
                          if (item.subsystem) useExperience.getState().select(item.subsystem);
                          document.getElementById(item.targetChapter)?.scrollIntoView({
                            behavior: "smooth",
                          });
                          onClose();
                        }}
                      >
                        <b>{item.title}</b>
                        <span>{item.description}</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {!query && (
              <div className="search-suggestions">
                <p className="search-hint">Popular searches:</p>
                <div className="suggestions-grid">
                  {suggestions.map((item) => (
                    <button
                      key={item.query}
                      className="suggestion"
                      onClick={() => setQuery(item.query)}
                    >
                      <strong>{item.query}</strong>
                      <small>{item.label}</small>
                    </button>
                  ))}
                </div>
                <p className="search-hint" style={{ marginTop: "16px" }}>
                  Search chapters, subsystems, equations and key figures from the thesis.
                </p>
                <div className="search-hints">
                  <p><code>⌘K</code> or <code>/</code> to open this panel</p>
                  <p><code>ESC</code> to close</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function MachinePanel() {
  const selected = useExperience((state) => state.selected);
  const exploded = useExperience((state) => state.exploded);
  const system = subsystems.find((item) => item.id === selected);
  return (
    <aside className="machine-panel">
      <div className="machine-tools">
        <Button
          variant="outline"
          size="sm"
          onClick={() => useExperience.getState().toggleExploded()}
        >
          <Maximize2 />
          {exploded ? "ASSEMBLE" : "EXPLODE"}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Reset spacecraft"
          onClick={() => useExperience.getState().resetMachine()}
        >
          <RotateCcw />
        </Button>
      </div>
      {system ? (
        <div className="system-detail">
          <p className="eyebrow">SELECTED SUBSYSTEM</p>
          <h3>{system.label}</h3>
          {[
            ["WHAT IT IS", system.what],
            ["WHAT IT DOES", system.does],
            ["WHY IT EXISTS", system.why],
            ["ENGINEERING CHALLENGE", system.challenge],
          ].map(([title, copy]) => (
            <div key={title}>
              <small>{title}</small>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="system-detail quiet">
          <p className="eyebrow">SPACECRAFT EXPLORER</p>
          <h3>Rotate · zoom · pan</h3>
          <p>Select any colored subsystem to inspect its engineering role.</p>
        </div>
      )}
    </aside>
  );
}

function CycleControl() {
  const cycle = useExperience((state) => state.cycle);
  const timer = useRef<number | null>(null);
  useEffect(
    () => () => {
      if (timer.current !== null) window.clearInterval(timer.current);
    },
    [],
  );
  const run = () => {
    if (cycle >= 0) {
      if (timer.current !== null) window.clearInterval(timer.current);
      timer.current = null;
      useExperience.getState().setCycle(-1);
      return;
    }
    useExperience.getState().setCycle(0);
    let next = 0;
    const nextTimer = window.setInterval(() => {
      next += 1;
      useExperience.getState().setCycle(next);
      if (next >= cycleStates.length - 1) {
        window.clearInterval(nextTimer);
        timer.current = null;
      }
    }, 850);
    timer.current = nextTimer;
  };
  return (
    <div className="cycle-control">
      <Button variant="outline" onClick={run}>
        {cycle >= 0 && cycle < 10 ? <Pause /> : <Play />}
        {cycle >= 0 && cycle < 10 ? "STOP CYCLE" : "RUN SYSTEM CYCLE"}
      </Button>
      <div className="cycle-track">
        {cycleStates.map((state, index) => (
          <span key={state} className={index <= cycle ? "active" : ""}>
            {state}
          </span>
        ))}
      </div>
    </div>
  );
}

function DockingTelemetry() {
  const cycle = useExperience((state) => state.cycle);
  const phase = cycle < 0 ? 8 : cycle;
  const distance = [0, 0, 12.4, 480, 0, 0, 0, 90, 240, 6.2, 0][Math.min(phase, 10)] ?? 240;
  const status = [
    "CHARGING",
    "TRANSFER",
    "SEPARATION",
    "RE-ENTRY",
    "RECOVERED",
    "EXTRACTION",
    "REFURBISH",
    "ASCENT",
    "APPROACH",
    "CAPTURE / LOCK",
    "ONLINE",
  ][Math.min(phase, 10)];
  return (
    <div className="telemetry">
      <p className="eyebrow">SIMULATED TELEMETRY</p>
      <dl>
        <div>
          <dt>RANGE</dt>
          <dd>{distance.toFixed(1)} m</dd>
        </div>
        <div>
          <dt>REL. VELOCITY</dt>
          <dd>{(distance > 20 ? 1.4 : distance * 0.02).toFixed(2)} m/s</dd>
        </div>
        <div>
          <dt>ALIGNMENT</dt>
          <dd>{(distance > 20 ? 2.4 : 0.2).toFixed(1)}°</dd>
        </div>
        <div>
          <dt>STATE</dt>
          <dd className="live">{status}</dd>
        </div>
      </dl>
    </div>
  );
}

function EnergyMath() {
  return (
    <div className="equation">
      <span>100 m²</span>
      <i>×</i>
      <span>1361 W/m²</span>
      <i>×</i>
      <span>32%</span>
      <i>=</i>
      <strong>43.55 kW</strong>
      <small>IDEALIZED · CONTINUOUS OUTPUT ASSUMPTION</small>
    </div>
  );
}

function BatteryMath() {
  const cycle = useExperience((state) => state.cycle);
  const charge = cycle < 0 ? 1 : Math.min(1, 0.15 + cycle * 0.22);
  return (
    <div className="equation">
      <span>1.045 MWh</span>
      <i>÷</i>
      <span>220 Wh/kg</span>
      <i>=</i>
      <strong>4,751 kg</strong>
      <div className="charge-rail">
        <i style={{ transform: `scaleX(${charge})` }} />
      </div>
      <small>{Math.round(charge * 100)}% STATE OF CHARGE · SIMULATED BMS</small>
    </div>
  );
}

function PartReadout() {
  const hovered = useExperience((state) => state.hovered);
  const selected = useExperience((state) => state.selected);
  const chapter = useExperience((state) => state.chapter);
  const chapterId = chapters[chapter]?.id;
  const id = hovered ?? selected;
  const system = subsystems.find((item) => item.id === id);
  if (
    !system ||
    !["orbit", "machine", "energy", "storage", "thermal", "return", "intelligence"].includes(
      chapterId ?? "",
    )
  )
    return null;
  return (
    <div className="part-readout">
      <b>{system.label}</b>
      <span>{hovered && !selected ? "CLICK TO INSPECT" : "SELECTED"}</span>
    </div>
  );
}

export function Overlay() {
  const chapter = useExperience((state) => state.chapter);
  const chapterId = chapters[chapter]?.id ?? "origin";
  const [activePanel, setActivePanel] = useState<"search" | "index" | null>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePanel(null);
        return;
      }
      const target = event.target as HTMLElement | null;
      const typing =
        target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setActivePanel("search");
        return;
      }
      if (event.key === "/" && !typing) {
        event.preventDefault();
        setActivePanel("search");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let tickerFn: ((time: number) => void) | null = null;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({ duration: 1.15, smoothWheel: true });
      instance.on("scroll", ScrollTrigger.update);
      tickerFn = (time: number) => instance.raf(time * 1000);
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);
      lenis = instance;
    });

    const elements = chapters
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));
    const triggers = elements.map((element, index) =>
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          useExperience.getState().setChapter(index);
          useExperience.getState().setChapterProgress(0);
        },
        onEnterBack: () => useExperience.getState().setChapter(index),
        onUpdate: (self) => {
          if (self.isActive && useExperience.getState().chapter === index) {
            useExperience.getState().setChapterProgress(self.progress);
          }
        },
      }),
    );

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = reduceMotion
      ? []
      : elements.map((element) => {
          const copy = element.querySelectorAll<HTMLElement>(".chapter-copy > *");
          return gsap.fromTo(
            copy,
            { y: 44, opacity: 0, filter: "blur(6px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 1.05,
              stagger: 0.075,
              ease: "expo.out",
              scrollTrigger: { trigger: element, start: "top 78%", once: true },
            },
          );
        });

    const progressTrigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => useExperience.getState().setProgress(self.progress),
    });

    return () => {
      cancelled = true;
      triggers.forEach((trigger) => trigger.kill());
      reveals.forEach((tween) => tween.scrollTrigger?.kill());
      progressTrigger.kill();
      if (tickerFn) gsap.ticker.remove(tickerFn);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <header className={`topbar active-chapter-${chapterId}`}>
        <a href="#origin" className="wordmark">
          ALTIRYN <span>— MADE BY TES</span>
        </a>
        <div>
          <span className="concept-tag">CONCEPTUAL STUDY · REV 1.0</span>
          <KnowledgeSearch
            open={activePanel === "search"}
            onToggle={() => setActivePanel(activePanel === "search" ? null : "search")}
            onClose={() => setActivePanel(null)}
          />
          <SidebarToggle
            open={activePanel === "index"}
            onToggle={() => setActivePanel(activePanel === "index" ? null : "index")}
          />
        </div>
      </header>
      <Sidebar open={activePanel === "index"} onClose={() => setActivePanel(null)} />
      <main className="story">
        {chapters.map((item, index) => (
          <section
            id={item.id}
            key={item.id}
            className={`chapter chapter-${item.id} chapter-side-${chapterSides[item.id] ?? "left"}`}
            aria-labelledby={`${item.id}-title`}
          >
            <div className="chapter-copy">
              <p className="chapter-number">
                {item.number} / {item.status}
              </p>
              {index === 0 && <p className="opening-credit">TEJES J · REVISION 1.0 — JUNE 2026</p>}
              <h1 id={`${item.id}-title`}>{item.title === "Origin" ? "ALTIRYN" : item.title}</h1>
              <p className="kicker">{item.kicker}</p>
              <p className="summary">{item.summary}</p>
              {item.metric && <strong className="chapter-metric">{item.metric}</strong>}
              {item.id === "energy" && <EnergyMath />}
              {item.id === "storage" && <BatteryMath />}
              <details>
                <summary>ENTER THE ENGINEERING</summary>
                <ChapterBrief id={item.id} fallback={item.detail} />
              </details>
            </div>
            {item.id === "architecture" && <ArchitectureLoop />}
            {item.id === "ecosystem" && <EcosystemLayers />}
            {item.id === "systems" && <SystemsMatrix />}
            {item.id === "coverage" && <ThesisNetwork />}
            {item.id === "minute" && <MinuteSequence />}
            <ScientificReadout chapter={item.id} />
            {item.id === "machine" && <MachinePanel />}
            {item.id === "return" && (
              <>
                <CycleControl />
                <DockingTelemetry />
              </>
            )}
            {item.id === "intelligence" && (
              <div className="ai-flow">
                <span>SENSORS</span>
                <i>↓</i>
                <span>TELEMETRY</span>
                <i>↓</i>
                <span>AI ANALYSIS</span>
                <i>↓</i>
                <span>DECISION</span>
                <i>↓</i>
                <span>ACTION</span>
                <small>SIMULATED</small>
              </div>
            )}
            {item.id === "engineering" && <EngineeringLab />}
            {item.id === "conclusion" && (
              <div className="credits">
                <span>ALTIRYN</span>
                <span>CONCEPTUAL ENGINEERING STUDY</span>
                <strong>MADE BY TES</strong>
                <i className="credits-rule" />
                <span>TEJES J</span>
                <span>REVISION 1.0 · JUNE 2026</span>
              </div>
            )}
          </section>
        ))}
      </main>
      <PartReadout />
      <div className="progress-rail">
        <i style={{ transform: `scaleY(${(chapter + 1) / chapters.length})` }} />
      </div>
    </>
  );
}
