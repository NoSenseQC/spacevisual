"use client";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Planet() {
const meshRef = useRef<any>(null);

  const texture = useLoader(
    TextureLoader,
    "/textures/earth.jpg"
  );

  useFrame(() => {
if (meshRef.current !== null) {      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}