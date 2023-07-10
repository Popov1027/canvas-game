import * as THREE from 'three'
import React, {useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {Vector3} from "three";
import {useFrame} from "react-three-fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_9: THREE.SkinnedMesh
    Object_10: THREE.SkinnedMesh
    Object_25: THREE.SkinnedMesh
    Object_26: THREE.SkinnedMesh
    Object_41: THREE.SkinnedMesh
    Object_42: THREE.SkinnedMesh
    Object_57: THREE.SkinnedMesh
    Object_58: THREE.SkinnedMesh
    Object_73: THREE.SkinnedMesh
    Object_74: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
    _rootJoint_1: THREE.Bone
    _rootJoint_2: THREE.Bone
    _rootJoint_3: THREE.Bone
    _rootJoint_4: THREE.Bone
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export default function BirdsModel(props: JSX.IntrinsicElements['group']) {
  const group = useRef<any>()
  const { nodes, materials, animations } = useGLTF('/assets/birds.glb') as unknown as GLTFResult

  const [offset, setOffset] = useState(new Vector3(Math.random(), Math.random(), Math.random()));
  const [position, setPosition] = useState<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    group.current.position.x = position.x + Math.sin(state.clock.getElapsedTime() / 3 + offset.x) * 3;
    group.current.position.z = position.z + Math.sin(state.clock.getElapsedTime() / 3 + offset.z) * 3;

    group.current.rotation.y += 0.01
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.004} position={[0, 4, 0]}>
          <group name="caa1de82125e43cab16cdc38a1378805fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Plane" position={[0.01, -11.99, -9.06]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={10} />
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={10}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_8" position={[0.01, -11.99, -9.06]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={10} />
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Material} skeleton={nodes.Object_9.skeleton} />
                    <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Material.001']} skeleton={nodes.Object_10.skeleton} />
                  </group>
                </group>
                <group name="Plane001" position={[27.96, -10.43, 20.37]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={9.56} />
                <group name="Armature001" position={[27.95, 1.04, 29.03]} rotation={[-Math.PI / 2, 0, 0]} scale={9.56}>
                  <group name="Object_22">
                    <primitive object={nodes._rootJoint_1} />
                    <group name="Object_24" position={[27.96, -10.43, 20.37]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={9.56} />
                    <skinnedMesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.Material} skeleton={nodes.Object_25.skeleton} />
                    <skinnedMesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials['Material.001']} skeleton={nodes.Object_26.skeleton} />
                  </group>
                </group>
                <group name="Plane002" position={[-32.58, -13.04, 34.37]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={10} />
                <group name="Armature002" position={[-32.6, -1.04, 43.43]} rotation={[-Math.PI / 2, 0, 0]} scale={10}>
                  <group name="Object_38">
                    <primitive object={nodes._rootJoint_2} />
                    <group name="Object_40" position={[-32.58, -13.04, 34.37]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={10} />
                    <skinnedMesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.Material} skeleton={nodes.Object_41.skeleton} />
                    <skinnedMesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials['Material.001']} skeleton={nodes.Object_42.skeleton} />
                  </group>
                </group>
                <group name="Plane003" position={[37.88, -14.19, 65.87]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={10} />
                <group name="Armature003" position={[37.87, -2.19, 74.93]} rotation={[-Math.PI / 2, 0, 0]} scale={10}>
                  <group name="Object_54">
                    <primitive object={nodes._rootJoint_3} />
                    <group name="Object_56" position={[37.88, -14.19, 65.87]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={10} />
                    <skinnedMesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.Material} skeleton={nodes.Object_57.skeleton} />
                    <skinnedMesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials['Material.001']} skeleton={nodes.Object_58.skeleton} />
                  </group>
                </group>
                <group name="Plane004" position={[-39.02, -7.77, 87.42]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={8.3} />
                <group name="Armature004" position={[-39.03, 2.18, 94.94]} rotation={[-Math.PI / 2, 0, 0]} scale={8.3}>
                  <group name="Object_70">
                    <primitive object={nodes._rootJoint_4} />
                    <group name="Object_72" position={[-39.02, -7.77, 87.42]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={8.3} />
                    <skinnedMesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials.Material} skeleton={nodes.Object_73.skeleton} />
                    <skinnedMesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials['Material.001']} skeleton={nodes.Object_74.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/birds.glb')
