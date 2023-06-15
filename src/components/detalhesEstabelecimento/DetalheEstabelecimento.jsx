import "./DetalheEstabelecimento.modules.css";
import ImagemEstabelecimento from "../../assets/backgrounds/bar1.png";
import img1 from "../../assets/carrosel/Rectangle17.png";
import img2 from "../../assets/carrosel/Rectangle18.png";
import img3 from "../../assets/carrosel/Rectangle19.png";

import axios from "axios";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import { useEffect, useState } from "react";
import CardFeedback from "./CardFeedback";
import api from "../../api";

function DetalheEstabelecimento() {
  const { state: propriedades } = useLocation();
  const navigate = useNavigate();
  console.log(propriedades.usuarioLogado)

  const [isModalVisible, setModalVisible] = useState(false);
  const [posicaoNaFila, setPosicaoNaFila] = useState(null);

  const [modalAberto, setModalAberto] = useState(false);
  const abrirModal = () => {
    setModalAberto(true);
  };

  const [endereco, setEndereco] = useState({});

  useEffect(() => {
    axios
      .get(`https://viacep.com.br/ws/${propriedades.dadosEstabelecimento.cep}/json`)
      .then((response) => {
        console.log(response.data);
        setEndereco(response.data);
      });
  }, []);

  const [inputId, setInputId] = useState();
  const [localFila, setLocalFila] = useState();
  const [addFila, setAddFila] = useState();

  //Adicionar a fila
  useEffect(() => 
  {if(!propriedades.usuarioLogado.reservas === undefined || !propriedades.usuarioLogado.reservas === undefined){
      api
        .post(`/fila/${propriedades.usuarioLogado.id}`)
        .then((response) => {
          setAddFila(response.data);
          console.log(addFila);
        })
        .catch((err) => {
          console.error(err);
        });
  }}, [inputId]);

  //Pegar posição na fila
  useEffect(() => {
    api
      .get(`/fila/posicao/${propriedades.usuarioLogado.id}`)
      .then((response) => {
        setLocalFila(response.data);
        console.log(localFila);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [inputId]);

  return (
    <div className="backgroundBody">
      <div className="containerMarromEscuro">
        <p className="tituloContainer colorWhite" alt="restaurantes da região">
          Conheça nossos parceiros e divirta-se
        </p>
        <div className="containerCarrossel carrossel-position ">
          <img src={img1}></img>
          <img src={img2}></img>
          <img src={img3}></img>
          <img src={img2}></img>
          <img src={img2}></img>
          <img src={img3}></img>
        </div>
        <div className="containerCardEstabelecimento">
          <div className="containerDetalhesEstabelecimento">
            <div className="cardImagem">
              <img className="imagem" src={ImagemEstabelecimento} alt="" />
              <div className="txtImagemNome">
                <b>{propriedades.dadosEstabelecimento.nome}</b>
                <p>
                  {endereco.logradouro}, n°{propriedades.dadosEstabelecimento.numero}
                </p>
              </div>
            </div>
            <div className="cardDetalhes">
              <hr />
              <b>Sobre</b>
              <p>{propriedades.dadosEstabelecimento.descricao}</p>
              {/* <b>Faixa de preço</b> */}
              {/* <p>de R$ a R$</p> */}
              <b>Horário de funcionamento</b>
              <p>
                Das {propriedades.dadosEstabelecimento.horarioAbertura} às{" "}
                {propriedades.dadosEstabelecimento.horarioFechamento} |{" "}
                {propriedades.dadosEstabelecimento.diasDaSemana}
              </p>
            </div>
            <div className="cardMapa">
              <hr />
              <b>Como chegar</b>
              <p>
                {endereco.logradouro}, n°{propriedades.dadosEstabelecimento.numero} -{" "}
                {endereco.bairro} - {endereco.localidade}-{endereco.uf} |{" "}
                {endereco.cep}
              </p>
              <div className="mapaEstabelecimento"></div>
              <button className="btnSistema btnMedio" onClick={addFila}> Ver mapa</button>
            </div>
          </div>
          <div className="containerDetalhesEstabelecimento">
            <div className="cardBotoes">
              <button
                onClick={() => navigate("/reserva/um", {
                  state: propriedades
                })}
                type="button"
                className="btnSistema"
              >
                <b>Reservar agora</b>
                <p>Reserve sua mesa para uma ocasião especial.</p>
              </button>
              <button
                type="submit"
                className="btnSistema"
                onClick={() => abrirModal()}
              >
                <p>Entrar na Fila</p>
                <p>Entre na fila de espere um lugar só para você.</p>
              </button>
              {modalAberto && (
                <div className="modal">
                  <p>Sua posição na fila é:</p>
                  <div className="position">
                    <p>{localFila}</p>
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
                {propriedades.dadosEstabelecimento.reservas.map((reserva, index) => {
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
