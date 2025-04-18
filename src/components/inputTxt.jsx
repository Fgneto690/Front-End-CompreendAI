/** Criar um componente de input com tailwind */
import React from 'react';

/** Componente de input com tailwind */
const InputTxt = ({ placeholder, value, onChange }) => {  
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border bg-white border-black rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-64 resize-none"
    />
  );
}

export default InputTxt;