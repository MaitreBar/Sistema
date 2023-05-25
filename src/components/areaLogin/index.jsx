import "./styleLogin.css";
import { useNavigate } from "react-router-dom";

import api from "../../api"
import { useState } from "react";

function AreaLogin() {
  
  const [inputEmail, setInputEmail] = useState();
  const [inputSenha, setInputSenha] = useState();

  const navigate = useNavigate();

  function login () {

    api.post(`/usuarios/${inputEmail}/${inputSenha}`)
    .then((response)=>{
      console.log(response);
      console.log("Logado com sucesso");
      const usuarioLogado = response.data;
      navigate("/perfil" , {state: usuarioLogado})
    }).catch((err) => {
        console.error(err)
    });

  };
  
  return (
    <div className="body">
      <div className="inputs-cadastro">
        <h2 className="titulos">LOGIN</h2>
        <div className="textos">
          <span className="subtitulo2">
            Não possui cadastro? <a onClick={() => navigate("/cadastro")}>cadastre-se</a>
          </span>
          <br></br>
          <input 
            onChange={(e) => setInputEmail(e.target.value)}
            className="campoTextoCadastro" 
            type="text" 
            placeholder="Digite o seu email"
          ></input>
          <br className="broken"></br>
          <input 
            onChange={(e) => setInputSenha(e.target.value)}
            className="campoTextoCadastro" 
            type="text" //Mudar pra pass.
            placeholder="Digite sua senha"
          ></input>
          <br className="broken"></br>
          <span className="subtitulo1">Esqueceu a senha ou email?<a>clique aqui</a></span>
          <br></br>
          <button className="button-28" onClick={login}>LOGIN</button>
          <br></br>
        </div>
      </div>
    </div>
  );
}

console.log();

export default AreaLogin;