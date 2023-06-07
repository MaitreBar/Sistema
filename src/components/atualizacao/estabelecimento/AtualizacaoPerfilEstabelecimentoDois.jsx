import "../../../index.css";
import React, { useState } from "react";

function AtualizacaoEstabelecimentoDois() {
  const [selectedButton, setSelectedButton] = useState(null);
  const diasDaSemana = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromClaro">
          <p className="tituloContainer colorBlack" alt="Cadastre-se">
            Atualizar perfil
          </p>
          <form onSubmit="" className="formulario">
            <div className="Alinhamento-de-inputs">
              <p className="colorBlack">Expediente</p>
              <input
                className="formularioInput inputDuploAlinhado"
                type="time"
                placeholder="00:00"
              />
              <p className="colorBlack">ás</p>
              <input
                className="formularioInput inputDuploAlinhado"
                type="time"
                placeholder="00:00"
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
            <input
              className="formularioInput inputGrande"
              type="text"
              placeholder="Excluir tag"
            />
            <br></br>
            <input
              className="formularioInput inputGrande"
              type="text"
              placeholder="Cadastrar tag"
            />
            <br></br>
            <button type="submit" className=" btnSistema btnMedio">
              Atualizar
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
export default AtualizacaoEstabelecimentoDois;
