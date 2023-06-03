import "./styleReservaTres.css";
import React, { useState } from "react";
import imagem from "../../assets/images/planta/planta.png";
import api from "../../api";
import { useLocation } from "react-router-dom";

function ReservaTres() {
  const [lugarSelecionado, setLugarSelecionado] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const { state: propriedade } = useLocation();
  console.warn(propriedade);
  const [lugares, setLugares] = useState([]);

  function getLugares() {
    api
      .get(`/assentos/estabelecimento/${propriedade.estabelecimento.id}`)
      .then((response) => {
        console.log("Solicitando os dados para a API");
        console.log(response);
        console.log("API enviou os dados corretamente");
        setLugares(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function criarReserva(){
    const reserva = {
      dtReserva: propriedade.reserva.dtReserva,
      horaReserva: propriedade.reserva.horaReserva,
      checkIn: propriedade.reserva.checkIn,
      dtHoraCheckIn: propriedade.reserva.dtHoraCheckIn,
      checkOut: propriedade.reserva.checkOut,
      dtHoraCheckOut: propriedade.reserva.dtHoraCheckOut,
      usuario: {
        id: sessionStorage.id,
        nome: sessionStorage.nome,
        email: sessionStorage.email,
        cpf: sessionStorage.cpf,
        dtNasc: sessionStorage.dtNasc,
        celular: sessionStorage.celular,
        rg: sessionStorage.rg,
        tags: sessionStorage.tags,
      },
      estabelecimento: propriedade.estabelecimento,
      assentos: [{id: lugarSelecionado, disponivel: false}]
    };

    api
    .post(`/reserva`, reserva)
    .then((response) => {
      console.log("Enviando os dados para a API");
      console.log(response);
      console.log("API recebeu os dados corretamente");
    })
    .catch((err) => {
      console.error(err);
    });
  }

  const abrirModal = () => {
    setModalAberto(true);
  };

  const selecionarLugar = (lugares) => {
    setLugarSelecionado(lugares.id);
    setModalAberto(false);
  };

  return (
    <div
      onLoad={() => {
        getLugares();
      }}
      className="body"
    >
      <div className="container-lista">
        <div className="title-head">
          <h1> Planta baixa do restaurante </h1>
        </div>
        <img id="planta" src={imagem} alt=""></img>

        <div className="detalhes-reserva">
          <div className="botão-modal-reserva">
            <div className="title-head-2">
              <h1> Escolha o(s) assento(s) </h1>
            </div>
            <div>
              <button className="button-28-escolher" onClick={abrirModal}>
                Escolha seu Assento
              </button>

              {modalAberto && (
                <div className="grid-container">
                  {lugares.map((lugar, index) => (
                    <button
                      className="button"
                      key={index}
                      onClick={() => selecionarLugar(lugar)}
                    >
                      {lugar.id}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="detalhes-da-reserva">
              <h3 className="h3-detalhes">Detalhes da reserva</h3>
              <span className="detalhes-texto">
                {" "}
                Nome: {sessionStorage.nome}{" "}
              </span>
              <span className="detalhes-texto">
                {" "}
                Data de nascimento: {sessionStorage.dtNasc}{" "}
              </span>
              <span className="detalhes-texto">
                {" "}
                CPF: {sessionStorage.cpf}{" "}
              </span>
              <span className="detalhes-texto">
                {" "}
                Data da reserva: {propriedade.reserva.dtReserva}{" "}
              </span>
              <span className="detalhes-texto">
                {" "}
                Horario Escolhido: {propriedade.reserva.horaReserva}{" "}
              </span>
              <span className="detalhes-texto">
                {" "}
                idAssento: {lugarSelecionado}{" "}
              </span>
              <span className="detalhes-texto">
                <button onClick={() => criarReserva()} className="button-28-proximo">Proximo</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservaTres;
