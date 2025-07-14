import { GLTFLoader } from "three/examples/jsm/Addons.js"
import type { Parasol } from "../types/Parasol"

type Props = {
    parasol: Parasol
}

export default function ParasolObject({parasol}: Props) {
  // const gltf = useLoader(GLTFLoader, )


  let scale = 1
  switch (parasol.size) {
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
        <meshStandardMaterial color={parasol.color}/>
      </mesh>
    </>
  )
}