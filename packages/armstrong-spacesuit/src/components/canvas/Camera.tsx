import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'

export function KeyframedCamera(props: any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/canvas/camera.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <PerspectiveCamera name="Camera" makeDefault far={1000} near={0.1} fov={22.895} position={[0, 0.94, 5.42]} />
      </group>
    </group>
  )
}

useGLTF.preload('/canvas/camera.glb')
