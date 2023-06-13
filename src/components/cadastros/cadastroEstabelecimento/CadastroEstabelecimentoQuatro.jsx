import NavbarDeslogada from "../../navbar/NavbarDeslogada";
import "../../../index.css";
import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import api from "../../../api";

function CadastroEstabelicimentoQuatro() {
  const [tagSelecionadas, setTagSelecionadas] = useState([]);
  const [novaTag, setNovaTag] = useState("");

  const { state: novoEstabelecimento3 } = useLocation();
  const navigate = useNavigate();

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
    "Samba",
    "Raggae",
    "Trap",
    "Samba",
    "Raggae",
    "Trap",
    "Samba",
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

  const handleNovaTagChange = (event) => {
    setNovaTag(event.target.value);
  };

  const handleAdicionarTag = () => {
    if (novaTag.trim() !== "" && !tags.includes(novaTag)) {
      setTags([...tags, novaTag]);
      setNovaTag("");
    }
  };

  function cadastrar4(evento) {
    evento.preventDefault();
    const novoEstabelecimento4 = {
      email: novoEstabelecimento3.email,
      senha: novoEstabelecimento3.senha,
      cep: novoEstabelecimento3.cep,
      logradouro: novoEstabelecimento3.logradouro,
      numero: novoEstabelecimento3.numero,
      complemento: novoEstabelecimento3.complemento,
      horarioAbertura: novoEstabelecimento3.horarioAbertura,
      horarioFechamento: novoEstabelecimento3.horarioFechamento,
      nome: novoEstabelecimento3.nome,
      cnpj: novoEstabelecimento3.cnpj,
      descricao: novoEstabelecimento3.descricao,
      diasDaSemana: JSON.stringify(novoEstabelecimento3.diasDaSemana),
      tags: JSON.stringify(tagSelecionadas),
    };

    api
      .post("/estabelecimentos", novoEstabelecimento4)
      .then((response) => {
        console.log("Enviando os dados para a API");
        console.log(response);
        console.log("API recebeu os dados corretamente");
        console.log("Novo estabelecimento:", novoEstabelecimento4);
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
      });
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
          <p className="txtDecisao">
            <b> 4 - 4</b>
          </p>
          <form
            onSubmit={(evento) => cadastrar4(evento)}
            className="formulario"
          >
            <p className="colorBlack">Tags</p>
            <div className="alinhamento-tags">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  type="button"
                  className="btnSistema btnTag"
                  id={`fruta ${
                    tagSelecionadas.includes(tag) ? "selecionada" : ""
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <input
              className="formularioInput inputGrande"
              type="text"
              placeholder="Digite a nova tag"
              value={novaTag}
              onChange={handleNovaTagChange}
            />
            <button
              className="btnSistema btnMedio"
              onClick={handleAdicionarTag}
            >
              Adicionar Tag
            </button>
            <button type="submit" className=" btnSistema btnMedio">
              Proximo
            </button>
            <button
              type="button"
              onClick={() => {
                const novoEstabelecimento2 = {
                  email: novoEstabelecimento3.email,
                  senha: novoEstabelecimento3.senha,
                  cep: novoEstabelecimento3.cep,
                  logradouro: novoEstabelecimento3.logradouro,
                  numero: novoEstabelecimento3.numero,
                  complemento: novoEstabelecimento3.complemento,
                  horarioAbertura: novoEstabelecimento3.horarioAbertura,
                  horarioFechamento: novoEstabelecimento3.horarioFechamento,
                  nome: novoEstabelecimento3.nome,
                  cnpj: novoEstabelecimento3.cnpj,
                  descricao: novoEstabelecimento3.descricao,
                  diasDaSemana: novoEstabelecimento3.diasDaSemana,
                };
                navigate("/cadastro/estabelecimento/tres", {
                  state: novoEstabelecimento2,
                });
              }}
              className="btnSistema btnSemFundo"
            >
              Voltar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default CadastroEstabelicimentoQuatro;
