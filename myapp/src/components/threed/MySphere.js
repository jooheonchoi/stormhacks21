import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { MeshDistortMaterial, Sphere } from "@react-three/drei";



const AnimatedSphere = () => {
    return (
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#8352FD"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    )
  }
  
  const MySphere = () => {
    return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: '', display: 'flex', justifyContent: 'space-evenly' }}>
          <Canvas clasName="canvas">
        {/* <OrbitControls /> */}
        {/* <Stars /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      </div>
    )
  }
  
  export default MySphere;