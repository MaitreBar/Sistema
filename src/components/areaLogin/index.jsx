import "./styleLogin.css";
import { useLocation, useNavigate } from "react-router-dom";

import api from "../../api";
import { useState } from "react";
import { HttpStatusCode } from "axios";

function AreaLogin() {
  const [inputEmail, setInputEmail] = useState();
  const [inputSenha, setInputSenha] = useState();

  const navigate = useNavigate();

  function login() {

    api
      .post(`/usuarios/${inputEmail}/${inputSenha}`)
      .then((response) => {
        console.log(response);
        console.log("Logado com sucesso");
        const usuarioLogado = response.data;
        sessionStorage.setItem("id", usuarioLogado.id)
        sessionStorage.setItem("nome", usuarioLogado.nome);
        sessionStorage.setItem("email", usuarioLogado.email);
        sessionStorage.setItem("cpf", usuarioLogado.cpf);
        sessionStorage.setItem("dtNasc", usuarioLogado.dtNasc);
        sessionStorage.setItem("celular", usuarioLogado.celular);
        sessionStorage.setItem("rg", usuarioLogado.rg);
        sessionStorage.setItem("tags", usuarioLogado.tags);
        navigate("/perfil/usuario", { state: usuarioLogado });
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          api
            .post(`/estabelecimentos/${inputEmail}/${inputSenha}`)
            .then((response) => {
              console.log(response);
              console.log("Estabelecimento Entrou");
              const usuarioLogado = response.data;
              sessionStorage.setItem("id", usuarioLogado.id)
              sessionStorage.setItem("nome", usuarioLogado.nome);
              sessionStorage.setItem("email", usuarioLogado.email);
              sessionStorage.setItem("cpf", usuarioLogado.cpf);
              sessionStorage.setItem("dtNasc", usuarioLogado.dtNasc);
              sessionStorage.setItem("celular", usuarioLogado.celular);
              sessionStorage.setItem("rg", usuarioLogado.rg);
              sessionStorage.setItem("tags", usuarioLogado.tags);
              navigate("/perfil/estabelecimento", { state: usuarioLogado });
            }
            )
        } else { console.error(err); }
      });
  }

  return (
    <div className="body">
      <div className="inputs-cadastro">
        <h2 className="titulos">LOGIN</h2>
        <div className="textos">
          <span className="subtitulo2">
            Não possui cadastro?{" "}
            <a onClick={() => navigate("/cadastro")}>cadastre-se</a>
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
            type="password"
            placeholder="Digite sua senha"
          ></input>
          <br className="broken"></br>
          <span className="subtitulo1">
            Esqueceu a senha ou email?<a>clique aqui</a>
          </span>
          <br></br>
          <button className="button-28" onClick={login}>
            LOGIN
          </button>
          <br></br>
        </div>
      </div>
    </div>
  );
}

console.log();

export default AreaLogin;
