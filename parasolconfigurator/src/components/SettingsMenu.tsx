import './SettingsMenu.css'
import type { Parasol } from '../types/Parasol'
import type { ParasolSize } from '../types/Size'
import './RadioSelector.css'
import { Color } from 'three'
import RadioSelectItem from './RadioSelectItem'

type Props = {
  setParasolSize: Function
  setParasolColor: Function
  setFootSize: Function
  parasol: Parasol
}

export default function SettingsMenu({setFootSize, setParasolSize, setParasolColor, parasol}: Props) {

  // const settingsStyle: CSSProperties = {
  //   margin: "20px"
  // }
  const sizes : Array<ParasolSize> = ['M','L','XL']
  const colors : Array<Color> = [
    new Color().setHex(0xFF0000),
    new Color().setHex(0x00FF00),
    new Color().setHex(0x0000FF),
  ]

  return (
    <div className='settings-container'>
      <h2>parasol</h2>
      <h3>grootte</h3>
      {/* <RadioSelector<ParasolSize> options={['M','L','XL']} stateValue={parasol.size} stateSetter={setParasolSize} /> */}
      <div className='radio-list'>
        {sizes.map((option) => <RadioSelectItem<ParasolSize> option={option} stateValue={parasol.size} stateSetter={setParasolSize}/>)}
      </div>
      <h3>kleur</h3>
      <div className='color-list'>
        {colors.map((color) => 
          <RadioSelectItem<Color> option={color} stateValue={parasol.color} stateSetter={setParasolColor}>
            <span style={{backgroundColor: "#" + color.getHexString()}}></span>
          </RadioSelectItem>
        )}
      </div>
      <h2>voet</h2>
      <h3>diameter</h3>
      <input type="text" name="footsize" id="footsize" defaultValue="50cm" onChange={e => setFootSize(e.target.value)} />
    </div>
  )
}