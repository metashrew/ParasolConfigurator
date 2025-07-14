import { MeshStandardMaterial, Shape, type ExtrudeGeometryOptions } from "three"

type Props = {
    size: number
    height?: number
}

export default function Foot({size, height = 20}: Props) {
  const pipeRadius = 0.06
  const realSize = size / 100

  const circleRadius = realSize;

  const options: ExtrudeGeometryOptions = {
    depth: 0.1
  }

  return (
    <group>
      <mesh position={[0,0.10,0]}>
        <cylinderGeometry args={[realSize - 0.10, realSize, 0.10, height]}/>
        <meshStandardMaterial roughness={0.2}/>
      </mesh>
      <mesh position={[0,0.2,0]}>
        <cylinderGeometry args={[pipeRadius, pipeRadius, 0.3]}/>
        <meshStandardMaterial roughness={0.2}/>
      </mesh>
    </group>
  )
}