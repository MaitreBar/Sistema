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
              const usuarioLogado = {
                estabelecimento: true,
                id: response.data.id,
                nome: response.data.nome,
                senha: response.data.senha,
                logradouro: response.data.logradouro,
                numero: response.data.numero,
                complemento: response.data.complemento,
                cep: response.data.cep,
                diasDaSemana: response.data.diasDaSemana,
                faixaDePreco: response.data.faixaDePreco,
                cnpj: response.data.cnpj,
                horarioAbertura: response.data.horarioAbertura,
                horarioFechamento: response.data.horarioFechamento,
                descricao: response.data.descricao,
                email: response.data.email,
                tags: response.data.tags,
                assentos: response.data.assentos,
              };
              navigate("/perfil/estabelecimento", { state: usuarioLogado });
            })
            .catch((err2) => {
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
