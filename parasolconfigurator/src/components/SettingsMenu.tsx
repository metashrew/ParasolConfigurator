import './SettingsMenu.css'
import type { Parasol } from '../types/Parasol'
import type { ParasolSize } from '../types/Size'
import './RadioSelector.css'
import RadioSelectItem from './RadioSelectItem'
import ColorSelectItem from './ColorSelectItem'
import { type Dispatch, type SetStateAction } from 'react'
import type { ParasolSettings } from '../types/ParasolSettings'
import ValueInput from './ValueInput'
import Collapsable from './Collapsable'

type Props = {
  setFootSize: Dispatch<SetStateAction<number>>
  footSize: number
  setParasol: Dispatch<SetStateAction<Parasol>>
  parasol: Parasol
  settings: ParasolSettings
}

export default function SettingsMenu({setFootSize, footSize, setParasol, parasol, settings}: Props) {

  const setParasolColor = (index: number) => {
    setParasol({
      ...parasol,
      color: settings.colors[index]
    })
  }

  const setParasolSize = (index: number) => {
    setParasol({
      ...parasol,
      size: settings.sizes[index]
    })
  }

  return (
    <div className='settings-container'>
      <Collapsable title='Parasol'>
        <p>grootte</p>
        <div className='radio-list shadow'>
          {settings.sizes.map((option, i) => <RadioSelectItem<ParasolSize> key={i} option={option} stateValue={parasol.size} stateSetter={() => setParasolSize(i)}/>)}
        </div>
        <p>kleur</p>
        <div className='color-list'>
          {settings.colors.map((color, i) => 
            <ColorSelectItem key={i} option={color} stateValue={parasol.color} stateSetter={() => setParasolColor(i)}>
            </ColorSelectItem>
          )}
        </div>
      </Collapsable>
      <Collapsable title='Voet'>
          <div className='input-row'>
            <span>radius</span>
            <ValueInput value={footSize} setter={setFootSize} postfix='cm' min={settings.footsizeMin} max={settings.footsizeMax}/>
          </div>
      </Collapsable>
    </div>
  )
}