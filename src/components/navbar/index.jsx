import { useLocation, useNavigate } from "react-router-dom";
import imagem from "../../assets/logo/maitre.png";
import { useNavigate } from "react-router-dom";
import "./style.css";
import NavbarLogadaPerfil from "./navbarPerfil/navbarPerfil";
import NavbarDeslogada from "./navbarDeslogada";

function Navbar() {
  const { state: usuarioLogado } = useLocation();
  const navigate = useNavigate();

  if (usuarioLogado !== undefined) {
    return <NavbarLogadaPerfil />;
  } else {
    return <NavbarDeslogada />;
  }
}

export default Navbar;
