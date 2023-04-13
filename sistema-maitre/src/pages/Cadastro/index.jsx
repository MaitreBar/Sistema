import "./style.css";

import ImagemLateral from "./ImagemLateralCadastro";
import AreaLogin from "./areaCadastro";
import Navbar from "../navbar";

function Login() {
    return (
      <div>
        <div className="cadastrese"><AreaLogin /></div>
        <div className="navbar"><Navbar /></div>
        <div className="banner"><ImagemLateral /></div>
      </div>
    );
}

export default Login;
