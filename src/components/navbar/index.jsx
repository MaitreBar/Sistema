import { useLocation, useNavigate } from "react-router-dom";
import NavbarLogadaPerfil from "./navbarPerfil/navbarPerfil";
import NavbarDeslogada from "./navbarDeslogada";

function Navbar(props) {
  // const { state: usuarioLogado } = useLocation();
  // const navigate = useNavigate();

  // const user = window.sessionStorage('user');

  if (props.usuarioLogado !== undefined) {
    return <NavbarLogadaPerfil usuario={props.usuarioLogado} />;
  } else {
    return <NavbarDeslogada />;
  }
}

export default Navbar;
