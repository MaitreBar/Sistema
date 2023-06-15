import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../api";

function Login() {
  const [inputEmail, setInputEmail] = useState();
  const [inputSenha, setInputSenha] = useState();

  const navigate = useNavigate();

  function logar(evento) {
    evento.preventDefault();
    api
      .get(`/usuarios/${inputEmail}/${inputSenha}`)
      .then((response) => {
        console.log(response);
        console.log("Logado com sucesso");
        const usuarioLogado = response.data;
        navigate("/perfil/cliente", { state: usuarioLogado });
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          api
            .get(`/estabelecimentos/${inputEmail}/${inputSenha}`)
            .then((response) => {
              console.log(response);
              console.log("Estabelecimento Entrou");
              const estabelecimentoLogado = response.data;
              navigate("/perfil/estabelecimento", {
                state: estabelecimentoLogado,
              });
            })
            .catch((err2) => {
              alert("E-mail ou Senha invalido!!");
              console.error(err2);
            });
        } else {
          console.error(err);
        }
      });
  }

  return (
    <div className="backgroundBody">
      <div className="containerMarromClaro">
        <p className="tituloContainer colorBlack" alt="Login">
          Login
        </p>
        <p className="txtDecisao">
          Não possui login?{" "}
          <a className="txtVerde" href="/cadastro">
            Cadastre-se
          </a>
        </p>
        <form onSubmit={logar} className="formulario">
          <p className="textoAlerta">E-mail e/ou senha não conferem!</p>
          <input
            onChange={(e) => setInputEmail(e.target.value)}
            className="formularioInput inputGrande"
            type="email"
            placeholder="E-mail"
            alt="campo e-mail"
            autoFocus
          />
          <p className="textoAlerta">Esse campo não pode ser vazio!</p>
          <input
            onChange={(e) => setInputSenha(e.target.value)}
            className="formularioInput inputGrande"
            type="password"
            placeholder="Senha"
            alt="campo senha"
          />
          <p className="textoAlerta">Esse campo não pode ser vazio!</p>
          <p className="txtDecisao">
            Esqueceu a senha ou o e-mail?{" "}
            <a className="txtVerde" href="/recuperar">
              Clique aqui!
            </a>
          </p>
          <button type="submit" className="btnSistema btnMedio">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
