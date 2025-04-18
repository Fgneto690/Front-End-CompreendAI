// src/hooks/useCompreendAI.js
import { useState } from "react";
import { simplificarTexto, uploadPdf, uploadImage } from "../apiService";

export const useCompreendAI = () => {
  const [textoOriginal, setTextoOriginal] = useState("");
  const [textoSimplificado, setTextoSimplificado] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o loading

  const simplificar = async () => {
    if (!textoOriginal.trim()) return;
    setIsLoading(true); // Ativa o loading
    try {
      const texto = await simplificarTexto(textoOriginal);
      setTextoSimplificado(texto || "Erro ao simplificar o texto.");
    } catch (error) {
      console.error("Erro ao simplificar o texto:", error);
      setTextoSimplificado("Erro ao simplificar o texto.");
    } finally {
      setIsLoading(false); // Desativa o loading
    }
  };

  const downloadTxt = () => {
    if (!textoSimplificado) return;
    const blob = new Blob([textoSimplificado], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "texto_simplificado.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const lerEmVozAlta = () => {
    if (!textoSimplificado) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textoSimplificado);
    utterance.lang = "pt-BR";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  const processarPDF = async (file) => {
    const texto = await uploadPdf(file);
    setTextoOriginal(texto || "Erro ao processar PDF.");
  };

  const processarImagem = async (file) => {
    const texto = await uploadImage(file);
    setTextoOriginal(texto || "Erro ao processar imagem.");
  };

  const pararLeitura = () => {
    window.speechSynthesis.cancel();
  };
  

  return {
    textoOriginal,
    setTextoOriginal,
    textoSimplificado,
    simplificar,
    downloadTxt,
    lerEmVozAlta,
    pararLeitura,
    processarPDF,
    processarImagem,
    isLoading,
  };
};
