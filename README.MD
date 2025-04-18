🧠 CompreendAI - Front-End

O Front-End do CompreendAI é uma interface interativa que permite aos usuários simplificar textos complexos, realizar upload de PDFs ou imagens para extração de texto, ouvir o texto simplificado em voz alta e baixá-lo como um arquivo .txt. Ele foi desenvolvido com React e estilizado com Tailwind CSS.

🚀 Tecnologias Utilizadas

React 19+: Biblioteca para construção de interfaces de usuário.
Tailwind CSS: Framework para estilização rápida e responsiva.
Vite: Ferramenta para desenvolvimento rápido e eficiente.
SpeechSynthesis API: Para leitura em voz alta do texto simplificado.

📦 Estrutura do Projeto

```bash 
    Front-End/
    ├── public/
    │   └── vite.svg            # Ícone padrão do Vite
    ├── src/
    │   ├── assets/
    │   │   └── logo/
    │   │       └── Logo.png    # Logotipo do projeto
    │   ├── components/
    │   │   ├── actionButton.jsx # Botões de ação
    │   │   ├── inputTxt.jsx     # Campo de entrada de texto
    │   │   └── RespostaTexto.jsx # Exibição do texto simplificado
    │   ├── hooks/
    │   │   └── useCompreendAI.js # Hook personalizado para lógica do projeto
    │   ├── pages/
    │   │   └── Home.jsx         # Página principal
    │   ├── apiService.js        # Comunicação com a API
    │   ├── index.css            # Estilos globais com Tailwind CSS
    │   └── main.jsx             # Arquivo principal do React
    ├── .gitignore               # Arquivos ignorados pelo Git
    ├── index.html               # Arquivo HTML principal
    ├── package.json             # Dependências do projeto
    ├── postcss.config.js        # Configuração do PostCSS
    └── tailwind.config.js       # Configuração do Tailwind CSS
```

🛠️ Funcionalidades

Upload de Arquivos:
Envie PDFs ou imagens para extração de texto.

Simplificação de Texto:
Simplifique textos complexos com um clique.

Leitura em Voz Alta:
Ouça o texto simplificado usando a API de síntese de voz.

Download de Texto:
Baixe o texto simplificado em formato .txt.

📦 Requisitos

Node.js: Versão 16 ou superior.
Navegador Moderno: Compatível com ES6+ e suporte à API SpeechSynthesis.

🛠️ Instalação
Clone o repositório:
```bash 
git clone https://github.com/seu-usuario/compreendai-frontend.git
cd compreendai/Front-End/CompreendAi Front-end
```

Instale as dependências:
```bash 
npm install
```

Inicie o servidor de desenvolvimento:
```bash 
npm run dev
```

Acesse a aplicação:

http://localhost:5173

🌟 Como Usar
Digite ou Cole o Texto:

Insira o texto no campo de entrada para simplificação.
Faça Upload de Arquivos:

Envie um PDF ou uma imagem para extração de texto.
Clique em "Simplificar Texto":

O texto será processado e simplificado.
Interaja com o Texto Simplificado:

Ouça o texto em voz alta ou baixe-o como um arquivo .txt.
📌 Roadmap
✅ Upload e leitura de PDFs.
✅ Upload e leitura de imagens com OCR.
✅ Simplificação de texto.
✅ Leitura em voz alta.
✅ Download do texto simplificado.
🟡 Melhorar a acessibilidade (WCAG).
🟡 Adicionar suporte a múltiplos idiomas.

👤 Autor
Desenvolvido por Francisco Soares como parte do projeto CompreendAI, com foco em acessibilidade e inclusão.

LinkedIn: Francisco Soares
GitHub: Fgneto690
📄 Licença
Este projeto é apenas para fins educacionais, testes e uso pessoal.

