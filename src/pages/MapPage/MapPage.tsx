import React, {useContext, useState} from 'react';
import SectionModal from "../../components/Modals/SectionModal";
import ContextMenu from "../../components/Modals/ContextMenu";
import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import GameMap from "../../components/GameMap/GameMap";
import {MousePosition} from "../../interfaces/mouse.interface";
import ModalContext from "../../context/ModalContext";

const MapPage = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({x: 0, y: 0});
  const isModal = useContext(ModalContext)

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenu(true);
    setMousePosition({x: e.clientX, y: e.clientY});
  };

  return (
    <div className="h-screen w-screen">
      {!isModal && <SectionModal/>}
      <ContextMenu isMenu={isMenu} mousePosition={mousePosition} setIsMenu={setIsMenu}/>
      <Canvas
        camera={{
          position: [10, 17, 0]
        }}
        onContextMenu={handleContextMenu}
      >
        <OrbitControls/>
        <pointLight intensity={1.0} position={[26, 35, 23]}/>
        <GameMap/>
      </Canvas>
    </div>
  );
};

export default MapPage;