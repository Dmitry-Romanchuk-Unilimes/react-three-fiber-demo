import './App.css';
import { useState, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, useThree, extend, useFrame } from 'react-three-fiber'
import { useSpring } from 'react-spring'
import { a } from '@react-spring/three'

extend({ OrbitControls });

function Cube(props) {
  const [isBig, setIsBig] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();

  const { size, x } = useSpring({
    size: isBig ? [2, 2, 2] : [1, 1, 1],
    x: isBig ? 2 : 0
  });

  const color = isHovered ? 'pink' : 'salmon';

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <a.mesh {...props}
      ref={ref}
      scale={size}
      onClick={() => setIsBig(!isBig)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      position-x={x}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      {/* <sphereBufferGeometry attach='geometry' args={[1, 8, 6]} /> */}
      <meshPhysicalMaterial attach='material' color={color} roughness={1} metalness={0.5} clearcoat={1} />
    </a.mesh>
  )
}

function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeBufferGeometry attach='geometry' args={[10, 10]} />
      <meshStandardMaterial attach='material' color='#d3d3d3' />
    </mesh>
  )
}

function Scene() {
  const { camera, gl: { domElement } } = useThree();

  return (
    <>
      <ambientLight />
      <pointLight position={[-1, 2, 4]} intensity={0.3} />
      <Cube rotation={[10, 10, 10]} position={[0, 0, 0]} />
      <Cube rotation={[10, 20, 10]} position={[2, 2, 0]} />
      <Plane />
      <orbitControls args={[camera, domElement]} />
    </>
  )
}

function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

export default App;
