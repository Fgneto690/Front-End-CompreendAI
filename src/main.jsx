import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Certifique-se que o tailwind está aqui
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
