import { useNavigate } from "react-router-dom";
import ListaReserva from "./listaReserva";
import "./styleListaReserva.css";
import { useEffect, useState } from "react";
import api from "../../api";

function ListaReservaCliente() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    getReservas();
  }, []);

  function getReservas() {
    api
      .get("/reservas/busca-por-usuario/1")
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("LISTA DE RESERVAS: ", response.data);
        setReservas(response.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log("Não foi retornado nenhum item");
        } else {
          console.error(err);
        }
      });
  }

  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="container-lista">
        <div className="title-head-lista-cliente">
          <h1> CONFIRA SUAS RESERVAS </h1>
        </div>

        <div className="button-nova-reserva">
          <button
            onClick={() => navigate("/catalogo")}
            className="button-reserva"
          >
            {" "}
            Nova reserva{" "}
          </button>
        </div>
        <div className="div-do-fundo-maximo-para-as-reservas">
          {reservas.map((reserva) => {
            if (!reserva.checkOut) {
              return (
                <ListaReserva
                  reserva={reserva}
                  atualizar={getReservas}
                  key={reserva.id}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default ListaReservaCliente;
