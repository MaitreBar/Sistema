import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import logo from "../../assets/logos/logo-marrom-escuro.png";

function NavbarDeslogada() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="containerNavbar">
        <div className="cabecalhoNavbar">
          <img className="imagemNavbar" src={logo} alt="Logo maître" href="" />
          <p className="nomeNavbar" alt="nome do sistema">
            MAÎTRE
          </p>
        </div>
        <div className="containerBotoesNavbar">
          <button
            className="btnSistema"
            onClick={() => navigate("/")}
            alt="botão sair navbar"
          >
            Sair
          </button>
        </div>
      </nav>
    </div>
  );
}
export default NavbarDeslogada;
