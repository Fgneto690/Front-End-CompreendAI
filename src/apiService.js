export const simplificarTexto = async (textoOriginal) => {
  try {
    const response = await fetch("http://localhost:8000/simplify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: textoOriginal }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || "Erro ao simplificar");
    }

    return data.simplified_text;
  } catch (error) {
    console.error("Erro ao chamar a API:", error);
    return null;
  }
};

export const uploadPdf = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("http://localhost:8000/upload_pdf", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar o PDF para o servidor.");
    }

    const data = await response.json();
    return data.texto; // Certifique-se de que o back-end retorna o texto no campo "texto"
  } catch (error) {
    console.error("Erro ao fazer upload do PDF:", error);
    return null;
  }
};

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("http://localhost:8000/upload_image", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || "Erro ao processar imagem");
    }

    return data.texto;
  } catch (error) {
    console.error("Erro ao enviar imagem:", error);
    return null;
  }
}
 