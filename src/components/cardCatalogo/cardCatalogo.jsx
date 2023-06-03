import React, { useEffect, useState } from "react";
import imagem from "../../assets/banner/bannercard.png";

import "./catalogo.css";
import { useNavigate } from "react-router-dom";

function CardCatalogo(props) {
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => separarTags());

  function separarTags() {
    setTags(props.estabelecimento.tags.split(","));
  }

  const estabelecimento = props.estabelecimento;

  return (
    <div className="container">
      <div className="content">
        <img className="contentImg" src={imagem} alt="Imagem" />
        <div className="text">
          <span className="negrito">{props.estabelecimento.nome}</span>
          <p>
            {props.estabelecimento.logradouro}, {props.estabelecimento.numero}
          </p>
        </div>
        <div className="text-2">
          <span className="negrito">Horário de funcionamento</span>
          <p>
            das {props.estabelecimento.horarioAbertura} até às{" "}
            {props.estabelecimento.horarioFechamento}
          </p>
        </div>
        <span className="aling">
          {tags.map((tags, index) => (
            <span className="tags" key={index}>
              {tags}
            </span>
          ))}
        </span>

        <button
          onClick={() => {
            const estabelecimento = props.estabelecimento;
            navigate("/detalhes/estabelecimento", {
              state: estabelecimento,
            });
          }}
          className="button-reservar-catalogo"
        >
          Reservar
        </button>
      </div>
    </div>
  );
}

export default CardCatalogo;
