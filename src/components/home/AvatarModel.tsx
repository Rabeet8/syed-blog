
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Properly type the props for the Head component
interface HeadProps {
  position?: [number, number, number];
  scale?: [number, number, number];
}

function Head({ position, scale }: HeadProps) {
  const ref = useRef<THREE.Group>(null);
  
  // Simple animation to slightly rotate the avatar
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05 - 0.1;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Face/Head */}
      <mesh castShadow position={[0, 0.15, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#f5d0c4" />
      </mesh>
      
      {/* Glasses */}
      <group position={[0, 0.15, 0.5]}>
        {/* Left lens */}
        <mesh position={[-0.2, 0, 0]}>
          <boxGeometry args={[0.18, 0.12, 0.05]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        {/* Right lens */}
        <mesh position={[0.2, 0, 0]}>
          <boxGeometry args={[0.18, 0.12, 0.05]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        {/* Bridge */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.1, 0.02, 0.05]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>

      {/* Hair */}
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.52, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#5c4033" />
      </mesh>
    </group>
  );
}

const AvatarModel = () => {
  return (
    <Canvas shadows style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
      />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        minPolarAngle={Math.PI / 2} 
        maxPolarAngle={Math.PI / 2}
        rotateSpeed={0.3}
      />
      <Head position={[0, -0.5, 0]} scale={[1.2, 1.2, 1.2]} />
    </Canvas>
  );
};

export default AvatarModel;
