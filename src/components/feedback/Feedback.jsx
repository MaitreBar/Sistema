import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import styles from "./Feedback.modules.css";
import { useState } from "react";
import api from "../../api";

function Feedback() {
  const { state: propriedades } = useLocation();
  const navigate = useNavigate();

  const [inputFeedback, setInputFeedback] = useState("");

  function enviarFeedback() {
    const reserva = {
        idReserva: propriedades.reserva.idReserva,
        dtReserva: propriedades.reserva.dtReserva,
        horaReserva: propriedades.reserva.horaReserva,
        checkIn: propriedades.reserva.checkIn,
        dtHoraCheckIn: propriedades.reserva.dtHoraCheckIn,
        checkOut: propriedades.reserva.checkOut,
        dtHoraCheckOut: propriedades.reserva.dtHoraCheckOut,
        feedback: inputFeedback,
        estabelecimento: propriedades.reserva.estabelecimento,
        usuario: propriedades.reserva.usuario,
        assentos: propriedades.reserva.assentos,
      };

    api
      .put(`/reservas/${propriedades.reserva.id}`, reserva)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  }

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromEscuro">
          <p className="tituloContainer colorWhite" alt="Login">
            Deixe sua avaliação
          </p>
          <div className="containerLista">
            <div className="boxLista listaFeedback">
              <p>
                Olá, <b>nome cliente</b>
              </p>
              <p>Queremos saber mais sobre sua experiência!</p>
              <p>
                Como foi sua reserva no <b>nome restaurante</b>?
              </p>
              <input
                type="text"
                className="formularioInput"
                placeholder="Escreva aqui sua avaliação..."
              />
              <p>
                Sua opnião é muito importante para continuarmos melhorando
                nossos serviços! Agradecemos seu feedback!
              </p>
              <button
                type="button"
                onClick={() => enviarFeedback()}
                className="btnSistema btnMedio"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Feedback;
