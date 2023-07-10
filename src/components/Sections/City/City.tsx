import React, {useContext, useState, Suspense} from 'react';
import {config, useSpring, animated} from "@react-spring/three";
import ModalContext, {ContextProps} from "../../../context/ModalContext";
import Citta from "../../../glb/Citta";

const City = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const {isModal, setIsModal} = useContext<ContextProps>(ModalContext);

  const { scale } = useSpring({
    scale: isHover ? 1.02 : 1,
    config: config.wobbly
  });

  return (
    <animated.mesh
      scale={scale}
      position={[5, 0, 5]}
      // onClick={()=>setIsModal?.(!isModal)}
      onPointerOver={() => setIsHover(true)}
      onPointerOut={() => setIsHover(false)}
    >
      <boxGeometry args={[10, 0.5, 10]}/>
      <meshLambertMaterial color="#6FBB38"/>
      <Suspense fallback={null}>
        <Citta/>
      </Suspense>
    </animated.mesh>
  );
};

export default City;