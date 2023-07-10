import {createContext, Dispatch, SetStateAction} from "react";

export interface ContextProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>> | null;
}

const ModalContext = createContext<ContextProps>({
   isModal: false,
   setIsModal: null
})

export default ModalContext;