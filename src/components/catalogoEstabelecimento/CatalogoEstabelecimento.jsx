import "./CatalogoEstabelecimento.modules.css";
import React, { useEffect } from "react";
import api from "../../api";
import { useState } from "react";
import CardEstabelecimento from "./CardEstabelecimento";

function CatalogoEstabelecimento() {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  
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
