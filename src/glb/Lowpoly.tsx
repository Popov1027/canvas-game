import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Grass_1_06_-_Default_0']: THREE.Mesh
    ['Rock_4_06_-_Default_0']: THREE.Mesh
    ['Grass_5_06_-_Default_0']: THREE.Mesh
    ['Tree_1_1_06_-_Default_0']: THREE.Mesh
    ['Tree_1_2_06_-_Default_0']: THREE.Mesh
    ['Tree_1_3_06_-_Default_0']: THREE.Mesh
    ['Log_2_06_-_Default_0']: THREE.Mesh
    ['Big_rock_2_06_-_Default_0']: THREE.Mesh
    ['Tree_5_3_06_-_Default_0']: THREE.Mesh
    ['Tree_5_1_06_-_Default_0']: THREE.Mesh
    ['Tree_5_2_06_-_Default_0']: THREE.Mesh
    ['Stump_1_06_-_Default_0']: THREE.Mesh
    ['Tree_Cut_1_06_-_Default_0']: THREE.Mesh
    ['Tree_Cut_2_06_-_Default_0']: THREE.Mesh
    ['Tree_Cut_3_06_-_Default_0']: THREE.Mesh
    ['Rock_2_06_-_Default_0']: THREE.Mesh
    ['Rock_1_06_-_Default_0']: THREE.Mesh
    ['Rock_3_06_-_Default_0']: THREE.Mesh
    ['Tree_2_1_06_-_Default_0']: THREE.Mesh
    ['Tree_2_3_06_-_Default_0']: THREE.Mesh
    ['Tree_2_2_06_-_Default_0']: THREE.Mesh
    ['Log_1_06_-_Default_0']: THREE.Mesh
    ['Mushroom_2_06_-_Default_0']: THREE.Mesh
    ['Mushroom_1_06_-_Default_0']: THREE.Mesh
    ['Grass_3_06_-_Default_0']: THREE.Mesh
    ['Mushroom_3_06_-_Default_0']: THREE.Mesh
    ['Grass_4_06_-_Default_0']: THREE.Mesh
    ['Tree_4_1_06_-_Default_0']: THREE.Mesh
    ['Tree_4_3_06_-_Default_0']: THREE.Mesh
    ['Stump_2_06_-_Default_0']: THREE.Mesh
    ['Tree_4_2_06_-_Default_0']: THREE.Mesh
    ['Grass_2_06_-_Default_0']: THREE.Mesh
    ['Tree_3_1_06_-_Default_0']: THREE.Mesh
    ['Tree_3_3_06_-_Default_0']: THREE.Mesh
    ['Tree_3_2_06_-_Default_0']: THREE.Mesh
    ['Big_rock_1_06_-_Default_0']: THREE.Mesh
    ['Big_rock_3_06_-_Default_0']: THREE.Mesh
  }
  materials: {
    ['06_-_Default']: THREE.MeshStandardMaterial
  }
}

export default function Lowpoly(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/assets/lowpoly.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null} scale={[2,2,2]} position={[-2.5, 0, 0.5]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-20.61, 11.31, 67.18]} rotation={[-1.25, 0.09, 1.83]} scale={1.05}>
            <mesh geometry={nodes['Grass_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[91.4, -652.71, 68.1]} />
          </group>
          <group position={[-24.41, 2.19, 75.99]} rotation={[-1.41, -0.56, 1.44]} scale={0.5}>
            <mesh geometry={nodes['Rock_4_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[84.04, -674.4, 75.15]} />
          </group>
          <group position={[-38.68, 11.61, -79.54]} rotation={[-1.33, 0.22, 2.3]} scale={1.05}>
            <mesh geometry={nodes['Grass_5_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[112.72, -502.34, 60.74]} />
          </group>
          <group position={[71.54, 21.82, 171.93]} rotation={[-1.65, 0.32, -2.91]} scale={1.05}>
            <mesh geometry={nodes['Big_rock_2_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[154.64, -756.43, 35.99]} />
          </group>
          <group position={[153.89, 21.82, -57.59]} rotation={[-1.85, 0.2, -2.17]} scale={[1.05, 0.96, 1.05]}>
            <mesh geometry={nodes['Big_rock_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[154.64, -756.43, 35.99]} />
          </group>
          <group position={[115.41, 21.82, -177.32]} rotation={[-1.85, 0.2, -2.17]} scale={[1.05, 0.96, 1.05]}>
            <mesh geometry={nodes['Big_rock_3_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[154.64, -756.43, 35.99]} />
          </group>
          <mesh geometry={nodes['Tree_1_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_1_2_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_1_3_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_5_3_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_5_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_5_2_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Stump_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_Cut_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_Cut_2_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_Cut_3_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Rock_2_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Rock_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Rock_3_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_2_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_2_3_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_2_2_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Log_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Mushroom_2_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Mushroom_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Grass_3_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Mushroom_3_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Grass_4_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_4_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_4_3_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Stump_2_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_4_2_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Grass_2_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_3_1_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_3_3_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
          <mesh geometry={nodes['Tree_3_2_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-240.9, 110.24, -574.24]} rotation={[-1.65, 0.32, -2.91]} scale={1.05} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/lowpoly.glb')
