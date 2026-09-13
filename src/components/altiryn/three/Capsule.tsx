import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MAT, STATUS_CYAN } from "./materials";
import { useExperience } from "@/stores/experience";
import { chapters } from "@/lib/altiryn";

/** Cycle-state → world position + heat load for the return capsule. */
const STATE_TRACK: { position: [number, number, number]; heat: number; spin: number }[] = [
  { position: [0, 0, 2.65], heat: 0, spin: 0.05 }, // CHARGE (docked)
  { position: [0, 0, 2.65], heat: 0, spin: 0.05 }, // TRANSFER
  { position: [0.2, -0.7, 4.6], heat: 0, spin: 0.35 }, // SEPARATE
  { position: [0.9, -3.1, 3.1], heat: 1, spin: 0.5 }, // RE-ENTER
  { position: [1.25, -4.35, 2.3], heat: 0.25, spin: 0.12 }, // RECOVER
  { position: [1.25, -4.35, 2.3], heat: 0, spin: 0.08 }, // EXTRACT
  { position: [1.25, -4.35, 2.3], heat: 0, spin: 0.08 }, // REFURBISH
  { position: [0.9, -2.4, 3.4], heat: 0.4, spin: 0.3 }, // LAUNCH
  { position: [2.4, -0.6, 6.2], heat: 0, spin: 0.2 }, // RENDEZVOUS
  { position: [0.4, -0.1, 3.3], heat: 0, spin: 0.06 }, // DOCK
  { position: [0, 0, 2.65], heat: 0, spin: 0.04 }, // ONLINE
];

export function ReturnCapsule() {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const plasma = useRef<THREE.Mesh>(null);
  const cycle = useExperience((state) => state.cycle);
  const chapter = useExperience((state) => state.chapter);
  const chapterId = chapters[chapter]?.id;
  const target = useMemo(() => new THREE.Vector3(2.4, -0.6, 6.2), []);
  const heat = useRef(0);

  const visible =
    ["thermal", "return", "intelligence", "operations"].includes(chapterId ?? "") || cycle >= 0;

  useFrame((state, delta) => {
    if (!group.current || !visible) return;
    const dt = Math.min(delta, 0.05);
    const entry = STATE_TRACK[cycle < 0 ? 8 : Math.min(cycle, STATE_TRACK.length - 1)]!;
    target.set(...entry.position);
    if (cycle < 0) {
      // idle rendezvous drift while the chapter is read
      const t = state.clock.elapsedTime * 0.25;
      target.x += Math.sin(t) * 0.5;
      target.y += Math.cos(t * 0.8) * 0.25;
    }
    group.current.position.lerp(target, 1 - Math.exp(-1.5 * dt));
    group.current.rotation.y += dt * entry.spin;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      entry.heat > 0.5 ? -0.7 : 0,
      1 - Math.exp(-2 * dt),
    );

    heat.current += (entry.heat - heat.current) * (1 - Math.exp(-2.4 * dt));
    const shellMaterial = shell.current?.material as THREE.MeshStandardMaterial | undefined;
    if (shellMaterial) {
      shellMaterial.emissiveIntensity = heat.current * 3.4;
      shellMaterial.emissive.setRGB(1, 0.34 + heat.current * 0.12, 0.12);
    }
    if (plasma.current) {
      const plasmaMaterial = plasma.current.material as THREE.MeshBasicMaterial;
      plasmaMaterial.opacity = heat.current * 0.55;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 12) * 0.04;
      plasma.current.scale.setScalar(heat.current * 1.35 * pulse + 0.001);
    }
  });

  return (
    <group ref={group} visible={visible} position={[2.4, -0.6, 6.2]} scale={0.62}>
      {/* blunt-body thermal protection system */}
      <mesh ref={shell} rotation={[Math.PI, 0, 0]} castShadow>
        <sphereGeometry args={[0.72, 32, 18, 0, Math.PI * 2, 0, Math.PI / 2.6]} />
        <meshStandardMaterial
          {...MAT.heatShield}
          side={THREE.DoubleSide}
          emissive="#000000"
          emissiveIntensity={0}
          toneMapped={false}
        />
      </mesh>
      {/* ablative rings */}
      {[0.3, 0.5, 0.66].map((radius, index) => (
        <mesh key={radius} position={[0, -0.24 - index * 0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.012, 8, 32]} />
          <meshStandardMaterial color="#3a2a22" metalness={0.2} roughness={0.9} />
        </mesh>
      ))}
      {/* pressurised battery payload bay */}
      <mesh position={[0, 0.24, 0]} castShadow>
        <cylinderGeometry args={[0.52, 0.7, 0.62, 24]} />
        <meshStandardMaterial {...MAT.alu} />
      </mesh>
      <mesh position={[0, 0.24, 0]}>
        <cylinderGeometry args={[0.53, 0.71, 0.2, 24]} />
        <meshStandardMaterial {...MAT.gold} />
      </mesh>
      {/* payload window into the battery stack */}
      {[0, 1, 2, 3].map((index) => (
        <mesh
          key={index}
          position={[
            Math.cos((index / 4) * Math.PI * 2) * 0.5,
            0.3,
            Math.sin((index / 4) * Math.PI * 2) * 0.5,
          ]}
        >
          <boxGeometry args={[0.16, 0.14, 0.05]} />
          <meshStandardMaterial {...MAT.composite} />
        </mesh>
      ))}
      {/* separation band + docking interface */}
      <mesh position={[0, 0.57, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.03, 8, 32]} />
        <meshStandardMaterial {...MAT.aluDull} />
      </mesh>
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 0.18, 24]} />
        <meshStandardMaterial {...MAT.hull} />
      </mesh>
      <mesh position={[0, 0.82, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.34, 0.055, 12, 32]} />
        <meshStandardMaterial {...MAT.alu} />
      </mesh>
      {/* attitude thrusters + antenna */}
      {[0, 1, 2, 3].map((index) => {
        const angle = (index / 4) * Math.PI * 2 + Math.PI / 4;
        return (
          <mesh
            key={index}
            position={[Math.cos(angle) * 0.62, 0.42, Math.sin(angle) * 0.62]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.035, 0.05, 0.1, 10]} />
            <meshStandardMaterial {...MAT.aluDull} />
          </mesh>
        );
      })}
      <mesh position={[0.36, 0.62, -0.3]}>
        <boxGeometry args={[0.12, 0.02, 0.12]} />
        <meshStandardMaterial {...MAT.gold} />
      </mesh>
      <mesh position={[-0.4, 0.6, 0.26]}>
        <sphereGeometry args={[0.03, 10, 10]} />
        <meshStandardMaterial
          color={STATUS_CYAN}
          emissive={STATUS_CYAN}
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
      {/* re-entry plasma sheath */}
      <mesh ref={plasma} position={[0, -0.25, 0]} scale={0.001}>
        <sphereGeometry args={[1, 24, 16]} />
        <meshBasicMaterial
          color="#ff8a3a"
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
