import { useEffect } from "react";
import "./ListaReservaCliente.modules.css";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import CardReservaCliente from "./CardReservaCliente";
import api from "../../../../api";
import { useState } from "react";

function ListaReservaCliente() {
  const { state: usuarioLogado } = useLocation();
  const navigate = useNavigate();

  const [estabelecimentos, setEstabelecimento] = useState([]);
  console.log(usuarioLogado.id);

  useEffect(() => {
    api
      .get(`/reservas/busca-por-usuario/${usuarioLogado.id}`)
      .then((response) => {
        console.log(response);
        setEstabelecimento(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromEscuro">
          <p className="tituloContainer colorWhite" alt="Login">
            Confira suas reservas
          </p>
          <div className="containerBtnTopo">
            <button
              className="btnSistema btnMedio"
              onClick={() => navigate("/catalogo", { state: usuarioLogado })}
              type="button"
            >
              Nova reserva
            </button>
          </div>
          <div className="containerLista">
            {estabelecimentos.map((estabelecimento) => {
              return estabelecimento.reservas.map((reserva, index) => {
                if (!reserva.checkOut) {
                  return usuarioLogado.reservas.map((reservaid) => {
                    if (reservaid.id === reserva.id) {
                      return (
                        <CardReservaCliente
                          estabelecimento={estabelecimento}
                          reserva={reserva}
                          key={index}
                        />
                      );
                    }
                  });
                }
              });
            })}
            <br />
            <p
              className="tituloContainer colorWhite"
              alt="reservas já concluídas"
            >
              Reservas já concluídas
            </p>
            {estabelecimentos.map((estabelecimento) => {
              return estabelecimento.reservas.map((reserva, index) => {
                if (reserva.checkOut) {
                  return <CardReservaCliente reserva={reserva} key={index} />;
                }
              });
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default ListaReservaCliente;
