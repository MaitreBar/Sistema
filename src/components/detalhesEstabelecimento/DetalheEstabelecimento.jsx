import './DetalheEstabelecimento.modules.css'
function DetalheEstabelecimento(){
    return(
        <div className='backgroundBody'> 
            <div className='containerMarromEscuro'>
                <p className='tituloContainer colorWhite' alt='restaurantes da região'>Conheça nossos parceiros e divirta-se</p>
                <div className="containerCarrossel">
                </div>  
                <div className="containerDetalhes">
                    <div className='informacoesEstabelecimento'>
                        <div className='imagemNome'>
                            <img src="" alt="" />
                            <div className='txtImagemNome'>
                                <b>Nome estabelecimento</b>
                                <p>Endereço, n°123</p>
                            </div>
                        </div>
                        <hr />
                        <div className='detalhesEstabelecimento'>
                            <b>Sobre</b>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                            <b>Faixa de preço</b>
                            <p>de R$ a R$</p>
                            <b>Horário de funcionamento</b>
                            <p>Seg à Sex: 00:00 às 00:00 | Sábados e Domingos: Fechado | Feriados: 00:00 às 00:00</p>
                        </div>
                        <hr />
                        <div className='enderecoEstabelecimento'>
                            <b>Como chegar</b>
                            <p>Endereço, n°123 - bairro - estado-es | cep</p>
                            <div className='mapaEstabelecimento'>

                            </div>
                            <button className='btnSistema btnMedio'> Ver mapa</button>
                        </div>
                    </div>
                    <div className=' informacoesEstabelecimento acoesAvaliacao'>
                        <div className='botoesReserva'>
                            <button className='colorWhite btnSistema' type="">
                                <b>Entrar na fila</b>
                                <p>Entre na fila de espere um lugar só para você.</p>
                            </button>
                            <button className='colorWhite btnSistema' type="">
                                <b>Reservar agora</b>
                                <p>Reserve sua mesa para uma ocasião especial.</p>
                            </button>
                        </div>
                        <div className='containerAvaliacoes'>
                            <p className='tituloEtapa'>Avaliações dos clientes</p>
                            <div className='avaliacoes'>
                                <b>Nome cliente</b>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                            </div>
                            <hr />
                            <div className='avaliacoes'>
                                <b>Nome cliente</b>
                                <p>Sed ac aliquam lacus. Maecenas lectus sapien, pulvinar eget massa sit amet, ultrices tempor nulla. Aliquam ac quam eget lorem dignissim interdum. Vestibulum non commodo sem.
                                </p>
                            </div>
                            <div className='avaliacoes'>
                                <b>Nome cliente</b>
                                <p>Sed ac aliquam lacus. Maecenas lectus sapien, pulvinar eget massa sit amet, ultrices tempor nulla. Aliquam ac quam eget lorem dignissim interdum. Vestibulum non commodo sem.
                                </p>
                            </div><div className='avaliacoes'>
                                <b>Nome cliente</b>
                                <p>Sed ac aliquam lacus. Maecenas lectus sapien, pulvinar eget massa sit amet, ultrices tempor nulla. Aliquam ac quam eget lorem dignissim interdum. Vestibulum non commodo sem.
                                </p>
                            </div><div className='avaliacoes'>
                                <b>Nome cliente</b>
                                <p>Sed ac aliquam lacus. Maecenas lectus sapien, pulvinar eget massa sit amet, ultrices tempor nulla. Aliquam ac quam eget lorem dignissim interdum. Vestibulum non commodo sem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}
export default DetalheEstabelecimento;