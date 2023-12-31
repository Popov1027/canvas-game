import React, {useContext} from 'react';
import ModalContext, {ContextProps} from "../../context/ModalContext";

const SectionModal = () => {
  const {isModal, setIsModal} = useContext<ContextProps>(ModalContext);

  return (
  <div className="flex justify-center items-center fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full backdrop-blur-[5px]">
    <div className="relative w-full h-full max-w-2xl md:h-auto">
      <div className="relative bg-white rounded-lg">
        <div className="flex items-start justify-between p-4 border-b rounded-t ">
          <h3 className="text-xl font-semibold text-gray-900">
            Terms of Service
          </h3>
          <button
            onClick={()=> setIsModal?.(!isModal)}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </div>
        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
          <button  type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I accept</button>
        </div>
      </div>
    </div>
  </div>

  );
};

export default SectionModal;