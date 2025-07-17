import type { Parasol } from "../types/Parasol"
import { LoopOnce, MeshStandardMaterial } from "three"
import { useGLTF, useAnimations } from "@react-three/drei"
import { act, useEffect, useMemo } from "react"
import { useGraph } from "@react-three/fiber"

type Props = {
    parasol: Parasol
    path: string
}

export default function ParasolObject({parasol, path}: Props) {
  const gltf = useGLTF(`${path}-${parasol.size}.glb`)
  const { ref, actions, mixer, names, clips } = useAnimations(gltf.animations, gltf.scene)
  console.log('----- rerender start -----')
  // console.log(`${parasol.size}`)
  // console.log(ref)
  // console.log(actions)
  // console.log(clips)
  // console.log(names)
  
  
  useEffect(()=>{
    let action = mixer.existingAction("OpenClose")
    if (action == null) action = actions["OpenClose"]
    else {
      action.enabled = false
      action = actions["OpenClose"]
    }
    console.log(mixer)
    console.log(gltf)
    if (action) {
      action.clampWhenFinished = true
      action.paused = false
      action.timeScale = -action.timeScale
      action.setLoop(LoopOnce, 0)
      action.play()
    }
  },[parasol.isOpen])


  const mat = gltf.materials["Parasol_fabric"] as MeshStandardMaterial
  if (mat != null) {
    mat.metalness = 0
    mat.roughness = .8
    mat.color = parasol.color
  }

  return (
      <>
        <primitive object={gltf.scene} ref={ref} />
      </>
  )
}