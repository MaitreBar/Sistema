import moment from "moment/moment";
import "./styleReservaUm.css";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useLocation, useNavigate } from "react-router-dom";

function ReservaUm(props) {
  const [date, setDate] = useState(new Date());
  const [hora, setHora] = useState("");

  const navigate = useNavigate();

  const { state: propriedade } = useLocation();

  const onChangeData = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  function onChangeHora(horario) {
    setHora(horario);
  }

  function reserva() {
    const novaReserva1 = {
      dtReserva: date,
      horaReserva: hora,
      checkIn: false,
      dtHoraCheckIn: null,
      checkOut: false,
      dtHoraCheckOut: null,
    };
    const propriedades = {
      estabelecimento: propriedade.estabelecimento,
      reserva: novaReserva1,
    };
    navigate("/reserva/nova/2", { state: propriedades });
  }

  const startTime = propriedade.estabelecimento.horarioAbertura;
  const endTime = propriedade.estabelecimento.horarioFechamento;

  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);

  const [timeArray, setTimeArray] = useState([]);

  useEffect(() => {
    const generateTimeArray = () => {
      const newArray = [];
      for (let minutes = startMinutes; minutes <= endMinutes; minutes += 30) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        const time = `${String(hours).padStart(2, "0")}:${String(mins).padStart(
          2,
          "0"
        )}`;
        newArray.push(time);
      }
      setTimeArray(newArray);
    };

    generateTimeArray();
  }, [startMinutes, endMinutes]); // Dependências corretamente fornecidas: startMinutes e endMinutes

  console.log(timeArray);

  return (
    <div className="body">
      <div className="container-lista">
        <div className="title-head">
          <h1> Escolha o dia </h1>
        </div>
        <div className="calendar-container">
          <Calendar onChange={onChangeData} value={date} />
        </div>

        <div className="title-head-2">
          <h1> Escolha o horario </h1>
        </div>
        <div className="container-horario">
          <div className="grid-container">
            {timeArray.map((horario, index) => (
              <button
                key={index}
                onClick={() => onChangeHora(horario)}
                value={horario}
                className="button"
              >
                {horario}
              </button>
            ))}
          </div>
        </div>
        <button onClick={() => reserva()} className="button-28-proximo">
          Proximo
        </button>
      </div>
    </div>
  );
}

export default ReservaUm;
