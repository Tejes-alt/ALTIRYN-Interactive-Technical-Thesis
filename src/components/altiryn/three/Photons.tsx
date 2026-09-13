import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SUN_POS } from "./constants";

const COUNT = 240;

/** Elegant photon stream: Sun → solar array → power electronics → battery. */
export function Photons({ active, flow }: { active: boolean; flow: number }) {
  const points = useRef<THREE.Points>(null);
  const data = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);
    const lanes = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i += 1) {
      seeds[i] = Math.random();
      lanes[i] = Math.random() < 0.5 ? -1 : 1;
    }
    return { positions, seeds, lanes };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(data.positions, 3));
    return geo;
  }, [data]);

  const from = useMemo(() => SUN_POS.clone().normalize().multiplyScalar(26), []);

  useFrame((state, delta) => {
    if (!points.current || !active) return;
    const dt = Math.min(delta, 0.05);
    const time = state.clock.elapsedTime;
    const array = data.positions;
    for (let i = 0; i < COUNT; i += 1) {
      const seed = data.seeds[i]!;
      const lane = data.lanes[i]!;
      let t = (time * (0.16 + seed * 0.12) + seed) % 1;
      t = Math.min(1, t / Math.max(flow, 0.05));
      const wingX = lane * 3.1;
      // sun → wing (0 - 0.62), wing → power electronics (0.62 - 0.82), → battery (0.82 - 1)
      let x: number;
      let y: number;
      let z: number;
      if (t < 0.62) {
        const k = t / 0.62;
        x = THREE.MathUtils.lerp(from.x, wingX, k);
        y = THREE.MathUtils.lerp(from.y, 0.3 + (seed - 0.5) * 1.2, k);
        z = THREE.MathUtils.lerp(from.z, (seed - 0.5) * 0.6, k);
      } else if (t < 0.82) {
        const k = (t - 0.62) / 0.2;
        x = THREE.MathUtils.lerp(wingX, 0.72, k);
        y = THREE.MathUtils.lerp(0.3 + (seed - 0.5) * 1.2, -0.6, k);
        z = THREE.MathUtils.lerp((seed - 0.5) * 0.6, 0.85, k);
      } else {
        const k = (t - 0.82) / 0.18;
        x = THREE.MathUtils.lerp(0.72, (seed - 0.5) * 1.1, k);
        y = THREE.MathUtils.lerp(-0.6, -0.25, k);
        z = THREE.MathUtils.lerp(0.85, 0.72, k);
      }
      array[i * 3] = x;
      array[i * 3 + 1] = y + Math.sin(time * 1.4 + seed * 9) * 0.03;
      array[i * 3 + 2] = z;
    }
    (points.current.geometry.attributes["position"] as THREE.BufferAttribute).needsUpdate = true;
    const material = points.current.material as THREE.PointsMaterial;
    material.opacity += (0.9 - material.opacity) * (1 - Math.exp(-3 * dt));
  });

  return (
    <points ref={points} geometry={geometry} visible={active}>
      <pointsMaterial
        size={0.055}
        color="#ffd89a"
        transparent
        opacity={0}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        toneMapped={false}
      />
    </points>
  );
}
