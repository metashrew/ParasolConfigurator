import { Grid, OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { PointLight } from 'three'

function App() {

  return (
    <div className='app-container'>
      <div className='canvas-container'>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.1} />
          <directionalLight position={[-5,5,5]} />
          <mesh>
            <sphereGeometry />
            <meshStandardMaterial color="blue" />
          </mesh>
        </Canvas>
      </div>
      <div className='settings-container'>
        <h2>choose size</h2>
        <p>asdfa</p>
      </div>
    </div>
  )
}

export default App
