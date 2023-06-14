import "../../index.css";
import React, { useEffect, useState } from "react";
import "./Reserva.modules.css";
import Calendar from "react-calendar";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import { format } from "date-fns";

function ReservaEstabelecimentoUm() {
  const { state: propriedades } = useLocation();
  const navigate = useNavigate();

  const [date, setDate] = useState(new Date());
  const [horario, setHorario] = useState();

  const onChange = (date) => {
    setDate(date);
  };

  const startTime = propriedades.dadosEstabelecimento.horarioAbertura;
  const endTime = propriedades.dadosEstabelecimento.horarioFechamento;

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

  function reservar() {
    const novaReserva = {
      dtReserva: format(date, "yyyy-MM-dd"),
      horaReserva: horario,
      checkIn: false,
      dtHoraCheckIn: null,
      checkOut: false,
      dtHoraCheckOut: null,
    };

    const propriedade = {
      usuarioLogado: propriedades.usuarioLogado,
      dadosEstabelecimento: propriedades.dadosEstabelecimento,
      novaReserva: novaReserva,
    };

    navigate("/reserva/dois", { state: propriedade });
  }

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
                {timeArray.map((horario, index) => (
                  <button
                    key={index}
                    onClick={() => setHorario(horario)}
                    className="btnSistema btnHorario"
                  >
                    {horario}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button onClick={() => reservar()} className="btnSistema btnMedio">
            Próximo
          </button>
        </div>
      </div>
    </section>
  );
}
export default ReservaEstabelecimentoUm;
