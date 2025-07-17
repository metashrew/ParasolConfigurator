import React from 'react'

type Props = {}

export default function Floor({}: Props) {
  return (
    <mesh rotation={[-Math.PI/2,0,0]}>
      <circleGeometry args={[2, 48]}/>
    </mesh>
  )
}