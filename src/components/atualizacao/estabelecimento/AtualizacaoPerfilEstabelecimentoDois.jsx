import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import "../../../index.css";
import React, { useState } from "react";
import api from "../../../api";

function AtualizacaoEstabelecimentoDois() {
  const { state: usuarioAtualizado } = useLocation();
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);
  const diasDaSemana = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];

  const [inputHorarioAbertura, setInputHorarioAbertura] = useState(
    usuarioAtualizado.horarioAbertura
  );
  const [inputHorarioFechamento, setInputHorarioFechamento] = useState(
    usuarioAtualizado.horarioFechamento
  );
  const [inputTags, setInputTags] = useState(usuarioAtualizado.tags);

  function atualizarEstabelecimento(evento) {
    evento.preventDefault();
    if (
      inputHorarioAbertura !== "" &&
      inputHorarioAbertura !== undefined &&
      inputHorarioAbertura !== "" &&
      inputHorarioAbertura !== undefined &&
      inputTags !== "" &&
      inputTags !== undefined
    ) {
      const atualizadoCadastro = {
        nome: usuarioAtualizado.nome,
        senha: usuarioAtualizado.senha,
        logradouro: usuarioAtualizado.logradouro,
        numero: usuarioAtualizado.numero,
        complemento: usuarioAtualizado.complemento,
        cep: usuarioAtualizado.cep,
        diasDaSemana: usuarioAtualizado.diasDaSemana,
        faixaDePreco: usuarioAtualizado.faixaDePreco,
        cnpj: usuarioAtualizado.cnpj,
        horarioAbertura: inputHorarioAbertura,
        horarioFechamento: inputHorarioFechamento,
        descricao: usuarioAtualizado.descricao,
        email: usuarioAtualizado.email,
        tags: inputTags,
      };

      api
        .put(`/estabelecimentos/${usuarioAtualizado.id}`, atualizadoCadastro)
        .then((response) => {
          console.log(response);
          console.log("Estabelecimento atualizado com sucesso");
          const usuarioLogado = atualizadoCadastro;
          navigate("/perfil/estabelecimento", { state: usuarioLogado });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromClaro">
          <p className="tituloContainer colorBlack" alt="Cadastre-se">
            Atualizar perfil
          </p>
          <form
            onSubmit={(evento) => atualizarEstabelecimento(evento)}
            className="formulario"
          >
            <div className="Alinhamento-de-inputs">
              <p className="colorBlack">Expediente</p>
              <input
                className="formularioInput inputDuploAlinhado"
                type="time"
                placeholder="00:00"
                defaultValue={usuarioAtualizado.horarioAbertura}
                autoFocus
                onChange={(evento) =>
                  setInputHorarioAbertura(evento.target.value)
                }
              />
              <p className="colorBlack">ás</p>
              <input
                className="formularioInput inputDuploAlinhado"
                type="time"
                placeholder="00:00"
                defaultValue={usuarioAtualizado.horarioFechamento}
                onChange={(evento) =>
                  setInputHorarioFechamento(evento.target.value)
                }
              />
            </div>
            <br></br>
            <div>
              {diasDaSemana.map((dia, index) => (
                <button
                  key={index}
                  className="btnDia btnSistema"
                  id={selectedButton === index ? "selecionado" : ""}
                >
                  {dia}
                </button>
              ))}
            </div>
            <br></br>
            <input className="" type="file" />
            <br></br>
            <button className="btnSistema btnMedio">Adicionar Imagem</button>
            <br></br>
            <p className="paragrafo">
              Para adicionar novas tags, separe-as por uma vírgula e para
              removê-las apague até a próxima vírgula.
            </p>
            <br></br>
            <input
              className="formularioInput inputGrande"
              type="text"
              placeholder="Cadastrar tag"
              defaultValue={usuarioAtualizado.tags}
              onChange={(evento) => setInputTags(evento.target.value)}
            />
            <br></br>
            <button type="submit" className=" btnSistema btnMedio">
              Atualizar
            </button>
            <button className="btnSistema btnSemFundo">Voltar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default AtualizacaoEstabelecimentoDois;
