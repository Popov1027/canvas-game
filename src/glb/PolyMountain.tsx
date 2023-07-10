import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {useRef} from "react";
import {useFrame} from "react-three-fiber";

type GLTFResult = GLTF & {
  nodes: {
    Plane_1: THREE.Mesh
    Plane_2: THREE.Mesh
    Plane_3: THREE.Mesh
    Plane_4: THREE.Mesh
    Plane_5: THREE.Mesh
    Plane_6: THREE.Mesh
    Plane_7: THREE.Mesh
    Plane_8: THREE.Mesh
    Plane_9: THREE.Mesh
    Plane_10: THREE.Mesh
    Plane_11: THREE.Mesh
    Plane_12: THREE.Mesh
    Plane_13: THREE.Mesh
    Plane_14: THREE.Mesh
    Plane_15: THREE.Mesh
    Plane_16: THREE.Mesh
    Plane_17: THREE.Mesh
    Plane_18: THREE.Mesh
    Plane_19: THREE.Mesh
    Plane_20: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.022']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    ['Material.012']: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.014']: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshStandardMaterial
    ['Material.017']: THREE.MeshStandardMaterial
    ['Material.018']: THREE.MeshStandardMaterial
    ['Material.019']: THREE.MeshStandardMaterial
    ['Material.020']: THREE.MeshStandardMaterial
    ['Material.021']: THREE.MeshStandardMaterial
    ['Material.000']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
  }
}

export default function PolyMountain(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/assets/poly_mountain.glb') as unknown as GLTFResult
  const cloudRef = useRef<any>();

  useFrame((state) => {
    cloudRef.current.rotation.z += 0.0008
  });

  return (
    <group {...props} dispose={null} scale={[0.7,0.7,0.7]} position={[0,0.26,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={7.02}>
          <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.003']} />
          <mesh ref={cloudRef} geometry={nodes.Plane_4.geometry} material={materials['Material.022']} />
          <mesh geometry={nodes.Plane_5.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Plane_6.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.Plane_7.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Plane_8.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Plane_9.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Plane_10.geometry} material={materials['Material.013']} />
          <mesh geometry={nodes.Plane_11.geometry} material={materials['Material.014']} />
          <mesh geometry={nodes.Plane_12.geometry} material={materials['Material.015']} />
          <mesh geometry={nodes.Plane_13.geometry} material={materials['Material.016']} />
          <mesh geometry={nodes.Plane_14.geometry} material={materials['Material.017']} />
          <mesh geometry={nodes.Plane_15.geometry} material={materials['Material.018']} />
          <mesh geometry={nodes.Plane_16.geometry} material={materials['Material.019']} />
          <mesh geometry={nodes.Plane_17.geometry} material={materials['Material.020']} />
          <mesh geometry={nodes.Plane_18.geometry} material={materials['Material.021']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/poly_mountain.glb')
