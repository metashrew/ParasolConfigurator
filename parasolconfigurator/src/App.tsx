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
import DragSVG from './components/SVG/DragSVG'

function App() {
  const parasolSettings = parasols[0]

  const [footSize, setFootSize] = useState(parasolSettings.footSizeMin);
  const [parasol, setParasol] = useState<Parasol>({ size: parasolSettings.sizes[0], color: parasolSettings.colors[0], isOpen: true});

  const width = useWindowWidth({wait: 1})
  const isDesktop = width > 800

  const openParasol = () => {
    setParasol((prevParasol) => ({...prevParasol, isOpen: !parasol.isOpen}))
  }

  const handleChangeParasolSize = (index: number) => {
    setParasol({
      ...parasol,
      size: parasolSettings.sizes[index]
    })
  }

  const handleChangeParasolColor = (index: number) => {
    setParasol({
      ...parasol,
      color: parasolSettings.colors[index]
    })
  }

  const handleChangeFootsize = (radius: number) => {
    setFootSize(radius)
  }

  return (
    <PanelGroup direction={isDesktop ? 'horizontal' : 'vertical'}>
        
        <Panel defaultSize={75} className='canvas-container'>
          <button className={('floating-button' + (parasol.isOpen ? ' open' : ''))} onClick={openParasol}>{parasol.isOpen ? "Close ⛱️" : "Open ⛱️"}</button>
          <Canvas resize={{debounce: 0}} shadows camera={{position: [3,2.75,2]}}>
            {/* <ambientLight intensity={1}/> */}
            {/* <Floor/> */}
            <Environment preset='forest'/>
            <OrbitControls enablePan={false} target={[0,1.5,0]} />
            <Foot size={footSize} min={30} max={60} path={parasolSettings.footModelPath}/>
            <Suspense>
              <ParasolObject parasol={parasol} path={parasolSettings.parasolModelPath}/>
            </Suspense>
          </Canvas>
        </Panel>

        <PanelResizeHandle className='drag-area'>
          <DragSVG/>
        </PanelResizeHandle>

        <Panel minSize={isDesktop ? 25 : 0} maxSize={75} collapsible className='settings' style={{overflow: 'auto'}}>
          <SettingsMenu 
            parasol={parasol} 
            footSize={footSize} 
            setFootSize={handleChangeFootsize} 
            setParasolSize={handleChangeParasolSize}
            setParasolColor={handleChangeParasolColor}
            settings={parasolSettings} 
          />
        </Panel>
        
    </PanelGroup>
  )
}

export default App
