import { Environment, Grid, OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels'
import SettingsMenu from './components/SettingsMenu'
import { useState } from 'react'
import Foot from './components/Foot'
import type { Parasol } from './types/Parasol'
import ParasolObject from "./components/Parasol" 
import type { ParasolSize } from './types/Size'
import { Color } from 'three'

function App() {
  const [footSize, setFootSize] = useState(50);
  const [parasol, setParasol] = useState<Parasol>({ size: "M", color: new Color().setHex(0x005500)});

  const handleSetParasolSize = (size: ParasolSize) => {
    setParasol({
      ...parasol,
      size: size
    })
  }

  const handleSetParasolColor = (userinput: Color) => {
    setParasol({
      ...parasol,
      color: userinput
    })
  }

  const handleSetFootSize = (userinput: string) => {
    
  }


  return (
    <PanelGroup direction='horizontal'>
        <Panel defaultSize={75}>
          <Canvas>
            <Environment preset='sunset'/>
            <gridHelper args={[10,10, 0x000000]}/>
            <OrbitControls enableZoom={false} target={[0,2,0]}/>
            {/* <ambientLight intensity={0.1} />
            <directionalLight position={[-5,5,5]} /> */}
            <Foot size={footSize} />
            <ParasolObject parasolSettings={parasol} />
          </Canvas>
        </Panel>
        <PanelResizeHandle className='drag-area'>
          <svg fill="#000" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" stroke="#000" strokeWidth="0.00016" transform="rotate(0)"><g id="SVGRepo_iconCarrier"> <g> <path d="M8,6.5A1.5,1.5,0,1,0,9.5,8,1.5,1.5,0,0,0,8,6.5Zm0,5A1.5,1.5,0,1,0,9.5,13,1.5,1.5,0,0,0,8,11.47ZM8,4.53A1.5,1.5,0,1,0,6.5,3,1.5,1.5,0,0,0,8,4.53Z"></path> </g> </g></svg>
        </ PanelResizeHandle>
        <Panel minSize={25} collapsible>
          <SettingsMenu setFootSize={handleSetFootSize} setParasolSize={handleSetParasolSize} setParasolColor={handleSetParasolColor} parasol={parasol} />
        </Panel>
    </PanelGroup>
  )
}

export default App
