import type { Color } from 'three'

type Props = {
    option: Color
    stateValue: Color
    stateSetter: Function
}

export default function ColorSelectItem({ option, stateValue, stateSetter}: Props) {
  return (
    <button className={(stateValue.getHex() == option.getHex() ? "selected" : undefined)} style={{backgroundColor: '#' + option.getHexString()}} onClick={e => stateSetter()}> 
    </button>
  )
}