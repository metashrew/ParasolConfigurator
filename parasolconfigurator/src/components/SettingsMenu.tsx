import './SettingsMenu.css'
import type { Parasol } from '../types/Parasol'
import type { ParasolSize } from '../types/Size'
import './RadioSelector.css'
import { Color } from 'three'
import RadioSelectItem from './RadioSelectItem'
import ColorSelectItem from './ColorSelectItem'
import { useState, type ChangeEvent, type ChangeEventHandler, type Dispatch, type InputEvent, type SetStateAction } from 'react'
import type { ParasolSettings } from '../types/ParasolSettings'

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
    console.log("im getting called")
    console.log(index)
    setParasol({
      ...parasol,
      size: settings.sizes[index]
    })
  }

  const handleSetFootSize = (e: ChangeEvent<HTMLInputElement>) => {
    let input = parseInt(e.target.value)
    if (isNaN(input)) {
      e.target.value = String(footSize)
      input = footSize
    }
    if (isNaN(input) || input < 30) e.target.value = "30"
    if (input > 60) e.target.value = "60"
    setFootSize(Number(e.target.value))
  }

  return (
    <div className='settings-container'>
      <div className='settings-group'>
        <h2>parasol</h2>
        <p>grootte</p>
        <div className='radio-list shadow'>
          {settings.sizes.map((option, i) => <RadioSelectItem<ParasolSize> option={option} stateValue={parasol.size} stateSetter={() => setParasolSize(i)}/>)}
        </div>
        <p>kleur</p>
        <div className='color-list'>
          {settings.colors.map((color, i) => 
            <ColorSelectItem option={color} stateValue={parasol.color} stateSetter={() => setParasolColor(i)}>
            </ColorSelectItem>
          )}
        </div>
        <p>open/dicht</p>
        <button></button>
      </div>
      <div className='settings-group'>
        <h2>voet</h2>
        <div className='input-row'>
          <span>diameter</span>
          <div className='metric-input'>
            <input className='shadow' type="number" name="footsize" id="footsize" min={30} max={60} defaultValue={footSize} maxLength={6} onBlur={handleSetFootSize}/>
            <div>cm</div>
          </div>
        </div>
      </div>
    </div>
  )
}