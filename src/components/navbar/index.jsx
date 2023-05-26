import { useLocation, useNavigate } from "react-router-dom";
import NavbarLogadaPerfil from "./navbarPerfil/navbarPerfil";
import NavbarDeslogada from "./navbarDeslogada";

function Navbar() {
  const { state: usuarioLogado } = useLocation();
  const navigate = useNavigate();

  if (sessionStorage.getItem('usuario').length == 0) {
      return <NavbarDeslogada />;
    } else {
      return <NavbarLogadaPerfil usuario={usuarioLogado} />;
  }
}

export default Navbar;
