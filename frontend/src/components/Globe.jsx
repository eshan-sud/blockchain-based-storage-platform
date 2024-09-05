import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function RotatingGlobe() {
  const meshRef = useRef();

  // Rotate the globe continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere args={[1, 32, 32]} ref={meshRef} scale={2}>
      <MeshDistortMaterial
        color="#0d6efd"
        attach="material"
        distort={0.3} // Strength of the distortion
        speed={2} // Speed of the distortion
        roughness={0.5}
      />
    </Sphere>
  );
}

export const Globe = () => {
  return (
    <Canvas style={{ height: "400px" }}>
      {/* Ambient light for a softer look */}
      <ambientLight intensity={0.5} />
      {/* Directional light for a spotlight effect */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* Add the rotating globe component */}
      <RotatingGlobe />
    </Canvas>
  );
};
