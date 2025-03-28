
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Head(props) {
  const ref = useRef();
  
  // Simple animation to slightly rotate the avatar
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05 - 0.1;
    }
  });

  // Create a simple head geometry
  return (
    <group ref={ref} {...props}>
      {/* Face/Head */}
      <mesh castShadow position={[0, 0.15, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#f5d0c4" />
      </mesh>
      
      {/* Glasses */}
      <group position={[0, 0.2, 0.4]}>
        {/* Left lens */}
        <mesh position={[-0.2, 0, 0]}>
          <boxGeometry args={[0.2, 0.1, 0.05]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        
        {/* Right lens */}
        <mesh position={[0.2, 0, 0]}>
          <boxGeometry args={[0.2, 0.1, 0.05]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        
        {/* Bridge */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.1, 0.03, 0.05]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        
        {/* Left arm */}
        <mesh position={[-0.3, 0, -0.05]} rotation={[0, -0.5, 0]}>
          <boxGeometry args={[0.2, 0.03, 0.03]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        
        {/* Right arm */}
        <mesh position={[0.3, 0, -0.05]} rotation={[0, 0.5, 0]}>
          <boxGeometry args={[0.2, 0.03, 0.03]} />
          <meshStandardMaterial color="#444" />
        </mesh>
      </group>
      
      {/* Eyes */}
      <mesh position={[-0.15, 0.2, 0.4]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      <mesh position={[0.15, 0.2, 0.4]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Smile */}
      <mesh position={[0, 0, 0.41]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.2, 0.03, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}

const AvatarModel = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 2], fov: 50 }}
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Head position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default AvatarModel;
