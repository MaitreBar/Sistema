import { useLocation, useNavigate } from "react-router-dom";
import imagem from "../../assets/logo/maitre.png";
import "./style.css";
import NavbarLogadaPerfil from "./navbarPerfil/navbarPerfil";

function Navbar() {
  const { state: usuarioLogado } = useLocation();
  const navigate = useNavigate();

  if (usuarioLogado !== undefined) {
    return <NavbarLogadaPerfil />;
  } else {
    return <Navbar />;
  }
}

export default Navbar;
