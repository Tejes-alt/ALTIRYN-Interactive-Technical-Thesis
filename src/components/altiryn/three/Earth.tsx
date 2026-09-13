import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { EARTH_POSITION, EARTH_RADIUS, SUN_DIR } from "./constants";
import { useExperience } from "@/stores/experience";
import { chapters } from "@/lib/altiryn";

const surfaceVertex = /* glsl */ `
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

const surfaceFragment = /* glsl */ `
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

const cloudFragment = /* glsl */ `
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

const atmosphereVertex = /* glsl */ `
  varying vec3 vNormalW;
  varying vec3 vViewDir;
  void main(){
    vec4 world = modelMatrix * vec4(position, 1.0);
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const atmosphereFragment = /* glsl */ `
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

export function Earth({ quality }: { quality: "high" | "low" }) {
  const planet = useRef<THREE.Group>(null);
  const surface = useRef<THREE.Mesh>(null);
  const clouds = useRef<THREE.Mesh>(null);
  const chapter = useExperience((state) => state.chapter);
  const chapterProgress = useExperience((state) => state.chapterProgress);
  const chapterId = chapters[chapter]?.id;
  const visible = !["machine", "energy", "storage", "thermal", "return", "intelligence"].includes(
    chapterId ?? "",
  );
  const textures = useTexture([
    "/textures/earth-day.jpg",
    "/textures/earth-lights.png",
    "/textures/earth-normal.jpg",
    "/textures/earth-specular.jpg",
    "/textures/earth-clouds.png",
  ]) as [THREE.Texture, THREE.Texture, THREE.Texture, THREE.Texture, THREE.Texture];
  const [day, night, normal, specular, cloudMap] = textures;
  day.colorSpace = THREE.SRGBColorSpace;
  night.colorSpace = THREE.SRGBColorSpace;
  cloudMap.colorSpace = THREE.SRGBColorSpace;
  textures.forEach((texture) => {
    texture.anisotropy = quality === "high" ? 8 : 2;
  });
  const segments = quality === "high" ? 128 : 64;
  const atmosphereSegments = quality === "high" ? 64 : 32;
  const uniforms = useMemo(
    () => ({
      surface: {
        uDay: { value: day },
        uNight: { value: night },
        uSpecular: { value: specular },
        uNormal: { value: normal },
        uSunDir: { value: SUN_DIR },
      },
      cloud: { uClouds: { value: cloudMap }, uSunDir: { value: SUN_DIR } },
      atmosphere: { uSunDir: { value: SUN_DIR } },
    }),
    [day, night, normal, specular, cloudMap],
  );

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);
    if (surface.current) surface.current.rotation.y += dt * 0.014;
    if (clouds.current) clouds.current.rotation.y += dt * 0.021;
    if (planet.current) {
      const orbitTransition =
        chapterId === "orbit" ? THREE.MathUtils.lerp(1, 0.62, chapterProgress) : 1;
      const targetScale = orbitTransition;
      const scale = THREE.MathUtils.lerp(
        planet.current.scale.x,
        targetScale,
        1 - Math.exp(-2.5 * dt),
      );
      planet.current.scale.setScalar(scale);
      planet.current.position.y = THREE.MathUtils.lerp(
        planet.current.position.y,
        targetScale < 0.1 ? -12 : 0,
        1 - Math.exp(-2 * dt),
      );
    }
  });

  return (
    <group visible={visible} position={EARTH_POSITION} rotation={[0.32, 0, -0.24]}>
      <group ref={planet}>
        <mesh ref={surface} castShadow receiveShadow>
          <sphereGeometry args={[EARTH_RADIUS, segments, segments]} />
          <shaderMaterial
            vertexShader={surfaceVertex}
            fragmentShader={surfaceFragment}
            uniforms={uniforms.surface}
          />
        </mesh>
        <mesh ref={clouds} scale={1.009}>
          <sphereGeometry args={[EARTH_RADIUS, segments, segments]} />
          <shaderMaterial
            vertexShader={surfaceVertex}
            fragmentShader={cloudFragment}
            uniforms={uniforms.cloud}
            transparent
            depthWrite={false}
          />
        </mesh>
        <mesh scale={1.035}>
          <sphereGeometry args={[EARTH_RADIUS, atmosphereSegments, atmosphereSegments]} />
          <shaderMaterial
            vertexShader={atmosphereVertex}
            fragmentShader={atmosphereFragment}
            uniforms={uniforms.atmosphere}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
        <mesh scale={1.095}>
          <sphereGeometry args={[EARTH_RADIUS, atmosphereSegments, atmosphereSegments]} />
          <shaderMaterial
            vertexShader={atmosphereVertex}
            fragmentShader={atmosphereFragment}
            uniforms={uniforms.atmosphere}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    </group>
  );
}
