import { useGLTF } from "@react-three/drei/core/Gltf"

type Props = {
    path: string
    size: number
    min: number
    max: number
}

export default function Foot({path, size, min, max}: Props) {

  const gltf = useGLTF(path)
  
  //this formula remaps values that a value between min and max, becomes a value between 0 and 1
  //values outside of min/max also work
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