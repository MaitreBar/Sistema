
import AreaLogin from "../../components/areaLogin";
import Navbar from "../../components/navbar";
import { useLocation } from "react-router";

function Login() {
  const { state: usuarioLogado } = useLocation();
  return (
    <div>
      <div className="navbar"><Navbar usuarioLogado={usuarioLogado} /></div>
      <div className="areaLogin"><AreaLogin /></div>

    </div>
  );
}

export default Login;
