'use client'

import { MutableRefObject, RefObject, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useThree, useFrame, Vector3 } from "@react-three/fiber";
import { PerspectiveCamera, useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useLayoutEffect } from "react";
import { SkylabSuit } from '@/components/canvas/SkylabSuit';
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { OrbitControls } from '@react-three/drei';

const INIT_CAM_POSITION: Vector3 = [0, 0, 10]

type HeroProps = {
  setCamPosition: Function,
}

export default function Scene({ setCamPosition }: HeroProps) {
  const [enableControls, setEnableControls] = useState(false)
  const [clicked, setClicked] = useState(false)
  const { scrollYProgress } = useScroll();
  const meshRef = useRef<any>(null)
  const cameraRef = useRef<any>(null)
  const { nodes, materials, animations } = useGLTF('/canvas/camera.glb')
  const { actions } = useAnimations(animations, cameraRef)
  const orbitControlsRef = useRef<any>(null)

  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [degreesToRadians(90), degreesToRadians(65)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const lookAtY = useTransform(scrollYProgress, [0, 1], [-0.1, 1.7]);
  // const time = useTime();

  useFrame((state) => {
    const { pointer, camera } = state
    setCamPosition([camera.position.x, camera.position.y, camera.position.z])
    if (!enableControls) {
      camera.position.setFromSphericalCoords(
        distance.get(),
        yAngle.get(),
        0.0005 // * time to make it spin
      );
      camera.updateProjectionMatrix();
      camera.lookAt(0, lookAtY.get(), 0);
    }
  });

  const onPointerDownMesh = (event: any) => {
    event.stopPropagation()
    setEnableControls(true)
  }
  const onPointerUpMesh = (event: any) => {
    event.stopPropagation()
    setEnableControls(false)
  }
  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault far={1000} near={0.1} fov={23} position={INIT_CAM_POSITION} />
      <OrbitControls ref={orbitControlsRef} enabled={enableControls} />
      <SkylabSuit
        forwardRef={meshRef}
        onWheel={() => setEnableControls(false)}
        onPointerDown={onPointerDownMesh}
        onPointerUp={onPointerUpMesh}
      />
    </>
  );
}

useGLTF.preload('/canvas/camera.glb')
