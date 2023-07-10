import {MousePosition} from "../../interfaces/mouse.interface";
import React from "react";
import {menuOptions} from "./MenuOptions";

type Props = {
  isMenu: boolean,
  setIsMenu:  React.Dispatch<React.SetStateAction<boolean>>
  mousePosition: MousePosition
}

const ContextMenu = ({isMenu, setIsMenu, mousePosition}:Props) => {
  return (
    <div onClick={() => setIsMenu(false)}>
      {isMenu && (
        <div
          className="fixed top-0 left-0 bottom-0 right-0 z-50 bg-opacity-75 w-full"
        >
          <div
            className="relative w-48 bg-white rounded-lg"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          >
            {menuOptions.map((option)=> {
              return (
                <ul key={option.id} id={option.id}>
                  <li className="p-3 no-underline hover:underline hover:text-orange-500 transition duration-500 cursor-pointer font-bold">{option.name}</li>
                </ul>
              )
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContextMenu;