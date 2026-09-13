import { i as __toESM } from "../_runtime.mjs";
import { B as SRGBColorSpace, O as MathUtils, Y as Vector3, _ as EdgesGeometry, c as BufferGeometry, j as Object3D, l as CatmullRomCurve3, o as BoxGeometry, s as BufferAttribute, v as EllipseCurve } from "../_libs/@monogrid/gainmap-js+[...].mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Instance, c as useTexture, d as useThree, i as Environment, l as Canvas, n as Stars, o as Instances, r as Lightformer, s as OrbitControls, t as PerformanceMonitor, u as useFrame } from "../_libs/@react-three/drei+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
import { a as Pause, i as Play, n as Search, o as Maximize2, r as RotateCcw, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B_55IBhA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var useExperience = create((set) => ({
	chapter: 0,
	progress: 0,
	chapterProgress: 0,
	selected: null,
	hovered: null,
	exploded: false,
	cycle: -1,
	fleet: 1,
	setChapter: (chapter) => set({ chapter }),
	setProgress: (progress) => set({ progress }),
	setChapterProgress: (chapterProgress) => set({ chapterProgress }),
	select: (selected) => set({ selected }),
	setHovered: (hovered) => set({ hovered }),
	toggleExploded: () => set((state) => ({ exploded: !state.exploded })),
	resetMachine: () => set({
		selected: null,
		exploded: false,
		hovered: null
	}),
	setCycle: (cycle) => set({ cycle }),
	setFleet: (fleet) => set({ fleet })
}));
var SUN_DIR = new Vector3(-.62, .42, .66).normalize();
var SUN_POS = SUN_DIR.clone().multiplyScalar(46);
var EARTH_RADIUS = 4.6;
var EARTH_POSITION = new Vector3(0, -5.4, -2.2);
/** Local anchor points of each spacecraft subsystem, used for camera focus and callouts. */
var SUBSYSTEM_ANCHORS = {
	structure: [
		0,
		0,
		0
	],
	solar: [
		-3.3,
		.32,
		0
	],
	battery: [
		0,
		-.2,
		.72
	],
	control: [
		-.6,
		.52,
		.86
	],
	comms: [
		.72,
		.62,
		.9
	],
	navigation: [
		0,
		1.18,
		-.36
	],
	thermal: [
		0,
		-.92,
		-1.02
	],
	docking: [
		0,
		0,
		1.5
	],
	shielding: [
		0,
		.1,
		-.9
	]
};
var EXPLODE_OFFSETS = {
	solar: [
		0,
		.9,
		0
	],
	structure: [
		0,
		.4,
		0
	],
	battery: [
		0,
		-2.6,
		1.5
	],
	control: [
		-1.5,
		2.1,
		1.1
	],
	comms: [
		1.7,
		2.2,
		1
	],
	navigation: [
		0,
		2.9,
		-1.2
	],
	thermal: [
		0,
		-1.6,
		-2.6
	],
	docking: [
		0,
		0,
		3.1
	],
	shielding: [
		0,
		.4,
		-2.6
	]
};
var chapters = [
	{
		id: "origin",
		number: "00",
		title: "Origin",
		kicker: "A CONCEPTUAL ENGINEERING STUDY",
		summary: "What if we collected the Sun’s energy above the atmosphere?",
		detail: "ALTIRYN investigates a space-based solar architecture that stores energy in modular batteries and physically returns them to Earth. It is a systems study—not a deployed product or validated mission.",
		status: "CONCEPTUAL"
	},
	{
		id: "definition",
		number: "00A",
		title: "What is ALTIRYN?",
		kicker: "AN INTEGRATED ORBITAL ENERGY ECOSYSTEM",
		summary: "An AI-managed, modular space-based solar energy system explored as a conceptual engineering study.",
		detail: "The central question is whether solar energy can be collected in space, stored in exchangeable battery modules, physically returned to Earth, extracted, refurbished and relaunched as one reusable operating system.",
		status: "CONCEPTUAL"
	},
	{
		id: "architecture",
		number: "00B",
		title: "The difference",
		kicker: "PHYSICAL RETURN, NOT WIRELESS TRANSMISSION",
		summary: "ALTIRYN replaces the usual transmitter-to-ground-receiver link with a closed battery logistics loop.",
		detail: "This physical battery-return loop is the defining proposal. It links orbital generation to autonomous exchange, re-entry, recovery, terrestrial energy extraction, refurbishment and reusable launch.",
		status: "EXPERIMENTAL"
	},
	{
		id: "ecosystem",
		number: "00C",
		title: "One ecosystem",
		kicker: "ORBIT · LOGISTICS · EARTH · INTELLIGENCE",
		summary: "ALTIRYN is not a satellite with solar panels. It is a coordinated system spanning orbit and Earth.",
		detail: "The architecture includes generating spacecraft, batteries, docking and navigation; return capsules and launches; recovery and refurbishment; autonomous health, optimization and fleet coordination; and engineering, economics, safety and feasibility analysis.",
		status: "CONCEPTUAL"
	},
	{
		id: "systems",
		number: "00D",
		title: "The integration problem",
		kicker: "WHY THIS IS SYSTEMS ENGINEERING",
		summary: "No single technology defines the challenge. Interfaces, dependencies and failure modes do.",
		detail: "Aerospace, energy, robotics, AI, logistics, economics and safety must work across a repeated mission lifecycle. The study asks whether those mature and experimental elements can become a coherent architecture.",
		status: "CONCEPTUAL"
	},
	{
		id: "coverage",
		number: "00E",
		title: "What the thesis covers",
		kicker: "16 CHAPTERS · CONNECTED DOMAINS",
		summary: "The research follows energy through physics, hardware, autonomy, logistics, economics, risk and future development.",
		detail: "Select a domain in the systems map to jump to the corresponding technical scene. Connections matter because every assumption propagates into mass, operations, risk and cost.",
		status: "CONCEPTUAL"
	},
	{
		id: "minute",
		number: "00F",
		title: "The idea in one minute",
		kicker: "FOLLOW ONE UNIT OF ENERGY",
		summary: "Sunlight becomes electricity, enters a modular battery, returns to Earth, and begins the loop again.",
		detail: "The sequence is conceptual. Each exchange, recovery and relaunch step introduces efficiency, reliability, mass, cost and safety penalties investigated throughout the experience.",
		status: "CONCEPTUAL"
	},
	{
		id: "question",
		number: "01",
		title: "The question",
		kicker: "WHY ORBIT?",
		summary: "Terrestrial solar is intermittent. Orbit changes the environment, not the laws of engineering.",
		detail: "Night, clouds, weather, seasonal variation, atmospheric loss and land constraints motivate the study. Space-based collection introduces launch, thermal, radiation, storage and logistics penalties of its own.",
		status: "CONCEPTUAL",
		metric: "1361 W/m²"
	},
	{
		id: "earth",
		number: "02",
		title: "Earth / Space",
		kicker: "A SIMPLE REFERENCE COMPARISON",
		summary: "1361 W/m² in space versus approximately 1000 W/m² at ground reference.",
		detail: "The thesis derives a 36.1% difference against this simplified reference. It is not a site-specific energy-yield comparison and does not include complete system losses.",
		status: "ASSUMED",
		metric: "+36.1%"
	},
	{
		id: "orbit",
		number: "03",
		title: "Orbit",
		kicker: "LOW EARTH ORBIT · 500 KM",
		summary: "Velocity ≈ 7.62 km/s. Period ≈ 94.5 minutes. Approximately 15 orbits per day.",
		detail: "Altitude changes velocity, period, exposure and access. The engineering lab uses v = √(μ/r) and T = 2π√(r³/μ) to update the conceptual orbit live.",
		status: "CONCEPTUAL",
		metric: "94.5 MIN"
	},
	{
		id: "machine",
		number: "04",
		title: "The machine",
		kicker: "8,500 KG CONCEPTUAL SPACECRAFT",
		summary: "Structure, generation, storage, autonomy, communications, navigation, docking, thermal control and shielding become one serviceable system.",
		detail: "Select a subsystem, orbit the spacecraft and separate the assembly. This representation communicates architecture; it is not flight-qualified CAD.",
		status: "CONCEPTUAL",
		metric: "8.5 t"
	},
	{
		id: "energy",
		number: "05",
		title: "Energy",
		kicker: "IDEALIZED SOLAR MODEL",
		summary: "100 m² × 1361 W/m² × 32% = 43.55 kW.",
		detail: "At continuous ideal output: 1.045 MWh/day, 381.5 MWh/year and about 5.72 GWh over 15 years. Real output would be lower after orbital, conversion, thermal, degradation and operational losses.",
		status: "ASSUMED",
		metric: "43.55 kW"
	},
	{
		id: "storage",
		number: "06",
		title: "Storage",
		kicker: "THE DOMINANT MASS",
		summary: "1.045 MWh ÷ 220 Wh/kg = 4,751 kg of lithium-ion battery.",
		detail: "Modularity enables handling and replacement, but connectors, locks, thermal interfaces, radiation, BMS, cycle life and safe charge control make storage a central constraint.",
		status: "ESTIMATED",
		metric: "4.75 TONNES"
	},
	{
		id: "thermal",
		number: "07",
		title: "Thermal & radiation",
		kicker: "VACUUM REMOVES CONVECTION",
		summary: "Radiators reject heat by radiation. A basic 12 m², ε 0.90, 300 K example gives ≈4.96 kW.",
		detail: "P = εσAT⁴ is only a first-order radiative example—not a full thermal simulation. Solar particles, cosmic radiation and belt exposure also drive shielding, redundancy and monitoring.",
		status: "CONCEPTUAL",
		metric: "≈4.96 kW"
	},
	{
		id: "return",
		number: "08",
		title: "The return loop",
		kicker: "THE DEFINING PROPOSAL",
		summary: "Charge. Transfer. Separate. Re-enter. Recover. Extract. Refurbish. Relaunch. Rendezvous. Dock. Online.",
		detail: "Unlike many space-based solar concepts centered on microwave or laser transmission, ALTIRYN explores physical battery transport. That integration remains experimental and requires substantial development.",
		status: "EXPERIMENTAL",
		metric: "135 CYCLES/YR"
	},
	{
		id: "intelligence",
		number: "09",
		title: "Intelligence",
		kicker: "A NERVOUS SYSTEM, NOT A CHATBOT",
		summary: "Sensors → telemetry → analysis → decision → action.",
		detail: "The proposed AI layer supports health monitoring, predictive maintenance, solar optimization, orbital navigation, autonomous docking, fault detection and fleet coordination. All telemetry shown here is simulated.",
		status: "SIMULATED"
	},
	{
		id: "operations",
		number: "10",
		title: "Operations",
		kicker: "GROUND + ORBIT",
		summary: "Manufacture, test, launch, commission, generate, exchange, maintain, recover and expand.",
		detail: "Recovery, energy extraction, battery refurbishment, launch logistics and mission control must operate as one lifecycle. Reusability is an architectural goal, not a demonstrated outcome.",
		status: "CONCEPTUAL"
	},
	{
		id: "fleet",
		number: "11",
		title: "Fleet",
		kicker: "ONE → 1,000",
		summary: "Scale changes the problem from spacecraft design to infrastructure coordination.",
		detail: "Constellations multiply power and logistics throughput, but also rendezvous demand, collision exposure, communications load, servicing complexity and capital risk.",
		status: "FUTURE",
		metric: "1,000"
	},
	{
		id: "engineering",
		number: "12",
		title: "Engineering lab",
		kicker: "CHANGE THE ASSUMPTIONS",
		summary: "Explore orbit, solar, battery, thermal, mass, fleet and economics with live calculations.",
		detail: "Every output is traceable to an equation and its assumptions. Results are conceptual estimates, not performance guarantees.",
		status: "CONCEPTUAL"
	},
	{
		id: "economics",
		number: "13",
		title: "Economics",
		kicker: "CURRENTLY DIFFICULT",
		summary: "$35M manufacturing + $50M launch + $135M operations + $105M maintenance = $325M.",
		detail: "The thesis estimates approximately $56.8/kWh. Early systems would be far more expensive than terrestrial solar or wind and depend on major advances in launch, storage, manufacturing and reuse.",
		status: "ESTIMATED",
		metric: "$56.8/kWh"
	},
	{
		id: "risk",
		number: "14",
		title: "Risk & safety",
		kicker: "NOT SOLVED—MANAGED",
		summary: "Battery, docking, AI, communications, radiation, thermal, launch, debris, ground and economic risks interact.",
		detail: "Redundant sensing, safe aborts, fault detection, shielding, isolation and inspection are mitigation concepts. They reduce exposure; they do not prove safety.",
		status: "CONCEPTUAL"
	},
	{
		id: "feasibility",
		number: "15",
		title: "Feasibility",
		kicker: "INTEGRATION IS THE CHALLENGE",
		summary: "Many enabling technologies exist independently. Modular battery transport and orbital energy logistics do not yet exist at the required scale.",
		detail: "Photovoltaics, BMS and orbital navigation are mature; reusable launch, AI and autonomous docking are highly mature; battery transport is experimental; large-scale orbital energy logistics needs more development.",
		status: "EXPERIMENTAL"
	},
	{
		id: "future",
		number: "16",
		title: "Future",
		kicker: "A RESEARCH ROADMAP",
		summary: "Prototype first. Demonstrate exchange. Then ask whether a fleet deserves to exist.",
		detail: "Near term: CAD, simulation, AI software, batteries, docking tests and economic refinement. Medium: experimental satellite and exchange. Long: constellations, reusable logistics and robotic servicing. Beyond: lunar, Mars and orbital industry.",
		status: "FUTURE"
	},
	{
		id: "conclusion",
		number: "17",
		title: "Conclusion",
		kicker: "SUN → ORBIT → ENERGY → BATTERY → EARTH → RELAUNCH",
		summary: "ALTIRYN is an engineering question worth exploring.",
		detail: "A conceptual engineering study by Tejes J. Revision 1.0 · June 2026.",
		status: "CONCEPTUAL"
	}
];
var subsystems = [
	{
		id: "structure",
		label: "01 · PRIMARY STRUCTURE",
		color: "#93a2ad",
		what: "Central bus, frames, panels, mounts and attachment points.",
		does: "Carries launch, orbital and docking loads while locating every subsystem.",
		why: "A reusable modular vehicle needs a stiff reference structure.",
		challenge: "Minimize mass while surviving launch and repeated servicing loads."
	},
	{
		id: "solar",
		label: "02 · SOLAR GENERATION",
		color: "#c7a14a",
		what: "Segmented deployable photovoltaic wings, hinges and power routing.",
		does: "Converts solar irradiance into regulated electrical power.",
		why: "Generation is the spacecraft’s primary mission function.",
		challenge: "Deployment reliability, tracking, degradation and thermal distortion."
	},
	{
		id: "battery",
		label: "03 · MODULAR STORAGE",
		color: "#d9724d",
		what: "Removable Li-ion modules, rack, connectors, locks and thermal interface.",
		does: "Stores generated energy for physical transport to Earth.",
		why: "The proposed architecture replaces wireless beaming with logistics.",
		challenge: "At 4,751 kg, storage dominates mass and exchange complexity."
	},
	{
		id: "control",
		label: "04 · AI / CONTROL",
		color: "#52b8a6",
		what: "Flight computers, processing module and sensor interfaces.",
		does: "Coordinates health, optimization, navigation, faults and docking.",
		why: "Continuous autonomous operations exceed practical manual control.",
		challenge: "Verification, fault containment and safe degraded modes."
	},
	{
		id: "comms",
		label: "05 · COMMUNICATIONS",
		color: "#71a6cc",
		what: "Conceptual antennas and communication hardware.",
		does: "Carries telemetry, mission commands and fleet coordination data.",
		why: "Ground and orbital assets must share operational state.",
		challenge: "Availability and resilience without assuming unsupported bands or rates."
	},
	{
		id: "navigation",
		label: "06 · NAVIGATION",
		color: "#d8d4c7",
		what: "Navigation sensors and attitude-control elements.",
		does: "Estimates state and controls orientation, rendezvous and solar pointing.",
		why: "Generation and docking both depend on precise relative geometry.",
		challenge: "Robust autonomy across changing illumination and failure states."
	},
	{
		id: "docking",
		label: "07 · DOCKING",
		color: "#e3aa63",
		what: "Port, alignment guides, capture locks and power/data interface.",
		does: "Captures the return vehicle and enables battery transfer.",
		why: "It closes the physical energy logistics loop.",
		challenge: "Repeated autonomous capture with safe abort capability."
	},
	{
		id: "thermal",
		label: "08 · THERMAL",
		color: "#b85e61",
		what: "Radiators, conductive pathways and insulation layers.",
		does: "Moves waste heat from batteries and electronics to radiating surfaces.",
		why: "Vacuum removes convective cooling.",
		challenge: "Maintain safe temperatures through variable loads and attitudes."
	}
];
var masses = [
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
	["Navigation", 110]
];
var risks = [
	"Battery thermal event",
	"Docking failure",
	"AI fault",
	"Communications loss",
	"Radiation degradation",
	"Thermal overload",
	"Launch failure",
	"Orbital debris",
	"Ground handling",
	"Economic viability"
];
function orbitAt(altitudeKm) {
	const mu = 398600.4418;
	const radius = 6371 + altitudeKm;
	const velocity = Math.sqrt(mu / radius);
	const periodMinutes = 2 * Math.PI * Math.sqrt(radius ** 3 / mu) / 60;
	return {
		velocity,
		periodMinutes,
		orbitsPerDay: 1440 / periodMinutes
	};
}
function solarAt(area, efficiency) {
	const powerKw = area * 1361 * efficiency / 1e3;
	return {
		powerKw,
		dayMwh: powerKw * 24 / 1e3,
		yearMwh: powerKw * 24 * 365 / 1e3
	};
}
var surfaceVertex = `
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vViewDir;
  void main(){
    vUv = uv;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;
var surfaceFragment = `
  uniform sampler2D uDay;
  uniform sampler2D uNight;
  uniform sampler2D uSpecular;
  uniform sampler2D uNormal;
  uniform vec3 uSunDir;
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vViewDir;
  void main(){
    vec3 n = normalize(vNormalW);
    float ndl = dot(n, uSunDir);
    float day = smoothstep(-0.09, 0.16, ndl);
    vec3 dayMap = texture2D(uDay, vUv).rgb;
    float terrain = texture2D(uNormal, vUv).g;
    dayMap *= 0.92 + terrain * 0.16;
    vec3 nightMap = texture2D(uNight, vUv).rgb;
    float water = texture2D(uSpecular, vUv).r;
    vec3 lit = dayMap * (0.14 + max(ndl, 0.0) * 1.28);
    vec3 halfV = normalize(uSunDir + vViewDir);
    float spec = pow(max(dot(n, halfV), 0.0), 82.0) * water * day;
    lit += vec3(0.55, 0.72, 0.92) * spec * 1.6;
    vec3 night = dayMap * 0.009 + nightMap * 1.55;
    float rim = pow(1.0 - max(dot(n, vViewDir), 0.0), 3.2);
    vec3 color = mix(night, lit, day);
    float terminator = 1.0 - smoothstep(0.0, 0.18, abs(ndl));
    color += vec3(0.07, 0.22, 0.55) * rim * (0.35 + day * 0.65);
    color += vec3(0.18, 0.09, 0.025) * terminator * 0.14;
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
  }
`;
var cloudFragment = `
  uniform sampler2D uClouds;
  uniform vec3 uSunDir;
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vViewDir;
  void main(){
    float cloud = smoothstep(0.48, 0.82, texture2D(uClouds, vUv).r);
    float ndl = dot(normalize(vNormalW), uSunDir);
    float day = smoothstep(-0.2, 0.24, ndl);
    float edge = pow(1.0 - max(dot(normalize(vNormalW), vViewDir), 0.0), 2.0);
    vec3 color = mix(vec3(0.17, 0.2, 0.24), vec3(0.95, 0.98, 1.0), day);
    gl_FragColor = vec4(color, cloud * (0.08 + day * 0.7) * (0.95 - edge * 0.25));
    #include <colorspace_fragment>
  }
`;
var atmosphereVertex = `
  varying vec3 vNormalW;
  varying vec3 vViewDir;
  void main(){
    vec4 world = modelMatrix * vec4(position, 1.0);
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;
var atmosphereFragment = `
  uniform vec3 uSunDir;
  varying vec3 vNormalW;
  varying vec3 vViewDir;
  void main(){
    vec3 n = normalize(vNormalW);
    float fres = pow(1.0 - abs(dot(n, vViewDir)), 4.1);
    float sunlight = smoothstep(-0.5, 0.5, dot(n, uSunDir));
    vec3 sky = mix(vec3(0.025, 0.12, 0.34), vec3(0.28, 0.62, 1.0), sunlight);
     float horizonSun = pow(max(dot(n, uSunDir), 0.0), 2.0);
     gl_FragColor = vec4(sky + vec3(0.18,0.08,0.02) * horizonSun * fres, fres * (0.12 + sunlight * 0.92));
    #include <colorspace_fragment>
  }
`;
function Earth({ quality }) {
	const planet = (0, import_react.useRef)(null);
	const surface = (0, import_react.useRef)(null);
	const clouds = (0, import_react.useRef)(null);
	const chapter = useExperience((state) => state.chapter);
	const chapterProgress = useExperience((state) => state.chapterProgress);
	const chapterId = chapters[chapter]?.id;
	const visible = ![
		"machine",
		"energy",
		"storage",
		"thermal",
		"return",
		"intelligence"
	].includes(chapterId ?? "");
	const textures = useTexture([
		"/textures/earth-day.jpg",
		"/textures/earth-lights.png",
		"/textures/earth-normal.jpg",
		"/textures/earth-specular.jpg",
		"/textures/earth-clouds.png"
	]);
	const [day, night, normal, specular, cloudMap] = textures;
	day.colorSpace = SRGBColorSpace;
	night.colorSpace = SRGBColorSpace;
	cloudMap.colorSpace = SRGBColorSpace;
	textures.forEach((texture) => {
		texture.anisotropy = quality === "high" ? 8 : 2;
	});
	const segments = quality === "high" ? 128 : 64;
	const atmosphereSegments = quality === "high" ? 64 : 32;
	const uniforms = (0, import_react.useMemo)(() => ({
		surface: {
			uDay: { value: day },
			uNight: { value: night },
			uSpecular: { value: specular },
			uNormal: { value: normal },
			uSunDir: { value: SUN_DIR }
		},
		cloud: {
			uClouds: { value: cloudMap },
			uSunDir: { value: SUN_DIR }
		},
		atmosphere: { uSunDir: { value: SUN_DIR } }
	}), [
		day,
		night,
		normal,
		specular,
		cloudMap
	]);
	useFrame((_, delta) => {
		const dt = Math.min(delta, .05);
		if (surface.current) surface.current.rotation.y += dt * .014;
		if (clouds.current) clouds.current.rotation.y += dt * .021;
		if (planet.current) {
			const targetScale = chapterId === "orbit" ? MathUtils.lerp(1, .62, chapterProgress) : 1;
			const scale = MathUtils.lerp(planet.current.scale.x, targetScale, 1 - Math.exp(-2.5 * dt));
			planet.current.scale.setScalar(scale);
			planet.current.position.y = MathUtils.lerp(planet.current.position.y, targetScale < .1 ? -12 : 0, 1 - Math.exp(-2 * dt));
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		visible,
		position: EARTH_POSITION,
		rotation: [
			.32,
			0,
			-.24
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			ref: planet,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					ref: surface,
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						EARTH_RADIUS,
						segments,
						segments
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("shaderMaterial", {
						vertexShader: surfaceVertex,
						fragmentShader: surfaceFragment,
						uniforms: uniforms.surface
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					ref: clouds,
					scale: 1.009,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						EARTH_RADIUS,
						segments,
						segments
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("shaderMaterial", {
						vertexShader: surfaceVertex,
						fragmentShader: cloudFragment,
						uniforms: uniforms.cloud,
						transparent: true,
						depthWrite: false
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					scale: 1.035,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						EARTH_RADIUS,
						atmosphereSegments,
						atmosphereSegments
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("shaderMaterial", {
						vertexShader: atmosphereVertex,
						fragmentShader: atmosphereFragment,
						uniforms: uniforms.atmosphere,
						transparent: true,
						depthWrite: false,
						blending: 2,
						side: 1
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					scale: 1.095,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						EARTH_RADIUS,
						atmosphereSegments,
						atmosphereSegments
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("shaderMaterial", {
						vertexShader: atmosphereVertex,
						fragmentShader: atmosphereFragment,
						uniforms: uniforms.atmosphere,
						transparent: true,
						depthWrite: false,
						blending: 2,
						side: 1
					})]
				})
			]
		})
	});
}
/** Function-driven spacecraft palette: graphite structure, aluminium hardware, gold MLI, PV blue-black. */
var MAT = {
	hull: {
		color: "#343a41",
		metalness: .86,
		roughness: .4
	},
	hullDark: {
		color: "#1d2126",
		metalness: .78,
		roughness: .52
	},
	alu: {
		color: "#a8b0b7",
		metalness: .96,
		roughness: .22
	},
	aluDull: {
		color: "#7d858c",
		metalness: .85,
		roughness: .44
	},
	composite: {
		color: "#111418",
		metalness: .4,
		roughness: .68
	},
	gold: {
		color: "#c49a44",
		metalness: 1,
		roughness: .24
	},
	pv: {
		color: "#0a1330",
		metalness: .66,
		roughness: .26
	},
	pvBus: {
		color: "#c9cdd2",
		metalness: .95,
		roughness: .2
	},
	radiator: {
		color: "#d5d9dc",
		metalness: .7,
		roughness: .34
	},
	optic: {
		color: "#06101a",
		metalness: .95,
		roughness: .05
	},
	cable: {
		color: "#22262b",
		metalness: .3,
		roughness: .85
	},
	shield: {
		color: "#4c5257",
		metalness: .6,
		roughness: .7
	},
	heatShield: {
		color: "#2a1c17",
		metalness: .25,
		roughness: .9
	}
};
var STATUS_CYAN = "#3fd0e6";
var STATUS_AMBER = "#e8a33d";
var damp = (dt, k = 3.2) => 1 - Math.exp(-k * dt);
function Highlight({ active, args, position = [
	0,
	0,
	0
] }) {
	const ref = (0, import_react.useRef)(null);
	const geometry = (0, import_react.useMemo)(() => new EdgesGeometry(new BoxGeometry(...args)), [args]);
	useFrame((_, delta) => {
		const material = ref.current?.material;
		if (material) material.opacity += ((active ? .9 : 0) - material.opacity) * damp(Math.min(delta, .05), 6);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineSegments", {
		ref,
		geometry,
		position,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineBasicMaterial", {
			color: STATUS_CYAN,
			transparent: true,
			opacity: 0,
			depthWrite: false
		})
	});
}
/** A selectable, explodable subsystem assembly. */
function Part({ id, children, base = [
	0,
	0,
	0
], highlight }) {
	const group = (0, import_react.useRef)(null);
	const exploded = useExperience((state) => state.exploded);
	const selected = useExperience((state) => state.selected);
	const hovered = useExperience((state) => state.hovered);
	const active = selected === id || hovered === id;
	const target = (0, import_react.useMemo)(() => new Vector3(), []);
	useFrame((_, delta) => {
		if (!group.current) return;
		const offset = EXPLODE_OFFSETS[id] ?? [
			0,
			0,
			0
		];
		target.set(base[0] + (exploded ? offset[0] : 0), base[1] + (exploded ? offset[1] : 0), base[2] + (exploded ? offset[2] : 0));
		group.current.position.lerp(target, damp(Math.min(delta, .05), 2.6));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		position: base,
		onPointerOver: (event) => {
			event.stopPropagation();
			useExperience.getState().setHovered(id);
		},
		onPointerOut: () => useExperience.getState().setHovered(null),
		onClick: (event) => {
			event.stopPropagation();
			useExperience.getState().select(id);
		},
		children: [children, highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlight, {
			active,
			args: highlight.args,
			position: highlight.position ?? [
				0,
				0,
				0
			]
		})]
	});
}
function Fasteners({ points, radius = .028 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Instances, {
		limit: points.length,
		castShadow: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				radius,
				radius,
				.035,
				6
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu }),
			points.map((point, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instance, {
				position: point,
				rotation: [
					Math.PI / 2,
					0,
					0
				]
			}, index))
		]
	});
}
/** Photovoltaic wing: hinged root, segmented panels, instanced cell grid, metallic bus bars. */
function SolarWing({ side, deploy }) {
	const panels = [
		0,
		1,
		2
	];
	const root = (0, import_react.useRef)(null);
	const hinges = (0, import_react.useRef)([]);
	const cells = (0, import_react.useMemo)(() => {
		const list = [];
		for (let row = 0; row < 5; row += 1) for (let col = 0; col < 8; col += 1) list.push([
			(col - 3.5) * .148,
			(row - 2) * .26,
			.032
		]);
		return list;
	}, []);
	useFrame((_, delta) => {
		const k = damp(Math.min(delta, .05), 1.4);
		if (root.current) root.current.rotation.z += (side * (1 - deploy) * -1.15 - root.current.rotation.z) * k;
		hinges.current.forEach((hinge, index) => {
			if (!hinge) return;
			hinge.rotation.z += (side * (1 - deploy) * -.35 * (index + 1) - hinge.rotation.z) * k;
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: root,
		position: [
			side * 1.05,
			.3,
			0
		],
		rotation: [
			0,
			0,
			side * -1.15
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					side * .32,
					0,
					0
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.075,
					.075,
					.62,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.aluDull })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					side * .62,
					0,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.1,
					.1,
					.24,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
			}),
			panels.map((index) => {
				const x = side * (.95 + index * 1.42);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					ref: (node) => {
						hinges.current[index] = node;
					},
					position: [
						x,
						0,
						0
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								1.34,
								1.42,
								.055
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.pvBus })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								0,
								.018
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								1.26,
								1.34,
								.03
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								...MAT.pv,
								envMapIntensity: 1.4
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Instances, {
							limit: cells.length,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
									.132,
									.235,
									.006
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
									color: "#111f4a",
									metalness: .72,
									roughness: .22
								}),
								cells.map((cell, cellIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instance, { position: cell }, cellIndex))
							]
						}),
						[
							-.44,
							0,
							.44
						].map((offset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								offset,
								0,
								.037
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.012,
								1.3,
								.004
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.pvBus })]
						}, offset)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								side * .7,
								0,
								-.03
							],
							rotation: [
								Math.PI / 2,
								0,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.04,
								.04,
								1.3,
								8
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.aluDull })]
						})
					]
				}, index);
			})
		]
	});
}
/** Modular lithium-ion battery bay: trays, modules, connectors, BMS cards, cooling rails. */
function BatteryBay({ charge }) {
	const modules = (0, import_react.useMemo)(() => {
		const list = [];
		let index = 0;
		for (let row = 0; row < 3; row += 1) for (let col = 0; col < 4; col += 1) list.push({
			position: [
				(col - 1.5) * .34,
				(row - 1) * .3,
				0
			],
			index: index += 1
		});
		return list;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
		id: "battery",
		base: [
			0,
			-.2,
			.72
		],
		highlight: { args: [
			1.62,
			1.16,
			.72
		] },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					-.28
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.58,
					1.1,
					.07
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.hullDark })]
			}),
			[-.78, .78].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					x,
					0,
					-.02
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.05,
					1.1,
					.56
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.aluDull })]
			}, x)),
			modules.map(({ position, index }) => {
				const lit = index / modules.length <= charge;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.3,
								.26,
								.5
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.hull })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								0,
								.256
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.26,
								.2,
								.01
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.composite })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								.1,
								-.09,
								.262
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.07,
								.045,
								.02
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.gold })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								-.1,
								.085,
								.263
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.035,
								.018,
								.012
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: lit ? STATUS_CYAN : "#1b2126",
								emissive: lit ? STATUS_CYAN : "#000000",
								emissiveIntensity: lit ? 2.4 : 0,
								toneMapped: false
							})]
						}),
						[-.13, .13].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								y,
								.2
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.24,
								.022,
								.04
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
						}, y))
					]
				}, index);
			}),
			[-.46, .46].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					y,
					.1
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.028,
					.028,
					1.4,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
			}, y)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					0,
					-.53,
					.12
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.3,
					.12,
					.34
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.composite })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.4,
						.07,
						.1
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.06,
						.02,
						.02
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: STATUS_AMBER,
						emissive: STATUS_AMBER,
						emissiveIntensity: 2,
						toneMapped: false
					})]
				})]
			})
		]
	});
}
function DockingPort() {
	const latches = (0, import_react.useMemo)(() => Array.from({ length: 8 }, (_, index) => index / 8 * Math.PI * 2), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
		id: "docking",
		base: [
			0,
			0,
			1.5
		],
		highlight: { args: [
			1.2,
			1.2,
			.5
		] },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.5,
					.085,
					16,
					48
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					-.12
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.46,
					.5,
					.22,
					32,
					1,
					true
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					...MAT.hull,
					side: 2
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					-.24
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.5,
					.5,
					.06,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.hullDark })]
			}),
			latches.map((angle) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				rotation: [
					0,
					0,
					angle
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.5,
						0,
						.07
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.12,
						.06,
						.12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.aluDull })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.5,
						0,
						.15
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.05,
						.04,
						.06
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.gold })]
				})]
			}, angle)),
			[
				0,
				Math.PI * .66,
				Math.PI * 1.33
			].map((angle) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					Math.cos(angle) * .3,
					Math.sin(angle) * .3,
					.14
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.05,
					.14,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
			}, angle)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.34,
					.02
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.2,
					.1,
					.12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.composite })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.42,
					.12
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.035,
					12,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: STATUS_CYAN,
					emissive: STATUS_CYAN,
					emissiveIntensity: 3,
					toneMapped: false
				})]
			})
		]
	});
}
function Radiators() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
		id: "thermal",
		base: [
			0,
			-.92,
			-1.02
		],
		highlight: { args: [
			2.5,
			.4,
			1.5
		] },
		children: [[-1, 1].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				side * .86,
				0,
				0
			],
			rotation: [
				.22 * side,
				0,
				0
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.78,
						.035,
						1.3
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.radiator })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Instances, {
					limit: 9,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							.02,
							.012,
							1.24
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.aluDull }),
						Array.from({ length: 9 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instance, { position: [
							(index - 4) * .085,
							.024,
							0
						] }, index))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-side * .42,
						.08,
						.4
					],
					rotation: [
						0,
						0,
						Math.PI / 2
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.03,
						.03,
						.3,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
				})
			]
		}, side)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.1,
				.5
			],
			rotation: [
				0,
				0,
				Math.PI / 2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.026,
				.026,
				1.7,
				8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.cable })]
		})]
	});
}
function Communications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
		id: "comms",
		base: [
			.72,
			.62,
			.9
		],
		highlight: { args: [
			.8,
			.8,
			.7
		] },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.2,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.34,
					.2,
					.24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.hull })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.02,
					0
				],
				rotation: [
					0,
					0,
					.2
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.022,
					.022,
					.32,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					.05,
					.2,
					.06
				],
				rotation: [
					-.5,
					.3,
					0
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.3,
							28,
							16,
							0,
							Math.PI * 2,
							0,
							Math.PI / 3.1
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							...MAT.alu,
							side: 2
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.16,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.012,
							.012,
							.3,
							6
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.aluDull })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.3,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.035,
							12,
							12
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.gold })]
					})
				]
			}),
			[-.16, .16].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					x,
					-.3,
					.14
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.1,
					.1,
					.02
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.gold })]
			}, x))
		]
	});
}
function CableHarness() {
	const points = (0, import_react.useMemo)(() => [
		new Vector3(-.72, -.35, .86),
		new Vector3(-.3, -.52, .92),
		new Vector3(.25, -.52, .92),
		new Vector3(.66, -.6, .86)
	], []);
	const curve = (0, import_react.useMemo)(() => new CatmullRomCurve3(points), [points]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tubeGeometry", { args: [
		curve,
		28,
		.018,
		6,
		false
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.cable })] });
}
function Avionics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
		id: "control",
		base: [
			-.6,
			.52,
			.86
		],
		highlight: { args: [
			.8,
			.5,
			.36
		] },
		children: [
			[
				0,
				1,
				2
			].map((index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					index * .14 - .14,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.62,
					.12,
					.28
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.hull })]
			}, index)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					.15
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.5,
					.34,
					.01
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.composite })]
			}),
			[
				0,
				1,
				2,
				3
			].map((index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.2 + index * .13,
					-.19,
					.16
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.028,
					.014,
					.01
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: STATUS_CYAN,
					emissive: STATUS_CYAN,
					emissiveIntensity: 2.2,
					toneMapped: false
				})]
			}, index)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.3,
					-.2,
					.05
				],
				rotation: [
					0,
					0,
					.4
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.022,
					.022,
					.34,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.cable })]
			})
		]
	});
}
function Navigation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
		id: "navigation",
		base: [
			0,
			1.18,
			-.36
		],
		highlight: { args: [
			.7,
			.5,
			.6
		] },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					.4,
					0,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.13,
					.16,
					.34,
					20
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.hull })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.15,
					.06
				],
				rotation: [
					.4,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.115,
					.115,
					.03,
					20
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.optic })]
			}),
			[-.24, .24].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					x,
					-.08,
					.12
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.12,
					.1,
					.14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.hullDark })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						0,
						.08
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.032,
						.038,
						.05,
						14
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.optic })]
				})]
			}, x)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.1,
					-.22
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.014,
					.014,
					.4,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
			})
		]
	});
}
function Shielding() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
		id: "shielding",
		base: [
			0,
			.1,
			-.9
		],
		highlight: { args: [
			2.1,
			1.5,
			.2
		] },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					2,
					1.42,
					.08
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.shield })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					-.06
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.92,
					1.34,
					.03
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.gold })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fasteners, { points: [
				[
					-.9,
					-.62,
					.06
				],
				[
					.9,
					-.62,
					.06
				],
				[
					-.9,
					.62,
					.06
				],
				[
					.9,
					.62,
					.06
				],
				[
					0,
					.62,
					.06
				],
				[
					0,
					-.62,
					.06
				]
			] })
		]
	});
}
function Bus() {
	const fasteners = (0, import_react.useMemo)(() => {
		const list = [];
		for (let x = -.9; x <= .9; x += .36) list.push([
			x,
			.86,
			.4
		], [
			x,
			-.86,
			.4
		]);
		return list;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
		id: "structure",
		base: [
			0,
			0,
			0
		],
		highlight: { args: [
			2.3,
			1.85,
			1.75
		] },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					2.1,
					1.7,
					1.6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.hull })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				1.13,
				1.13,
				1.66,
				8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.hullDark })] }),
			[
				[-1.02, .84],
				[1.02, .84],
				[-1.02, -.84],
				[1.02, -.84]
			].map(([x, y]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					x ?? 0,
					y ?? 0,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.055,
					.055,
					1.66,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
			}, `${x}-${y}`)),
			[-1, 1].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					side * 1.07,
					0,
					0
				],
				rotation: [
					0,
					side * Math.PI * .5,
					0
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.4,
						1.3,
						.03
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.hullDark })] }),
					[
						-.4,
						0,
						.4
					].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							y,
							.02
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							1.3,
							.02,
							.01
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.aluDull })]
					}, y)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							.5,
							-.5,
							.03
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							.16,
							.06,
							.02
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
					})
				]
			}, side)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					-.82
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.9,
					1.5,
					.02
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.gold })]
			}),
			[
				[
					-1,
					-.8,
					.78
				],
				[
					1,
					-.8,
					.78
				],
				[
					-1,
					.8,
					-.78
				],
				[
					1,
					.8,
					-.78
				]
			].map(([x, y, z]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					x ?? 0,
					y ?? 0,
					z ?? 0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.05,
					.075,
					.14,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.aluDull })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.09,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						.062,
						.1,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.composite })]
				})]
			}, `${x}${y}${z}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fasteners, { points: fasteners }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.72,
					-.6,
					.82
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.42,
					.3,
					.1
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.aluDull })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CableHarness, {}),
			[-1, 1].flatMap((x) => [-1, 1].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					x * .86,
					y * .68,
					.83
				],
				rotation: [
					0,
					0,
					x * y * .45
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.26,
					.05,
					.07
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
			}, `${x}-${y}`))),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.72,
					-.6,
					.88
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.06,
					.02,
					.01
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: STATUS_AMBER,
					emissive: STATUS_AMBER,
					emissiveIntensity: 2,
					toneMapped: false
				})]
			})
		]
	});
}
function Spacecraft({ visible, deploy, charge }) {
	const group = (0, import_react.useRef)(null);
	const selected = useExperience((state) => state.selected);
	const chapter = useExperience((state) => state.chapter);
	const chapterProgress = useExperience((state) => state.chapterProgress);
	const chapterId = chapters[chapter]?.id;
	const hovered = useExperience((state) => state.hovered);
	useFrame((_, delta) => {
		if (!group.current || !visible) return;
		const dt = Math.min(delta, .05);
		if (!selected) group.current.rotation.y += dt * .055;
		group.current.rotation.z = Math.sin(_.clock.elapsedTime * .2) * .02;
		const orbitScale = chapterId === "orbit" ? MathUtils.lerp(.085, .42, chapterProgress) : 1;
		const targetScale = chapterId === "orbit" ? orbitScale : 1;
		const scale = MathUtils.lerp(group.current.scale.x, targetScale, damp(dt, 2.8));
		group.current.scale.setScalar(scale);
		const orbitalOffset = chapter === 3 ? 3.2 * (1 - chapterProgress) : 0;
		group.current.position.x += (orbitalOffset - group.current.position.x) * damp(dt, 2.4);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		visible,
		scale: .085,
		children: [
			(selected || hovered) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					.5,
					2.4
				],
				intensity: .7,
				color: "#3fd0e6",
				distance: 6
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bus, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatteryBay, { charge }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DockingPort, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radiators, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Communications, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avionics, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shielding, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
				id: "solar",
				highlight: {
					args: [
						9.2,
						1.6,
						.3
					],
					position: [
						0,
						.3,
						0
					]
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolarWing, {
					side: -1,
					deploy
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolarWing, {
					side: 1,
					deploy
				})]
			})
		]
	});
}
/** Cycle-state → world position + heat load for the return capsule. */
var STATE_TRACK = [
	{
		position: [
			0,
			0,
			2.65
		],
		heat: 0,
		spin: .05
	},
	{
		position: [
			0,
			0,
			2.65
		],
		heat: 0,
		spin: .05
	},
	{
		position: [
			.2,
			-.7,
			4.6
		],
		heat: 0,
		spin: .35
	},
	{
		position: [
			.9,
			-3.1,
			3.1
		],
		heat: 1,
		spin: .5
	},
	{
		position: [
			1.25,
			-4.35,
			2.3
		],
		heat: .25,
		spin: .12
	},
	{
		position: [
			1.25,
			-4.35,
			2.3
		],
		heat: 0,
		spin: .08
	},
	{
		position: [
			1.25,
			-4.35,
			2.3
		],
		heat: 0,
		spin: .08
	},
	{
		position: [
			.9,
			-2.4,
			3.4
		],
		heat: .4,
		spin: .3
	},
	{
		position: [
			2.4,
			-.6,
			6.2
		],
		heat: 0,
		spin: .2
	},
	{
		position: [
			.4,
			-.1,
			3.3
		],
		heat: 0,
		spin: .06
	},
	{
		position: [
			0,
			0,
			2.65
		],
		heat: 0,
		spin: .04
	}
];
function ReturnCapsule() {
	const group = (0, import_react.useRef)(null);
	const shell = (0, import_react.useRef)(null);
	const plasma = (0, import_react.useRef)(null);
	const cycle = useExperience((state) => state.cycle);
	const chapterId = chapters[useExperience((state) => state.chapter)]?.id;
	const target = (0, import_react.useMemo)(() => new Vector3(2.4, -.6, 6.2), []);
	const heat = (0, import_react.useRef)(0);
	const visible = [
		"thermal",
		"return",
		"intelligence",
		"operations"
	].includes(chapterId ?? "") || cycle >= 0;
	useFrame((state, delta) => {
		if (!group.current || !visible) return;
		const dt = Math.min(delta, .05);
		const entry = STATE_TRACK[cycle < 0 ? 8 : Math.min(cycle, STATE_TRACK.length - 1)];
		target.set(...entry.position);
		if (cycle < 0) {
			const t = state.clock.elapsedTime * .25;
			target.x += Math.sin(t) * .5;
			target.y += Math.cos(t * .8) * .25;
		}
		group.current.position.lerp(target, 1 - Math.exp(-1.5 * dt));
		group.current.rotation.y += dt * entry.spin;
		group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, entry.heat > .5 ? -.7 : 0, 1 - Math.exp(-2 * dt));
		heat.current += (entry.heat - heat.current) * (1 - Math.exp(-2.4 * dt));
		const shellMaterial = shell.current?.material;
		if (shellMaterial) {
			shellMaterial.emissiveIntensity = heat.current * 3.4;
			shellMaterial.emissive.setRGB(1, .34 + heat.current * .12, .12);
		}
		if (plasma.current) {
			const plasmaMaterial = plasma.current.material;
			plasmaMaterial.opacity = heat.current * .55;
			const pulse = 1 + Math.sin(state.clock.elapsedTime * 12) * .04;
			plasma.current.scale.setScalar(heat.current * 1.35 * pulse + .001);
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		visible,
		position: [
			2.4,
			-.6,
			6.2
		],
		scale: .62,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: shell,
				rotation: [
					Math.PI,
					0,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.72,
					32,
					18,
					0,
					Math.PI * 2,
					0,
					Math.PI / 2.6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					...MAT.heatShield,
					side: 2,
					emissive: "#000000",
					emissiveIntensity: 0,
					toneMapped: false
				})]
			}),
			[
				.3,
				.5,
				.66
			].map((radius, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.24 - index * .06,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					radius,
					.012,
					8,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3a2a22",
					metalness: .2,
					roughness: .9
				})]
			}, radius)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.24,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.52,
					.7,
					.62,
					24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.24,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.53,
					.71,
					.2,
					24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.gold })]
			}),
			[
				0,
				1,
				2,
				3
			].map((index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					Math.cos(index / 4 * Math.PI * 2) * .5,
					.3,
					Math.sin(index / 4 * Math.PI * 2) * .5
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.16,
					.14,
					.05
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.composite })]
			}, index)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.57,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.5,
					.03,
					8,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.aluDull })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.7,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.4,
					.5,
					.18,
					24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.hull })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.82,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.34,
					.055,
					12,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.alu })]
			}),
			[
				0,
				1,
				2,
				3
			].map((index) => {
				const angle = index / 4 * Math.PI * 2 + Math.PI / 4;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						Math.cos(angle) * .62,
						.42,
						Math.sin(angle) * .62
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.035,
						.05,
						.1,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.aluDull })]
				}, index);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.36,
					.62,
					-.3
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.12,
					.02,
					.12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { ...MAT.gold })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.4,
					.6,
					.26
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.03,
					10,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: STATUS_CYAN,
					emissive: STATUS_CYAN,
					emissiveIntensity: 3,
					toneMapped: false
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: plasma,
				position: [
					0,
					-.25,
					0
				],
				scale: .001,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					1,
					24,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#ff8a3a",
					transparent: true,
					opacity: 0,
					depthWrite: false,
					blending: 2
				})]
			})
		]
	});
}
var COUNT = 240;
/** Elegant photon stream: Sun → solar array → power electronics → battery. */
function Photons({ active, flow }) {
	const points = (0, import_react.useRef)(null);
	const data = (0, import_react.useMemo)(() => {
		const positions = /* @__PURE__ */ new Float32Array(720);
		const seeds = new Float32Array(COUNT);
		const lanes = new Float32Array(COUNT);
		for (let i = 0; i < COUNT; i += 1) {
			seeds[i] = Math.random();
			lanes[i] = Math.random() < .5 ? -1 : 1;
		}
		return {
			positions,
			seeds,
			lanes
		};
	}, []);
	const geometry = (0, import_react.useMemo)(() => {
		const geo = new BufferGeometry();
		geo.setAttribute("position", new BufferAttribute(data.positions, 3));
		return geo;
	}, [data]);
	const from = (0, import_react.useMemo)(() => SUN_POS.clone().normalize().multiplyScalar(26), []);
	useFrame((state, delta) => {
		if (!points.current || !active) return;
		const dt = Math.min(delta, .05);
		const time = state.clock.elapsedTime;
		const array = data.positions;
		for (let i = 0; i < COUNT; i += 1) {
			const seed = data.seeds[i];
			const lane = data.lanes[i];
			let t = (time * (.16 + seed * .12) + seed) % 1;
			t = Math.min(1, t / Math.max(flow, .05));
			const wingX = lane * 3.1;
			let x;
			let y;
			let z;
			if (t < .62) {
				const k = t / .62;
				x = MathUtils.lerp(from.x, wingX, k);
				y = MathUtils.lerp(from.y, .3 + (seed - .5) * 1.2, k);
				z = MathUtils.lerp(from.z, (seed - .5) * .6, k);
			} else if (t < .82) {
				const k = (t - .62) / .2;
				x = MathUtils.lerp(wingX, .72, k);
				y = MathUtils.lerp(.3 + (seed - .5) * 1.2, -.6, k);
				z = MathUtils.lerp((seed - .5) * .6, .85, k);
			} else {
				const k = (t - .82) / .18;
				x = MathUtils.lerp(.72, (seed - .5) * 1.1, k);
				y = MathUtils.lerp(-.6, -.25, k);
				z = MathUtils.lerp(.85, .72, k);
			}
			array[i * 3] = x;
			array[i * 3 + 1] = y + Math.sin(time * 1.4 + seed * 9) * .03;
			array[i * 3 + 2] = z;
		}
		points.current.geometry.attributes["position"].needsUpdate = true;
		const material = points.current.material;
		material.opacity += (.9 - material.opacity) * (1 - Math.exp(-3 * dt));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("points", {
		ref: points,
		geometry,
		visible: active,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
			size: .055,
			color: "#ffd89a",
			transparent: true,
			opacity: 0,
			depthWrite: false,
			blending: 2,
			sizeAttenuation: true,
			toneMapped: false
		})
	});
}
/** Chapter-indexed camera choreography — a continuous film rather than 18 static frames. */
var ORIGIN_SHOT = {
	position: [
		.4,
		.6,
		19
	],
	look: [
		0,
		-2.6,
		0
	],
	fov: 42
};
var SHOTS = {
	origin: ORIGIN_SHOT,
	definition: {
		position: [
			-2.6,
			-.5,
			15
		],
		look: [
			0,
			-3.2,
			0
		],
		fov: 45
	},
	architecture: {
		position: [
			4.2,
			-2.4,
			13
		],
		look: [
			0,
			-3.8,
			0
		],
		fov: 48
	},
	ecosystem: {
		position: [
			-4.6,
			.4,
			15
		],
		look: [
			0,
			-3,
			0
		],
		fov: 46
	},
	systems: {
		position: [
			0,
			4.8,
			17
		],
		look: [
			0,
			-2.4,
			0
		],
		fov: 48
	},
	coverage: {
		position: [
			5,
			-1.8,
			14
		],
		look: [
			0,
			-3.4,
			0
		],
		fov: 48
	},
	minute: {
		position: [
			-3.8,
			-1,
			13
		],
		look: [
			0,
			-3.5,
			0
		],
		fov: 46
	},
	question: {
		position: [
			2.6,
			-1.6,
			12.5
		],
		look: [
			0,
			-3.4,
			0
		],
		fov: 46
	},
	earth: {
		position: [
			5.4,
			-3.4,
			8.4
		],
		look: [
			.4,
			-4.4,
			-1
		],
		fov: 52
	},
	orbit: {
		position: [
			0,
			3.4,
			15
		],
		look: [
			0,
			-2.4,
			0
		],
		fov: 44
	},
	machine: {
		position: [
			1.4,
			.9,
			7.4
		],
		look: [
			0,
			0,
			0
		],
		fov: 42
	},
	energy: {
		position: [
			-5.8,
			1.8,
			6.4
		],
		look: [
			-2.4,
			.25,
			0
		],
		fov: 42
	},
	storage: {
		position: [
			.6,
			-.5,
			3.1
		],
		look: [
			0,
			-.2,
			.7
		],
		fov: 38
	},
	thermal: {
		position: [
			1.9,
			-1.5,
			3.6
		],
		look: [
			0,
			-.9,
			-.9
		],
		fov: 42
	},
	return: {
		position: [
			1.6,
			-.4,
			8.2
		],
		look: [
			.3,
			-.4,
			2.6
		],
		fov: 44
	},
	intelligence: {
		position: [
			-1.5,
			1.1,
			3.2
		],
		look: [
			-.6,
			.5,
			.8
		],
		fov: 38
	},
	operations: {
		position: [
			3.8,
			-1.2,
			8.8
		],
		look: [
			.2,
			-3.5,
			1
		],
		fov: 44
	},
	fleet: {
		position: [
			0,
			6.2,
			19
		],
		look: [
			0,
			-2.2,
			0
		],
		fov: 46
	},
	engineering: {
		position: [
			3.6,
			1.4,
			8.6
		],
		look: [
			0,
			.2,
			0
		],
		fov: 44
	},
	economics: {
		position: [
			-3.6,
			1.6,
			9.4
		],
		look: [
			0,
			-.4,
			0
		],
		fov: 44
	},
	risk: {
		position: [
			2.6,
			-1.1,
			7.6
		],
		look: [
			0,
			-.2,
			.4
		],
		fov: 44
	},
	feasibility: {
		position: [
			-2.4,
			2.4,
			10.4
		],
		look: [
			0,
			0,
			0
		],
		fov: 46
	},
	future: {
		position: [
			0,
			3.6,
			16
		],
		look: [
			0,
			-2.2,
			0
		],
		fov: 48
	},
	conclusion: {
		position: [
			.2,
			1.2,
			21
		],
		look: [
			0,
			-2.6,
			0
		],
		fov: 44
	}
};
function CameraRig() {
	const chapter = useExperience((state) => state.chapter);
	const chapterProgress = useExperience((state) => state.chapterProgress);
	const selected = useExperience((state) => state.selected);
	const exploded = useExperience((state) => state.exploded);
	const { camera } = useThree();
	const desiredPosition = (0, import_react.useMemo)(() => new Vector3(), []);
	const desiredLook = (0, import_react.useMemo)(() => new Vector3(), []);
	const currentLook = (0, import_react.useRef)(new Vector3(0, -2, 0));
	useFrame((state, delta) => {
		const dt = Math.min(delta, .05);
		const index = Math.min(Math.max(chapter, 0), chapters.length - 1);
		const id = chapters[index]?.id ?? "origin";
		const nextId = chapters[Math.min(index + 1, chapters.length - 1)]?.id ?? id;
		const shot = SHOTS[id] ?? ORIGIN_SHOT;
		const next = SHOTS[nextId] ?? shot;
		const local = MathUtils.clamp(chapterProgress, 0, 1);
		const blend = local * local * (3 - 2 * local);
		desiredPosition.set(MathUtils.lerp(shot.position[0], next.position[0], blend), MathUtils.lerp(shot.position[1], next.position[1], blend), MathUtils.lerp(shot.position[2], next.position[2], blend));
		desiredLook.set(MathUtils.lerp(shot.look[0], next.look[0], blend), MathUtils.lerp(shot.look[1], next.look[1], blend), MathUtils.lerp(shot.look[2], next.look[2], blend));
		const t = state.clock.elapsedTime;
		desiredPosition.x += Math.sin(t * .13) * .22;
		desiredPosition.y += Math.cos(t * .11) * .14;
		if (selected) {
			const anchor = SUBSYSTEM_ANCHORS[selected] ?? [
				0,
				0,
				0
			];
			const focus = new Vector3(...anchor);
			if (exploded) focus.multiplyScalar(1.6);
			desiredLook.copy(focus);
			const offset = focus.clone().normalize().multiplyScalar(2.8);
			if (offset.lengthSq() < .01) offset.set(1.8, .9, 2.8);
			desiredPosition.copy(focus).add(offset).add(new Vector3(.8, .7, 2.6));
		}
		const ease = 1 - Math.exp(-(selected ? 2.4 : 1.6) * dt);
		camera.position.lerp(desiredPosition, ease);
		currentLook.current.lerp(desiredLook, ease);
		camera.lookAt(currentLook.current);
		const perspective = camera;
		const targetFov = selected ? 34 : MathUtils.lerp(shot.fov ?? 44, next.fov ?? 44, blend);
		if (Math.abs(perspective.fov - targetFov) > .01) {
			perspective.fov += (targetFov - perspective.fov) * ease;
			perspective.updateProjectionMatrix();
		}
	});
	return null;
}
/** Orbital track + constellation, instanced so a 1,000-satellite fleet stays cheap. */
function OrbitTrack({ quality }) {
	const group = (0, import_react.useRef)(null);
	const instances = (0, import_react.useRef)(null);
	const chapter = useExperience((state) => state.chapter);
	const fleet = useExperience((state) => state.fleet);
	const chapterId = chapters[chapter]?.id;
	const max = quality === "high" ? 260 : 120;
	const count = chapterId === "fleet" ? max : Math.max(1, Math.min(fleet, max));
	const track = (0, import_react.useMemo)(() => {
		const points = new EllipseCurve(0, 0, EARTH_RADIUS * 1.62, EARTH_RADIUS * 1.62, 0, Math.PI * 2).getPoints(160).map((point) => new Vector3(point.x, 0, point.y));
		return new BufferGeometry().setFromPoints(points);
	}, []);
	const dummy = (0, import_react.useMemo)(() => new Object3D(), []);
	useFrame((state, delta) => {
		if (!visible) return;
		const dt = Math.min(delta, .05);
		if (group.current) group.current.rotation.y += dt * .02;
		if (!instances.current) return;
		const radius = EARTH_RADIUS * 1.62;
		for (let i = 0; i < count; i += 1) {
			const angle = i / count * Math.PI * 2 + state.clock.elapsedTime * .05;
			const tilt = Math.sin(i * 2.4) * .9;
			dummy.position.set(Math.cos(angle) * radius, tilt, Math.sin(angle) * radius);
			dummy.rotation.set(0, -angle, 0);
			dummy.scale.setScalar(.14);
			dummy.updateMatrix();
			instances.current.setMatrixAt(i, dummy.matrix);
		}
		instances.current.count = count;
		instances.current.instanceMatrix.needsUpdate = true;
	});
	const visible = chapterId === "orbit" || [
		"operations",
		"fleet",
		"economics",
		"risk",
		"feasibility",
		"future",
		"conclusion"
	].includes(chapterId ?? "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		position: EARTH_POSITION,
		rotation: [
			.36,
			0,
			-.2
		],
		visible,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("line", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("primitive", {
			object: track,
			attach: "geometry"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineBasicMaterial", {
			color: "#5f93a6",
			transparent: true,
			opacity: .28
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("instancedMesh", {
			ref: instances,
			args: [
				void 0,
				void 0,
				max
			],
			frustumCulled: false,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				2.4,
				.5,
				.7
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c9ccd0",
				metalness: .9,
				roughness: .3,
				emissive: "#2a3c48",
				emissiveIntensity: .5
			})]
		})]
	});
}
/** Ground infrastructure that the recovered battery moves through. */
function GroundLoop() {
	const chapterId = chapters[useExperience((state) => state.chapter)]?.id;
	const group = (0, import_react.useRef)(null);
	const visible = [
		"return",
		"intelligence",
		"operations"
	].includes(chapterId ?? "");
	const stations = [
		"recovery",
		"extraction",
		"inspection",
		"refurbishment",
		"launch"
	];
	useFrame((_, delta) => {
		if (!group.current) return;
		const target = chapterId === "operations" ? 1 : .001;
		const scale = MathUtils.lerp(group.current.scale.x, target, 1 - Math.exp(-2.8 * Math.min(delta, .05)));
		group.current.scale.setScalar(scale);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		position: [
			.3,
			-3.7,
			1.2
		],
		rotation: [
			0,
			-.22,
			0
		],
		visible,
		scale: .001,
		children: [stations.map((station, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				(index - 2) * .62,
				0,
				0
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.42,
					.12,
					.42
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3b4247",
					metalness: .7,
					roughness: .5
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.13,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.2,
						.14,
						.2
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#8d959b",
						metalness: .9,
						roughness: .28
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.24,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.05,
						.02,
						.05
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: STATUS_AMBER,
						emissive: STATUS_AMBER,
						emissiveIntensity: 2.5,
						toneMapped: false
					})]
				})
			]
		}, station)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.08,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				3.4,
				.03,
				.7
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#22282c",
				metalness: .4,
				roughness: .8
			})]
		})]
	});
}
function SceneContent({ quality }) {
	const chapter = useExperience((state) => state.chapter);
	const cycle = useExperience((state) => state.cycle);
	const chapterId = chapters[chapter]?.id;
	const spacecraftVisible = [
		"orbit",
		"machine",
		"energy",
		"storage",
		"thermal",
		"return",
		"intelligence"
	].includes(chapterId ?? "");
	const deploy = [
		"energy",
		"storage",
		"thermal",
		"return",
		"intelligence"
	].includes(chapterId ?? "") ? 1 : .18;
	const charge = cycle < 0 ? [
		"storage",
		"thermal",
		"return",
		"intelligence"
	].includes(chapterId ?? "") ? 1 : chapterId === "energy" ? .55 : .2 : Math.min(1, .15 + cycle * .22);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#020406"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .34,
			color: "#8fb4d6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Environment, {
			resolution: 128,
			frames: 1,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
					intensity: 2.1,
					color: "#fff2d6",
					position: [
						-6,
						4,
						6
					],
					scale: [
						12,
						12,
						1
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
					intensity: .5,
					color: "#4f7fa8",
					position: [
						7,
						-2,
						-4
					],
					"rotation-y": Math.PI / 2,
					scale: [
						16,
						6,
						1
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
					intensity: .35,
					color: "#9fb8c9",
					position: [
						0,
						-8,
						2
					],
					"rotation-x": Math.PI / 2,
					scale: [
						14,
						14,
						1
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: SUN_POS.toArray(),
			intensity: 4.2,
			color: "#fff4d8",
			castShadow: quality === "high"
		}),
		quality === "high" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				6,
				-4,
				-8
			],
			intensity: .6,
			color: "#4d7fa6"
		}),
		quality === "high" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				2,
				3,
				12
			],
			intensity: .7,
			color: "#cfe2f2"
		}),
		quality === "high" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				-3,
				4
			],
			intensity: 6,
			color: "#2f5f7d",
			distance: 22
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
			radius: 130,
			depth: 70,
			count: quality === "high" ? 5200 : 2200,
			factor: 3.4,
			saturation: 0,
			fade: true,
			speed: .4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { quality }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitTrack, { quality }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spacecraft, {
			visible: spacecraftVisible,
			deploy,
			charge
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photons, {
			active: [
				"machine",
				"energy",
				"storage"
			].includes(chapterId ?? ""),
			flow: 1
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReturnCapsule, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroundLoop, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraRig, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			enabled: chapterId === "machine",
			enableDamping: true,
			dampingFactor: .07,
			enablePan: true,
			enableZoom: false,
			minDistance: 2.4,
			maxDistance: 14
		})
	] });
}
function World() {
	const [quality, setQuality] = (0, import_react.useState)("high");
	const [dpr, setDpr] = (0, import_react.useState)(1.7);
	(0, import_react.useEffect)(() => {
		const query = window.matchMedia("(max-width: 900px)");
		const update = () => {
			const low = query.matches || (navigator.hardwareConcurrency ?? 8) <= 4;
			setQuality(low ? "low" : "high");
			setDpr(low ? 1.2 : 1.7);
		};
		update();
		query.addEventListener("change", update);
		return () => query.removeEventListener("change", update);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "world-canvas fixed inset-0 z-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
			dpr: [1, dpr],
			camera: {
				position: [
					.4,
					.6,
					19
				],
				fov: 42,
				near: .1,
				far: 400
			},
			gl: {
				antialias: quality === "high",
				powerPreference: "high-performance"
			},
			onPointerMissed: () => useExperience.getState().select(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PerformanceMonitor, {
				bounds: () => [30, 58],
				onDecline: () => setDpr((current) => Math.max(1, +(current - .3).toFixed(2))),
				onIncline: () => setDpr((current) => Math.min(quality === "high" ? 1.7 : 1.2, +(current + .15).toFixed(2)))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneContent, { quality })
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
/** Curated terms/numbers that visitors are likely to search for but that don't map
*  1:1 onto a chapter title — orbital figures, mass/cost figures, named equations,
*  and thesis vocabulary — each routed to the chapter that actually explains it. */
var TERMS = [
	{
		id: "term-sbsp",
		title: "Space-based solar power (SBSP)",
		description: "The broader field ALTIRYN sits inside — collecting solar energy in orbit.",
		tag: "CONCEPT",
		keywords: "sbsp space based solar power orbital energy",
		targetChapter: "question"
	},
	{
		id: "term-orbital-velocity",
		title: "Orbital velocity — 7.62 km/s",
		description: "Circular velocity at 500 km altitude, from v = √(μ/r).",
		tag: "ORBIT",
		keywords: "orbital velocity 7.62 km/s speed",
		targetChapter: "orbit"
	},
	{
		id: "term-period",
		title: "Orbital period — 94.5 minutes",
		description: "≈15 orbits/day at 500 km, from T = 2π√(r³/μ).",
		tag: "ORBIT",
		keywords: "period 94.5 minutes orbits per day 15",
		targetChapter: "orbit"
	},
	{
		id: "term-irradiance",
		title: "Solar constant — 1361 W/m²",
		description: "Reference irradiance above the atmosphere used in the energy model.",
		tag: "ENERGY",
		keywords: "1361 w/m2 solar constant irradiance",
		targetChapter: "question"
	},
	{
		id: "term-output",
		title: "Idealized output — 43.55 kW",
		description: "100 m² × 1361 W/m² × 32% efficiency, continuous idealized case.",
		tag: "ENERGY",
		keywords: "43.55 kw output power generation",
		targetChapter: "energy"
	},
	{
		id: "term-daily",
		title: "Daily yield — 1.045 MWh",
		description: "Idealized continuous daily energy output feeding the storage model.",
		tag: "ENERGY",
		keywords: "1.045 mwh daily yield energy per day",
		targetChapter: "energy"
	},
	{
		id: "term-battery-mass",
		title: "Battery mass — 4,751 kg",
		description: "1.045 MWh ÷ 220 Wh/kg — the dominant mass line in the spacecraft budget.",
		tag: "STORAGE",
		keywords: "4751 kg battery mass 220 wh/kg lithium ion",
		targetChapter: "storage"
	},
	{
		id: "term-stefan",
		title: "Stefan–Boltzmann radiation",
		description: "P = εσAT⁴ — the first-order radiator example used for thermal control.",
		tag: "THERMAL",
		keywords: "stefan boltzmann radiator thermal p = epsilon sigma a t^4",
		targetChapter: "thermal"
	},
	{
		id: "term-docking",
		title: "Autonomous docking",
		description: "Capture, alignment and lock sequence that closes the physical return loop.",
		tag: "AUTONOMY",
		keywords: "autonomous docking capture rendezvous",
		targetChapter: "return",
		subsystem: "docking"
	},
	{
		id: "term-ai",
		title: "AI / autonomous control",
		description: "Health monitoring, predictive maintenance, navigation and fault response.",
		tag: "AUTONOMY",
		keywords: "ai predictive maintenance autonomous control intelligence",
		targetChapter: "intelligence",
		subsystem: "control"
	},
	{
		id: "term-return-capsule",
		title: "Return capsule",
		description: "Carries the exchanged battery module through re-entry back to Earth.",
		tag: "LOGISTICS",
		keywords: "return capsule re-entry battery exchange",
		targetChapter: "return"
	},
	{
		id: "term-spacecraft-mass",
		title: "Spacecraft mass — 8,500 kg",
		description: "Total conceptual satellite mass across all subsystems.",
		tag: "MASS",
		keywords: "8500 kg spacecraft mass total",
		targetChapter: "machine"
	},
	{
		id: "term-launch-force",
		title: "Conceptual launch force — ~250 kN",
		description: "Illustrative thrust figure used in the launch-logistics discussion.",
		tag: "LOGISTICS",
		keywords: "250 kn launch force thrust",
		targetChapter: "operations"
	},
	{
		id: "term-cost",
		title: "Lifetime cost — ~$325M",
		description: "Manufacturing + launch + operations + maintenance, summed over the mission.",
		tag: "ECONOMICS",
		keywords: "325m lifetime cost total budget",
		targetChapter: "economics"
	},
	{
		id: "term-cost-per-kwh",
		title: "Cost per kWh — ~$56.8/kWh",
		description: "Conceptual levelized estimate — far above terrestrial solar or wind today.",
		tag: "ECONOMICS",
		keywords: "56.8 cost per kwh levelized economics",
		targetChapter: "economics"
	},
	{
		id: "term-radiation",
		title: "Radiation exposure",
		description: "Solar particles, cosmic radiation and belt exposure drive shielding needs.",
		tag: "RISK",
		keywords: "radiation shielding cosmic rays belt exposure",
		targetChapter: "risk",
		subsystem: "thermal"
	},
	{
		id: "term-debris",
		title: "Orbital debris",
		description: "Collision exposure that grows with fleet size and orbital density.",
		tag: "RISK",
		keywords: "orbital debris collision fleet risk",
		targetChapter: "risk"
	},
	{
		id: "term-trl",
		title: "Technology readiness",
		description: "Which enabling technologies are mature versus still experimental.",
		tag: "FEASIBILITY",
		keywords: "technology readiness level trl mature experimental",
		targetChapter: "feasibility"
	},
	{
		id: "term-roadmap",
		title: "Research roadmap",
		description: "Prototype → exchange demo → constellation → beyond-Earth applications.",
		tag: "FUTURE",
		keywords: "roadmap future prototype demonstration constellation",
		targetChapter: "future"
	}
];
var searchIndex = [
	...chapters.map((item) => ({
		id: `chapter-${item.id}`,
		title: item.title,
		description: item.summary,
		tag: item.status,
		keywords: `${item.title} ${item.kicker} ${item.summary} ${item.detail} ${item.metric ?? ""}`,
		targetChapter: item.id
	})),
	...subsystems.map((item) => ({
		id: `subsystem-${item.id}`,
		title: item.label.replace(/^\d+\s*·\s*/, ""),
		description: item.what,
		tag: "SUBSYSTEM",
		keywords: `${item.label} ${item.what} ${item.does} ${item.why} ${item.challenge}`,
		targetChapter: "machine",
		subsystem: item.id
	})),
	...TERMS
];
function searchThesis(query, limit = 7) {
	const q = query.trim().toLowerCase();
	if (!q) return [];
	const terms = q.split(/\s+/).filter(Boolean);
	return searchIndex.map((entry) => {
		const haystack = entry.keywords.toLowerCase();
		return {
			entry,
			hits: terms.filter((term) => haystack.includes(term)).length
		};
	}).filter(({ hits }) => hits > 0).sort((a, b) => b.hits - a.hits).slice(0, limit).map(({ entry }) => entry);
}
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var MODULES = {
	orbit: {
		what: "A circular low-Earth-orbit reference at adjustable altitude.",
		why: "Altitude sets orbital speed, period, access, radiation exposure and rendezvous timing.",
		how: "Velocity follows v = √(μ/r); period follows T = 2π√(r³/μ).",
		meaning: "At 500 km, ALTIRYN travels about 7.62 km/s and circles Earth every 94.5 minutes.",
		limitation: "Circular two-body approximation; perturbations, station-keeping and optimized trajectories are excluded."
	},
	solar: {
		what: "An ideal photovoltaic output model using collector area and conversion efficiency.",
		why: "Generation determines how quickly storage can charge and how much energy enters the logistics loop.",
		how: "Electrical power = area × 1,361 W/m² × photovoltaic efficiency.",
		meaning: "The thesis reference produces 43.55 kW, or 1.045 MWh over an ideal continuous day.",
		limitation: "Excludes eclipses, pointing, wiring, conversion, temperature, degradation and operational losses."
	},
	battery: {
		what: "A first-order estimate of the lithium-ion mass required to store one ideal day of generation.",
		why: "Physical energy return makes storage the dominant spacecraft mass and logistics constraint.",
		how: "Battery mass = stored energy ÷ assumed pack-level specific energy.",
		meaning: "At 220 Wh/kg, 1.045 MWh requires about 4,751 kg of cells and modules.",
		limitation: "Does not add reserves, containment, BMS, connectors, cooling, aging or depth-of-discharge margins."
	},
	thermal: {
		what: "A basic estimate of heat rejected by a radiator in vacuum.",
		why: "Solar arrays, batteries, computers and communications hardware generate or absorb heat without atmospheric convection.",
		how: "Radiated power follows P = εσAT⁴ for emissivity 0.90 and radiator area 12 m².",
		meaning: "At 300 K, the conceptual surface rejects approximately 4.96 kW.",
		limitation: "This is not a full thermal network, transient model, orbital heat balance or CFD analysis."
	},
	mass: {
		what: "The thesis reference allocation for an 8,500 kg conceptual spacecraft.",
		why: "Mass drives structure, launch force, maneuverability, cost and the feasibility of repeated logistics.",
		how: "Subsystem estimates are summed; a 3g launch case gives force F = ma.",
		meaning: "Battery storage contributes 4,751 kg—more than half of total reference mass.",
		limitation: "No detailed structural sizing, load-path analysis, margins or flight-qualified CAD is included."
	},
	fleet: {
		what: "A scale study extending one conceptual spacecraft to a coordinated fleet.",
		why: "Useful infrastructure would require throughput, redundancy and servicing beyond a single vehicle.",
		how: "Ideal unit power and energy are multiplied by fleet count before logistics losses.",
		meaning: "Scale increases energy, but also collision exposure, launches, docking demand and capital risk.",
		limitation: "This is a visualization—not a constellation design, traffic model or deployment commitment."
	},
	economics: {
		what: "A thesis-level lifetime estimate across manufacture, launch, operations and maintenance.",
		why: "Technical possibility is insufficient if delivered energy remains economically uncompetitive.",
		how: "$35M + $50M + $135M + $105M produces an estimated $325M lifecycle total.",
		meaning: "The reference estimate is approximately $56.8/kWh and is presently difficult.",
		limitation: "Conceptual costs are not bids, market forecasts, commercial plans or guaranteed economics."
	}
};
function Parameter({ label, value, unit, min, max, step, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lab-parameter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
			value.toLocaleString(),
			" ",
			unit
		] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			"aria-label": label,
			value: [value],
			min,
			max,
			step,
			onValueChange: (next) => {
				const first = next[0];
				if (first !== void 0) onChange(first);
			}
		})]
	});
}
function Insight({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lab-insight",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children })]
	});
}
function EngineeringLab() {
	const [active, setActive] = (0, import_react.useState)("orbit");
	const [altitude, setAltitude] = (0, import_react.useState)(500);
	const [area, setArea] = (0, import_react.useState)(100);
	const [efficiency, setEfficiency] = (0, import_react.useState)(32);
	const [density, setDensity] = (0, import_react.useState)(220);
	const [temperature, setTemperature] = (0, import_react.useState)(300);
	const fleet = useExperience((state) => state.fleet);
	const setWorldFleet = useExperience((state) => state.setFleet);
	const orbit = (0, import_react.useMemo)(() => orbitAt(altitude), [altitude]);
	const solar = (0, import_react.useMemo)(() => solarAt(area, efficiency / 100), [area, efficiency]);
	const batteryMass = solar.dayMwh * 1e6 / density;
	const thermalKw = 6.12400437252e-7 * temperature ** 4 / 1e3;
	const content = {
		orbit: {
			equation: "v = √(μ/r)   ·   T = 2π√(r³/μ)",
			controls: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parameter, {
				label: "Altitude",
				value: altitude,
				unit: "km",
				min: 200,
				max: 2e3,
				step: 10,
				onChange: setAltitude
			}),
			result: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [orbit.velocity.toFixed(2), " km/s"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [orbit.periodMinutes.toFixed(1), " min"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [orbit.orbitsPerDay.toFixed(1), " orbits/day"] })
			] }),
			visual: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lab-orbit-visual",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EARTH" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [altitude.toLocaleString(), " KM"] })
				]
			})
		},
		solar: {
			equation: "P = A × 1,361 W/m² × η",
			controls: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parameter, {
				label: "Collector area",
				value: area,
				unit: "m²",
				min: 20,
				max: 300,
				step: 5,
				onChange: setArea
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parameter, {
				label: "Efficiency",
				value: efficiency,
				unit: "%",
				min: 15,
				max: 45,
				step: 1,
				onChange: setEfficiency
			})] }),
			result: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [solar.powerKw.toFixed(2), " kW"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [solar.dayMwh.toFixed(3), " MWh/day"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [solar.yearMwh.toFixed(1), " MWh/year"] })
			] }),
			visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lab-energy-visual",
				children: Array.from({ length: 24 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}, index))
			})
		},
		battery: {
			equation: "m = E ÷ ρₑ",
			controls: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parameter, {
				label: "Li-ion density",
				value: density,
				unit: "Wh/kg",
				min: 120,
				max: 500,
				step: 5,
				onChange: setDensity
			}),
			result: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [batteryMass.toFixed(0), " kg"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [(batteryMass / 1e3).toFixed(2), " tonnes"] })] }),
			visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lab-battery-visual",
				children: Array.from({ length: 12 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}, index))
			})
		},
		thermal: {
			equation: "P = εσAT⁴",
			controls: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parameter, {
				label: "Temperature",
				value: temperature,
				unit: "K",
				min: 240,
				max: 360,
				step: 1,
				onChange: setTemperature
			}),
			result: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [thermalKw.toFixed(2), " kW"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ε 0.90 · A 12 m²" })] }),
			visual: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lab-thermal-visual",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { transform: `scaleX(${(temperature - 240) / 120})` } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RADIATIVE HEAT REJECTION" })]
			})
		},
		mass: {
			equation: "mₜ = Σmᵢ   ·   F = ma",
			result: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "8,500 kg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "≈250 kN at 3g" })] }),
			visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lab-mass-visual",
				children: masses.map(([name, mass]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${mass / 47.51}%` } }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [mass.toLocaleString(), " kg"] })
				] }, name))
			})
		},
		fleet: {
			equation: "Eƒ = Eᵤ × N",
			controls: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parameter, {
				label: "Spacecraft",
				value: fleet,
				unit: "units",
				min: 1,
				max: 1e3,
				step: 1,
				onChange: setWorldFleet
			}),
			result: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [(solar.powerKw * fleet / 1e3).toFixed(2), " MW ideal"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [(solar.dayMwh * fleet).toFixed(1), " MWh/day"] })] }),
			visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lab-fleet-visual",
				children: Array.from({ length: 40 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: index < Math.ceil(fleet / 25) ? "active" : "" }, index))
			})
		},
		economics: {
			equation: "$35M + $50M + $135M + $105M",
			result: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "$325M" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "≈$56.8/kWh" })] }),
			visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lab-cost-visual",
				children: [
					["MANUFACTURE", 35],
					["LAUNCH", 50],
					["OPERATIONS", 135],
					["MAINTENANCE", 105]
				].map(([name, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${Number(value) / 1.35}%` } }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
						"$",
						value,
						"M"
					] })
				] }, name))
			})
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "lab-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			value: active,
			onValueChange: (value) => setActive(value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
				className: "lab-tabs",
				"aria-label": "Engineering modules",
				children: Object.keys(MODULES).map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: tab,
					children: tab
				}, tab))
			}), Object.keys(MODULES).map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
				value: tab,
				className: "lab-module",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lab-context",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insight, {
							label: "WHAT IS THIS?",
							children: MODULES[tab].what
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insight, {
							label: "WHY DOES ALTIRYN NEED IT?",
							children: MODULES[tab].why
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lab-workbench",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lab-calculation",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "CALCULATION" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: content[tab].equation }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: MODULES[tab].how }),
									content[tab].controls
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "result-stack",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "LIVE RESULT" }), content[tab].result]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lab-visual",
								children: content[tab].visual
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lab-interpretation",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insight, {
							label: "ENGINEERING INTERPRETATION",
							children: MODULES[tab].meaning
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insight, {
							label: "LIMITATION / ASSUMPTION",
							children: MODULES[tab].limitation
						})]
					})
				]
			}, tab))]
		})
	});
}
var flow = [
	"SUN",
	"PV ARRAY",
	"DC BUS",
	"BATTERY",
	"CAPSULE",
	"EARTH"
];
function Scale({ label, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "science-value",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: note })
		]
	});
}
function ScientificReadout({ chapter }) {
	if (chapter === "question" || chapter === "earth") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "science-readout flux-readout",
		"aria-label": "Solar irradiance comparison",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "ABOVE ATMOSPHERE",
				value: "1,361 W/m²",
				note: "SOLAR CONSTANT REFERENCE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "comparison-axis",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "+36.1%" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "GROUND REFERENCE",
				value: "≈1,000 W/m²",
				note: "SIMPLIFIED ASSUMPTION"
			})
		]
	});
	if (chapter === "orbit") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "science-readout orbit-readout",
		"aria-label": "Orbital mechanics readout",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "orbit-diagram",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "r = 6,871 km" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "ALTITUDE",
				value: "500 km",
				note: "CIRCULAR LEO"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "VELOCITY",
				value: "7.62 km/s",
				note: "v = √(μ/r)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "PERIOD",
				value: "94.5 min",
				note: "≈15 ORBITS / DAY"
			})
		]
	});
	if (chapter === "energy") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "science-readout conversion-readout",
		"aria-label": "Energy conversion chain",
		children: [
			flow.slice(0, 4).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [item, index < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" })] }, item)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "IDEAL DAILY ENERGY",
				value: "1.045 MWh",
				note: "LOSSES EXCLUDED"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "15-YEAR IDEAL TOTAL",
				value: "≈5.72 GWh",
				note: "NO DEGRADATION APPLIED"
			})
		]
	});
	if (chapter === "storage" || chapter === "thermal") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "science-readout storage-readout",
		"aria-label": "Battery and thermal readout",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "battery-cutaway",
				children: Array.from({ length: 12 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "SPECIFIC ENERGY",
				value: "220 Wh/kg",
				note: "ASSUMED LI-ION"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "BATTERY MASS",
				value: "4,751 kg",
				note: "ESTIMATED"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "RADIATOR EXAMPLE",
				value: "≈4.96 kW",
				note: "12 m² · ε 0.90 · 300 K"
			})
		]
	});
	if (chapter === "operations") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "science-readout system-flow",
		"aria-label": "System operations loop",
		children: flow.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: String(index + 1).padStart(2, "0") }), item] }, item))
	});
	if (chapter === "fleet") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "science-readout fleet-readout",
		"aria-label": "Fleet scale readout",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "REFERENCE UNIT",
				value: "1",
				note: "CONCEPTUAL SPACECRAFT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fleet-ruler",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "INFRASTRUCTURE STUDY",
				value: "1,000",
				note: "FUTURE SCALE · NOT DEPLOYED"
			})
		]
	});
	if (chapter === "economics") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "science-readout cost-readout",
		"aria-label": "Estimated lifetime cost",
		children: [
			[
				["MANUFACTURE", 35],
				["LAUNCH", 50],
				["OPERATIONS", 135],
				["MAINTENANCE", 105]
			].map(([name, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { flexGrow: value } }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
					"$",
					value,
					"M"
				] })
			] }, name)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "$325M · ≈$56.8/kWh" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "THESIS ESTIMATE · PRESENTLY DIFFICULT" })
		]
	});
	if (chapter === "risk") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "science-readout risk-matrix",
		"aria-label": "Conceptual risk register",
		children: risks.map((risk, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: index < 4 ? "high" : index < 8 ? "medium" : "low",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: String(index + 1).padStart(2, "0") }), risk]
		}, risk))
	});
	if (chapter === "feasibility") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "science-readout trl-readout",
		"aria-label": "Technology maturity comparison",
		children: [
			["PHOTOVOLTAICS", "ESTABLISHED"],
			["BATTERY MANAGEMENT", "ESTABLISHED"],
			["AUTONOMOUS DOCKING", "PROPOSED INTEGRATION"],
			["BATTERY TRANSPORT", "EXPERIMENTAL"],
			["ORBITAL ENERGY LOGISTICS", "FUTURE"]
		].map(([name, state], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { style: { width: `${25 + index * 14}%` } }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: state })
		] }, name))
	});
	if (chapter === "future") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "science-readout roadmap-readout",
		"aria-label": "Research roadmap",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "NEAR" }), "CAD · SIMULATION · DOCKING TESTS"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "MEDIUM" }), "EXPERIMENTAL SATELLITE · EXCHANGE"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "LONG" }), "CONSTELLATIONS · ROBOTIC SERVICING"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "BEYOND" }), "LUNAR · MARS · ORBITAL INDUSTRY"] })
		]
	});
	if (chapter === "machine") {
		const total = masses.reduce((sum, [, mass]) => sum + mass, 0);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "science-readout mass-readout",
			"aria-label": "Spacecraft mass composition",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
				label: "REFERENCE MASS",
				value: `${total.toLocaleString()} kg`,
				note: "CONCEPTUAL BREAKDOWN"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: masses.slice(0, 5).map(([name, mass]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${mass / 52}%` } }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: mass.toLocaleString() })
			] }, name)) })]
		});
	}
	return null;
}
var architecture = [
	"SOLAR GENERATION",
	"MODULAR BATTERY",
	"AUTONOMOUS EXCHANGE",
	"RETURN CAPSULE",
	"EARTH RECOVERY",
	"ENERGY EXTRACTION",
	"REFURBISHMENT",
	"RELAUNCH",
	"ORBIT"
];
var layers = [
	["ORBITAL", "Solar satellites · batteries · control · docking · navigation · thermal · communications"],
	["LOGISTICS", "Return capsules · battery exchange · rendezvous · reusable launches"],
	["EARTH", "Recovery · extraction · inspection · refurbishment · launch preparation · mission control"],
	["INTELLIGENCE", "Health monitoring · prediction · optimization · navigation · faults · fleet coordination"],
	["ENGINEERING / BUSINESS", "Mass · energy · thermal · reliability · cost · scalability · risk · feasibility"]
];
var domains = [
	["AEROSPACE", "Structure · orbit · thermal · radiation · navigation · communications · launch"],
	["ENERGY", "Photovoltaics · conversion · batteries · extraction · efficiency"],
	["ROBOTICS", "Rendezvous · docking · servicing · fault response"],
	["AI / COMPUTATION", "Monitoring · prediction · optimization · decisions · coordination"],
	["LOGISTICS", "Battery movement · recovery · refurbishment · orbital transfer"],
	["SYSTEMS", "Interfaces · dependencies · failure modes · operations · scalability"],
	["ECONOMICS", "Manufacturing · launch · operations · maintenance · cost per energy"],
	["RISK / SAFETY", "Debris · radiation · battery · docking · launch · thermal · communications · AI"]
];
var network = [
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
	["FUTURE TECHNOLOGY", "future"]
];
function ArchitectureLoop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "architecture-loop",
		"aria-label": "ALTIRYN physical battery-return architecture",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "legacy-path",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TRADITIONAL CONCEPT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "SOLAR GENERATION → WIRELESS TRANSMISSION → EARTH RECEIVER" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "return-path",
			children: architecture.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: String(index + 1).padStart(2, "0") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: item }),
				index < architecture.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })
			] }, item))
		})]
	});
}
function EcosystemLayers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ecosystem-layers",
		children: layers.map(([title, text], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: String(index + 1).padStart(2, "0") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })
		] }, title))
	});
}
function SystemsMatrix() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "systems-matrix",
		children: domains.map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text })] }, title))
	});
}
function ThesisNetwork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "thesis-network",
		"aria-label": "Interactive thesis domain map",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "network-core",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ALTIRYN" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "INTEGRATED SYSTEM" })]
		}), network.map(([label, target], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			style: { "--node-index": index },
			onClick: () => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }),
			children: label
		}, label))]
	});
}
function MinuteSequence() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "minute-sequence",
		children: [
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
			"ORBIT"
		].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: item })] }, item))
	});
}
var briefs = {
	question: {
		what: "A comparison between orbital and ground-level solar collection.",
		why: "It establishes why moving collection above the atmosphere is worth studying.",
		how: "The thesis compares the 1,361 W/m² solar constant with a simplified 1,000 W/m² ground reference.",
		assumption: "The ground value is a reference, not a location-specific yield model.",
		limitation: "The comparison excludes weather, latitude, seasons and total system efficiency."
	},
	earth: {
		what: "The energy environment on either side of the atmosphere.",
		why: "Atmospheric attenuation and intermittency affect terrestrial collection.",
		how: "The reference difference is (1,361−1,000)÷1,000 = 36.1%.",
		assumption: "Both values are treated as simplified irradiance references.",
		limitation: "Higher incident flux does not prove higher delivered energy after orbital logistics."
	},
	orbit: {
		what: "A 500 km circular low-Earth-orbit reference.",
		why: "Orbit determines speed, period, illumination, access and rendezvous windows.",
		how: "Two-body equations produce 7.62 km/s and a 94.5-minute period.",
		assumption: "Earth is treated as a point mass and the orbit as circular.",
		limitation: "No perturbation, station-keeping or optimized trajectory design is included."
	},
	machine: {
		what: "An 8,500 kg conceptual serviceable spacecraft architecture.",
		why: "Generation, storage and exchange only work when supporting subsystems operate together.",
		how: "Structure integrates arrays, battery racks, avionics, thermal control, navigation, communications and docking.",
		assumption: "Geometry communicates subsystem relationships rather than flight-qualified dimensions.",
		limitation: "No full structural analysis, detailed load cases or hardware qualification exists."
	},
	energy: {
		what: "An ideal photovoltaic generation estimate.",
		why: "Generated power determines battery charging time and system throughput.",
		how: "100 m² × 1,361 W/m² × 32% = 43.55 kW.",
		assumption: "Continuous illumination and constant conversion efficiency.",
		limitation: "Eclipses, pointing, wiring, conversion, thermal and degradation losses are excluded."
	},
	storage: {
		what: "One ideal day of generated energy stored in lithium-ion modules.",
		why: "The battery is the physical energy payload returned to Earth.",
		how: "1.045 MWh ÷ 220 Wh/kg = approximately 4,751 kg.",
		assumption: "220 Wh/kg is used as a conceptual pack-level reference.",
		limitation: "Containment, reserve capacity, aging, BMS and cooling can increase real mass."
	},
	thermal: {
		what: "Heat rejection and radiation exposure in the orbital environment.",
		why: "Vacuum removes convective cooling while batteries and electronics still produce heat.",
		how: "P = εσAT⁴ gives about 4.96 kW for 12 m², ε 0.90 and 300 K.",
		assumption: "Uniform temperature and emissivity in a first-order radiation example.",
		limitation: "No full thermal network, CFD, transient cycling or detailed radiation analysis."
	},
	return: {
		what: "A reusable physical battery exchange and return loop.",
		why: "It is ALTIRYN’s alternative to wireless energy transmission.",
		how: "Charge, transfer, re-entry, recovery, extraction, refurbishment, launch and docking repeat as one cycle.",
		assumption: "Autonomous servicing and reusable logistics can eventually meet the required cadence.",
		limitation: "Modular orbital battery transport remains experimental and unvalidated."
	},
	intelligence: {
		what: "A proposed autonomy layer joining sensors, models and spacecraft actions.",
		why: "Continuous fleet operations and docking cannot depend on constant manual control.",
		how: "Telemetry feeds health monitoring, prediction, optimization, navigation, fault detection and coordination.",
		assumption: "Algorithms can be verified with safe boundaries and degraded modes.",
		limitation: "The interface is simulated; it is not evidence of trained or flight-validated AI."
	},
	operations: {
		what: "The complete ground-to-orbit operating lifecycle.",
		why: "Energy delivery depends on recovery and relaunch as much as collection.",
		how: "Manufacture, test, launch, commission, exchange, recover, extract, inspect and refurbish form one chain.",
		assumption: "Reusable assets can sustain repeat operations.",
		limitation: "No commercial rollout plan, launch manifest or demonstrated turnaround exists."
	},
	fleet: {
		what: "A future infrastructure-scale constellation study.",
		why: "A single spacecraft cannot establish utility-scale throughput or redundancy.",
		how: "Ideal unit output scales arithmetically while coordination and logistics grow more complex.",
		assumption: "Common vehicles and interoperable servicing can support a fleet.",
		limitation: "The 1,000-unit view is a scale thought experiment, not a deployment plan."
	},
	economics: {
		what: "A conceptual lifetime cost estimate.",
		why: "Delivered energy must compete with terrestrial systems, not only function technically.",
		how: "Manufacturing, launch, operations and maintenance total approximately $325M.",
		assumption: "The thesis cost categories and 15-year ideal energy estimate are used.",
		limitation: "Values are not vendor quotes, audited forecasts or guaranteed economics."
	},
	risk: {
		what: "An interacting register of technical, operational and economic hazards.",
		why: "Failure in one subsystem can propagate across the energy and logistics chain.",
		how: "Redundancy, isolation, aborts, shielding, monitoring and inspection are proposed mitigations.",
		assumption: "Mitigation concepts can reduce—but never remove—exposure.",
		limitation: "No full probabilistic safety assessment or experimental validation is included."
	},
	feasibility: {
		what: "A comparison of mature enabling technology and unresolved integration.",
		why: "Independent maturity does not guarantee a viable combined architecture.",
		how: "PV, BMS and navigation are mature; battery transport and orbital energy logistics are not.",
		assumption: "Existing technologies can be adapted to compatible interfaces.",
		limitation: "Integration, scaling, testing and economics remain open research problems."
	},
	future: {
		what: "A staged research path from models to demonstrations.",
		why: "The largest uncertainties should be retired before fleet-scale commitments.",
		how: "CAD and simulation precede docking tests, experimental exchange and any constellation study.",
		assumption: "Each phase advances only after evidence supports the next.",
		limitation: "Roadmap stages are research priorities, not dates or commitments."
	}
};
function ChapterBrief({ id, fallback }) {
	const brief = briefs[id];
	if (!brief) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: fallback });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "chapter-brief",
		children: [
			["WHAT", brief.what],
			["WHY", brief.why],
			["HOW", brief.how],
			["ASSUMPTION", brief.assumption],
			["LIMITATION", brief.limitation]
		].map(([label, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })] }, label))
	});
}
/** Systems explorer: spacecraft subsystems + macro scenes.
*  Each entry includes metadata so users understand what they're navigating to
*  before clicking. */
var SYSTEM_ENTRIES = [
	{
		id: "system",
		label: "SYSTEM OVERVIEW",
		category: "MISSION",
		why: "The integrated architecture",
		targetChapter: "ecosystem"
	},
	{
		id: "satellite",
		label: "SATELLITE",
		category: "SPACECRAFT",
		why: "8,500 kg modular vehicle",
		targetChapter: "machine"
	},
	{
		id: "solar",
		label: "SOLAR",
		category: "GENERATION",
		why: "100 m² photovoltaic wings",
		targetChapter: "machine",
		subsystem: "solar"
	},
	{
		id: "battery",
		label: "BATTERY",
		category: "STORAGE",
		why: "4,751 kg exchangeable modules",
		targetChapter: "machine",
		subsystem: "battery"
	},
	{
		id: "ai",
		label: "AI / CONTROL",
		category: "AUTONOMY",
		why: "Health, optimization, navigation",
		targetChapter: "machine",
		subsystem: "control"
	},
	{
		id: "docking",
		label: "DOCKING",
		category: "LOGISTICS",
		why: "Autonomous battery exchange",
		targetChapter: "machine",
		subsystem: "docking"
	},
	{
		id: "thermal",
		label: "THERMAL",
		category: "CONTROL",
		why: "Radiative heat rejection",
		targetChapter: "machine",
		subsystem: "thermal"
	},
	{
		id: "comms",
		label: "COMMUNICATIONS",
		category: "OPERATIONS",
		why: "Ground + orbital telemetry",
		targetChapter: "machine",
		subsystem: "comms"
	},
	{
		id: "navigation",
		label: "NAVIGATION",
		category: "OPERATIONS",
		why: "Attitude + rendezvous control",
		targetChapter: "machine",
		subsystem: "navigation"
	},
	{
		id: "return-capsule",
		label: "RETURN CAPSULE",
		category: "LOGISTICS",
		why: "Re-entry + ground recovery",
		targetChapter: "return"
	},
	{
		id: "ground",
		label: "GROUND INFRASTRUCTURE",
		category: "OPERATIONS",
		why: "Launch + recovery + refurbishment",
		targetChapter: "operations"
	},
	{
		id: "fleet",
		label: "FLEET",
		category: "SCALING",
		why: "1 → 1,000 spacecraft",
		targetChapter: "fleet"
	}
];
function goToChapter(id) {
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
function Sidebar({ open, onClose }) {
	const chapter = useExperience((state) => state.chapter);
	const progress = useExperience((state) => state.progress);
	const [mode, setMode] = (0, import_react.useState)("chapters");
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const currentChapter = chapters[chapter];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `side-nav ${open ? "is-open" : ""} ${expanded ? "is-expanded" : ""}`,
		"aria-label": "Thesis navigator",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "side-nav-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "side-nav-toggle",
					onClick: () => setExpanded(!expanded),
					"aria-label": "Toggle sidebar expansion",
					title: expanded ? "Collapse" : "Expand",
					children: expanded ? "▼" : "▶"
				}), expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "side-nav-tabs",
					role: "tablist",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						role: "tab",
						"aria-selected": mode === "chapters",
						className: mode === "chapters" ? "active" : "",
						onClick: () => setMode("chapters"),
						children: "CHAPTERS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						role: "tab",
						"aria-selected": mode === "systems",
						className: mode === "systems" ? "active" : "",
						onClick: () => setMode("systems"),
						children: "SYSTEMS"
					})]
				})]
			}),
			expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "side-nav-context",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "context-chapter",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "context-number",
							children: currentChapter.number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "context-title",
							children: currentChapter.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "context-status",
							children: currentChapter.status
						}),
						currentChapter.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "context-summary",
							children: currentChapter.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "context-progress",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "progress-bar",
								style: { width: `${Math.max(4, Math.min(100, progress * 100))}%` }
							})
						})
					]
				})
			}),
			mode === "chapters" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "side-nav-list",
				"aria-label": "Thesis chapters",
				children: chapters.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: index === chapter ? "active" : "",
					onClick: () => {
						goToChapter(item.id);
						onClose();
					},
					title: expanded ? void 0 : item.title,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "side-nav-number",
							children: item.number
						}),
						expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "side-nav-title",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "side-nav-status",
							children: item.status
						})] }),
						index === chapter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "side-nav-progress",
							style: { transform: `scaleX(${Math.max(.04, progress)})` }
						})
					]
				}, item.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "side-nav-list",
				"aria-label": "Spacecraft and mission systems",
				children: SYSTEM_ENTRIES.map((entry) => {
					const system = entry.subsystem ? subsystems.find((item) => item.id === entry.subsystem) : void 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							if (entry.subsystem) useExperience.getState().select(entry.subsystem);
							goToChapter(entry.targetChapter);
							onClose();
						},
						title: expanded ? void 0 : entry.label,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "side-nav-dot",
							style: system ? { background: system.color } : void 0
						}), expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "side-nav-system-info",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "side-nav-title",
								children: entry.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "side-nav-category",
								children: entry.category
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "side-nav-why",
							children: entry.why
						})] })]
					}, entry.id);
				})
			})
		]
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sidebar-overlay",
		onClick: onClose
	})] });
}
var cycleStates = [
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
	"ONLINE"
];
var chapterSides = {
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
	conclusion: "center"
};
function SidebarToggle({ open, onToggle }) {
	const chapter = useExperience((state) => state.chapter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		size: "icon",
		"aria-label": "Open mission navigator",
		className: "mission-toggle",
		onClick: onToggle,
		children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "index-mark",
			children: String(chapter).padStart(2, "0")
		})
	});
}
function KnowledgeSearch({ open, onToggle, onClose }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => searchThesis(query), [query]);
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (open && inputRef.current) inputRef.current.focus();
	}, [open]);
	const resultsByTag = (0, import_react.useMemo)(() => {
		const grouped = {};
		results.forEach((r) => {
			if (!grouped[r.tag]) grouped[r.tag] = [];
			grouped[r.tag].push(r);
		});
		return grouped;
	}, [results]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: open ? "search-shell open" : "search-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				"aria-label": "Search thesis",
				onClick: onToggle,
				children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {})
			}),
			!open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
				className: "search-kbd",
				children: "⌘K"
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "search-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "search-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "thesis-search",
						children: "THESIS KNOWLEDGE INDEX"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						id: "thesis-search",
						autoFocus: true,
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Orbit, battery, 7.62 km/s, docking…",
						spellCheck: false
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "search-content",
					children: [
						query && results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "search-empty",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No matches found" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Try searching for chapters, subsystems, equations or key figures." })]
						}),
						query && results.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "search-results",
							children: Object.entries(resultsByTag).map(([tag, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "search-section",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "search-tag",
									children: tag
								}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "search-result",
									onClick: () => {
										if (item.subsystem) useExperience.getState().select(item.subsystem);
										document.getElementById(item.targetChapter)?.scrollIntoView({ behavior: "smooth" });
										onClose();
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.description })]
								}, item.id))]
							}, tag))
						}),
						!query && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "search-suggestions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "search-hint",
									children: "Popular searches:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "suggestions-grid",
									children: [
										{
											query: "SBSP",
											label: "Space-based solar power"
										},
										{
											query: "7.62 km/s",
											label: "Orbital velocity"
										},
										{
											query: "docking",
											label: "Autonomous exchange"
										},
										{
											query: "battery return",
											label: "The defining difference"
										},
										{
											query: "feasibility",
											label: "Technology readiness"
										},
										{
											query: "fleet",
											label: "Scaling to 1,000 units"
										}
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "suggestion",
										onClick: () => setQuery(item.query),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.query }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.label })]
									}, item.query))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "search-hint",
									style: { marginTop: "16px" },
									children: "Search chapters, subsystems, equations and key figures from the thesis."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "search-hints",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "⌘K" }),
										" or ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "/" }),
										" to open this panel"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "ESC" }), " to close"] })]
								})
							]
						})
					]
				})]
			})
		]
	});
}
function MachinePanel() {
	const selected = useExperience((state) => state.selected);
	const exploded = useExperience((state) => state.exploded);
	const system = subsystems.find((item) => item.id === selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "machine-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "machine-tools",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: () => useExperience.getState().toggleExploded(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, {}), exploded ? "ASSEMBLE" : "EXPLODE"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				"aria-label": "Reset spacecraft",
				onClick: () => useExperience.getState().resetMachine(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {})
			})]
		}), system ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "system-detail",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "SELECTED SUBSYSTEM"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: system.label }),
				[
					["WHAT IT IS", system.what],
					["WHAT IT DOES", system.does],
					["WHY IT EXISTS", system.why],
					["ENGINEERING CHALLENGE", system.challenge]
				].map(([title, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy })] }, title))
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "system-detail quiet",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "SPACECRAFT EXPLORER"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Rotate · zoom · pan" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Select any colored subsystem to inspect its engineering role." })
			]
		})]
	});
}
function CycleControl() {
	const cycle = useExperience((state) => state.cycle);
	const timer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => () => {
		if (timer.current !== null) window.clearInterval(timer.current);
	}, []);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cycle-control",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			onClick: run,
			children: [cycle >= 0 && cycle < 10 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), cycle >= 0 && cycle < 10 ? "STOP CYCLE" : "RUN SYSTEM CYCLE"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cycle-track",
			children: cycleStates.map((state, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: index <= cycle ? "active" : "",
				children: state
			}, state))
		})]
	});
}
function DockingTelemetry() {
	const cycle = useExperience((state) => state.cycle);
	const phase = cycle < 0 ? 8 : cycle;
	const distance = [
		0,
		0,
		12.4,
		480,
		0,
		0,
		0,
		90,
		240,
		6.2,
		0
	][Math.min(phase, 10)] ?? 240;
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
		"ONLINE"
	][Math.min(phase, 10)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "telemetry",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "SIMULATED TELEMETRY"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "RANGE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [distance.toFixed(1), " m"] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "REL. VELOCITY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [(distance > 20 ? 1.4 : distance * .02).toFixed(2), " m/s"] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "ALIGNMENT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [(distance > 20 ? 2.4 : .2).toFixed(1), "°"] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "STATE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "live",
				children: status
			})] })
		] })]
	});
}
function EnergyMath() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "equation",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100 m²" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "×" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1361 W/m²" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "×" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "32%" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "=" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "43.55 kW" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "IDEALIZED · CONTINUOUS OUTPUT ASSUMPTION" })
		]
	});
}
function BatteryMath() {
	const cycle = useExperience((state) => state.cycle);
	const charge = cycle < 0 ? 1 : Math.min(1, .15 + cycle * .22);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "equation",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1.045 MWh" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "÷" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "220 Wh/kg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "=" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "4,751 kg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "charge-rail",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { transform: `scaleX(${charge})` } })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [Math.round(charge * 100), "% STATE OF CHARGE · SIMULATED BMS"] })
		]
	});
}
function PartReadout() {
	const hovered = useExperience((state) => state.hovered);
	const selected = useExperience((state) => state.selected);
	const chapterId = chapters[useExperience((state) => state.chapter)]?.id;
	const id = hovered ?? selected;
	const system = subsystems.find((item) => item.id === id);
	if (!system || ![
		"orbit",
		"machine",
		"energy",
		"storage",
		"thermal",
		"return",
		"intelligence"
	].includes(chapterId ?? "")) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "part-readout",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: system.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hovered && !selected ? "CLICK TO INSPECT" : "SELECTED" })]
	});
}
function Overlay() {
	const chapter = useExperience((state) => state.chapter);
	const chapterId = chapters[chapter]?.id ?? "origin";
	const [activePanel, setActivePanel] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const handler = (event) => {
			if (event.key === "Escape") {
				setActivePanel(null);
				return;
			}
			const target = event.target;
			const typing = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
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
	(0, import_react.useEffect)(() => {
		gsapWithCSS.registerPlugin(ScrollTrigger);
		let lenis = null;
		let tickerFn = null;
		let cancelled = false;
		import("../_libs/lenis.mjs").then((n) => n.t).then(({ default: Lenis }) => {
			if (cancelled) return;
			const instance = new Lenis({
				duration: 1.15,
				smoothWheel: true
			});
			instance.on("scroll", ScrollTrigger.update);
			tickerFn = (time) => instance.raf(time * 1e3);
			gsapWithCSS.ticker.add(tickerFn);
			gsapWithCSS.ticker.lagSmoothing(0);
			lenis = instance;
		});
		const elements = chapters.map((item) => document.getElementById(item.id)).filter((element) => Boolean(element));
		const triggers = elements.map((element, index) => ScrollTrigger.create({
			trigger: element,
			start: "top center",
			end: "bottom center",
			onEnter: () => {
				useExperience.getState().setChapter(index);
				useExperience.getState().setChapterProgress(0);
			},
			onEnterBack: () => useExperience.getState().setChapter(index),
			onUpdate: (self) => {
				if (self.isActive && useExperience.getState().chapter === index) useExperience.getState().setChapterProgress(self.progress);
			}
		}));
		const reveals = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [] : elements.map((element) => {
			const copy = element.querySelectorAll(".chapter-copy > *");
			return gsapWithCSS.fromTo(copy, {
				y: 44,
				opacity: 0,
				filter: "blur(6px)"
			}, {
				y: 0,
				opacity: 1,
				filter: "blur(0px)",
				duration: 1.05,
				stagger: .075,
				ease: "expo.out",
				scrollTrigger: {
					trigger: element,
					start: "top 78%",
					once: true
				}
			});
		});
		const progressTrigger = ScrollTrigger.create({
			start: 0,
			end: "max",
			onUpdate: (self) => useExperience.getState().setProgress(self.progress)
		});
		return () => {
			cancelled = true;
			triggers.forEach((trigger) => trigger.kill());
			reveals.forEach((tween) => tween.scrollTrigger?.kill());
			progressTrigger.kill();
			if (tickerFn) gsapWithCSS.ticker.remove(tickerFn);
			lenis?.destroy();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: `topbar active-chapter-${chapterId}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#origin",
				className: "wordmark",
				children: ["ALTIRYN ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "— MADE BY TES" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "concept-tag",
					children: "CONCEPTUAL STUDY · REV 1.0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeSearch, {
					open: activePanel === "search",
					onToggle: () => setActivePanel(activePanel === "search" ? null : "search"),
					onClose: () => setActivePanel(null)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarToggle, {
					open: activePanel === "index",
					onToggle: () => setActivePanel(activePanel === "index" ? null : "index")
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {
			open: activePanel === "index",
			onClose: () => setActivePanel(null)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "story",
			children: chapters.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: item.id,
				className: `chapter chapter-${item.id} chapter-side-${chapterSides[item.id] ?? "left"}`,
				"aria-labelledby": `${item.id}-title`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "chapter-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "chapter-number",
								children: [
									item.number,
									" / ",
									item.status
								]
							}),
							index === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "opening-credit",
								children: "TEJES J · REVISION 1.0 — JUNE 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								id: `${item.id}-title`,
								children: item.title === "Origin" ? "ALTIRYN" : item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: item.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "summary",
								children: item.summary
							}),
							item.metric && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "chapter-metric",
								children: item.metric
							}),
							item.id === "energy" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnergyMath, {}),
							item.id === "storage" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatteryMath, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: "ENTER THE ENGINEERING" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterBrief, {
								id: item.id,
								fallback: item.detail
							})] })
						]
					}),
					item.id === "architecture" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureLoop, {}),
					item.id === "ecosystem" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcosystemLayers, {}),
					item.id === "systems" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemsMatrix, {}),
					item.id === "coverage" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThesisNetwork, {}),
					item.id === "minute" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MinuteSequence, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScientificReadout, { chapter: item.id }),
					item.id === "machine" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MachinePanel, {}),
					item.id === "return" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CycleControl, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DockingTelemetry, {})] }),
					item.id === "intelligence" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ai-flow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SENSORS" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "↓" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TELEMETRY" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "↓" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI ANALYSIS" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "↓" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DECISION" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "↓" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ACTION" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "SIMULATED" })
						]
					}),
					item.id === "engineering" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EngineeringLab, {}),
					item.id === "conclusion" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "credits",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ALTIRYN" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CONCEPTUAL ENGINEERING STUDY" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "MADE BY TES" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "credits-rule" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TEJES J" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "REVISION 1.0 · JUNE 2026" })
						]
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartReadout, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "progress-rail",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { transform: `scaleY(${(chapter + 1) / chapters.length})` } })
		})
	] });
}
function AltirynExperience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "altiryn-experience",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(World, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {})]
	});
}
var SplitComponent = AltirynExperience;
//#endregion
export { SplitComponent as component };
