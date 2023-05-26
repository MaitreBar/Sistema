
import AreaCadastro from "../../components/areaCadastro";
import Navbar from "../../components/navbar";
import { useLocation } from "react-router";

function Cadastro() {
  const { state: usuarioLogado } = useLocation();
  return (
    <div>
      <div className="navbar"><Navbar usuarioLogado={usuarioLogado} /></div>
      <div className="areaCadastro"><AreaCadastro /></div>

    </div>
  );
}

export default Cadastro;
