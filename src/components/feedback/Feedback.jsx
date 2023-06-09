import "./Feedback.modules.css";

function Feedback(){
    return(
        <section>
        <div className='backgroundBody'>            
            <div className='containerMarromEscuro'>
                <p className='tituloContainer colorWhite' alt='Login'>Deixe sua avaliação</p>
                <div className="containerLista">
                    <div className="boxLista">
                        <p>Olá, <b>nome cliente</b></p>
                        <p>Queremos saber mais sobre sua experiência!</p>
                        <p>Como foi sua reserva no <b>nome restaurante</b>?</p>
                        <input type="text" className="formularioInput" placeholder="Escreva aqui sua avaliação..." />
                        <p>Sua opnião é muito importante para continuarmos melhorando nossos serviços! Agradecemos seu feedback!</p>
                        <button type="submit" className="btnSistema btnMedio">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Feedback;