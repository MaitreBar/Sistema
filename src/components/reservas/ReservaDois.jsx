import "../../index.css";
import React, { useState } from "react";
import "./Reserva.modules.css";

function ReservaEstabelecimentoDois() {
  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromEscuro">
          <div className="alinhar-lado-a-lado">
            <div className="container-esquerda-reserva-2">
              <p
                className="tituloContainer colorWhite"
                alt="Cadastre seu estabelecimento"
              >
                Cadastrar pessoas
              </p>
              <input
                className="formularioInput inputGrande"
                type="text"
                placeholder="Nome completo"
                alt="campo e-mail"
              />
              <input
                className="formularioInput inputGrande"
                type="text"
                placeholder="Data de nascimento"
                alt="campo e-mail"
              />

              <input
                className="formularioInput inputGrande"
                type="text"
                placeholder="RG/CPF"
                alt="campo e-mail"
              />
              <br></br>
              <button className="btnSistema btnMedio">Adicionar Pessoa</button>
            </div>
            <div className="container-direita-reserva-2">
              <p
                className="tituloContainer colorWhite"
                alt="Cadastre seu estabelecimento"
              >
                Pessoas cadastradas
              </p>
              <br></br>

              <div className="container-dados-cadastrados">
                <div className="alinhamento-dados">
                  <div className="dados">
                    <div>
                      <span className="colorWhite">Nome:</span>
                      <span className="colorWhite">Luiza Mel</span>
                    </div>
                    <div>
                      <span className="colorWhite">Data de nascimento:</span>
                    </div>
                    <div>
                      <span className="colorWhite">20/05/1990</span>
                    </div>
                    <div>
                      <span className="colorWhite">RG/CPF:</span>
                      <span className="colorWhite">390.123.657-18</span>
                    </div>
                    <div>
                      <span className="colorWhite">ID:</span>
                      <span className="colorWhite">03</span>
                    </div>
                  </div>
                  <div className="dados">
                    <div>
                      <span className="colorWhite">Nome:</span>
                      <span className="colorWhite">Luiza Mel</span>
                    </div>
                    <div>
                      <span className="colorWhite">Data de nascimento:</span>
                    </div>
                    <div>
                      <span className="colorWhite">20/05/1990</span>
                    </div>
                    <div>
                      <span className="colorWhite">RG/CPF:</span>
                      <span className="colorWhite">390.123.657-18</span>
                    </div>
                    <div>
                      <span className="colorWhite">ID:</span>
                      <span className="colorWhite">03</span>
                    </div>
                  </div>
                  <div className="dados">
                    <div>
                      <span className="colorWhite">Nome:</span>
                      <span className="colorWhite">Luiza Mel</span>
                    </div>
                    <div>
                      <span className="colorWhite">Data de nascimento:</span>
                    </div>
                    <div>
                      <span className="colorWhite">20/05/1990</span>
                    </div>
                    <div>
                      <span className="colorWhite">RG/CPF:</span>
                      <span className="colorWhite">390.123.657-18</span>
                    </div>
                    <div>
                      <span className="colorWhite">ID:</span>
                      <span className="colorWhite">03</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btnSistema btnMedio">Confirmar reserva</button>
        </div>
      </div>
    </section>
  );
}
export default ReservaEstabelecimentoDois;
