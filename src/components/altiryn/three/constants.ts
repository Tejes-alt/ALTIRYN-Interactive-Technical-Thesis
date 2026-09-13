import * as THREE from "three";

export const SUN_DIR = new THREE.Vector3(-0.62, 0.42, 0.66).normalize();
export const SUN_POS = SUN_DIR.clone().multiplyScalar(46);

export const EARTH_RADIUS = 4.6;
export const EARTH_POSITION = new THREE.Vector3(0, -5.4, -2.2);

/** Local anchor points of each spacecraft subsystem, used for camera focus and callouts. */
export const SUBSYSTEM_ANCHORS: Record<string, [number, number, number]> = {
  structure: [0, 0, 0],
  solar: [-3.3, 0.32, 0],
  battery: [0, -0.2, 0.72],
  control: [-0.6, 0.52, 0.86],
  comms: [0.72, 0.62, 0.9],
  navigation: [0, 1.18, -0.36],
  thermal: [0, -0.92, -1.02],
  docking: [0, 0, 1.5],
  shielding: [0, 0.1, -0.9],
};

export const EXPLODE_OFFSETS: Record<string, [number, number, number]> = {
  solar: [0, 0.9, 0],
  structure: [0, 0.4, 0],
  battery: [0, -2.6, 1.5],
  control: [-1.5, 2.1, 1.1],
  comms: [1.7, 2.2, 1.0],
  navigation: [0, 2.9, -1.2],
  thermal: [0, -1.6, -2.6],
  docking: [0, 0, 3.1],
  shielding: [0, 0.4, -2.6],
};
