import { useMemo } from "react"
import { MeshStandardMaterial, Shape, type ExtrudeGeometryOptions } from "three"

type Props = {
    size: number
    height?: number
}

export default function Foot({size, height = 0.075}: Props) {
  const pipeRadius = 0.03
  const realSize = size / 100
  const slant = 0.05

  const material = useMemo(() => <meshStandardMaterial roughness={0.2} color={0x333333}/>,[])

  return (
    <group>
      <mesh position={[0,height/2,0]}>
        <cylinderGeometry args={[realSize - slant, realSize, height, 20]}/>
        {material}
      </mesh>
      <mesh position={[0,0.10,0]}>
        <cylinderGeometry args={[pipeRadius, pipeRadius, 0.1]}/>
        {material}
      </mesh>
    </group>
  )
}