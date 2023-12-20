'use client'

import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from "@react-three/drei"
import Overlay from '@/components/Overlay'
import { ModelA7L } from '@/components/ModelA7L'

export default function LandingPage() {
  const overlay = useRef<HTMLDivElement>()
  const scroll = useRef(0)

  return (
    <>
      <Canvas shadows>
        <Suspense fallback={null}>
          <ModelA7L scroll={scroll} />
          <ambientLight intensity={0.8} />
          <Environment files="/canvas/textures/moon_1k.hdr" />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} scroll={scroll} />
    </>
  )
}
