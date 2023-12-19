'use client'

import styles from './page.module.css'
import Scene from '@/components/canvas/Scene'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useRef } from 'react'
import Overlay from '@/components/Overlay'
import { ModelA7L } from '@/components/canvas/ModelA7L'
import { Environment } from "@react-three/drei"
export default function LandingPage() {
  const overlay = useRef<HTMLDivElement>()
  const scroll = useRef(0)

  return (
    <main className={styles.main}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <ModelA7L scroll={scroll} />
          <ambientLight intensity={0.8} />
          {/* <directionalLight position={[3.3, 1.0, -1]} intensity={2} /> */}
          <Environment files="/canvas/textures/moon_1k.hdr" />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} scroll={scroll} />
    </main>
  )
}
