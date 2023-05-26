import { useNavigate } from 'react-router-dom';
import imagem from '../../../assets/logo/maitre.png';
import './navbarPerfil.css';

function NavbarLogadaPerfil() {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img id="logo" src={imagem} alt=""></img>
      <div className='nome'> <p>MAÎTRE </p></div>
      <div id="botoes">
        <span onClick={() => navigate("/")} className='botaoPerfil'>
          {" "}
          <a>Inicio</a>
        </span>
        <span onClick={() => navigate("/perfil/usuario")} className='botaoVoltar'>
          {" "}
          <a>Perfil</a>
        </span>
        <span onClick={() => {navigate("/login"); sessionStorage.clear();}} className="botaoSpan-logado">
          {" "}
          <a>Sair</a>
        </span>
      </div>
    </div>
  );
}

export default NavbarLogadaPerfil;