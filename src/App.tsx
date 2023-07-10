import React, {useEffect, useState} from "react";
import ModalContext from "./context/ModalContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MapPage from "./pages/MapPage/MapPage";

const Roots = () => {
  const [isModal, setIsModal] = useState<boolean>(false)

  useEffect(() => {
    const defaultContextMenu = (e: any) => {
      e.preventDefault()
    }
    document.addEventListener("contextmenu", defaultContextMenu)
    return () => {
      document.removeEventListener("contextmenu", defaultContextMenu)
    }
  }, []);

  return (
    <ModalContext.Provider value={{isModal, setIsModal}}>
      <Routes>
        <Route path="/" element={<MapPage/>}/>
      </Routes>
    </ModalContext.Provider>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Roots/>
    </BrowserRouter>
  );
};

export default App;
