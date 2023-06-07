import "../../index.css";
import React, { useState } from "react";
import "./Reserva.modules.css";
import Calendar from "react-calendar";

function ReservaEstabelecimentoUm() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  const horarios = [
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
  ];

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromEscuro">
          <div className="alinhar-lado-a-lado">
            <div className="container-esquerda">
              <p
                className="tituloContainer colorWhite"
                alt="Cadastre seu estabelecimento"
              >
                Escolha o dia
              </p>

              <div className="calendar-container">
                <Calendar onChange={onChange} value={date} />
              </div>
            </div>
            <div className="container-direita">
              <p
                className="tituloContainer colorWhite"
                alt="Cadastre seu estabelecimento"
              >
                Escolha o horário
              </p>
              <div className="alinhamento-horarios">
                {horarios.map((horario, index) => (
                  <button key={index} className="btnSistema btnHorario">
                    {horario}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button className="btnSistema btnMedio">Proximo</button>
        </div>
      </div>
    </section>
  );
}
export default ReservaEstabelecimentoUm;
