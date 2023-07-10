import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube011_0: THREE.Mesh
    Cube013_0: THREE.Mesh
    Plane002_0: THREE.Mesh
    Plane000_0: THREE.Mesh
    Cube009_0: THREE.Mesh
    Cube010_0: THREE.Mesh
    Text001_0: THREE.Mesh
    Cube014_0: THREE.Mesh
    Plane005_0: THREE.Mesh
    Plane_0: THREE.Mesh
    Sphere001_0: THREE.Mesh
    Cube001_0: THREE.Mesh
    Cube000_0: THREE.Mesh
    Cube002_0: THREE.Mesh
    Cylinder000_0: THREE.Mesh
    Cylinder001_0: THREE.Mesh
    Plane001_0: THREE.Mesh
    Plane003_0: THREE.Mesh
    Plane004_0: THREE.Mesh
    Plane008_0: THREE.Mesh
    Plane006_0: THREE.Mesh
    Plane007_0: THREE.Mesh
  }
  materials: {
    material_14: THREE.MeshPhysicalMaterial
    material_13: THREE.MeshStandardMaterial
    material_12: THREE.MeshStandardMaterial
    material_11: THREE.MeshStandardMaterial
    material_10: THREE.MeshStandardMaterial
    material_9: THREE.MeshStandardMaterial
    material_8: THREE.MeshStandardMaterial
    material_7: THREE.MeshStandardMaterial
    material_6: THREE.MeshStandardMaterial
    material_5: THREE.MeshStandardMaterial
    material_4: THREE.MeshStandardMaterial
    material_3: THREE.MeshStandardMaterial
    material_2: THREE.MeshStandardMaterial
    material_1: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
  }
}

export default function PolyFarm(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/assets/poly_farm.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null} scale={[0.27,0.3,0.26]} position={[-1, 0.5, 2.49]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cube011_0.geometry} material={materials.material_14} position={[5.61, 12.99, 4.1]} rotation={[-0.02, -0.01, 0.82]} scale={[0.26, 0.26, 0.2]} />
        <mesh geometry={nodes.Cube013_0.geometry} material={materials.material_13} position={[0.86, 18.17, 3.04]} rotation={[0, 0, Math.PI / 2]} scale={0.96} />
        <mesh geometry={nodes.Plane002_0.geometry} material={materials.material_12} position={[0, 0, 0.4]} scale={27.97} />
        <mesh geometry={nodes.Plane000_0.geometry} material={materials.material_11} position={[5.07, 23.4, 11.79]} rotation={[-0.48, 0.2, 1.2]} scale={0.39} />
        <mesh geometry={nodes.Cube009_0.geometry} material={materials.material_10} position={[15.08, -1.57, 0.51]} />
        <mesh geometry={nodes.Cube010_0.geometry} material={materials.material_9} position={[7.77, -1.57, 0.33]} />
        <mesh geometry={nodes.Text001_0.geometry} material={materials.material_8} position={[20.01, 7.23, 5.61]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Cube014_0.geometry} material={materials.material_7} position={[-5.17, 9.11, 15.45]} scale={0.1} />
        <mesh geometry={nodes.Plane005_0.geometry} material={materials.material_6} position={[-11.17, 25.24, 5.74]} rotation={[Math.PI / 2, -1, 0]} scale={[1.3, 2.02, 1.3]} />
        <mesh geometry={nodes.Plane_0.geometry} material={materials.material_5} position={[11.67, -0.83, -0.04]} rotation={[0, 0, 1.26]} scale={0.7} />
        <mesh geometry={nodes.Sphere001_0.geometry} material={materials.material_4} position={[12.24, 20.06, 0.7]} rotation={[-Math.PI / 2, 0, -1.38]} scale={1.04} />
        <mesh geometry={nodes.Cube001_0.geometry} material={materials.material_3} position={[1.98, 1.59, 0.53]} scale={[0.56, 0.77, 0.56]} />
        <mesh geometry={nodes.Cube000_0.geometry} material={materials.material_3} position={[2.23, -0.26, 0.53]} rotation={[0, 0, -3.01]} scale={[0.56, 0.77, 0.56]} />
        <mesh geometry={nodes.Cube002_0.geometry} material={materials.material_3} position={[2.14, 0.71, 1.63]} rotation={[Math.PI, 0, 0.13]} scale={[0.56, 0.77, 0.56]} />
        <mesh geometry={nodes.Cylinder000_0.geometry} material={materials.material_2} position={[3.86, 18.23, -0.05]} rotation={[0.11, -0.11, 0.6]} scale={0.13} />
        <mesh geometry={nodes.Cylinder001_0.geometry} material={materials.material_2} position={[5.18, 19.74, 0.22]} rotation={[0, 0, -1.19]} scale={0.13} />
        <mesh geometry={nodes.Plane001_0.geometry} material={materials.material_1} position={[16.64, 17.94, 0.93]} rotation={[0.14, -0.04, -0.52]} scale={0.45} />
        <mesh geometry={nodes.Plane003_0.geometry} material={materials.material_1} position={[18.72, 18.33, 0.94]} rotation={[0, 0, -2.86]} scale={0.45} />
        <mesh geometry={nodes.Plane004_0.geometry} material={materials.material_1} position={[-1.19, -2.66, 1.31]} rotation={[0, 0, -1.61]} scale={0.27} />
        <mesh geometry={nodes.Plane008_0.geometry} material={materials.material} position={[12.77, 10.98, 2.1]} rotation={[-1.35, -1.2, -0.77]} scale={0.05} />
        <mesh geometry={nodes.Plane006_0.geometry} material={materials.material} position={[19.13, 13.38, 2.1]} rotation={[1.58, -0.41, 2.16]} scale={0.05} />
        <mesh geometry={nodes.Plane007_0.geometry} material={materials.material} position={[2.93, -3.63, 2.25]} rotation={[-1.56, 0.63, -0.97]} scale={0.05} />
      </group>
    </group>
  )
}

useGLTF.preload('/poly_farm.glb')
