import "./styleReservaDois.css";
import React, { useState } from 'react';

function ReservaDois() {

    return (
        <div className="body">
            <div className="container-lista">
                <div className="title-head">
                    <h1> Cadastrar Pessoas </h1>
                </div>
                <div className="inputs-container">
                    <input className="campoTextoCadastro-reserva" type="text" placeholder="Nome completo"></input>
                    <input className="campoTextoCadastro-reserva" type="text" placeholder="Data de Nascimento"></input>
                    <input className="campoTextoCadastro-reserva" type="text" placeholder="RG/CPF"></input>

                </div>

                <div className="title-head-2">
                    <h1> Pessoas Cadastradas </h1>
                </div>
                <div className="container-dados-cadastrados">
                    <div className="dados">
                        <div><span>Nome:</span> <span>Luiza Mel</span></div>
                        <div><span>Data de nascimento:</span></div>
                        <div><span>20/05/1990</span></div>
                        <div><span>RG/CPF:</span> <span>390.123.657-18</span></div>
                        <div><span>ID:</span> <span>03</span></div>

                    </div>

                </div>
                <button className="button-28-proximo" >Proximo</button>
            </div>
        </div>

    );
}

export default ReservaDois;