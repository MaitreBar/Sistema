import "./styleDetalhes.css";
import bar1 from "../../assets/images/carrosel/bar1.png";
import fotoPerfil from "../../assets/fotoPerfil/Ellipse 2.png";
import mapinha from "../../assets/images/mapinha/mapinha.png";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function DetalhesEstabelecimento(props) {
  const { state: estabelecimento } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="body-detalhes">
      <div class="container-fundo-wrapper"></div>
      <div className="container-fundo">
        <div className="head-title">
          <h1 className="head-title-h1">
            CONHEÇA NOSSOS PARCEIROS E DIVIRTA-SE!
          </h1>
        </div>

        <div className="gaveta-fotos">
          <div className="foto">
            <img id="foto1" src={bar1} alt=""></img>
          </div>
          <div className="foto">
            <img id="foto1" src={bar1} alt=""></img>
          </div>
          <div className="foto">
            <img id="foto1" src={bar1} alt=""></img>
          </div>
          <div className="foto">
            <img id="foto1" src={bar1} alt=""></img>
          </div>
          <div className="foto">
            <img id="foto1" src={bar1} alt=""></img>
          </div>
        </div>

        <div className="informacoes-estabelecimento">
          <div className="header-card">
            <div className="foto-perfil">
              <img id="foto-perfil-img" src={fotoPerfil} alt=""></img>
            </div>

            <div className="dados-informacoes-estabelecimento">
              <span className="nome-estabelecimento">
                {estabelecimento.nome}
              </span>

              <span className="endereço-estabelecimento">{estabelecimento.logradouro}, {estabelecimento.numero}</span>
            </div>

            <hr className="separador-header"></hr>
          </div>

          <div className="medium-card">
            <span className="titulo">Sobre</span>
            <span className="conteudo">{estabelecimento.descricao}</span>

            <span className="titulo">Faixa de preço</span>

            <span className="conteudo">de R$ 100 a R$ 300</span>

            <span className="titulo">Horário de funcionamento</span>

            <span className="conteudo">
              Das {estabelecimento.horarioAbertura} às{" "}
              {estabelecimento.horarioFechamento}
              Em {estabelecimento.diasDaSemana}
            </span>

            <hr className="separador-medium"></hr>
          </div>

          <div className="bottom-card">
            <span className="titulo">Como chegar?</span>
            <span className="conteudo">
              {estabelecimento.logradouro}, {estabelecimento.numero} bairro{" "}
              {estabelecimento.cep}
            </span>

            <div className="mapinha">
              <img id="mapinha" src={mapinha} alt=""></img>
            </div>
            <button className="button-28-ver-mapa">Ver mapa</button>
          </div>
        </div>

        <div className="card-botoes-reservar">
          <div className="card-botoes">
            <a>
              <b>Entrar na fila</b>
              <p>Entre na fila de espera sem sair de casa.</p>
            </a>
            <a
              onClick={() => {
                const propriedade = {
                  estabelecimento: estabelecimento
                }
                navigate("/reserva/nova/1", { state: propriedade });
              }}
            >
              <b>Reserve agora</b>
              <p>Reserve sua mesa para uma ocasião especial.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetalhesEstabelecimento;
