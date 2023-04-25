import "./styleCadastro.css";
import AreaCadastro from "./areaCadastro";
import Navbar from "../navbar";

function Cadastro() {
    return (
      <div>
        <div className="navbar"><Navbar /></div>
        <div className="areaCadastro"><AreaCadastro/></div> 
        
      </div>
    );
}

export default Cadastro;
