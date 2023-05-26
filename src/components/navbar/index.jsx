import { useLocation, useNavigate } from "react-router-dom";
import NavbarLogadaPerfil from "./navbarPerfil/navbarPerfil";
import NavbarDeslogada from "./navbarDeslogada";

function Navbar() {
  const { state: usuarioLogado } = useLocation();
  const navigate = useNavigate();

  if (usuarioLogado !== undefined) {
    return <NavbarLogadaPerfil usuario={usuarioLogado} />;
  } else {
    return <NavbarDeslogada />;
  }
}

export default Navbar;
