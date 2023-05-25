import { useState } from "react";
import "./styleFaseDois.css";
import { useLocation, useNavigate } from "react-router-dom";


function CadastroFaseDois() {
  const navigate = useNavigate();

  const { state: novoEstabelecimento } = useLocation();

  const [inputLogradouro, setInputLogradouro] = useState();
  const [inputNumero, setInputNumero] = useState();
  const [inputComplemento, setInputComplemento] = useState();
  const [inputTelefone, setInputTelefone] = useState();

  function cadastrar() {
    const novoEstabelecimento2 = {
      nome: novoEstabelecimento.nome,
      senha: novoEstabelecimento.senha,
      logradouro: inputLogradouro,
      numero: inputNumero,
      complemento: inputComplemento,
      telefone: inputTelefone,
    };

    navigate("/cadastro-estabelecimento-pt3", { state: novoEstabelecimento2 });
  }

  return (
    <div className="body">
      <div className="inputs-cadastro">
        <h2 className="titulos">Cadastre seu estabelecimento</h2>
        <div className="textos">
          <br/>
          <span className="subtitulo0"> 2 - 4 </span>
          <br/>
          <br/>
          <input
            className="campoTextoCadastro-cadastro"
            onChange={(evento) => setInputLogradouro(evento.target.value)}
            type="text"
            placeholder="Logradouro"
          ></input>
          <br className="broken"/>
          <input
            className="campoTextoCadastro-cadastro"
            onChange={(evento) => setInputNumero(evento.target.value)}
            type="text"
            placeholder="Número"
          ></input>
          <br className="broken"/>
          <input
            className="campoTextoCadastro-cadastro"
            onChange={(evento) => setInputComplemento(evento.target.value)}
            type="text"
            placeholder="Complemento"
          ></input>
          <br className="broken"/>
          <input
            className="campoTextoCadastro-cadastro"
            onChange={(evento) => setInputTelefone(evento.target.value)}
            type="text"
            placeholder="Telefone"
          ></input>
          <br className="broken"/>
          <button onClick={cadastrar} className="button-28">
            Proximo
          </button>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default CadastroFaseDois;
