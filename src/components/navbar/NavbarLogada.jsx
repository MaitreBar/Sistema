import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import logo from "../../assets/logos/logo-marrom-escuro.png";

function NavbarLogada() {
  const navigate = useNavigate();
  const { state: usuarioLogado } = useLocation();

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
            className="btnSistema btnSemFundo"
            onClick={() => {
              if (usuarioLogado.estabelecimento) {
                navigate("/perfil/estabelecimento", { state: usuarioLogado });
              } else {
                navigate("/perfil/cliente", { state: usuarioLogado });
              }
            }}
            alt="botão perfil navbar"
          >
            Perfil
          </button>
          <button
            className="btnSistema btnSemFundo"
            onClick={() => navigate("/catalogo", { state: usuarioLogado })}
            alt="botão início navbar"
          >
            Início
          </button>
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
export default NavbarLogada;
