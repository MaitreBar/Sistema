function ListaReserva(props) {
  return (
    <div className="container-reserva">
      <div className="dia-reserva">
        <span> Dia: {props.reserva.dtReserva} </span>
      </div>

      <div className="nome-reserva">
        <span> Nome do cliente: nome {props.usuario.nome}</span>
      </div>

      <div className="horario-reserva">
        <span> Horário: {props.reserva.horaReserva}</span>
      </div>

      <div className="mesa-reserva">
        <span> Assento: {props.reserva.assentos.id}</span>
      </div>

      <div className="Quantidade-reserva">
        <span>Quantidade pessoal: 1</span>
      </div>
      <div className="button-checkin-reserva">
        <button className="button-checkin"> CHECK-IN </button>
      </div>
      <div className="button-checkout-reserva">
        <button className="button-checkout"> CHECK-OUT </button>
      </div>
    </div>
  );
}

export default ListaReserva;