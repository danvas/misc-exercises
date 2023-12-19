'use client'

import styles from './page.module.css'
import Scene from '@/components/canvas/Scene'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'

export default function LandingPage() {
  const [camPosition, setCamPosition] = useState<number[]>([0, 1, 0])
  const [camX, camY, camZ] = camPosition
  return (
    <main className={styles.main}>
      <div>Camera:</div>
      <div>position ({(Math.round(camX * 100) / 100).toFixed(2)}, {(Math.round(camY * 100) / 100).toFixed(2)}, {(Math.round(camZ * 100) / 100).toFixed(2)})</div>
      <Canvas>
        <ambientLight intensity={1.5} />
        <hemisphereLight intensity={2} />
        <directionalLight intensity={1.5} position={[10, 10, 10]} />
        <Scene
          setCamPosition={setCamPosition}
        />

      </Canvas>
    </main>
  )
}
