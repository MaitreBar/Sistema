import "./style.css";
import AreaCadastro from "./areaCadastro";
import Navbar from "../navbar";
import Background from "../Background";

function Cadastro() {
    return (
      <div>
        <div className="background"><Background/></div>
        <div className="navbar"><Navbar /></div>
        <div className="areaCadastro"><AreaCadastro/></div>
      </div>
    );
}

export default Cadastro;
