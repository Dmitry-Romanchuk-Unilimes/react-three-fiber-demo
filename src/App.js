import './App.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, useThree, extend } from 'react-three-fiber'

extend({ OrbitControls });

function Cube(props) {
  return (
    <mesh {...props}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' color='pink' />
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
