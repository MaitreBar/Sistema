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
    "1:00",    "1:30",
    "2:00",    "2:30",
    "3:00",    "3:30",
    "4:00",    "4:30",
    "5:00",    "5:30",
    "6:00",    "6:30",
    "7:00",    "7:30",
    "8:00",    "8:30",
    "9:00",    "9:30",
    "10:00",    "10:30",
    "11:00",    "11:30",
    "12:00",    "12:30",
    "13:00",    "13:30",
    "14:00",    "14:30",
    "15:00",    "15:30",
    "16:00",    "16:30",
    "17:00",    "17:30",
    "18:00",    "18:30",
    "19:00",    "19:30",
    "20:00",    "20:30",
    "21:00",    "21:30",
    "22:00",    "22:30",
    "23:00",    "23:30",
    "00:00",    "00:30",
  ];

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromEscuro">
          <div className="alinhar-lado-a-lado">
            <div className="containerReservaUm">
              <p className="tituloContainer">Escolha o dia</p>
              <Calendar onChange={onChange} value={date} />
            </div>
            <div className="containerReservaUm">
              <p className="tituloContainer">Escolha o horário</p>
              <div className="horarios">
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
