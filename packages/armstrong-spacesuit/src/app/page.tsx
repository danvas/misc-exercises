'use client'

import styles from './page.module.css'
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from "@react-three/drei"
import Overlay from '@/components/Overlay'
import { ModelA7L } from '@/components/ModelA7L'

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
