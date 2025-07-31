import { useGLTF } from "@react-three/drei/core/Gltf"
import { useMemo } from "react"
import { MeshStandardMaterial, Shape, type ExtrudeGeometryOptions } from "three"
import { Group } from "three/examples/jsm/libs/tween.module.js"

type Props = {
    size: number
    height?: number
}

export default function Foot({size, height = 0.075}: Props) {
  
  const gltf = useGLTF(`./src/assets/foot.glb`)
  const remappedValue = (size - 30) / 30
  console.log(remappedValue)
  gltf.nodes["Cylinder"].morphTargetInfluences[0] = remappedValue

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  )
}