import "./styleCadastro.css";
import AreaCadastro from "./areaCadastro";
import Navbar from "../navbar";
import backgroundImg from '../../assets/backgrounds/backgroundCadLog.png';

function Cadastro() {
    return (
      <div>
        <div className="navbar"><Navbar /></div>
        <div className="areaCadastro"><AreaCadastro/></div> 
        
      </div>
    );
}

export default Cadastro;
