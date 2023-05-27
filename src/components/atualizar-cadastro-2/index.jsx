import "./styleAtualizarDois.css";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useLocation, useNavigate } from "react-router-dom";

function AtualizacaoDois() {
  const navigate = useNavigate();

  const { state: novoEstabelecimento2 } = useLocation();

  const [selectedButton, setSelectedButton] = useState(null);
  const [buttonDias, setButtonDias] = useState([]);
  const [inputHorarioAbertura, setInputHorarioAbertura] = useState();
  const [inputHorarioFechamento, setInputHorarioFechamento] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputDescricao, setInputDescricao] = useState();

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    if (buttonDias.length < 7) {
      addValue(buttonIndex);
    } else {
      console.log("lista cheia");
    }
  };

  const addValue = (newValue) => {
    setButtonDias([...buttonDias, newValue]);
  };

  const diasDaSemana = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];

  const expediente = "00:00 até as 00:00"; // Horário de expediente selecionável

  return (
    <div className="body">
      <div className="inputs-cadastro">
        <h2 className="titulos">Atualizar perfil</h2>
        <div className="textos">
          <br />
          <div className="expediente">
            <p>
              {" "}
              <span className="txt1">Expediente</span>
              <InputMask
                mask="99:99"
                onChange={(evento) =>
                  setInputHorarioAbertura(evento.target.value)
                }
                placeholder="00:00"
                className="horario-input"
              />
              <span className="txt2">às</span>
              <InputMask
                mask="99:99"
                onChange={(evento) =>
                  setInputHorarioFechamento(evento.target.value)
                }
                placeholder="00:00"
                className="horario-input"
              />
            </p>
          </div>
          <br />
          <div className="buttons-days">
            {diasDaSemana.map((dia, index) => (
              <button
                key={index}
                className="button-27-day"
                id={selectedButton === index ? "selecionado" : ""}
                onClick={() => handleButtonClick(index)}
              >
                {dia}
              </button>
            ))}
          </div>
          <br></br>
          <br />
          <div className="imagem">
            <input className="" type="file" />
            <br />
            <button className="button-27-adicionar">Adicionar Imagem</button>
          </div>
          <br></br>
          <br />
          <button className="button-28-atualizar">
            Atualizar
          </button>
          <br />
        </div>
        <br className="broken" />

        <br />
      </div>
    </div>
  );
}

export default AtualizacaoDois;
