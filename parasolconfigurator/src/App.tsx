import { OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { PointLight } from 'three'
import SettingsMenu from './components/SettingsMenu'
import { useState } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { GridHelper } from 'three'

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(true)

  return (
    // <div className='app-container'>
    //   <div className='canvas-container'>
    //     <Canvas>
    //       <OrbitControls enableZoom={false} />
    //       <ambientLight intensity={0.1} />
    //       <directionalLight position={[-5,5,5]} />
    //       <mesh>
    //         <sphereGeometry />
    //         <meshStandardMaterial color="blue" />
    //       </mesh>
    //     </Canvas>
    //     <button className='settings-btn' onClick={e => setMenuOpen(!menuOpen)}>◄</button>
    //   </div>
    // </div>
    <PanelGroup direction='horizontal'>
        <Panel defaultSize={75}>
          <Canvas>
            <gridHelper args={[10,10, 0x000000, ]}/>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.1} />
            <directionalLight position={[-5,5,5]} />
            <mesh>
              <sphereGeometry />
              <meshStandardMaterial color="blue" />
            </mesh>
          </Canvas>
        </Panel>
        <PanelResizeHandle/>
        <Panel minSize={25} collapsible>
          <SettingsMenu isOpen={menuOpen} />
        </Panel>
      </PanelGroup>
  )
}

export default App
