
import Navbar from "../../components/navbar";
import CadastroFaseDois from "../../components/cadastro-fase-dois";
import { useLocation } from "react-router";
function CadastroEstabelecimento2() {
  const { state: usuarioLogado } = useLocation();
  return (
    <div>
      <div className="Navbar"><Navbar usuarioLogado={usuarioLogado} /> </div>
      <div className="CadastroFaseDois"><CadastroFaseDois /></div>
    </div>
  );
}

export default CadastroEstabelecimento2;