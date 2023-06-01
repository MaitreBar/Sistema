import DetalhesEstabelecimento from "../../components/detalhes-estabelecimento/detalhesEstabelecimento";
import Navbar from "../../components/navbar";
import api from "../../api";
import { useEffect, useState } from "react";

function DetalhesEstabelecimentoPages() {

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
        <div>
            <div className="navbar"><Navbar /></div>
            <div className="lista">
            {estabelecimentos.map((estabelecimento) => {<DetalhesEstabelecimento />})}
            </div>
        </div>
    );
}

export default DetalhesEstabelecimentoPages;
