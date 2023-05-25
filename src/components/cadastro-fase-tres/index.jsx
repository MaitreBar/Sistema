import "./styleFaseTres.css";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useLocation, useNavigate } from "react-router-dom";

function CadastroFaseTres() {
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

  function cadastrar() {
    const novoEstabelecimento3 = {
      'nome': novoEstabelecimento2.nome,
      'senha': novoEstabelecimento2.senha,
      'logradouro': novoEstabelecimento2.logradouro,
      'numero': novoEstabelecimento2.numero,
      'complemento': novoEstabelecimento2.complemento,
      'telefone': novoEstabelecimento2.telefone,
      'diasDaSemana': JSON.stringify(buttonDias),
      'horarioAbertura': inputHorarioAbertura,
      'horarioFechamento': inputHorarioFechamento,
      'email': inputEmail,
      'descricao': inputDescricao
    };

    navigate("/cadastro-estabelecimento-pt4", { state: novoEstabelecimento3 });
  }

  const diasDaSemana = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];

  const expediente = "00:00 até as 00:00"; // Horário de expediente selecionável

  return (
    <div className="body">
      <div className="inputs-cadastro">
        <h2 className="titulos">Cadastre seu estabelecimento</h2>
        <span className="subtitulo0">
          <p className="numero-pg"> 3 - 4 </p>{" "}
        </span>
        <div className="textos">
          <br/>
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
          <br/>
          <div>
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
          <br/>
          <input
                onChange={(evento) =>
                  setInputEmail(evento.target.value)
                }
            className="campoTextoCadastro-cadastro"
            type="text"
            placeholder="Email"
          ></input>
          <br className="broken"/>
          <input
                onChange={(evento) =>
                  setInputDescricao(evento.target.value)
                }
            className="campoTextoCadastro-cadastro"
            type="text"
            placeholder="Descrição"
          ></input>
          <br className="broken"/>

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

export default CadastroFaseTres;
