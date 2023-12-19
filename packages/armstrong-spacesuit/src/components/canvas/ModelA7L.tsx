import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import { useFrame, ObjectMap } from "@react-three/fiber"

function setEnvMapIntensity(materials: ObjectMap['materials'], intensity: number) {
  for (var mat of Object.keys(materials)) {
    const material = materials[mat] as THREE.MeshStandardMaterial
    material.envMapIntensity = intensity
  }
}

export function ModelA7L({ scroll }: any) {
  const camRef = useRef<any>();
  const {
    nodes,
    materials,
    animations
  } = useGLTF("/canvas/A7L_anim.glb");
  const { actions } = useAnimations(animations, camRef)

  useEffect(() => {
    // Dial down the environment HDR intensity
    setEnvMapIntensity(materials, 0.3)
    actions.CameraAction!.play().paused = true
  }, [])

  useFrame((state) => {
    actions.CameraAction!.time = THREE.MathUtils.lerp(actions.CameraAction!.time, actions.CameraAction!.getClip().duration * scroll.current, 0.05)
  })

  return (
    <group dispose={null}>
      <group name="Scene">
        <PerspectiveCamera
          ref={camRef}
          name="Camera"
          makeDefault
          far={1000}
          near={0.1}
          fov={23}
          position={[0, 1, 5]}
          userData={{ name: "Camera" }}
        />
        <group name="astronaut001" userData={{ name: "astronaut.001" }}>
          <mesh
            name="astronaut001_1"
            castShadow
            receiveShadow
            geometry={(nodes.astronaut001_1 as any).geometry}
            material={materials["StingrayPBS2.001"]}
          />
          <mesh
            name="astronaut001_2"
            castShadow
            receiveShadow
            geometry={(nodes.astronaut001_2 as any).geometry}
            material={materials["StingrayPBS3.001"]}
          />
          <mesh
            name="astronaut001_3"
            castShadow
            receiveShadow
            geometry={(nodes.astronaut001_3 as any).geometry}
            material={materials["StingrayPBS4.001"]}
          />
          <mesh
            name="astronaut001_4"
            castShadow
            receiveShadow
            geometry={(nodes.astronaut001_4 as any).geometry}
            material={materials["StingrayPBS1.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/canvas/A7L_anim.glb");
