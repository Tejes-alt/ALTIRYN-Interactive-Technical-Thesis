import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useExperience } from "@/stores/experience";
import { SUBSYSTEM_ANCHORS } from "./constants";
import { chapters } from "@/lib/altiryn";

type Shot = { position: [number, number, number]; look: [number, number, number]; fov?: number };

/** Chapter-indexed camera choreography — a continuous film rather than 18 static frames. */
const ORIGIN_SHOT: Shot = { position: [0.4, 0.6, 19], look: [0, -2.6, 0], fov: 42 };
const SHOTS: Record<string, Shot> = {
  origin: ORIGIN_SHOT,
  definition: { position: [-2.6, -0.5, 15], look: [0, -3.2, 0], fov: 45 },
  architecture: { position: [4.2, -2.4, 13], look: [0, -3.8, 0], fov: 48 },
  ecosystem: { position: [-4.6, 0.4, 15], look: [0, -3, 0], fov: 46 },
  systems: { position: [0, 4.8, 17], look: [0, -2.4, 0], fov: 48 },
  coverage: { position: [5, -1.8, 14], look: [0, -3.4, 0], fov: 48 },
  minute: { position: [-3.8, -1, 13], look: [0, -3.5, 0], fov: 46 },
  question: { position: [2.6, -1.6, 12.5], look: [0, -3.4, 0], fov: 46 },
  earth: { position: [5.4, -3.4, 8.4], look: [0.4, -4.4, -1], fov: 52 },
  orbit: { position: [0, 3.4, 15], look: [0, -2.4, 0], fov: 44 },
  machine: { position: [1.4, 0.9, 7.4], look: [0, 0, 0], fov: 42 },
  energy: { position: [-5.8, 1.8, 6.4], look: [-2.4, 0.25, 0], fov: 42 },
  storage: { position: [0.6, -0.5, 3.1], look: [0, -0.2, 0.7], fov: 38 },
  thermal: { position: [1.9, -1.5, 3.6], look: [0, -0.9, -0.9], fov: 42 },
  return: { position: [1.6, -0.4, 8.2], look: [0.3, -0.4, 2.6], fov: 44 },
  intelligence: { position: [-1.5, 1.1, 3.2], look: [-0.6, 0.5, 0.8], fov: 38 },
  operations: { position: [3.8, -1.2, 8.8], look: [0.2, -3.5, 1], fov: 44 },
  fleet: { position: [0, 6.2, 19], look: [0, -2.2, 0], fov: 46 },
  engineering: { position: [3.6, 1.4, 8.6], look: [0, 0.2, 0], fov: 44 },
  economics: { position: [-3.6, 1.6, 9.4], look: [0, -0.4, 0], fov: 44 },
  risk: { position: [2.6, -1.1, 7.6], look: [0, -0.2, 0.4], fov: 44 },
  feasibility: { position: [-2.4, 2.4, 10.4], look: [0, 0, 0], fov: 46 },
  future: { position: [0, 3.6, 16], look: [0, -2.2, 0], fov: 48 },
  conclusion: { position: [0.2, 1.2, 21], look: [0, -2.6, 0], fov: 44 },
};

export function CameraRig() {
  const chapter = useExperience((state) => state.chapter);
  const chapterProgress = useExperience((state) => state.chapterProgress);
  const selected = useExperience((state) => state.selected);
  const exploded = useExperience((state) => state.exploded);
  const { camera } = useThree();

  const desiredPosition = useMemo(() => new THREE.Vector3(), []);
  const desiredLook = useMemo(() => new THREE.Vector3(), []);
  const currentLook = useRef(new THREE.Vector3(0, -2, 0));

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const index = Math.min(Math.max(chapter, 0), chapters.length - 1);
    const id = chapters[index]?.id ?? "origin";
    const nextId = chapters[Math.min(index + 1, chapters.length - 1)]?.id ?? id;
    const shot = SHOTS[id] ?? ORIGIN_SHOT;
    const next = SHOTS[nextId] ?? shot;

    // continuous interpolation between the current and next shot across the chapter's scroll span.
    // blend must be able to reach 1 (fully "next"), otherwise the position snaps backward the
    // instant the chapter index advances and progress resets to 0.
    const local = THREE.MathUtils.clamp(chapterProgress, 0, 1);
    const blend = local * local * (3 - 2 * local);

    desiredPosition.set(
      THREE.MathUtils.lerp(shot.position[0], next.position[0], blend),
      THREE.MathUtils.lerp(shot.position[1], next.position[1], blend),
      THREE.MathUtils.lerp(shot.position[2], next.position[2], blend),
    );
    desiredLook.set(
      THREE.MathUtils.lerp(shot.look[0], next.look[0], blend),
      THREE.MathUtils.lerp(shot.look[1], next.look[1], blend),
      THREE.MathUtils.lerp(shot.look[2], next.look[2], blend),
    );

    // breathing drift so nothing is ever perfectly still
    const t = state.clock.elapsedTime;
    desiredPosition.x += Math.sin(t * 0.13) * 0.22;
    desiredPosition.y += Math.cos(t * 0.11) * 0.14;

    if (selected) {
      const anchor = SUBSYSTEM_ANCHORS[selected] ?? [0, 0, 0];
      const focus = new THREE.Vector3(...anchor);
      if (exploded) focus.multiplyScalar(1.6);
      desiredLook.copy(focus);
      const offset = focus.clone().normalize().multiplyScalar(2.8);
      if (offset.lengthSq() < 0.01) offset.set(1.8, 0.9, 2.8);
      desiredPosition
        .copy(focus)
        .add(offset)
        .add(new THREE.Vector3(0.8, 0.7, 2.6));
    }

    const ease = 1 - Math.exp(-(selected ? 2.4 : 1.6) * dt);
    camera.position.lerp(desiredPosition, ease);
    currentLook.current.lerp(desiredLook, ease);
    camera.lookAt(currentLook.current);

    const perspective = camera as THREE.PerspectiveCamera;
    const targetFov = selected ? 34 : THREE.MathUtils.lerp(shot.fov ?? 44, next.fov ?? 44, blend);
    if (Math.abs(perspective.fov - targetFov) > 0.01) {
      perspective.fov += (targetFov - perspective.fov) * ease;
      perspective.updateProjectionMatrix();
    }
  });

  return null;
}
