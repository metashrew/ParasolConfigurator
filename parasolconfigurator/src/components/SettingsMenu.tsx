import React, { type CSSProperties } from 'react'
import './SettingsMenu.css'

type Props = {
    isOpen: boolean
}

export default function SettingsMenu({isOpen}: Props) {
  const settingsStyle = /* isOpen ? 'settings-container' : */ 'settings-container settingsOpen'

  return (
    // <div className={settingsStyle}>
      <div style={{margin: "20px"}}>
        <h2>grootte</h2>
        <p>sdqsdfq</p>
        <h2>kleur</h2>
        <h2>grootte voet</h2>
        <div style={{display: 'flex'}}>
          <input type="range" min="30" max="60" defaultValue="50" className="slider" id="myRange"></input>
          <input type="text" name="footsize" id="footsize" />
        </div>
      </div>
    // </div>
  )
}