import './App.css';
import { Canvas } from 'react-three-fiber'

function Cube() {
  return (
    <mesh rotation={[10, 10, 10]} position={[0, 0, 0]}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' color='pink' />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <ambientLight />
      <pointLight position={[-1, 2, 4]} intensity={0.3} />
      <Cube />
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
