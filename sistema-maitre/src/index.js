import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Catalogo from './pages/Catalogo';
import CadastroEstabelecimento from './pages/cadastroEstabelecimento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Catalogo/>  */}
    {/* <Cadastro/> */}
    {/* <Login/>  */}
    {/* <CadastroEstabelecimento/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
