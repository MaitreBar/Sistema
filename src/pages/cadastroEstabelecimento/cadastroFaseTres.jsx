
import Navbar from "../../components/navbar";
import CadastroFaseTres from "../../components/cadastro-fase-tres";
import { useLocation } from "react-router";
function CadastroEstabelecimento3() {
  const { state: usuarioLogado } = useLocation();
  return (
    <div>
      <div className="Navbar"><Navbar usuarioLogado={usuarioLogado} /> </div>
      <div className="CadastroFaseTres"><CadastroFaseTres /></div>

    </div>
  );
}

export default CadastroEstabelecimento3;