import {useRef} from "react";
import * as three from "three";
import {useFrame} from "react-three-fiber";
import Forest from "../Sections/Forest/Forest";
import Farm from "../Sections/Farm/Farm";
import Mountains from "../Sections/Mountains/Mountains";
import City from "../Sections/City/City";

const GameMap = () => {
  const gameMap = useRef<three.Mesh | null>(null);

  useFrame(() => {
    if (!gameMap.current) return;
  });

  return (
    <>
      <mesh ref={gameMap}>
        <Forest/>
        <Farm/>
        <Mountains/>
        <City/>
      </mesh>
    </>
  );
};

export default GameMap;
