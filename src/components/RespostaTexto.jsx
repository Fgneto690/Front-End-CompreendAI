import React from 'react';

/** Componente de exibição da resposta simplificada */
const ChatResponse = ({ responseText }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 bg-gray-50 w-full h-64 overflow-y-auto whitespace-pre-wrap">
      {responseText ? responseText : 'Aguardando resposta da IA...'}
    </div>
  );
};

export default ChatResponse;
