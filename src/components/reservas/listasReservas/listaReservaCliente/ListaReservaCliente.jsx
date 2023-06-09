import "./ListaReservaCliente.modules.css";

function ListaReservaCliente(){
    return(
        <section>
            <div className='backgroundBody'>            
                <div className='containerMarromEscuro'>
                    <p className='tituloContainer colorWhite' alt='Login'>Confira suas reservas</p>
                    <div className="containerBtnTopo">
                        <button className="btnSistema btnMedio" type="submit">Nova reserva</button>
                    </div>
                    <div className="containerLista">
                        <div className="boxLista">
                                <div className="boxText">
                                    <b>Dia:</b>
                                    <p>dd/mm/yyyy</p>
                                </div>
                                <div className="boxText">
                                    <b>Horário:</b>
                                    <span>00:00 à 00:00</span>
                                </div>
                                <div className="boxText">
                                    <b>Mesa:</b>
                                    <p>0</p>
                                </div>
                                <div className="boxText">
                                    <b>Quantidade pessoas:</b>
                                    <p>0</p>
                                </div>
                                <div className="boxText">
                                    <b>Nome estabelecimento:</b>
                                    <p>Nome</p>
                                </div>
                                <div className="boxText">
                                    <b>Endereço:</b>
                                    <p>Endereço</p>
                                </div>
                            <div className="boxBotao">
                                <button className="btnSistema btnMedio" type="submit">Cancelar reserva</button>
                            </div>
                        </div>
                        <br /><p className='tituloContainer colorWhite' alt='reservas já concluídas'>Reservas já concluídas</p>
                        <div className="boxLista">
                                <div className="boxText">
                                    <b>Dia:</b>
                                    <p>dd/mm/yyyy</p>
                                </div>
                                <div className="boxText">
                                    <b>Horário:</b>
                                    <span>00:00 à 00:00</span>
                                </div>
                                <div className="boxText">
                                    <b>Mesa:</b>
                                    <p>0</p>
                                </div>
                                <div className="boxText">
                                    <b>Quantidade pessoas:</b>
                                    <p>0</p>
                                </div>
                                <div className="boxText">
                                    <b>Nome estabelecimento:</b>
                                    <p>Nome</p>
                                </div>
                                <div className="boxText">
                                    <b>Endereço:</b>
                                    <p>Endereço</p>
                                </div>
                            <div className="boxBotao">
                                <button className="btnSistema btnMedio" type="submit">Realizar feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ListaReservaCliente;