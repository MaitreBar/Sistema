import "./CatalogoEstabelecimento.modules.css";
import imagemEstabelecimento from "../../assets/estabelecimentos/bar-amarelo.png";

function CatalogoEstabelecimento(){
    return(
        <section>
            <div className='backgroundBody'>            
                <div className='containerMarromEscuro'>
                    <p className='tituloContainer colorWhite' alt='Login'>Restaurantes da região</p>
                    <div className="containerLista">
                        <div className="boxLista">
                                <div className="containerImagemListaEstabelecimento">
                                    <img src={imagemEstabelecimento} alt="" />
                                </div>
                                <div className="containerDetalheEstabelecimento">
                                    <b>Nome</b>
                                    <p>Endereço: </p>
                                    <br/>
                                    <b>Faixa de preço: </b>
                                    <p>De R$ a R$</p>
                                    <div className="containerTags">

                                    </div>
                                </div>
                                <div className="containerSituacaoEstabelecimento">
                                    <img src="" alt="" />
                                    <b className="fontOld">0.0</b>
                                    <p>Capacidade: </p>
                                    <b>Lotação: </b>
                                    <p>De R$ a R$</p>
                                    <button className="btnSistema btnMedio" type="submit">Reservar</button>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default CatalogoEstabelecimento;