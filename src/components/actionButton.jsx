/** Botões de ação para baixar audio e .txt */
import React from 'react';

/** Componente de botão com tailwind */
const ButtonAction = ({ type = "button", children, onClick }) => {
    return (
        <button
            type={type} 
            onClick={onClick} 
            className="border bg-white border-black rounded-md p-2 hover:bg-gray-200 w-1/2 text-center 
            transition-transform active:scale-95 focus:outline-none transform hover:scale-105"
        >
            {children}
        </button>
    );
};


const Buttonsend =  ({ type = "button", children, onClick }) => {
    return (
        <button
            type={type} 
            onClick={onClick} 
            className="border bg-white border-black rounded-md p-2 hover:bg-gray-200 w-full text-center justify-center
             items-center  duration-300 ease-in-out transform hover:scale-105
              transition-transform active:scale-95 focus:outline-none">
            {children}
        </button>
)};
export default ButtonAction;
export { Buttonsend };
