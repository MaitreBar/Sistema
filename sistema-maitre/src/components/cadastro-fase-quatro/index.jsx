import "./styleFaseQuatro.css";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api";

function CadastroFaseQuatro() {
  const navigate = useNavigate();

  const [tagSelecionadas, setTagSelecionadas] = useState([]);
  const [textoSelecao, setTextoSelecao] = useState("");
  const [novaTag, setNovaTag] = useState("");

  const [tags, setTags] = useState([
    "Drinks",
    "Não Alcóolicas",
    "Cerveja",
    "Japonesa",
    "Fast-food",
    "Petiscos",
    "Feijoada",
    "Pizza",
    "Shows",
    "Raggae",
    "Trap",
  ]);

  const handleTagClick = (tag) => {
    if (tagSelecionadas.includes(tag)) {
      setTagSelecionadas(tagSelecionadas.filter((f) => f !== tag));
    } else {
      if (tagSelecionadas.length < 6) {
        setTagSelecionadas([...tagSelecionadas, tag]);
      }
    }
  };

  const handleTextoChange = (event) => {
    setTextoSelecao(event.target.value);
  };

  const handleNovaTagChange = (event) => {
    setNovaTag(event.target.value);
  };

  const handleAdicionarTag = () => {
    if (novaTag.trim() !== "" && !tags.includes(novaTag)) {
      setTags([...tags, novaTag]);
      setNovaTag("");
    }
  };

  const handleConfirmarClick = () => {
    // Fazer algo com as frutas selecionadas e texto de seleção
    console.log("Frutas selecionadas:", tagSelecionadas);
    console.log("Texto de seleção:", textoSelecao);
  };

  const { state: novoEstabelecimento3 } = useLocation();

  function cadastrar() {
    const novoEstabelecimento4 = {
      nome: novoEstabelecimento3.nome,
      senha: novoEstabelecimento3.senha,
      logradouro: novoEstabelecimento3.logradouro,
      numero: novoEstabelecimento3.numero,
      complemento: novoEstabelecimento3.complemento,
      telefone: novoEstabelecimento3.telefone,
      diasDaSemana: novoEstabelecimento3.diasDaSemana,
      horarioAbertura: novoEstabelecimento3.horarioAbertura,
      horarioFechamento: novoEstabelecimento3.horarioFechamento,
      email: novoEstabelecimento3.email,
      descricao: novoEstabelecimento3.descricao,
      tags: JSON.stringify(tagSelecionadas),
    };
    if (tagSelecionadas.length !== 0) {
      console.log("Entrando no POST");
      api
        .post(`/estabelecimentos`, novoEstabelecimento4)
        .then((response) => {
          console.log("Enviando os dados para a API");
          console.log(response);
          console.log("API recebeu os dados corretamente");
          console.log("Novo cadastro:", novoEstabelecimento4);
          navigate("/login");
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // cesar crie uma mensagem de erro ou div sei lá tu se vira sz assinado: Lando
    }
  }

  return (
    <div className="body">
      <div className="inputs-cadastro">
        <h2 className="titulos">Cadastre seu estabelecimento</h2>
        <span className="subtitulo0">
          <p className="numero-pg"> 4 - 4 </p>{" "}
        </span>
        <div className="textos">
          <h3>TAGS</h3>
          <div>
            <div className="frutas">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="button-27"
                  id={`fruta ${
                    tagSelecionadas.includes(tag) ? "selecionada" : ""
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))}

              {
                <div className="nova-fruta">
                  <input
                    className="campoTextoCadastro-cadastro"
                    type="text"
                    placeholder="Digite a nova tag"
                    value={novaTag}
                    onChange={handleNovaTagChange}
                  />
                  <button className="button-29" onClick={handleAdicionarTag}>
                    Adicionar Tag
                  </button>
                </div>
              }
            </div>
          </div>
          <br/>
          <button onClick={() => {cadastrar()}} className="button-28">Cadastrar estabelecimento</button>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default CadastroFaseQuatro;
