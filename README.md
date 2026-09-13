
````markdown
# ALTIRYN

### An Interactive Technical Thesis on Space-Based Solar Energy

> **What if the battery itself became the payload?**

ALTIRYN is an interactive engineering visualization built around a conceptual space-based solar-energy system.

Instead of presenting the thesis as a conventional document, ALTIRYN turns its engineering ideas into a navigable 3D system:

**☀️ collect energy → 🛰️ store it in orbit → 🔋 exchange the battery → 📦 return it to Earth → ⚡ extract the energy → 🛠️ refurbish → 🚀 relaunch → 🛰️ repeat**

The project explores whether an AI-managed orbital energy infrastructure could make space-based solar power more practical without relying on wireless power transmission.

---

## 🌍 THE IDEA

Solar energy is abundant in space.

The difficult part isn't collecting sunlight.

The difficult part is everything that happens **after the sunlight has been collected.**

ALTIRYN therefore treats energy as a logistics problem.

Instead of transmitting electricity wirelessly from orbit to Earth, the concept proposes a physical energy-return loop using modular battery systems.

```text
                    ☀️ SUN
                      │
                      │ Solar radiation
                      ▼
                 ┌───────────┐
                 │🛰️ ALTIRYN │
                 │            │
                 │ ☀️ PV     │
                 │ 🔋 Battery│
                 │ 🤖 AI     │
                 └─────┬─────┘
                       │
                       │ Full battery
                       ▼
                 ┌───────────┐
                 │ 📦 RETURN │
                 │  CAPSULE  │
                 └─────┬─────┘
                       │
                       │ Re-entry
                       ▼
                 ┌───────────┐
                 │🌍 EARTH  │
                 │           │
                 │⚡ Extract│
                 │ 🛠️ Refurb │
                 └─────┬─────┘
                       │
                       │ Relaunch
                       ▼
                    🚀 LEO
                       │
                       └───────────────↺
````

The result is not a finished power system.

It is a **conceptual engineering study** investigating whether such an architecture could become realistic.

---

# 🎬 THE WEBSITE

ALTIRYN is designed as a **visual cinema for engineering**.

The visitor should not feel like they are reading a thesis.

They should feel like they are entering the system.

### The experience moves through:

```text
01  THE QUESTION
        ↓
02  THE ORBIT
        ↓
03  THE SATELLITE
        ↓
04  THE ENERGY
        ↓
05  THE BATTERY
        ↓
06  THE RETURN LOOP
        ↓
07  RE-ENTRY
        ↓
08  THE AI
        ↓
09  AUTONOMOUS DOCKING
        ↓
10  THE FLEET
        ↓
11  ENGINEERING LAB
        ↓
12  MASS
        ↓
13  THERMAL
        ↓
14  ECONOMICS
        ↓
15  RISKS
        ↓
16  FEASIBILITY
        ↓
17  THE FUTURE
```

The central rule is simple:

> **Show the engineering. Don't just describe it.**

---

# 🛰️ WHAT YOU CAN EXPLORE

## 🌍 Earth + Orbit

The experience begins at Earth and moves outward into low Earth orbit.

The orbital environment is represented as an interactive 3D scene containing:

* 🌍 Earth
* ☁️ atmosphere and clouds
* ⭐ orbital environment
* 🛰️ ALTIRYN spacecraft
* 🛰️ orbital trajectory
* 📦 return capsule
* ☀️ solar illumination
* ✨ energy / photon visualization

The camera becomes part of the storytelling.

Scroll isn't merely page navigation.

It controls the journey.

---

# 📐 ORBITAL MECHANICS

ALTIRYN's reference orbit is approximately:

| Parameter        |     Reference |
| ---------------- | ------------: |
| Orbital altitude |    **500 km** |
| Orbital velocity | **7.62 km/s** |
| Orbital period   |  **94.5 min** |
| Orbits / day     |       **~15** |

The basic circular-orbit relationship used in the thesis is:

```text
             μ
v = √( ───────── )
             r
```

At approximately 500 km altitude:

```text
v ≈ 7.62 km/s
```

The website turns this into an interactive engineering instrument rather than leaving it as a static equation.

---

# ☀️ SOLAR ENERGY

The conceptual system uses:

```text
Solar irradiance
        ↓
    1361 W/m²
        ↓
Solar array
    100 m²
        ↓
PV efficiency
      32%
        ↓
   43.55 kW
```

Reference calculation:

```text
P = G × A × η

P = 1361 × 100 × 0.32

P ≈ 43,552 W

P ≈ 43.55 kW
```

The idealized daily energy figure used in the thesis is:

```text
43.55 kW × 24 h
        ≈
1.05 MWh/day
```

The interface visualizes this as energy moving through the spacecraft rather than presenting it as another statistic card.

---

# 🔋 THE BATTERY PROBLEM

This is one of the most important engineering constraints in ALTIRYN.

Using:

```text
E = P × t
```

the conceptual daily storage requirement becomes approximately:

```text
1.05 MWh
```

Using an assumed battery specific energy of:

```text
220 Wh/kg
```

the corresponding battery mass is approximately:

```text
1,045,200 Wh
───────────────
   220 Wh/kg

≈ 4,751 kg
```

or approximately:

# **4.75 tonnes**

This is deliberately made visually obvious in the experience.

The battery is not a footnote.

It is one of the dominant masses in the spacecraft.

---

# 🧩 SPACECRAFT ARCHITECTURE

The conceptual ALTIRYN spacecraft contains:

```text
                 ☀️ SOLAR ARRAYS
                       │
             ┌─────────┴─────────┐
             │                   │
             │     🛰️ BUS        │
             │                   │
             │   🤖 AI / CPU     │
             │   📡 COMMS        │
             │   🧭 NAVIGATION   │
             │   ⚡ POWER        │
             │                   │
             ├───────────────────┤
             │                   │
             │    🔋 BATTERY     │
             │       BAY         │
             │                   │
             ├───────────────────┤
             │                   │
             │    🤝 DOCKING     │
             │     INTERFACE     │
             │                   │
             └───────────────────┘
                       │
                  🌡️ RADIATORS
```

Major conceptual subsystems include:

* ☀️ Deployable solar arrays
* 🔋 Modular battery modules
* 🧠 AI computing
* 📡 Communications
* 🧭 Navigation
* 🤝 Autonomous docking
* 🌡️ Thermal control
* 🛡️ Radiation shielding
* ⚡ Power electronics
* 🔄 Battery exchange infrastructure

The 3D spacecraft can be inspected subsystem-by-subsystem.

---

# ⚡ ENERGY FLOW

The system can be understood as a chain:

```text
☀️
SUN
 │
 │ 1361 W/m²
 ▼
☀️
SOLAR ARRAY
 │
 │ 43.55 kW
 ▼
⚡
POWER ELECTRONICS
 │
 ▼
🔋
BATTERY MODULES
 │
 │ stored energy
 ▼
🤝
DOCKING / EXCHANGE
 │
 ▼
📦
RETURN CAPSULE
```

The visual interface represents this flow spatially.

Particles, illumination and motion are used only when they communicate an actual system relationship.

---

# 🔄 MODULAR BATTERY RETURN ARCHITECTURE

The central architectural idea is the **physical return of stored energy**.

A completed cycle consists of:

```text
01  🔋 CHARGE
       ↓
02  🤝 TRANSFER
       ↓
03  📦 SEPARATE
       ↓
04  🔥 RE-ENTER
       ↓
05  🛬 RECOVER
       ↓
06  ⚡ EXTRACT
       ↓
07  🛠️ REFURBISH
       ↓
08  🚀 LAUNCH
       ↓
09  🛰️ RENDEZVOUS
       ↓
10  🤝 DOCK
       ↓
11  ⚡ ONLINE
       ↓
       ↺
```

The thesis describes a conceptual processing timeline of approximately:

| Operation            |     Time |
| -------------------- | -------: |
| Inspection           |      6 h |
| Refurbishment        |     18 h |
| Launch preparation   |      8 h |
| Launch / insertion   |      5 h |
| Rendezvous / docking |      3 h |
| **Total**            | **40 h** |

The website turns this sequence into a continuous visual loop.

---

# 🤖 AI AS A CONTROL LAYER

ALTIRYN does not treat AI as a decorative “robot brain.”

AI exists because the proposed system contains many autonomous decisions.

The conceptual AI layer is responsible for:

```text
🤖 HEALTH MONITORING
       │
🤖 PREDICTIVE MAINTENANCE
       │
🤖 SOLAR OPTIMIZATION
       │
🤖 ORBITAL NAVIGATION
       │
🤖 AUTONOMOUS DOCKING
       │
🤖 FAULT DETECTION
       │
🤖 FLEET COORDINATION
```

For example:

```text
Battery temperature anomaly
            ↓
       AI detection
            ↓
     Fault classification
            ↓
     Power redistribution
            ↓
       Thermal response
```

The goal is to show AI as **software operating physical infrastructure**.

---

# 🤝 AUTONOMOUS DOCKING

Battery exchange requires spacecraft to interact safely in orbit.

The visualization represents a conceptual docking sequence:

```text
100 m
 │
 ▼
 50 m
 │
 ▼
 10 m
 │
 ▼
  1 m
 │
 ▼
CONTACT
 │
 ▼
🔒 LOCK
 │
 ▼
🔋 TRANSFER
```

Relevant telemetry includes:

* Relative velocity
* Range
* Attitude
* Alignment
* Navigation state
* Docking state

The system concept incorporates sensors such as:

* 📷 Cameras
* 📡 Lidar
* 🧭 Navigation systems
* 🔄 Reaction-control / attitude systems

---

# ⚖️ MASS BUDGET

The conceptual spacecraft mass budget totals:

# **8,500 kg**

| Subsystem          |         Mass |
| ------------------ | -----------: |
| Primary structure  |       650 kg |
| Solar arrays       |       850 kg |
| 🔋 Battery modules | **4,751 kg** |
| AI computers       |       180 kg |
| Docking            |       240 kg |
| Thermal            |       260 kg |
| Communications     |       120 kg |
| Shielding          |       520 kg |
| Power electronics  |       320 kg |
| Navigation         |       110 kg |
| Miscellaneous      |       499 kg |
| **TOTAL**          | **8,500 kg** |

The battery therefore represents a substantial fraction of the conceptual spacecraft mass.

The interactive version represents this through an exploded spacecraft rather than relying solely on charts.

---

# 🌡️ THERMAL ENGINEERING

A conceptual radiator calculation uses:

```text
P = εσAT⁴
```

with:

```text
ε = 0.90
A = 12 m²
T = 300 K
```

giving approximately:

```text
P ≈ 4.96 kW
```

The visualization shows:

```text
☀️ SOLAR INPUT
      ↓
🔥 HEAT
      ↓
🛰️ SPACECRAFT
      ↓
🌡️ RADIATORS
      ↓
❄️ HEAT REJECTION
```

The purpose is not to pretend that this is a complete thermal model.

It is an engineering visualization of the relationship.

---

# 💰 ECONOMICS

The thesis provides a conceptual lifetime-cost estimate of approximately:

# **$325 million / satellite**

This is an estimate, not a demonstrated commercial price.

The economic interface therefore focuses on cost drivers such as:

```text
🚀 Launch
🛰️ Spacecraft
🔋 Battery system
🤝 Docking
🤖 Autonomous systems
🌍 Ground infrastructure
🔧 Operations
```

ALTIRYN intentionally does not present these values as proof of commercial viability.

---

# ⚠️ RISK

A serious engineering concept must show where it can fail.

The thesis identifies major risk areas including:

```text
🔋 Battery degradation
🤝 Autonomous docking
📡 Communication
🤖 AI failure
🌡️ Thermal conditions
```

Conceptual mitigation strategies include:

### 🔋 Battery

* Swappable modules
* Battery-management system
* Predictive maintenance

### 🤝 Docking

* Lidar
* Cameras
* Redundant navigation
* Autonomous guidance

### 📡 Communications

* Redundant communication paths
* Autonomous fallback behaviour

### 🤖 AI

* Redundant computing
* Fault detection
* Safe operating modes

### 🌡️ Thermal

* Radiator systems
* Thermal monitoring
* Controlled operating states

The concept also includes rough independent annual risk figures in the thesis; these are treated as approximate conceptual figures rather than experimentally validated probabilities.

---

# 🧪 TECHNOLOGY READINESS

ALTIRYN combines technologies with very different maturity levels.

### More mature

```text
☀️ Photovoltaics
🚀 Reusable launch technology
🤖 AI systems
🧭 Orbital navigation
🔋 Battery management systems
```

### Developmental

```text
📦 Modular orbital battery transport
🔄 Large-scale orbital energy logistics
```

This distinction is important.

ALTIRYN is a **conceptual blueprint**, not a claim that every subsystem is ready for deployment.

---

# 🧮 ENGINEERING LAB

The interactive engineering laboratory exposes the underlying assumptions.

Available conceptual instruments include:

```text
📐 ORBIT
☀️ SOLAR
🔋 BATTERY
🌡️ THERMAL
⚖️ MASS
🚀 LAUNCH
💰 ECONOMICS
🌐 FLEET
```

Each follows:

```text
INPUT
  ↓
CALCULATION
  ↓
RESULT
  ↓
PHYSICAL VISUALIZATION
```

The objective is to connect the number to the thing it represents.

---

# 🌐 FLEET SCALING

ALTIRYN is not intended to remain a single spacecraft.

The conceptual roadmap considers scaling from:

```text
1
↓
10
↓
50
↓
100
↓
500
↓
1000
```

The visualization transitions from:

```text
🛰️
ONE PLATFORM
```

to:

```text
🛰️ 🛰️ 🛰️
ORBITAL NETWORK
```

and eventually:

```text
🛰️ 🛰️ 🛰️ 🛰️ 🛰️
        ...
🛰️ 🛰️ 🛰️ 🛰️ 🛰️

ORBITAL ENERGY LOGISTICS
```

Large-scale visualization uses instancing and other performance-conscious techniques.

---

# 🚀 ROADMAP

The thesis proposes a staged development path.

```text
RESEARCH
   ↓
CAD + ORBITAL SIMULATION
   ↓
AI SOFTWARE
   ↓
BATTERY PROTOTYPES
   ↓
DOCKING TESTS
   ↓
EXPERIMENTAL SATELLITE
   ↓
ORBITAL BATTERY EXCHANGE
   ↓
GROUND RECOVERY FACILITY
   ↓
FLEET MANAGEMENT
   ↓
CONSTELLATION
```

Longer-term concepts include:

```text
🌙 Lunar applications
🔴 Mars applications
🏭 Orbital manufacturing
📡 Deep-space communications
```

These are **future concepts**, not current system capabilities.

---

# 🛠️ TECHNOLOGY STACK

ALTIRYN is built as a modern interactive web application.

### Frontend

* React
* TypeScript
* TanStack Start
* Vite

### 3D

* Three.js
* React Three Fiber
* Drei

### Animation

* GSAP
* ScrollTrigger
* Lenis

### State

* Zustand

### Styling

* Tailwind CSS
* Custom CSS

### Rendering

* WebGL

---

# 📁 PROJECT STRUCTURE

```text
ALTIRYN/
│
├── public/
│   ├── textures/
│   │   ├── earth-day.jpg
│   │   ├── earth-clouds.jpg
│   │   ├── earth-lights.jpg
│   │   ├── earth-normal.jpg
│   │   └── earth-specular.jpg
│   │
│   └── favicon.ico
│
├── src/
│   │
│   ├── components/
│   │   └── altiryn/
│   │       │
│   │       ├── AltirynExperience.tsx
│   │       ├── World.tsx
│   │       ├── Overlay.tsx
│   │       ├── Sidebar.tsx
│   │       ├── ChapterBrief.tsx
│   │       ├── EngineeringLab.tsx
│   │       ├── ScientificReadouts.tsx
│   │       ├── ThesisPrimer.tsx
│   │       │
│   │       └── three/
│   │           ├── Earth.tsx
│   │           ├── Spacecraft.tsx
│   │           ├── Capsule.tsx
│   │           ├── CameraRig.tsx
│   │           ├── Photons.tsx
│   │           ├── materials.ts
│   │           └── constants.ts
│   │
│   ├── lib/
│   │   ├── altiryn.ts
│   │   └── search-index.ts
│   │
│   ├── stores/
│   │   └── experience.ts
│   │
│   └── styles.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── .gitignore
```

---

# 🧠 DESIGN PHILOSOPHY

ALTIRYN follows five principles.

### 01 — VISUAL FIRST

A physical system should look physical.

### 02 — NUMBERS HAVE A BODY

43.55 kW should correspond to visible energy flow.

4,751 kg should correspond to visible mass.

500 km should correspond to an orbital position.

### 03 — MOTION HAS PURPOSE

Animation should communicate:

* movement
* transfer
* scale
* sequence
* cause and effect

Not decoration.

### 04 — ENGINEERING OVER MARKETING

The project does not claim that ALTIRYN is already practical.

It exposes assumptions, constraints and unresolved engineering questions.

### 05 — COMPLEXITY SHOULD BE DISCOVERED

The first screen should be simple.

The deeper the visitor goes, the more engineering becomes visible.

```text
SIMPLE
  ↓
CURIOUS
  ↓
INTERACTIVE
  ↓
TECHNICAL
  ↓
SYSTEM-LEVEL
```

---

# 📊 REFERENCE VALUES

The following values are the principal conceptual reference values used throughout the experience.

```text
ORBIT
────────────────────────────
Altitude              500 km
Velocity              7.62 km/s
Period                94.5 min
Orbits/day             ~15


SOLAR
────────────────────────────
Solar irradiance      1361 W/m²
Array area             100 m²
PV efficiency             32%
Power                  43.55 kW
Ideal daily energy      1.05 MWh


BATTERY
────────────────────────────
Specific energy       220 Wh/kg
Daily storage          1.05 MWh
Battery mass           4751 kg


SPACECRAFT
────────────────────────────
Total mass             8500 kg


THERMAL
────────────────────────────
Radiator area            12 m²
Emissivity                0.90
Temperature               300 K
Example rejection        4.96 kW


ECONOMICS
────────────────────────────
Conceptual lifetime
cost / satellite        ~$325M
```

---

# ⚠️ SCOPE & LIMITATIONS

ALTIRYN is a **conceptual engineering design study**.

It does not provide:

* Complete rocket-engine design
* Optimized launch trajectories
* Full orbital perturbation modelling
* Complete structural optimization
* Full CFD
* Complete thermal simulation
* Hardware prototypes
* Experimental validation
* Flight qualification
* Commercial deployment planning

The interactive website is therefore a **visual and computational representation of the thesis concept**, not a flight-ready engineering package.

---

# 🔬 THE THESIS

The website is based on the technical thesis:

> **ALTIRYN — Technical Thesis & Conceptual Engineering Design Study**
>
> *Conceptual Design and Feasibility Analysis of an AI-Managed Modular Space-Based Solar Energy System*

Revision 1.0
June 2026

The thesis investigates whether AI-managed modular space-based solar energy and physical battery-return logistics could form a technically meaningful future architecture.

---

# 💻 RUN LOCALLY

Clone the repository:

```bash
git clone https://github.com/Tejes-alt/ALTIRYN-Interactive-Technical-Thesis.git
```

Enter the project:

```bash
cd ALTIRYN-Interactive-Technical-Thesis
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development address shown by Vite.

---

# 🏗️ BUILD

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# ⚡ PERFORMANCE

Because ALTIRYN contains a real-time 3D environment, performance is treated as an engineering constraint.

The project uses techniques such as:

* Geometry reuse
* Instancing
* Texture reuse
* Memoized materials
* Controlled animation loops
* Conditional rendering
* Efficient state updates
* Reduced unnecessary React rerenders
* Appropriate device pixel ratios
* Progressive visual complexity

The goal is:

> **cinematic without becoming unusable.**

---

# 🧭 INTERACTION MODEL

ALTIRYN combines:

```text
SCROLL
   +
CAMERA
   +
3D OBJECTS
   +
ENGINEERING DATA
   +
INTERACTION
   +
ANIMATION
```

The result should feel closer to exploring an instrument than navigating a traditional website.

---

# 🎨 VISUAL SYSTEM

The visual language is intentionally restrained.

```text
BACKGROUND
████████████████
Near-black

TEXT
████████████████
White / ivory

ACCENT
───────────────
Subtle electric blue

ENERGY
───────────────
Restrained solar amber
```

Visual vocabulary:

```text
──────── orbital paths

┌──────┐
│ DATA │ technical panels

+────────+
│ SENSOR │ engineering annotations

○
crosshair / target

········
trajectory

☀️
energy source

🛰️
orbital platform

🔋
storage

🤖
autonomy

🔄
logistics
```

Nothing should glow simply because it can glow.

---

# 🧩 WHY THIS PROJECT EXISTS

Traditional technical documents are good at preserving information.

They are not always good at communicating **systems**.

A system is:

```text
objects
+
relationships
+
motion
+
constraints
+
feedback
+
failure
+
time
```

ALTIRYN attempts to represent all of these simultaneously.

The website is therefore not intended to replace the thesis.

It is intended to make the thesis **experienceable**.

---

# 🌌 THE BIGGER QUESTION

Space-based solar power is often presented as a question of:

> “Can we collect enough sunlight?”

ALTIRYN asks a different question:

```text
Can we build the infrastructure
required to repeatedly move,
store, exchange, recover,
refurbish and relaunch
that energy?
```

That changes the problem from:

```text
SOLAR POWER
```

to:

```text
SOLAR POWER
        +
ORBITAL LOGISTICS
        +
AUTONOMY
        +
BATTERY ENGINEERING
        +
REUSABILITY
        +
GROUND INFRASTRUCTURE
```

And that is the system ALTIRYN explores.

---

# 🚀 FUTURE

The current project is a conceptual interactive thesis experience.

Future development can include:

```text
🧱 Higher-fidelity spacecraft geometry
🌍 Improved Earth rendering
📐 More detailed orbital simulation
🔋 More advanced battery models
🤝 More realistic docking simulation
🔥 Improved re-entry visualization
🤖 Expanded autonomous-control simulation
🌐 Larger fleet visualization
📊 More engineering instruments
🧪 Hardware-oriented prototypes
```

The long-term roadmap described by the thesis goes further:

```text
EARTH
  ↓
LEO
  ↓
ORBITAL ENERGY NETWORK
  ↓
LUNAR INFRASTRUCTURE
  ↓
MARS
  ↓
DEEP SPACE
```

Those stages remain future concepts.

---

# 👨‍💻 AUTHOR

**Tejes J**

Concept, technical thesis, system architecture and interactive visualization.

---

# 📜 STATUS

```text
PROJECT
    ALTIRYN

TYPE
    Conceptual Engineering Study

INTERFACE
    Interactive 3D Technical Experience

STATUS
    Research / Concept

DEPLOYMENT
    Not flight-ready

COMMERCIAL STATUS
    Not demonstrated

PRIMARY PURPOSE
    Visualization + Engineering Exploration
```

---

# ⭐ FINAL NOTE

ALTIRYN is intentionally unfinished as a real-world system.

That is part of the point.

The interesting engineering questions begin where the diagram stops.

```text
☀️
   ↓
🛰️
   ↓
🔋
   ↓
📦
   ↓
🌍
   ↓
⚡
   ↓
🛠️
   ↓
🚀
   ↓
🛰️
   ↓
        ↺
```

**Can this loop actually close?**

ALTIRYN is an attempt to explore that question.

---

<div align="center">

### ALTIRYN

**SPACE-BASED SOLAR ENERGY × AUTONOMOUS ORBITAL LOGISTICS**

`Conceptual Engineering Study · Revision 1.0 · 2026`

🌍 ☀️ 🛰️ 🔋 🤖 🔄 🚀

</div>


