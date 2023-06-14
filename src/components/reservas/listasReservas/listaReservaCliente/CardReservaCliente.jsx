function CardReservaCliente(props) {
  function cancelarReserva() {}

  function fazerFeedback() {}

  function botao() {
    if (props.reserva.checkOut) {
        return (
          <button
            onClick={() => fazerFeedback()}
            className="btnSistema btnMedio"
            type="button"
          >
            Realizar feedback
          </button>
        );
    } else {
      return (
        <button
          onClick={() => cancelarReserva()}
          className="btnSistema btnMedio"
          type="button"
        >
          Cancelar reserva
        </button>
      );
    }
  }

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
        <p>{props.reserva.assento}</p>
      </div>
      <div className="boxText">
        <b>Quantidade pessoas:</b>
        <p>1</p>
      </div>
      <div className="boxText">
        <b>Nome estabelecimento:</b>
        <p>{props.reserva.estabelecimento}</p>
      </div>
      <div className="boxText">
        <b>Endereço:</b>
        <p>
          {props.reserva.estabelecimento},{" "}
          {props.reserva.estabelecimento}
        </p>
      </div>
      <div className="boxBotao">{botao()}</div>
    </div>
  );
}

export default CardReservaCliente;
