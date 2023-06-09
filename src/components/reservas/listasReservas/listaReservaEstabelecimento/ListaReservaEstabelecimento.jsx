import "./ListaReservaEstabelecimento.modules.css";

function ListaReservaEstabelecimento(){
    return(
        <section>
            <div className='backgroundBody'>            
                <div className='containerMarromEscuro'>
                    <p className='tituloContainer colorWhite' alt='Confira suas reservas'>Confira suas reservas</p>
                    <div className="containerPesquisarPorLetra colorWhite">
                        <b>Filtrar clientes</b><br/>
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
                                    <b>Nome cliente:</b>
                                    <p>Nome</p>
                                </div>
                            <div className="boxBotao">
                                <button className="btnSistema btnMedio" type="submit">CHECK-IN</button>
                                <button className="btnSistema btnMedio" type="submit">CHECK-OUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ListaReservaEstabelecimento;