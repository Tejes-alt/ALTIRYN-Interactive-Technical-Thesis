import { useState } from "react";
import { chapters, subsystems } from "@/lib/altiryn";
import { useExperience } from "@/stores/experience";

type SystemEntry = {
  id: string;
  label: string;
  category: string;
  why: string;
  targetChapter: string;
  subsystem?: string;
};

/** Systems explorer: spacecraft subsystems + macro scenes.
 *  Each entry includes metadata so users understand what they're navigating to
 *  before clicking. */
const SYSTEM_ENTRIES: SystemEntry[] = [
  { id: "system", label: "SYSTEM OVERVIEW", category: "MISSION", why: "The integrated architecture", targetChapter: "ecosystem" },
  { id: "satellite", label: "SATELLITE", category: "SPACECRAFT", why: "8,500 kg modular vehicle", targetChapter: "machine" },
  { id: "solar", label: "SOLAR", category: "GENERATION", why: "100 m² photovoltaic wings", targetChapter: "machine", subsystem: "solar" },
  { id: "battery", label: "BATTERY", category: "STORAGE", why: "4,751 kg exchangeable modules", targetChapter: "machine", subsystem: "battery" },
  { id: "ai", label: "AI / CONTROL", category: "AUTONOMY", why: "Health, optimization, navigation", targetChapter: "machine", subsystem: "control" },
  { id: "docking", label: "DOCKING", category: "LOGISTICS", why: "Autonomous battery exchange", targetChapter: "machine", subsystem: "docking" },
  { id: "thermal", label: "THERMAL", category: "CONTROL", why: "Radiative heat rejection", targetChapter: "machine", subsystem: "thermal" },
  { id: "comms", label: "COMMUNICATIONS", category: "OPERATIONS", why: "Ground + orbital telemetry", targetChapter: "machine", subsystem: "comms" },
  { id: "navigation", label: "NAVIGATION", category: "OPERATIONS", why: "Attitude + rendezvous control", targetChapter: "machine", subsystem: "navigation" },
  { id: "return-capsule", label: "RETURN CAPSULE", category: "LOGISTICS", why: "Re-entry + ground recovery", targetChapter: "return" },
  { id: "ground", label: "GROUND INFRASTRUCTURE", category: "OPERATIONS", why: "Launch + recovery + refurbishment", targetChapter: "operations" },
  { id: "fleet", label: "FLEET", category: "SCALING", why: "1 → 1,000 spacecraft", targetChapter: "fleet" },
];

function goToChapter(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const chapter = useExperience((state) => state.chapter);
  const progress = useExperience((state) => state.progress);
  const [mode, setMode] = useState<"chapters" | "systems">("chapters");
  const [expanded, setExpanded] = useState(false);

  const currentChapter = chapters[chapter];

  return (
    <>
      <aside 
        className={`side-nav ${open ? "is-open" : ""} ${expanded ? "is-expanded" : ""}`} 
        aria-label="Thesis navigator"
      >
        <div className="side-nav-head">
          <button 
            className="side-nav-toggle"
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle sidebar expansion"
            title={expanded ? "Collapse" : "Expand"}
          >
            {expanded ? "▼" : "▶"}
          </button>
          {expanded && (
            <div className="side-nav-tabs" role="tablist">
              <button
                role="tab"
                aria-selected={mode === "chapters"}
                className={mode === "chapters" ? "active" : ""}
                onClick={() => setMode("chapters")}
              >
                CHAPTERS
              </button>
              <button
                role="tab"
                aria-selected={mode === "systems"}
                className={mode === "systems" ? "active" : ""}
                onClick={() => setMode("systems")}
              >
                SYSTEMS
              </button>
            </div>
          )}
        </div>

        {expanded && (
          <div className="side-nav-context">
            <div className="context-chapter">
              <div className="context-number">{currentChapter.number}</div>
              <div className="context-title">{currentChapter.title}</div>
              <div className="context-status">{currentChapter.status}</div>
              {currentChapter.summary && (
                <div className="context-summary">{currentChapter.summary}</div>
              )}
              <div className="context-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${Math.max(4, Math.min(100, progress * 100))}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {mode === "chapters" ? (
          <nav className="side-nav-list" aria-label="Thesis chapters">
            {chapters.map((item, index) => (
              <button
                key={item.id}
                className={index === chapter ? "active" : ""}
                onClick={() => {
                  goToChapter(item.id);
                  onClose();
                }}
                title={expanded ? undefined : item.title}
              >
                <span className="side-nav-number">{item.number}</span>
                {expanded && (
                  <>
                    <span className="side-nav-title">{item.title}</span>
                    <span className="side-nav-status">{item.status}</span>
                  </>
                )}
                {index === chapter && (
                  <span
                    className="side-nav-progress"
                    style={{ transform: `scaleX(${Math.max(0.04, progress)})` }}
                  />
                )}
              </button>
            ))}
          </nav>
        ) : (
          <nav className="side-nav-list" aria-label="Spacecraft and mission systems">
            {SYSTEM_ENTRIES.map((entry) => {
              const system = entry.subsystem
                ? subsystems.find((item) => item.id === entry.subsystem)
                : undefined;
              return (
                <button
                  key={entry.id}
                  onClick={() => {
                    if (entry.subsystem) useExperience.getState().select(entry.subsystem);
                    goToChapter(entry.targetChapter);
                    onClose();
                  }}
                  title={expanded ? undefined : entry.label}
                >
                  <span className="side-nav-dot" style={system ? { background: system.color } : undefined} />
                  {expanded && (
                    <>
                      <div className="side-nav-system-info">
                        <span className="side-nav-title">{entry.label}</span>
                        <span className="side-nav-category">{entry.category}</span>
                      </div>
                      <span className="side-nav-why">{entry.why}</span>
                    </>
                  )}
                </button>
              );
            })}
          </nav>
        )}
      </aside>

      {open && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  );
}
