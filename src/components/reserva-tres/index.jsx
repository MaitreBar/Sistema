import "./styleReservaTres.css";
import React, { useState } from 'react';
import imagem from '../../assets/images/planta/planta.png';

function ReservaTres() {

    const [MesaSelecionada, setMesaSelecionada] = useState('');
    const [lugarSelecionado, setLugarSelecionado] = useState('');
    const [modalAberto, setModalAberto] = useState(false);
    const [modalAberto2, setModalAberto2] = useState(false);

    const mesa = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16'];
    const lugares = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8',];
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
        <div className="body">
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
                            <button className="button-28-escolher" onClick={abrirModal}>Escolha sua mesa</button>

                            {modalAberto && (
                                <div className="grid-container">
                                    {mesa.map((mesa, index) => (
                                        <button className="button" key={index} onClick={() => selecionarMesa(mesa)}>{mesa}</button>
                                    ))}
                                </div>
                            )}

                            <button className="button-28-lugar" onClick={abrirModal2}>ID Assento</button>

                            {modalAberto2 && (
                                <div className="grid-container-lugar">
                                    {lugares.map((lugar, index) => (
                                        <button className="button" key={index} onClick={() => selecionarLugar(lugar)}>{lugar}</button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="detalhes-da-reserva">

                            <h3 className="h3-detalhes">Detalhes da reserva</h3>
                            <span className="detalhes-texto"> Nome: </span>
                            <span className="detalhes-texto"> Data de nascimento: </span>
                            <span className="detalhes-texto"> CPF: </span>
                            <span className="detalhes-texto"> Data da reserva: </span>
                            <span className="detalhes-texto"> Horario Escolhido: </span>
                            <span className="detalhes-texto"> idAssento: {lugarSelecionado} </span>
                            <span className="detalhes-texto"> Mesa Selecionada: {MesaSelecionada} </span>
                            <span className="detalhes-texto">
                                <button className="button-28-proximo">Proximo</button>
                            </span>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservaTres;