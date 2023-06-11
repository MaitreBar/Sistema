import NavbarDeslogada from "../../navbar/NavbarDeslogada";
import "../../../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

function CadastroEstabelicimentoUm() {
  const [inputEmail, setInputEmail] = useState();
  const [inputSenha, setInputSenha] = useState();

  const navigate = useNavigate();

  function cadastrar(evento) {
    evento.preventDefault();
    const novoEstabelecimento = {
      email: inputEmail,
      senha: inputSenha,
    };

    navigate("/cadastro/estabelecimento/dois", { state: novoEstabelecimento });
  }

  return (
    <section>
      <NavbarDeslogada />
      <div className="backgroundBody">
        <div className="containerMarromClaro">
          <p
            className="tituloContainer colorBlack"
            alt="Cadastre seu estabelecimento"
          >
            Cadastre seu estabelecimento
          </p>
          <p className="txtOldTT">1 - 4</p>
          <form onSubmit={(evento) => cadastrar(evento)} className="formulario">
            <input
              className="formularioInput inputGrande"
              type="email"
              placeholder="E-mail"
              alt="campo e-mail"
              autoFocus
              onChange={(evento) => setInputEmail(evento.target.value)}
            />
            <p className="textoAlerta">Esse e-mail inválido!</p>
            <p className="textoAlerta">Esse campo não pode ser vazio!</p>
            <input
              className="formularioInput inputGrande"
              type="password"
              placeholder="Senha"
              alt="campo e-mail"
              onChange={(evento) => setInputSenha(evento.target.value)}
            />
            <p className="textoAlerta">Esse campo não pode ser vazio!</p>
            <br />
            <br />
            <input className="" type="file" />
            <br></br>
            <button className="btnSistema btnMedio">Adicionar Imagem</button>
            <button type="submit" className=" btnSistema btnMedio">
              Proximo
            </button>
            <button type="submit" className="btnSistema btnSemFundo">
              Voltar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default CadastroEstabelicimentoUm;
