import NavbarDeslogada from "../../navbar/NavbarDeslogada";
import "../../../index.css";
import "./CadastroEstabelecimento.modules.css";
import React, { useState } from "react";

function CadastroEstabelicimentoTres() {
  const [selectedButton, setSelectedButton] = useState(null);
  const diasDaSemana = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];

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
            <b> 3 - 4</b>
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
            <input
              className="formularioInput inputGrande"
              type="text"
              placeholder="Nome Estabelecimento"
              
            />
            <br></br>
            <input
              className="formularioInput inputGrande"
              type="text"
              placeholder="CNPJ"
              
            />
            <br></br>
            <input
              className="formularioInput inputGrande inputLargo"
              type="text"
              placeholder="Descriçao do Estabelecimento"
              
            />
            <br></br>
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
export default CadastroEstabelicimentoTres;
