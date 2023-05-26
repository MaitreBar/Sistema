
import Navbar from "../../components/navbar";
import CadastroFaseQuatro from "../../components/cadastro-fase-quatro";
import { useLocation } from "react-router";
function CadastroEstabelecimento4() {
  const { state: usuarioLogado } = useLocation();
  return (
    <div>
      <div className="Navbar"><Navbar usuarioLogado={usuarioLogado} /> </div>
      <div className="CadastroFaseQuatro"><CadastroFaseQuatro /></div>
    </div>
  );
}

export default CadastroEstabelecimento4;