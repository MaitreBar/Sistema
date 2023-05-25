import api from "../../api";
import { useEffect, useState } from "react";
import ListaReserva from "./listaReserva";
import "./styleListaReserva.css";

function ListaReservaBar() {
  const [reservas, setReservas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getReservas();
    getUsuarios();
  }, []);

  function getReservas() {
    api
      .get("/reservas")
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("LISTA DE RESERVAS: ", response.data);
        setReservas(response.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log("Este endpoint não existe");
        } else {
          console.error(err);
        }
      });
  }
  function getUsuarios() {
    api
      .get("/usuarios")
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("LISTA DE USUARIOS: ", response.data);
        setUsuarios(response.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log("Este endpoint não existe");
        } else {
          console.error(err);
        }
      });
  }

  return (
    <div className="body">
      <div className="container-lista">
        <div className="title-head-lista">
          <h1> MAPEIE SEUS CLIENTES </h1>
        </div>
        <div className="filtrar-clientes">
          <span className="spn-filtrar-clientes">
            <a>filtrar clientes</a>
          </span>
          <div>
            <br></br>
            <span className="click-alfabeto">
              <a> A </a>
              <a> B </a>
              <a> C </a>
              <a> D </a>
              <a> E </a>
              <a> F </a>
              <a> G </a>
              <a> H </a>
              <a> I </a>
              <a> J </a>
              <a> K </a>
              <a> L </a>
              <a> M </a>
              <a> N </a>
              <a> O </a>
              <a> P </a>
              <a> Q </a>
              <a> R </a>
              <a> S </a>
              <a> T </a>
              <a> U </a>
              <a> V </a>
              <a> W </a>
              <a> X </a>
              <a> Y </a>
              <a> Z </a>
            </span>
          </div>
        </div>
        <div className="div-do-fundo-maximo-para-as-reservas">
          {reservas.map((reserva) =>
            usuarios.map((usuario) => {
              if (!reserva.checkOut) {
                return (
                  <ListaReserva
                    reserva={reserva}
                    usuario={usuario}
                    atualizar={getReservas}
                    key={reserva.id}
                  />
                );
              }
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default ListaReservaBar;
