import { useMemo, useRef, type ReactNode } from "react";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { Instance, Instances } from "@react-three/drei";
import * as THREE from "three";
import { useExperience } from "@/stores/experience";
import { MAT, STATUS_AMBER, STATUS_CYAN } from "./materials";
import { EXPLODE_OFFSETS } from "./constants";
import { chapters } from "@/lib/altiryn";

const damp = (dt: number, k = 3.2) => 1 - Math.exp(-k * dt);

function Highlight({
  active,
  args,
  position = [0, 0, 0],
}: {
  active: boolean;
  args: [number, number, number];
  position?: [number, number, number];
}) {
  const ref = useRef<THREE.LineSegments>(null);
  const geometry = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(...args)), [args]);
  useFrame((_, delta) => {
    const material = ref.current?.material as THREE.LineBasicMaterial | undefined;
    if (material)
      material.opacity += ((active ? 0.9 : 0) - material.opacity) * damp(Math.min(delta, 0.05), 6);
  });
  return (
    <lineSegments ref={ref} geometry={geometry} position={position}>
      <lineBasicMaterial color={STATUS_CYAN} transparent opacity={0} depthWrite={false} />
    </lineSegments>
  );
}

/** A selectable, explodable subsystem assembly. */
function Part({
  id,
  children,
  base = [0, 0, 0],
  highlight,
}: {
  id: string;
  children: ReactNode;
  base?: [number, number, number];
  highlight?: { args: [number, number, number]; position?: [number, number, number] };
}) {
  const group = useRef<THREE.Group>(null);
  const exploded = useExperience((state) => state.exploded);
  const selected = useExperience((state) => state.selected);
  const hovered = useExperience((state) => state.hovered);
  const active = selected === id || hovered === id;
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const offset = EXPLODE_OFFSETS[id] ?? [0, 0, 0];
    target.set(
      base[0] + (exploded ? offset[0] : 0),
      base[1] + (exploded ? offset[1] : 0),
      base[2] + (exploded ? offset[2] : 0),
    );
    group.current.position.lerp(target, damp(Math.min(delta, 0.05), 2.6));
  });

  return (
    <group
      ref={group}
      position={base}
      onPointerOver={(event: ThreeEvent<PointerEvent>) => {
        event.stopPropagation();
        useExperience.getState().setHovered(id);
      }}
      onPointerOut={() => useExperience.getState().setHovered(null)}
      onClick={(event: ThreeEvent<MouseEvent>) => {
        event.stopPropagation();
        useExperience.getState().select(id);
      }}
    >
      {children}
      {highlight && (
        <Highlight
          active={active}
          args={highlight.args}
          position={highlight.position ?? [0, 0, 0]}
        />
      )}
    </group>
  );
}

function Fasteners({
  points,
  radius = 0.028,
}: {
  points: [number, number, number][];
  radius?: number;
}) {
  return (
    <Instances limit={points.length} castShadow>
      <cylinderGeometry args={[radius, radius, 0.035, 6]} />
      <meshStandardMaterial {...MAT.alu} />
      {points.map((point, index) => (
        <Instance key={index} position={point} rotation={[Math.PI / 2, 0, 0]} />
      ))}
    </Instances>
  );
}

/** Photovoltaic wing: hinged root, segmented panels, instanced cell grid, metallic bus bars. */
function SolarWing({ side, deploy }: { side: -1 | 1; deploy: number }) {
  const panels = [0, 1, 2];
  const root = useRef<THREE.Group>(null);
  const hinges = useRef<(THREE.Group | null)[]>([]);
  const cells = useMemo(() => {
    const list: [number, number, number][] = [];
    for (let row = 0; row < 5; row += 1) {
      for (let col = 0; col < 8; col += 1) {
        list.push([(col - 3.5) * 0.148, (row - 2) * 0.26, 0.032]);
      }
    }
    return list;
  }, []);

  useFrame((_, delta) => {
    const k = damp(Math.min(delta, 0.05), 1.4);
    if (root.current) {
      root.current.rotation.z += (side * (1 - deploy) * -1.15 - root.current.rotation.z) * k;
    }
    hinges.current.forEach((hinge, index) => {
      if (!hinge) return;
      hinge.rotation.z += (side * (1 - deploy) * -0.35 * (index + 1) - hinge.rotation.z) * k;
    });
  });

  return (
    <group ref={root} position={[side * 1.05, 0.3, 0]} rotation={[0, 0, side * -1.15]}>
      {/* yoke + hinge */}
      <mesh position={[side * 0.32, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.075, 0.075, 0.62, 12]} />
        <meshStandardMaterial {...MAT.aluDull} />
      </mesh>
      <mesh position={[side * 0.62, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.24, 16]} />
        <meshStandardMaterial {...MAT.alu} />
      </mesh>
      {panels.map((index) => {
        const x = side * (0.95 + index * 1.42);
        return (
          <group
            key={index}
            ref={(node) => {
              hinges.current[index] = node;
            }}
            position={[x, 0, 0]}
          >
            {/* frame */}
            <mesh castShadow>
              <boxGeometry args={[1.34, 1.42, 0.055]} />
              <meshStandardMaterial {...MAT.pvBus} />
            </mesh>
            {/* laminate */}
            <mesh position={[0, 0, 0.018]}>
              <boxGeometry args={[1.26, 1.34, 0.03]} />
              <meshStandardMaterial {...MAT.pv} envMapIntensity={1.4} />
            </mesh>
            <Instances limit={cells.length}>
              <boxGeometry args={[0.132, 0.235, 0.006]} />
              <meshStandardMaterial color="#111f4a" metalness={0.72} roughness={0.22} />
              {cells.map((cell, cellIndex) => (
                <Instance key={cellIndex} position={cell} />
              ))}
            </Instances>
            {/* bus bars */}
            {[-0.44, 0, 0.44].map((offset) => (
              <mesh key={offset} position={[offset, 0, 0.037]}>
                <boxGeometry args={[0.012, 1.3, 0.004]} />
                <meshStandardMaterial {...MAT.pvBus} />
              </mesh>
            ))}
            {/* hinge to next panel */}
            <mesh position={[side * 0.7, 0, -0.03]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 1.3, 8]} />
              <meshStandardMaterial {...MAT.aluDull} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

/** Modular lithium-ion battery bay: trays, modules, connectors, BMS cards, cooling rails. */
function BatteryBay({ charge }: { charge: number }) {
  const modules = useMemo(() => {
    const list: { position: [number, number, number]; index: number }[] = [];
    let index = 0;
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 4; col += 1) {
        list.push({ position: [(col - 1.5) * 0.34, (row - 1) * 0.3, 0], index: (index += 1) });
      }
    }
    return list;
  }, []);

  return (
    <Part id="battery" base={[0, -0.2, 0.72]} highlight={{ args: [1.62, 1.16, 0.72] }}>
      {/* rack */}
      <mesh position={[0, 0, -0.28]} castShadow>
        <boxGeometry args={[1.58, 1.1, 0.07]} />
        <meshStandardMaterial {...MAT.hullDark} />
      </mesh>
      {[-0.78, 0.78].map((x) => (
        <mesh key={x} position={[x, 0, -0.02]}>
          <boxGeometry args={[0.05, 1.1, 0.56]} />
          <meshStandardMaterial {...MAT.aluDull} />
        </mesh>
      ))}
      {modules.map(({ position, index }) => {
        const lit = index / modules.length <= charge;
        return (
          <group key={index} position={position}>
            <mesh castShadow>
              <boxGeometry args={[0.3, 0.26, 0.5]} />
              <meshStandardMaterial {...MAT.hull} />
            </mesh>
            <mesh position={[0, 0, 0.256]}>
              <boxGeometry args={[0.26, 0.2, 0.01]} />
              <meshStandardMaterial {...MAT.composite} />
            </mesh>
            {/* connector + status LED */}
            <mesh position={[0.1, -0.09, 0.262]}>
              <boxGeometry args={[0.07, 0.045, 0.02]} />
              <meshStandardMaterial {...MAT.gold} />
            </mesh>
            <mesh position={[-0.1, 0.085, 0.263]}>
              <boxGeometry args={[0.035, 0.018, 0.012]} />
              <meshStandardMaterial
                color={lit ? STATUS_CYAN : "#1b2126"}
                emissive={lit ? STATUS_CYAN : "#000000"}
                emissiveIntensity={lit ? 2.4 : 0}
                toneMapped={false}
              />
            </mesh>
            {/* locking latches */}
            {[-0.13, 0.13].map((y) => (
              <mesh key={y} position={[0, y, 0.2]}>
                <boxGeometry args={[0.24, 0.022, 0.04]} />
                <meshStandardMaterial {...MAT.alu} />
              </mesh>
            ))}
          </group>
        );
      })}
      {/* cooling rails */}
      {[-0.46, 0.46].map((y) => (
        <mesh key={y} position={[0, y, 0.1]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.028, 0.028, 1.4, 8]} />
          <meshStandardMaterial {...MAT.alu} />
        </mesh>
      ))}
      {/* BMS card stack */}
      <group position={[0, -0.53, 0.12]}>
        <mesh>
          <boxGeometry args={[1.3, 0.12, 0.34]} />
          <meshStandardMaterial {...MAT.composite} />
        </mesh>
        <mesh position={[0.4, 0.07, 0.1]}>
          <boxGeometry args={[0.06, 0.02, 0.02]} />
          <meshStandardMaterial
            color={STATUS_AMBER}
            emissive={STATUS_AMBER}
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Part>
  );
}

function DockingPort() {
  const latches = useMemo(
    () => Array.from({ length: 8 }, (_, index) => (index / 8) * Math.PI * 2),
    [],
  );
  return (
    <Part id="docking" base={[0, 0, 1.5]} highlight={{ args: [1.2, 1.2, 0.5] }}>
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.5, 0.085, 16, 48]} />
        <meshStandardMaterial {...MAT.alu} />
      </mesh>
      <mesh position={[0, 0, -0.12]}>
        <cylinderGeometry args={[0.46, 0.5, 0.22, 32, 1, true]} />
        <meshStandardMaterial {...MAT.hull} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, -0.24]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.06, 32]} />
        <meshStandardMaterial {...MAT.hullDark} />
      </mesh>
      {latches.map((angle) => (
        <group key={angle} rotation={[0, 0, angle]}>
          <mesh position={[0.5, 0, 0.07]}>
            <boxGeometry args={[0.12, 0.06, 0.12]} />
            <meshStandardMaterial {...MAT.aluDull} />
          </mesh>
          <mesh position={[0.5, 0, 0.15]}>
            <boxGeometry args={[0.05, 0.04, 0.06]} />
            <meshStandardMaterial {...MAT.gold} />
          </mesh>
        </group>
      ))}
      {/* alignment cones + data umbilical */}
      {[0, Math.PI * 0.66, Math.PI * 1.33].map((angle) => (
        <mesh
          key={angle}
          position={[Math.cos(angle) * 0.3, Math.sin(angle) * 0.3, 0.14]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <coneGeometry args={[0.05, 0.14, 12]} />
          <meshStandardMaterial {...MAT.alu} />
        </mesh>
      ))}
      <mesh position={[0, -0.34, 0.02]}>
        <boxGeometry args={[0.2, 0.1, 0.12]} />
        <meshStandardMaterial {...MAT.composite} />
      </mesh>
      <mesh position={[0, 0.42, 0.12]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshStandardMaterial
          color={STATUS_CYAN}
          emissive={STATUS_CYAN}
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
    </Part>
  );
}

function Radiators() {
  return (
    <Part id="thermal" base={[0, -0.92, -1.02]} highlight={{ args: [2.5, 0.4, 1.5] }}>
      {[-1, 1].map((side) => (
        <group key={side} position={[side * 0.86, 0, 0]} rotation={[0.22 * side, 0, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.78, 0.035, 1.3]} />
            <meshStandardMaterial {...MAT.radiator} />
          </mesh>
          {/* flow channels */}
          <Instances limit={9}>
            <boxGeometry args={[0.02, 0.012, 1.24]} />
            <meshStandardMaterial {...MAT.aluDull} />
            {Array.from({ length: 9 }, (_, index) => (
              <Instance key={index} position={[(index - 4) * 0.085, 0.024, 0]} />
            ))}
          </Instances>
          {/* articulated mount */}
          <mesh position={[-side * 0.42, 0.08, 0.4]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
            <meshStandardMaterial {...MAT.alu} />
          </mesh>
        </group>
      ))}
      {/* thermal loop routing */}
      <mesh position={[0, 0.1, 0.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.026, 0.026, 1.7, 8]} />
        <meshStandardMaterial {...MAT.cable} />
      </mesh>
    </Part>
  );
}

function Communications() {
  return (
    <Part id="comms" base={[0.72, 0.62, 0.9]} highlight={{ args: [0.8, 0.8, 0.7] }}>
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[0.34, 0.2, 0.24]} />
        <meshStandardMaterial {...MAT.hull} />
      </mesh>
      <mesh position={[0, -0.02, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.022, 0.022, 0.32, 8]} />
        <meshStandardMaterial {...MAT.alu} />
      </mesh>
      {/* parabolic dish */}
      <group position={[0.05, 0.2, 0.06]} rotation={[-0.5, 0.3, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.3, 28, 16, 0, Math.PI * 2, 0, Math.PI / 3.1]} />
          <meshStandardMaterial {...MAT.alu} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, 0.16, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.3, 6]} />
          <meshStandardMaterial {...MAT.aluDull} />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshStandardMaterial {...MAT.gold} />
        </mesh>
      </group>
      {/* patch antennas */}
      {[-0.16, 0.16].map((x) => (
        <mesh key={x} position={[x, -0.3, 0.14]}>
          <boxGeometry args={[0.1, 0.1, 0.02]} />
          <meshStandardMaterial {...MAT.gold} />
        </mesh>
      ))}
    </Part>
  );
}

function CableHarness() {
  const points = useMemo(
    () => [
      new THREE.Vector3(-0.72, -0.35, 0.86),
      new THREE.Vector3(-0.3, -0.52, 0.92),
      new THREE.Vector3(0.25, -0.52, 0.92),
      new THREE.Vector3(0.66, -0.6, 0.86),
    ],
    [],
  );
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  return (
    <mesh>
      <tubeGeometry args={[curve, 28, 0.018, 6, false]} />
      <meshStandardMaterial {...MAT.cable} />
    </mesh>
  );
}

function Avionics() {
  return (
    <Part id="control" base={[-0.6, 0.52, 0.86]} highlight={{ args: [0.8, 0.5, 0.36] }}>
      {[0, 1, 2].map((index) => (
        <mesh key={index} position={[0, index * 0.14 - 0.14, 0]} castShadow>
          <boxGeometry args={[0.62, 0.12, 0.28]} />
          <meshStandardMaterial {...MAT.hull} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.15]}>
        <boxGeometry args={[0.5, 0.34, 0.01]} />
        <meshStandardMaterial {...MAT.composite} />
      </mesh>
      {[0, 1, 2, 3].map((index) => (
        <mesh key={index} position={[-0.2 + index * 0.13, -0.19, 0.16]}>
          <boxGeometry args={[0.028, 0.014, 0.01]} />
          <meshStandardMaterial
            color={STATUS_CYAN}
            emissive={STATUS_CYAN}
            emissiveIntensity={2.2}
            toneMapped={false}
          />
        </mesh>
      ))}
      {/* harness */}
      <mesh position={[0.3, -0.2, 0.05]} rotation={[0, 0, 0.4]}>
        <cylinderGeometry args={[0.022, 0.022, 0.34, 6]} />
        <meshStandardMaterial {...MAT.cable} />
      </mesh>
    </Part>
  );
}

function Navigation() {
  return (
    <Part id="navigation" base={[0, 1.18, -0.36]} highlight={{ args: [0.7, 0.5, 0.6] }}>
      {/* star tracker */}
      <mesh rotation={[0.4, 0, 0]} castShadow>
        <cylinderGeometry args={[0.13, 0.16, 0.34, 20]} />
        <meshStandardMaterial {...MAT.hull} />
      </mesh>
      <mesh position={[0, 0.15, 0.06]} rotation={[0.4, 0, 0]}>
        <cylinderGeometry args={[0.115, 0.115, 0.03, 20]} />
        <meshStandardMaterial {...MAT.optic} />
      </mesh>
      {/* rendezvous cameras */}
      {[-0.24, 0.24].map((x) => (
        <group key={x} position={[x, -0.08, 0.12]}>
          <mesh>
            <boxGeometry args={[0.12, 0.1, 0.14]} />
            <meshStandardMaterial {...MAT.hullDark} />
          </mesh>
          <mesh position={[0, 0, 0.08]}>
            <cylinderGeometry args={[0.032, 0.038, 0.05, 14]} />
            <meshStandardMaterial {...MAT.optic} />
          </mesh>
        </group>
      ))}
      {/* lidar boom */}
      <mesh position={[0, -0.1, -0.22]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.014, 0.014, 0.4, 6]} />
        <meshStandardMaterial {...MAT.alu} />
      </mesh>
    </Part>
  );
}

function Shielding() {
  return (
    <Part id="shielding" base={[0, 0.1, -0.9]} highlight={{ args: [2.1, 1.5, 0.2] }}>
      <mesh castShadow>
        <boxGeometry args={[2.0, 1.42, 0.08]} />
        <meshStandardMaterial {...MAT.shield} />
      </mesh>
      {/* multi-layer insulation blanket */}
      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[1.92, 1.34, 0.03]} />
        <meshStandardMaterial {...MAT.gold} />
      </mesh>
      <Fasteners
        points={[
          [-0.9, -0.62, 0.06],
          [0.9, -0.62, 0.06],
          [-0.9, 0.62, 0.06],
          [0.9, 0.62, 0.06],
          [0, 0.62, 0.06],
          [0, -0.62, 0.06],
        ]}
      />
    </Part>
  );
}

function Bus() {
  const fasteners = useMemo(() => {
    const list: [number, number, number][] = [];
    for (let x = -0.9; x <= 0.9; x += 0.36) {
      list.push([x, 0.86, 0.4], [x, -0.86, 0.4]);
    }
    return list;
  }, []);

  return (
    <Part id="structure" base={[0, 0, 0]} highlight={{ args: [2.3, 1.85, 1.75] }}>
      {/* faceted primary structure */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.1, 1.7, 1.6]} />
        <meshStandardMaterial {...MAT.hull} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[1.13, 1.13, 1.66, 8]} />
        <meshStandardMaterial {...MAT.hullDark} />
      </mesh>
      {/* longerons */}
      {[
        [-1.02, 0.84],
        [1.02, 0.84],
        [-1.02, -0.84],
        [1.02, -0.84],
      ].map(([x, y]) => (
        <mesh key={`${x}-${y}`} position={[x ?? 0, y ?? 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.055, 0.055, 1.66, 8]} />
          <meshStandardMaterial {...MAT.alu} />
        </mesh>
      ))}
      {/* equipment bay doors */}
      {[-1, 1].map((side) => (
        <group key={side} position={[side * 1.07, 0, 0]} rotation={[0, side * Math.PI * 0.5, 0]}>
          <mesh>
            <boxGeometry args={[1.4, 1.3, 0.03]} />
            <meshStandardMaterial {...MAT.hullDark} />
          </mesh>
          {[-0.4, 0, 0.4].map((y) => (
            <mesh key={y} position={[0, y, 0.02]}>
              <boxGeometry args={[1.3, 0.02, 0.01]} />
              <meshStandardMaterial {...MAT.aluDull} />
            </mesh>
          ))}
          <mesh position={[0.5, -0.5, 0.03]}>
            <boxGeometry args={[0.16, 0.06, 0.02]} />
            <meshStandardMaterial {...MAT.alu} />
          </mesh>
        </group>
      ))}
      {/* MLI wrap on the shaded face */}
      <mesh position={[0, 0, -0.82]}>
        <boxGeometry args={[1.9, 1.5, 0.02]} />
        <meshStandardMaterial {...MAT.gold} />
      </mesh>
      {/* thruster clusters */}
      {[
        [-1.0, -0.8, 0.78],
        [1.0, -0.8, 0.78],
        [-1.0, 0.8, -0.78],
        [1.0, 0.8, -0.78],
      ].map(([x, y, z]) => (
        <group key={`${x}${y}${z}`} position={[x ?? 0, y ?? 0, z ?? 0]}>
          <mesh>
            <cylinderGeometry args={[0.05, 0.075, 0.14, 12]} />
            <meshStandardMaterial {...MAT.aluDull} />
          </mesh>
          <mesh position={[0, -0.09, 0]}>
            <coneGeometry args={[0.062, 0.1, 12]} />
            <meshStandardMaterial {...MAT.composite} />
          </mesh>
        </group>
      ))}
      <Fasteners points={fasteners} />
      {/* power electronics */}
      <mesh position={[0.72, -0.6, 0.82]}>
        <boxGeometry args={[0.42, 0.3, 0.1]} />
        <meshStandardMaterial {...MAT.aluDull} />
      </mesh>
      <CableHarness />
      {/* reinforced mounting brackets */}
      {[-1, 1].flatMap((x) =>
        [-1, 1].map((y) => (
          <mesh
            key={`${x}-${y}`}
            position={[x * 0.86, y * 0.68, 0.83]}
            rotation={[0, 0, x * y * 0.45]}
          >
            <boxGeometry args={[0.26, 0.05, 0.07]} />
            <meshStandardMaterial {...MAT.alu} />
          </mesh>
        )),
      )}
      <mesh position={[0.72, -0.6, 0.88]}>
        <boxGeometry args={[0.06, 0.02, 0.01]} />
        <meshStandardMaterial
          color={STATUS_AMBER}
          emissive={STATUS_AMBER}
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
    </Part>
  );
}

export function Spacecraft({
  visible,
  deploy,
  charge,
}: {
  visible: boolean;
  deploy: number;
  charge: number;
}) {
  const group = useRef<THREE.Group>(null);
  const selected = useExperience((state) => state.selected);
  const chapter = useExperience((state) => state.chapter);
  const chapterProgress = useExperience((state) => state.chapterProgress);
  const chapterId = chapters[chapter]?.id;
  const hovered = useExperience((state) => state.hovered);

  useFrame((_, delta) => {
    if (!group.current || !visible) return;
    const dt = Math.min(delta, 0.05);
    if (!selected) group.current.rotation.y += dt * 0.055;
    group.current.rotation.z = Math.sin(_.clock.elapsedTime * 0.2) * 0.02;
    const orbitScale =
      chapterId === "orbit" ? THREE.MathUtils.lerp(0.085, 0.42, chapterProgress) : 1;
    const targetScale = chapterId === "orbit" ? orbitScale : 1;
    const scale = THREE.MathUtils.lerp(group.current.scale.x, targetScale, damp(dt, 2.8));
    group.current.scale.setScalar(scale);
    const orbitalOffset = chapter === 3 ? 3.2 * (1 - chapterProgress) : 0;
    group.current.position.x += (orbitalOffset - group.current.position.x) * damp(dt, 2.4);
  });

  return (
    <group ref={group} visible={visible} scale={0.085}>
      {(selected || hovered) && (
        <pointLight position={[0, 0.5, 2.4]} intensity={0.7} color={STATUS_CYAN} distance={6} />
      )}
      <Bus />
      <BatteryBay charge={charge} />
      <DockingPort />
      <Radiators />
      <Communications />
      <Avionics />
      <Navigation />
      <Shielding />
      <Part id="solar" highlight={{ args: [9.2, 1.6, 0.3], position: [0, 0.3, 0] }}>
        <SolarWing side={-1} deploy={deploy} />
        <SolarWing side={1} deploy={deploy} />
      </Part>
    </group>
  );
}
