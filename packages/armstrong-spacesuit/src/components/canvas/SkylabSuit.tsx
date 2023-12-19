import * as THREE from "three";
import React, { ComponentPropsWithRef, ReactElement } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    astronaut_1: THREE.Mesh;
    astronaut_2: THREE.Mesh;
    astronaut_3: THREE.Mesh;
    astronaut_4: THREE.Mesh;
  };
  materials: {
    StingrayPBS2: THREE.MeshStandardMaterial;
    StingrayPBS3: THREE.MeshStandardMaterial;
    StingrayPBS4: THREE.MeshStandardMaterial;
    StingrayPBS1: THREE.MeshStandardMaterial;
  };
};

export function SkylabSuit(props: ComponentPropsWithRef<any>) {
  const { nodes, materials } = useGLTF("/canvas/armstrong-suit.glb") as GLTFResult;
  return (
    <group {...props} ref={props.forwardRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.astronaut_1.geometry}
        material={materials.StingrayPBS2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.astronaut_2.geometry}
        material={materials.StingrayPBS3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.astronaut_3.geometry}
        material={materials.StingrayPBS4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.astronaut_4.geometry}
        material={materials.StingrayPBS1}
      />
    </group>
  );
}

useGLTF.preload("/canvas/armstrong-suit.glb");
