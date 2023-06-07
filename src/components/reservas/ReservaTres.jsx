import "../../index.css";
import React, { useState } from "react";
import "./Reserva.modules.css";
import planta from "../../assets/planta/planta.png";

function ReservaEstabelecimentoTres() {
  const [MesaSelecionada, setMesaSelecionada] = useState("");
  const [lugarSelecionado, setLugarSelecionado] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [modalAberto2, setModalAberto2] = useState(false);

  const mesa = [
    "M1",
    "M2",
    "M3",
    "M4",
    "M5",
    "M6",
    "M7",
    "M8",
    "M9",
    "M10",
    "M11",
    "M12",
    "M13",
    "M14",
    "M15",
    "M16",
  ];
  const lugares = ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8"];
  const abrirModal = () => {
    setModalAberto(true);
  };

  const abrirModal2 = () => {
    setModalAberto2(true);
  };

  const selecionarMesa = (mesa) => {
    setMesaSelecionada(mesa);
    setModalAberto(false);
  };

  const selecionarLugar = (lugar) => {
    setLugarSelecionado(lugar);
    setModalAberto2(false);
  };

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromEscuro">
          <div className="alinhamento-reserva-3">
            <div className="container-esquerda-reserva-3">
              <p
                className="tituloContainer colorWhite"
                alt="Cadastre seu estabelecimento"
              >
                Planta baixa do restaurante
              </p>
              <img src={planta} />
            </div>
            <div className="container-direita">
              <p className="tituloContainer colorWhite">Detalhes da reserva</p>

              <span className="colorWhite">Nome: </span>
              <span className="colorWhite">CPF: </span>
              <span className="colorWhite">Data de nascimento: </span>
              <span className="colorWhite">Data da reserva: </span>
              <span className="colorWhite">Horario Escolhido: </span>

              <div className="detalhes-reserva">
                <div className="botão-modal-reserva">
                  <br></br>
                  <p className="tituloEtapa colorWhite">
                    Escolha o(s) assento(s)
                  </p>
                  <div>
                    <button
                      className="btnSistema btnMedio"
                      onClick={abrirModal}
                    >
                      Escolha sua mesa
                    </button>

                    {modalAberto && (
                      <div className="grid-container">
                        {mesa.map((mesa, index) => (
                          <button
                            className="btnSistema btnModal"
                            key={index}
                            onClick={() => selecionarMesa(mesa)}
                          >
                            {mesa}
                          </button>
                        ))}
                      </div>
                    )}

                    <button
                      className="btnSistema btnMedio"
                      onClick={abrirModal2}
                    >
                      ID Assento
                    </button>

                    {modalAberto2 && (
                      <div className="grid-container-lugar">
                        {lugares.map((lugar, index) => (
                          <button
                            className="btnSistema btnModal"
                            key={index}
                            onClick={() => selecionarLugar(lugar)}
                          >
                            {lugar}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="colorWhite">
                    idAssento: {lugarSelecionado}
                  </span>
                  <br></br>
                  <span className="colorWhite">
                    Mesa Selecionada: {MesaSelecionada}
                  </span>
                  <div className="detalhes-da-reserva">
                    <br></br>
                    <button className="btnSistema btnMedio">Proximo</button>
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
