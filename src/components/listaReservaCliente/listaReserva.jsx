import { useLocation } from "react-router-dom";
import api from "../../api";
import "./styleListaReserva.css";

function ListaReserva(props) {
  const { state: usuarioLogado } = useLocation();

  function cancelarReserva(reserva) {
    
    const delet = {
      id: reserva.id,
      checkOut: true,
    };
    const check_out_assento = {
      disponivel: true,
    };

    api
      .put(`/reservas/${reserva.id}`, delet)
      .then((response) => {
        console.log(response);
        api
          .put(
            `/assentos/${reserva.assentos.find((assento) => assento.id).id}`,
            check_out_assento
          )
          .then((response) => {
            console.log("Enviando os dados para a API");
            console.log(response);
            console.log("API recebeu os dados corretamente");
            console.log(
              "Assento de id " +
                reserva.assentos.find((assento) => assento.id).id +
                " agora está disponível"
            );
            props.atualizar();
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="container-reserva">
      <div className="dia-reserva">
        <span> Dia: {props.reserva.dtReserva} </span>
      </div>

      <div className="nome-reserva">
        <span> Nome do cliente: {usuarioLogado.nome}</span>
      </div>

      <div className="horario-reserva">
        <span> Horário: {props.reserva.horaReserva}</span>
      </div>

      <div className="mesa-reserva">
        <span>
          {" "}
          Assento: {props.reserva.assentos.find((assento) => assento.id).id}
        </span>
      </div>

      <div className="quantidade-reserva">
        <span>Quantidade pessoal: 1</span>
      </div>
      <div className="button-cancelar-reserva">
        <button
          onClick={() => cancelarReserva(props.reserva)}
          className="button-cancelar"
        >
          {" "}
          Cancelar reserva{" "}
        </button>
      </div>
    </div>
  );
}

export default ListaReserva;
