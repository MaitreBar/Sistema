import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbarDeslogada";
import CardCatalogo from "../../components/cardCatalogo/cardCatalogo";
import api from "../../api";
import "./catalogo.css";

function Catalogo() {
  const [estabelecimentos, setEstabelecimentos] = useState([]);

  useEffect(() => {
    getEstabelecimentos();
  }, []);

  function getEstabelecimentos() {
    api
      .get("/estabelecimentos")
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("LISTA DE ESTABELECIMENTOS: ", response.data);
        setEstabelecimentos(response.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log("Este endpoint não existe");
        } else {
          console.error(err);
        }
      });
  }

  return (
    <div className="body">
      <Navbar />

      <div className="body">
        {estabelecimentos.map((estabelecimento) => {
          return <CardCatalogo estabelecimento={estabelecimento} key={estabelecimento.id} />;
        })}
      </div>
    </div>
  );
}
export default Catalogo;
