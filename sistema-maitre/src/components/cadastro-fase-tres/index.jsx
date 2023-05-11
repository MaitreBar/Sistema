import "./styleFaseTres.css";
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
function CadastroFaseTres() {

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const diasDaSemana = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'];

  const expediente = '00:00 até as 00:00'; // Horário de expediente selecionável

  return (
    <div className="body">
      <div className="inputs-cadastro">
        <h2 className="titulos">Cadastre seu estabelecimento</h2>
        <span className="subtitulo0"><p className="numero-pg"> 3 - 4 </p> </span>
        <div className="textos">

          
          <br></br>
          <div className="expediente">
          <p> <t className="txt1">Expediente</t>
        
          <InputMask
            mask="99:99"
            placeholder="00:00"
            className="horario-input"
          />
          <t className="txt2">às</t>
          <InputMask
            mask="99:99"
            placeholder="00:00"
            className="horario-input"
          />
          </p>
          </div>
          <br></br>
          <div>
            {diasDaSemana.map((dia, index) => (
              <button
                key={index}
                className="button-27-day"
                id={selectedButton === index ? 'selecionado' : ''}
                onClick={() => handleButtonClick(index)}
              >
                {dia}
              </button>
            ))}
          </div>
          <br></br>
          <input className="campoTextoCadastro-cadastro" type="text" placeholder="Email"></input>
          <br className="broken"></br>
          <input className="campoTextoCadastro-cadastro" type="text" placeholder="Descrição"></input>
          <br className="broken"></br>

          <br></br>
          <button className="button-28">Proximo</button>
          <br></br>
        </div>
      </div>
    </div>

  );
}

export default CadastroFaseTres;