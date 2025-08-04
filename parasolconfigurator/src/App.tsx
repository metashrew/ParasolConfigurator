import { Environment, OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels'
import SettingsMenu from './components/SettingsMenu'
import { Suspense, useState } from 'react'
import Foot from './components/Foot'
import type { Parasol } from './types/Parasol'
import ParasolObject from "./components/ParasolObject" 
import { parasols } from './data/data'
import Floor from './components/Floor'
import { useWindowWidth } from '@react-hook/window-size'

function App() {
  const parasolSettings = parasols[0]
  const [footSize, setFootSize] = useState(50);
  const [parasol, setParasol] = useState<Parasol>({ size: parasolSettings.sizes[0], color: parasolSettings.colors[0], isOpen: true});

  const width = useWindowWidth({wait: 1})
  const isDesktop = width > 800

  const openParasol = () => {
    setParasol({...parasol, isOpen: !parasol.isOpen})
  }

  return (
    <PanelGroup direction={isDesktop ? 'horizontal' : 'vertical'}>
        <Panel defaultSize={75} className='relative canvas-container'>
          <button className={('floating-button' + (parasol.isOpen ? ' open' : ''))} onClick={openParasol}>{parasol.isOpen ? "Close ⛱️" : "Open ⛱️"}</button>
          <Canvas resize={{debounce: 0}} shadows>
            <color attach="background" args={['#ccc']} />
            <Environment preset='forest'/>
            {/* <ambientLight intensity={1}/> */}
            <OrbitControls enablePan={false} target={[0,1.5,0]}/>
            <Foot size={footSize} min={30} max={60}/>
            <Suspense>
              <ParasolObject parasol={parasol} path={parasolSettings.modelpath}/>
            </Suspense>
            {/* <Floor/> */}
          </Canvas>
        </Panel>
        <PanelResizeHandle className='drag-area'>
          <svg fill="#000" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" stroke="#000" strokeWidth="0.00016" transform="rotate(0)">
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M8,6.5A1.5,1.5,0,1,0,9.5,8,1.5,1.5,0,0,0,8,6.5Zm0,5A1.5,1.5,0,1,0,9.5,13,1.5,1.5,0,0,0,8,11.47ZM8,4.53A1.5,1.5,0,1,0,6.5,3,1.5,1.5,0,0,0,8,4.53Z"></path>
              </g>
            </g>
          </svg>
        </ PanelResizeHandle>
        <Panel minSize={25} maxSize={75} collapsible className='settings' style={{overflow: 'auto'}}>
          <SettingsMenu setFootSize={setFootSize} footSize={footSize} setParasol={setParasol} parasol={parasol} settings={parasolSettings} />
        </Panel>
    </PanelGroup>
  )
}

export default App
