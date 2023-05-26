import Navbar from "../../components/navbar";
import CadastroFaseUm from "../../components/cadastro-fase-um";
import { useLocation } from "react-router";

function CadastroEstabelecimento1() {
  const { state: usuarioLogado } = useLocation();
  return (
    <div>
      <div className="Navbar"><Navbar usuarioLogado={usuarioLogado} /> </div>
      <div className="CadastroFaseUm"><CadastroFaseUm /></div>
    </div>
  );
}

export default CadastroEstabelecimento1;