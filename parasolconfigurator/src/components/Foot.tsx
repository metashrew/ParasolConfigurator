import { useGLTF } from "@react-three/drei/core/Gltf"

type Props = {
    size: number
    min: number
    max: number
}

export default function Foot({size, min, max}: Props) {

  const gltf = useGLTF(`./src/assets/foot.glb`)
  
  //this formula remaps any range min-max to 0-1
  const remappedValue = (size - min) / (max - min)
  gltf.nodes["Cylinder"].morphTargetInfluences[0] = remappedValue

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  )
}