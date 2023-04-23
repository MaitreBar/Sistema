import "./style.css";
import AreaCadastro from "./areaLogin";
import Navbar from "../navbar";
import backgroundImg from '../../assets/backgrounds/backgroundCadLog.png';

function Login() {
    return (
      <div>
        <div className="navbar"><Navbar /></div>
        <div className="areaCadastro"><AreaCadastro/></div> 
        
      </div>
    );
}

export default Login;
