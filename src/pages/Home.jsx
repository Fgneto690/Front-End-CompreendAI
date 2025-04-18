import React from 'react';
import InputTxt from '../components/inputTxt';
import ButtonAction from '../components/actionButton';
import ChatResponse from '../components/RespostaTexto';
import Logo from '../assets/logo/Logo.png';
import { Buttonsend } from '../components/actionButton';
import { useCompreendAI } from "../hooks/useCompreendAI";

const Home = () => {
  const {
    textoOriginal,
    setTextoOriginal,
    textoSimplificado,
    simplificar,
    downloadTxt,
    lerEmVozAlta,
    pararLeitura,
    processarPDF,
    processarImagem,
    isLoading, // Estado de loading
  } = useCompreendAI();

  return (
    <div className="min-h-screen flex flex-col bg-blue-900">
      {/* Conteúdo principal */}
      <div className="flex-grow container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Coluna Esquerda */}
        <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col gap-4">
          <img src={Logo} alt="CompreendAI" className="w-20 mb-2" />

          <InputTxt
            placeholder="Digite ou cole o texto aqui"
            value={textoOriginal}
            type="text"
            onChange={(e) => setTextoOriginal(e.target.value)}
          />

          <div className="flex space-x-2">
            <label className="w-1/2 cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition-transform active:scale-95 focus:outline-none duration-300 ease-in-out transform hover:scale-105">
              Upload PDF
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => processarPDF(e.target.files[0])}
                className="hidden"
              />
            </label>

            <label className="w-1/2 cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition-transform active:scale-95 focus:outline-none duration-300 ease-in-out transform hover:scale-105">
              Upload Imagem
              <input
                type="file"
                accept="image/*"
                onChange={(e) => processarImagem(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>

          <Buttonsend onClick={simplificar}>Simplificar Texto</Buttonsend>
        </div>

        {/* Coluna Direita */}
        <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col gap-4">
          <img src={Logo} alt="CompreendAI" className="w-20 mb-2" />

          <h3 className="text-lg font-semibold">Texto simplificado</h3>

          {/* Exibe o loading ou o texto simplificado */}
          {isLoading ? (
            <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
              <span className="w-3 h-3 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-3 h-3 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"></span>
              <span className="ml-2">Simplificando...</span>
            </div>
          ) : (
            <ChatResponse responseText={textoSimplificado} />
          )}

          <div className="flex space-x-4">
            <ButtonAction onClick={lerEmVozAlta}>
              Play Áudio
            </ButtonAction>
            <ButtonAction onClick={pararLeitura}>
              Parar Áudio
            </ButtonAction>
            <ButtonAction onClick={downloadTxt}>
              Baixar .Txt
            </ButtonAction>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex bg-white w-full p-4 mt-4 rounded-lg shadow items-center justify-between">
        <img src={Logo} alt="CompreendAI" className="w-20" />
        <h3 className="text-md">CompreendAI - Todos os direitos reservados © 2023</h3>
      </footer>
    </div>
  );
};

export default Home;