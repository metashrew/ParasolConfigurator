import './SettingsMenu.css'
import type { Parasol } from '../types/Parasol'
import type { ParasolSize } from '../types/Size'
import './RadioSelector.css'
import RadioSelectItem from './RadioSelectItem'
import ColorSelectItem from './ColorSelectItem'
import React, { type ChangeEvent, type CSSProperties, type Dispatch, type SetStateAction } from 'react'
import type { ParasolSettings } from '../types/ParasolSettings'

type Props = {
  setFootSize: Dispatch<SetStateAction<number>>
  footSize: number
  setParasol: Dispatch<SetStateAction<Parasol>>
  parasol: Parasol
  settings: ParasolSettings
}

export default function SettingsMenu({setFootSize, footSize, setParasol, parasol, settings}: Props) {

  const errorStyle: CSSProperties = {
    color: "red"
  }

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

  const handleSetFootSize = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.validity.valid) {
      setFootSize(Number(e.target.value))
    }
  }

  const validateFootsize = (e: React.FocusEvent<HTMLInputElement>) => {
    const validation = e.currentTarget.validity
    if(!validation.valid) {
      if(validation.rangeUnderflow) {
        e.currentTarget.value = e.currentTarget.min
      }
      if(validation.rangeOverflow) {
        e.currentTarget.value = e.currentTarget.max
      }
      if(validation.valueMissing) {
        e.currentTarget.value = e.currentTarget.min
      }
      setFootSize(Number(e.target.value))
    }
  }

  return (
    <div className='settings-container'>
      <div className='settings-group'>
        <h2>parasol</h2>
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
      </div>
      <div className='settings-group'>
        <h2>voet</h2>
        <div className='input-row'>
          <span>diameter</span>
          <div className='metric-input' style={errorStyle}>
            <input className='shadow' type="number" name="footsize" id="footsize" required min={30} max={60} defaultValue={footSize} maxLength={6} onChange={handleSetFootSize} onBlur={validateFootsize}/>
            <div>cm</div>
          </div>
        </div>
      </div>
    </div>
  )
}