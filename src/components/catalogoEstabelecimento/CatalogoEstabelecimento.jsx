import "./CatalogoEstabelecimento.modules.css";
import React, { useEffect } from "react";
import api from "../../api";
import { useState } from "react";
import CardEstabelecimento from "./CardEstabelecimento";
import { useLocation } from "react-router-dom/dist/umd/react-router-dom.development";

function CatalogoEstabelecimento() {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const { state: usuarioLogado } = useLocation();

  useEffect(() => {
    api.get("/estabelecimentos").then((response) => {
      console.log(response.data);
      setEstabelecimentos(response.data);
    });
  }, []);

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromEscuro">
          <p className="tituloContainer colorWhite" alt="Login">
            Restaurantes da região
          </p>
          <div className="containerLista">
            {estabelecimentos.map((estabelecimento, index) => {
              return (
                <CardEstabelecimento
                  estabelecimento={estabelecimento}
                  usuario={usuarioLogado}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default CatalogoEstabelecimento;
