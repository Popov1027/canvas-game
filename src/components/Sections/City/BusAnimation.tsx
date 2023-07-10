import React, {useEffect, useRef, useState} from 'react';
import {GLTF} from "three-stdlib";
import * as THREE from "three";
import {useGLTF} from "@react-three/drei";
import {useFrame} from "react-three-fiber";

type GLTFResult = GLTF & {
  nodes: {
    bus_COLOR_0: THREE.Mesh
  },
  materials: {
    COLOR: THREE.MeshStandardMaterial
  }
}
const BusAnimation = () => {
  const {nodes, materials} = useGLTF('/assets/citta.glb') as unknown as GLTFResult;
  const busRef = useRef<THREE.Mesh | null>(null);
  const [position, setPosition] = useState<THREE.Vector3>(new THREE.Vector3(-3813.04, 285.06, -845.18));
  const [side, setSide] = useState<number>(0);
  const speed: number = 1.5;

  useFrame(({ clock }) => {
    if (!busRef.current) return;

    switch (side) {
      case 0:
        setPosition(position.add(new THREE.Vector3(speed, 0, 0)));
        if (position.x === -1875.04) {
          busRef.current.rotation.z = -Math.PI
          setSide(1)
        };
        break;
      case 1:
        setPosition(position.add(new THREE.Vector3(0, 0, speed)));
        if (position.z  === 2900.32) {
          busRef.current.rotation.z = Math.PI / 2
          setSide(2);
        };
        break;
      case 2:
        setPosition(position.add(new THREE.Vector3(-speed, 0, 0)));
        if (position.x === -6009.04) {
          busRef.current.rotation.z = Math.PI * 2
          setSide(3);
        };
        break;
      case 3:
        setPosition(position.add(new THREE.Vector3(0, 0, -speed)));
        if (position.z === -810.6799999999998) {
          busRef.current.rotation.z = -Math.PI / 2
          setSide(0)
        };
        break;
    }
    busRef.current.position.set(position.x, position.y, position.z);
  });

  return (
    <mesh
      ref={busRef}
      geometry={nodes.bus_COLOR_0.geometry}
      material={materials.COLOR}
      position={[-3813.04, 285.06, -845.18]}
      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      scale={80.14}
    />
  );
};

export default BusAnimation;