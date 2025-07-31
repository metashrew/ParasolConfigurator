import type { Parasol } from "../types/Parasol"
import { LoopOnce, MeshStandardMaterial } from "three"
import { useGLTF, useAnimations } from "@react-three/drei"

type Props = {
    parasol: Parasol
    path: string
}

export default function ParasolObject({parasol, path}: Props) {
  const gltf = useGLTF(`${path}.glb`)
  const { ref, actions } = useAnimations(gltf.animations)
  
  //play the animation when open/close state changes
  const action = actions["OpenClose"]
  if (action) {
    action.clampWhenFinished = true
    action.paused = false
    action.timeScale = (parasol.isOpen ? -1 : 1)
    action.setLoop(LoopOnce, 0)
    action.play()
  }

  //only show the model that matches the name of the current size
  gltf.scene.children.forEach(model => {
    if (model.name === `pole${parasol.size}`) {
      model.visible = true
    }
    else model.visible = false
  })

  //change the color when state changes
  const mat = gltf.materials["Parasol_fabric"] as MeshStandardMaterial
  if (mat != null) {
    mat.metalness = 0
    mat.roughness = 0.9
    mat.color = parasol.color
  }

  return (
      <>
        <primitive object={gltf.scene} ref={ref} />
      </>
  )
}