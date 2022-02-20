import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import CountDown from './CountDown';


const Box = () => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='hotpink' />
    </mesh>
  )
}


const Plane = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshLambertMaterial attach='material' color='lightblue' />
    </mesh>
  )
}


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


function MyRotatingBox() {
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh ref={myMesh}>
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}


const ThreeSphere = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#8352FD', display: 'flex', justifyContent: 'space-evenly' }}>
      <Canvas clasName="canvas">
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
 
      </Canvas>
      <div>
      <CountDown />
      </div>


    </div>
  )
}

export default ThreeSphere;