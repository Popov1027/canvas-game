import {useEffect, useRef, useState} from "react";
import * as three from "three";
import {useFrame} from "react-three-fiber";

interface CubePosition {
  x: number,
  y: number,
  z: number
}

const Cube = () => {
  const cube = useRef<three.Mesh | null>(null);
  const [cubePosition, setCubePosition] = useState<CubePosition>({x: 0, y: 0, z: 0});
  const speed: number = 0.1;

  useFrame(() => {
    if (!cube.current) return;
    cube.current.position.set(cubePosition.x, cubePosition.y, cubePosition.z);
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "w":
          setCubePosition((prev) => ({...prev, z: prev.z - speed}));
          break;
        case "s":
          setCubePosition((prev) => ({...prev, z: prev.z + speed}));
          break;
        case "a":
          setCubePosition((prev) => ({...prev, x: prev.x - speed}));
          break;
        case "d":
          setCubePosition((prev) => ({...prev, x: prev.x + speed}));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


  return (
      <mesh ref={cube}>
        <boxBufferGeometry args={[1, 1, 1]}/>
        <meshStandardMaterial color="#EB4C42"/>
      </mesh>
  );
};

export default Cube;
