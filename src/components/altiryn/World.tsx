import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  OrbitControls,
  PerformanceMonitor,
  Stars,
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useExperience } from "@/stores/experience";
import { Earth } from "./three/Earth";
import { Spacecraft } from "./three/Spacecraft";
import { ReturnCapsule } from "./three/Capsule";
import { Photons } from "./three/Photons";
import { STATUS_AMBER } from "./three/materials";
import { CameraRig } from "./three/CameraRig";
import { EARTH_POSITION, EARTH_RADIUS, SUN_POS } from "./three/constants";
import { chapters } from "@/lib/altiryn";

/** Orbital track + constellation, instanced so a 1,000-satellite fleet stays cheap. */
function OrbitTrack({ quality }: { quality: "high" | "low" }) {
  const group = useRef<THREE.Group>(null);
  const instances = useRef<THREE.InstancedMesh>(null);
  const chapter = useExperience((state) => state.chapter);
  const fleet = useExperience((state) => state.fleet);
  const chapterId = chapters[chapter]?.id;
  const max = quality === "high" ? 260 : 120;
  const count = chapterId === "fleet" ? max : Math.max(1, Math.min(fleet, max));

  const track = useMemo(() => {
    const curve = new THREE.EllipseCurve(
      0,
      0,
      EARTH_RADIUS * 1.62,
      EARTH_RADIUS * 1.62,
      0,
      Math.PI * 2,
    );
    const points = curve.getPoints(160).map((point) => new THREE.Vector3(point.x, 0, point.y));
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (!visible) return;
    const dt = Math.min(delta, 0.05);
    if (group.current) group.current.rotation.y += dt * 0.02;
    if (!instances.current) return;
    const radius = EARTH_RADIUS * 1.62;
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 2 + state.clock.elapsedTime * 0.05;
      const tilt = Math.sin(i * 2.4) * 0.9;
      dummy.position.set(Math.cos(angle) * radius, tilt, Math.sin(angle) * radius);
      dummy.rotation.set(0, -angle, 0);
      dummy.scale.setScalar(0.14);
      dummy.updateMatrix();
      instances.current.setMatrixAt(i, dummy.matrix);
    }
    instances.current.count = count;
    instances.current.instanceMatrix.needsUpdate = true;
  });

  const visible =
    chapterId === "orbit" ||
    ["operations", "fleet", "economics", "risk", "feasibility", "future", "conclusion"].includes(
      chapterId ?? "",
    );

  return (
    <group ref={group} position={EARTH_POSITION} rotation={[0.36, 0, -0.2]} visible={visible}>
      <line>
        <primitive object={track} attach="geometry" />
        <lineBasicMaterial color="#5f93a6" transparent opacity={0.28} />
      </line>
      <instancedMesh ref={instances} args={[undefined, undefined, max]} frustumCulled={false}>
        <boxGeometry args={[2.4, 0.5, 0.7]} />
        <meshStandardMaterial
          color="#c9ccd0"
          metalness={0.9}
          roughness={0.3}
          emissive="#2a3c48"
          emissiveIntensity={0.5}
        />
      </instancedMesh>
    </group>
  );
}

/** Ground infrastructure that the recovered battery moves through. */
function GroundLoop() {
  const chapter = useExperience((state) => state.chapter);
  const chapterId = chapters[chapter]?.id;
  const group = useRef<THREE.Group>(null);
  const visible = ["return", "intelligence", "operations"].includes(chapterId ?? "");
  const stations = ["recovery", "extraction", "inspection", "refurbishment", "launch"];
  useFrame((_, delta) => {
    if (!group.current) return;
    const target = chapterId === "operations" ? 1 : 0.001;
    const scale = THREE.MathUtils.lerp(
      group.current.scale.x,
      target,
      1 - Math.exp(-2.8 * Math.min(delta, 0.05)),
    );
    group.current.scale.setScalar(scale);
  });
  return (
    <group
      ref={group}
      position={[0.3, -3.7, 1.2]}
      rotation={[0, -0.22, 0]}
      visible={visible}
      scale={0.001}
    >
      {stations.map((station, index) => (
        <group key={station} position={[(index - 2) * 0.62, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.42, 0.12, 0.42]} />
            <meshStandardMaterial color="#3b4247" metalness={0.7} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.13, 0]}>
            <boxGeometry args={[0.2, 0.14, 0.2]} />
            <meshStandardMaterial color="#8d959b" metalness={0.9} roughness={0.28} />
          </mesh>
          <mesh position={[0, 0.24, 0]}>
            <boxGeometry args={[0.05, 0.02, 0.05]} />
            <meshStandardMaterial
              color={STATUS_AMBER}
              emissive={STATUS_AMBER}
              emissiveIntensity={2.5}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}
      <mesh position={[0, -0.08, 0]}>
        <boxGeometry args={[3.4, 0.03, 0.7]} />
        <meshStandardMaterial color="#22282c" metalness={0.4} roughness={0.8} />
      </mesh>
    </group>
  );
}

function SceneContent({ quality }: { quality: "high" | "low" }) {
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
    "intelligence",
  ].includes(chapterId ?? "");
  const deploy = ["energy", "storage", "thermal", "return", "intelligence"].includes(
    chapterId ?? "",
  )
    ? 1
    : 0.18;
  const charge =
    cycle < 0
      ? ["storage", "thermal", "return", "intelligence"].includes(chapterId ?? "")
        ? 1
        : chapterId === "energy"
          ? 0.55
          : 0.2
      : Math.min(1, 0.15 + cycle * 0.22);

  return (
    <>
      <color attach="background" args={["#020406"]} />
      <ambientLight intensity={0.34} color="#8fb4d6" />
      <Environment resolution={128} frames={1}>
        <Lightformer intensity={2.1} color="#fff2d6" position={[-6, 4, 6]} scale={[12, 12, 1]} />
        <Lightformer
          intensity={0.5}
          color="#4f7fa8"
          position={[7, -2, -4]}
          rotation-y={Math.PI / 2}
          scale={[16, 6, 1]}
        />
        <Lightformer
          intensity={0.35}
          color="#9fb8c9"
          position={[0, -8, 2]}
          rotation-x={Math.PI / 2}
          scale={[14, 14, 1]}
        />
      </Environment>
      <directionalLight
        position={SUN_POS.toArray()}
        intensity={4.2}
        color="#fff4d8"
        castShadow={quality === "high"}
      />
      {quality === "high" && (
        <directionalLight position={[6, -4, -8]} intensity={0.6} color="#4d7fa6" />
      )}
      {quality === "high" && (
        <directionalLight position={[2, 3, 12]} intensity={0.7} color="#cfe2f2" />
      )}
      {quality === "high" && (
        <pointLight position={[0, -3, 4]} intensity={6} color="#2f5f7d" distance={22} />
      )}
      <Stars
        radius={130}
        depth={70}
        count={quality === "high" ? 5200 : 2200}
        factor={3.4}
        saturation={0}
        fade
        speed={0.4}
      />
      <Earth quality={quality} />
      <OrbitTrack quality={quality} />
      <Spacecraft visible={spacecraftVisible} deploy={deploy} charge={charge} />
      <Photons active={["machine", "energy", "storage"].includes(chapterId ?? "")} flow={1} />
      <ReturnCapsule />
      <GroundLoop />
      <CameraRig />
      <OrbitControls
        enabled={chapterId === "machine"}
        enableDamping
        dampingFactor={0.07}
        enablePan
        enableZoom={false}
        minDistance={2.4}
        maxDistance={14}
      />
    </>
  );
}

export function World() {
  const [quality, setQuality] = useState<"high" | "low">("high");
  const [dpr, setDpr] = useState<number>(1.7);

  useEffect(() => {
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

  return (
    <div className="world-canvas fixed inset-0 z-0">
      <Canvas
        dpr={[1, dpr]}
        camera={{ position: [0.4, 0.6, 19], fov: 42, near: 0.1, far: 400 }}
        gl={{ antialias: quality === "high", powerPreference: "high-performance" }}
        onPointerMissed={() => useExperience.getState().select(null)}
      >
        {/* Steps DPR down when frame time regresses (weak GPUs, thermal throttling,
            background tabs regaining focus) and back up once the device recovers,
            without ever fighting the media-query quality tier above. */}
        <PerformanceMonitor
          bounds={() => [30, 58]}
          onDecline={() => setDpr((current) => Math.max(1, +(current - 0.3).toFixed(2)))}
          onIncline={() =>
            setDpr((current) => Math.min(quality === "high" ? 1.7 : 1.2, +(current + 0.15).toFixed(2)))
          }
        />
        <Suspense fallback={null}>
          <SceneContent quality={quality} />
        </Suspense>
      </Canvas>
    </div>
  );
}
