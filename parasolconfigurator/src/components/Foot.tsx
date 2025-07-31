import { useGLTF } from "@react-three/drei/core/Gltf"

type Props = {
    size: number
}

export default function Foot({size}: Props) {

  const gltf = useGLTF(`./src/assets/foot.glb`)
  const remappedValue = (size - 30) / 30
  gltf.nodes["Cylinder"].morphTargetInfluences[0] = remappedValue

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  )
}