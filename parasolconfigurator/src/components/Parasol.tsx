import type { Parasol } from "../types/Parasol"

type Props = {
    parasolSettings: Parasol
}

export default function Parasol({parasolSettings}: Props) {
  let scale = 1
  switch (parasolSettings.size) {
    case 'M':
      scale = 1
      break;
    case 'L':
      scale = 1.5
      break;
    case 'XL':
      scale = 2
      break;
    default:
      break;
  }

  return (
    <>
      <mesh position={[0,0,2]} scale={scale}>
        <boxGeometry/>
        <meshStandardMaterial color={parasolSettings.color}/>
      </mesh>
    </>
  )
}