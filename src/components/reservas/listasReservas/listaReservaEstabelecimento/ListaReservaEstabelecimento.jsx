import { useEffect, useState } from "react";
import "./ListaReservaEstabelecimento.modules.css";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import api from "../../../../api";
import CardReservaEstabelecimento from "./CardReservaEstabelecimento";

function ListaReservaEstabelecimento() {
  const { state: estabelecimentoLogado } = useLocation();
  const navigate = useNavigate();

  console.log(estabelecimentoLogado);

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api
      .get(
        `/reservas/busca-por-estabelecimento/${estabelecimentoLogado.idEstabelecimento}`
      )
      .then((response) => {
        console.log(response);
        setUsuarios(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromEscuro">
          <p className="tituloContainer colorWhite" alt="Confira suas reservas">
            Confira suas reservas
          </p>
          <div className="containerPesquisarPorLetra colorWhite">
            <b>Filtrar clientes</b>
            <br />
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
          </div>
          <div className="containerLista">
            {usuarios.map((usuario) => {
              return usuario.reservas.map((reserva, index) => {
                return (
                  estabelecimentoLogado.reservas.map((reservaid) => {
                    if (reservaid.id === reserva.id) {
                      return <CardReservaEstabelecimento
                        usuario={usuario}
                        reserva={reserva}
                        key={index}
                      />
                    }
                  })

                );
              });
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default ListaReservaEstabelecimento;
