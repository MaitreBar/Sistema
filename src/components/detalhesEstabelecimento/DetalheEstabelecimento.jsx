import "./DetalheEstabelecimento.modules.css";
import ImagemEstabelecimento from "../../assets/backgrounds/bar1.png";
import axios from "axios";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import { useEffect, useState } from "react";
import CardFeedback from "./CardFeedback";

function DetalheEstabelecimento() {
  const { state: usuarioLogado, state: dadosEstabelecimento } = useLocation();
  const navigate = useNavigate();

  const [isModalVisible, setModalVisible] = useState(false);
  const [posicaoNaFila, setPosicaoNaFila] = useState(null);

  const [modalAberto, setModalAberto] = useState(false);
  const abrirModal = () => {
    setModalAberto(true);
  };

  const [endereco, setEndereco] = useState({});

  // const abrirModal = () => {
    
  //   fetch('/posicaoReserva/{idUsuario}')
  //   .then(response => response.json())
  //   .then(data => {
  //       setPosicaoNaFila(data.posicao);
  //       setModalVisible(true);
  //     })
  //     .catch(error => {
  //       console.error('Erro ao obter a posição na fila:', error);
  //     });
  //     console.warn("Aqui abriu")
  // }

  useEffect(() => {
    axios
      .get(`https://viacep.com.br/ws/${dadosEstabelecimento.cep}/json`)
      .then((response) => {
        console.log(response.data);
        setEndereco(response.data);
      });
  }, []);

  return (
    <div className="backgroundBody">
      <div className="containerMarromEscuro">
        <p className="tituloContainer colorWhite" alt="restaurantes da região">
          Conheça nossos parceiros e divirta-se
        </p>
        <div className="containerCarrossel"></div>
        <div className="containerCardEstabelecimento">
          <div className="containerDetalhesEstabelecimento">
            <div className="cardImagem">
              <img className="imagem" src={ImagemEstabelecimento} alt="" />
              <div className="txtImagemNome">
                <b>{dadosEstabelecimento.nome}</b>
                <p>
                  {endereco.logradouro}, n°{dadosEstabelecimento.numero}
                </p>
              </div>
            </div>
            <div className="cardDetalhes">
              <hr />
              <b>Sobre</b>
              <p>{dadosEstabelecimento.descricao}</p>
              <b>Faixa de preço</b>
              <p>de R$ a R$</p>
              <b>Horário de funcionamento</b>
              <p>
                Das {dadosEstabelecimento.horarioAbertura} às{" "}
                {dadosEstabelecimento.horarioFechamento} |{" "}
                {dadosEstabelecimento.diasDaSemana}
              </p>
            </div>
            <div className="cardMapa">
              <hr />
              <b>Como chegar</b>
              <p>
                {endereco.logradouro}, n°{dadosEstabelecimento.numero} -{" "}
                {endereco.bairro} - {endereco.localidade}-{endereco.uf} |{" "}
                {endereco.cep}
              </p>
              <div className="mapaEstabelecimento"></div>
              <button className="btnSistema btnMedio"> Ver mapa</button>
            </div>
          </div>
          <div className="containerDetalhesEstabelecimento">
            <div className="cardBotoes">
              <button type="submit" className="btnSistema">
                <b>Reservar agora</b>
                <p>Reserve sua mesa para uma ocasião especial.</p>
              </button>
              <button type="submit" className="btnSistema" onClick={abrirModal}>
                <p>Entrar na Fila</p>
                <p>Entre na fila de espere um lugar só para você.</p>
              </button>
              {modalAberto && (
                      <div className="modal">
                        <p>Sua posição na fila é:</p>
                        <div className="position">
                          <p>10</p>
                        </div>
                        <p>Por favor, aguarde na fila!</p>
                      </div>
                    )}
            </div>
            <div className="cardAvaliacoes">
              <div className="txtAvaliacoes">
                <p className="tituloEtapa">Avaliações dos clientes</p>
              </div>
              <div className="containerComentarios">
                <hr />
                {dadosEstabelecimento.reservas.map((reserva, index) => {
                  if (
                    reserva.feedback !== undefined &&
                    reserva.feedback !== null &&
                    reserva.feedback !== ""
                  ) {
                    return <CardFeedback reserva={reserva} />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetalheEstabelecimento;
