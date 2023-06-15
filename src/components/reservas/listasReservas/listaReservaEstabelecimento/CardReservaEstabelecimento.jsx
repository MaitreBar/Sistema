import api from "../../../../api";

function CardReservaEstabelecimento(props) {
  function checkIn() {
    const reserva = {
      idReserva: props.reserva.idReserva,
      dtReserva: props.reserva.dtReserva,
      horaReserva: props.reserva.horaReserva,
      checkIn: true,
      dtHoraCheckIn: props.reserva.dtHoraCheckIn,
      checkOut: props.reserva.checkOut,
      dtHoraCheckOut: props.reserva.dtHoraCheckOut,
      feedback: props.reserva.feedback,
      assentos: props.reserva.assentos,
    };

    api
      .put(`/reservas/${props.reserva.idReserva}`, reserva)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }
  function checkIn() {
    if (props.reserva.checkIn) {
      const reserva = {
        idReserva: props.reserva.idReserva,
        dtReserva: props.reserva.dtReserva,
        horaReserva: props.reserva.horaReserva,
        checkIn: props.reserva.checkIn,
        dtHoraCheckIn: props.reserva.dtHoraCheckIn,
        checkOut: true,
        dtHoraCheckOut: props.reserva.dtHoraCheckOut,
        feedback: props.reserva.feedback,
        assentos: props.reserva.assentos,
      };

      api
        .put(`/reservas/${props.reserva.idReserva}`, reserva)
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    }
  }

  function checkOut() {}

  return (
    <div className="boxLista">
      <div className="boxText">
        <b>Dia:</b>
        <p>{props.reserva.dtReserva}</p>
      </div>
      <div className="boxText">
        <b>Horário:</b>
        <span>{props.reserva.horaReserva}</span>
      </div>
      <div className="boxText">
        <b>Assento:</b>
        <p>
          {props.reserva.assentos.map((assento) => {
            return assento.id;
          })}
        </p>
      </div>
      <div className="boxText">
        <b>Quantidade pessoas:</b>
        <p>1</p>
      </div>
      <div className="boxText">
        <b>Nome cliente:</b>
        <p>{props.usuario.nome}</p>
      </div>
      <div className="boxBotao">
        <button
          className="btnSistema btnMedio"
          onClick={() => checkIn()}
          type="button"
        >
          CHECK-IN
        </button>
        <button
          className="btnSistema btnMedio"
          onClick={() => checkOut()}
          type="button"
        >
          CHECK-OUT
        </button>
      </div>
    </div>
  );
}

export default CardReservaEstabelecimento;
