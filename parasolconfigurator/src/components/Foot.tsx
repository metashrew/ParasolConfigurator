import { useGLTF } from "@react-three/drei/core/Gltf"

type Props = {
    path: string
    size: number
    min: number
    max: number
}

export default function Foot({path, size, min, max}: Props) {

  const gltf = useGLTF(path)
  
  //this formula remaps any value range from min to max, to a value range from 0 to 1
  const remappedValue = (size - min) / (max - min)
  if (gltf.meshes["Cylinder"].morphTargetInfluences != undefined) {
    gltf.meshes["Cylinder"].morphTargetInfluences[0] = remappedValue
  }

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  )
}