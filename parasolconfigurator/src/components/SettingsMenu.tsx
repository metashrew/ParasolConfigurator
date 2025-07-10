import { type CSSProperties } from 'react'
import './SettingsMenu.css'

type Props = {
  setParasolSize: Function
  setFootSize: Function
}

export default function SettingsMenu({setFootSize, setParasolSize}: Props) {
  const settingsStyle: CSSProperties = {
    margin: "20px"
  }

  return (
    <div style={settingsStyle}>
      <h2>grootte</h2>
      <div>
        <div onClick={setParasolSize("M")}>M</div>
        <div onClick={setParasolSize("L")}>L</div>
        <div onClick={setParasolSize("XL")}>XL</div>
      </div>
      <h2>kleur</h2>
      <div style={{display: 'flex'}}>
        <h2>grootte voet</h2>
        <input type="number" min={20} max={100} name="footsize" id="footsize" required step="0.1" defaultValue="50" onChange={e => setFootSize(e.target.value)} />
      </div>
    </div>
  )
}