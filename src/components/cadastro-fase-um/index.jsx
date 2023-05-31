import "./styleFaseUm.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CadastroFaseUm() {
  const navigate = useNavigate();

  const [inputNome, setInputNome] = useState();
  const [inputSenha, setInputSenha] = useState();

  function cadastrar() {
    const novoEstabelecimento = {
      nome: inputNome,
      senha: inputSenha,
    };

    navigate("/cadastro/estabelecimento/2", { state: novoEstabelecimento });
  }

  return (
    <div className="body">
      <div className="inputs-cadastro">
        <h2 className="titulos">Cadastre seu estabelecimento</h2>
        <div className="textos">
          <br/>
          <span className="subtitulo0"> 1 - 4 </span>
          <br/>
          <br/>
          <input
            onChange={(evento) => setInputNome(evento.target.value)}
            className="campoTextoCadastro-cadastro"
            type="text"
            placeholder="Nome"
          ></input>
          <br className="broken"/>
          <input
            onChange={(evento) => setInputSenha(evento.target.value)}
            className="campoTextoCadastro-cadastro"
            type="text"
            placeholder="Senha"
          ></input>
          <br className="broken"/>

          <div className="imagem">
            <input className="" type="file" />
            <br/>
            <button className="button-27">Adicionar Imagem</button>
          </div>
          <br/>
          <button onClick={cadastrar} className="button-28">
            Proximo
          </button>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default CadastroFaseUm;
