import './SettingsMenu.css'
import type { Parasol } from '../types/Parasol'
import type { ParasolSize } from '../types/Size'
import type { ParasolSettings } from '../types/ParasolSettings'
import ValueInput from './ValueInput'
import Collapsable from './Collapsable'
import type { Color } from 'three'
import RadioSelectList from './RadioSelect/RadioSelectList'

type Props = {
  setFootSize: (radius: number) => void
  footSize: number
  setParasolSize: (index: number) => void
  setParasolColor: (index: number) => void
  parasol: Parasol
  settings: ParasolSettings
}

export default function SettingsMenu({setFootSize, footSize, setParasolSize, setParasolColor, parasol, settings}: Props) {

  return (
    <div className='settings-container'>
      <Collapsable title='Parasol'>
        <p>grootte</p>
        <RadioSelectList<ParasolSize> stateSetter={setParasolSize} stateValue={parasol.size} items={settings.sizes}/>
          
        <p>kleur</p>
        <RadioSelectList<Color> className='color-list' stateSetter={setParasolColor} stateValue={parasol.color} items={settings.colors}>
          {(item) => (
            <div style={{backgroundColor: '#' + item.getHexString(), height: "100%", width: "100%"}}></div>
          )}
        </RadioSelectList>
      </Collapsable>
      <Collapsable title='Voet'>
        <div className='input-row'>
          <span>radius</span>
          <ValueInput value={footSize} setter={setFootSize} postfix='cm' min={settings.footSizeMin} max={settings.footSizeMax}/>
        </div>
      </Collapsable>
    </div>
  )
}