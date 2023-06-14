import "../../index.css";
import React, { useState } from "react";
import "./Reserva.modules.css";
import planta from "../../assets/planta/planta.png";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import api from "../../api";

function ReservaEstabelecimentoTres() {
  const { state: propriedade } = useLocation();
  const navigate = useNavigate();

  const [lugarSelecionado, setLugarSelecionado] = useState([]);
  const [modalAberto2, setModalAberto2] = useState(false);

  const [lugares] = useState(propriedade.dadosEstabelecimento.assentos);

  const abrirModal2 = () => {
    setModalAberto2(!modalAberto2);
  };

  const selecionarLugar = (lugar) => {
    setLugarSelecionado(...lugarSelecionado, lugar);
    setModalAberto2(false);
  };

  function criarReserva() {
    const reserva = {
      dtReserva: propriedade.novaReserva.dtReserva,
      horaReserva: propriedade.novaReserva.horaReserva,
      checkIn: undefined,
      dtHoraCheckIn: undefined,
      checkOut: undefined,
      dtHoraCheckOut: undefined,
      feedback: undefined,
      estabelecimento: propriedade.dadosEstabelecimento,
      usuario: propriedade.usuarioLogado,
      assentos: [lugarSelecionado],
    };

    api
      .post("/reservas", reserva)
      .then((response) => {
        console.log(response);
        const assento = {
          id: lugarSelecionado.id,
          disponivel: false,
        };
        api
          .put(`/assentos/${lugarSelecionado.id}`, assento)
          .then((response) => {
            console.log(response);
            const usuarioLogado = propriedade.usuarioLogado;
            navigate("/reservas/cliente", { state: usuarioLogado });
          })
          .catch((err2) => {
            console.error(err2);
          });
      })
      .catch((err) => console.error(err));
  }

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromEscuro">
          <div className="alinhar-lado-a-lado">
            <div className="container-esquerda">
              <p
                className="tituloContainer colorWhite"
                alt="Cadastre seu estabelecimento"
              >
                Planta baixa do restaurante
              </p>
              <img src={planta} alt="planta baixa do estabelecimento" />
            </div>
            <div className="container-direita">
              <p className="tituloContainer colorWhite">Detalhes da reserva</p>

              <span className="colorWhite">
                Nome: {propriedade.usuarioLogado.nome}{" "}
              </span>
              <span className="colorWhite">
                CPF: {propriedade.usuarioLogado.cpf}{" "}
              </span>
              <span className="colorWhite">
                Data de nascimento: {propriedade.usuarioLogado.dtNasc}{" "}
              </span>
              <span className="colorWhite">
                Data da reserva: {propriedade.novaReserva.dtReserva}{" "}
              </span>
              <span className="colorWhite">
                Horario Escolhido: {propriedade.novaReserva.horaReserva}{" "}
              </span>
              <span className="colorWhite">
                Assento selecionado:{" "}
                {lugarSelecionado !== undefined
                  ? lugarSelecionado.id
                  : lugarSelecionado}
              </span>

              <div className="detalhes-reserva">
                <div className="botão-modal-reserva">
                  <br></br>
                  <p className="tituloEtapa colorWhite">
                    Escolha o(s) assento(s)
                  </p>
                  <div>
                    <button
                      className="btnSistema btnMedio"
                      onClick={abrirModal2}
                    >
                      Assentos
                    </button>

                    {modalAberto2 && (
                      <div className="grid-container-lugar">
                        {lugares.map((lugar, index) => {
                          if (lugar.disponivel) {
                            return (
                              <button
                                className="btnSistema btnModal"
                                key={index}
                                onClick={() => selecionarLugar(lugar)}
                              >
                                {lugar.id}
                              </button>
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                  <br></br>
                  <div className="detalhes-da-reserva">
                    <br></br>
                    <button
                      onClick={() => criarReserva()}
                      className="btnSistema btnMedio"
                    >
                      Confirmar reserva
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ReservaEstabelecimentoTres;
