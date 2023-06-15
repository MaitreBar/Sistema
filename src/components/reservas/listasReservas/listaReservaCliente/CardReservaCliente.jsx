import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import api from "../../../../api";

function CardReservaCliente(props) {
  const { state: usuarioLogado } = useLocation();
  const navigate = useNavigate();

  function cancelarReserva() {
    api
      .delete(`/reservas/${props.reserva.id}`)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  function botao() {
    if (props.reserva.checkOut) {
      return (
        <button
          onClick={() => {
            const propriedades = {
              usuarioLogado: usuarioLogado,
              reserva: props.reserva,
            };
            navigate("/reservas/cliente/feedback", { state: propriedades });
          }}
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
        <p>{props.reserva.assentos.map((assento) => assento.id)}</p>
      </div>
      <div className="boxText">
        <b>Quantidade pessoas:</b>
        <p>1</p>
      </div>
      <div className="boxText">
        <b>Nome estabelecimento:</b>
        <p>{props.estabelecimento.nome}</p>
      </div>
      <div className="boxText">
        <b>Endereço:</b>
        <p>
          {props.estabelecimento.logradouro}, {props.estabelecimento.numero} -{" "}
          {props.estabelecimento.complemento}
        </p>
      </div>
      <div className="boxBotao">{botao()}</div>
    </div>
  );
}

export default CardReservaCliente;
