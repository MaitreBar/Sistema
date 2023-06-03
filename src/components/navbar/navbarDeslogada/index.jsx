import { useNavigate } from 'react-router-dom';
import imagem from '../../../assets/logo/maitre.png';
import './style.css';

function NavbarDeslogada() {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img id="logo" src={imagem} alt=""></img>
      <div className='nome'> <p>MAÎTRE </p></div>
      <div id="botoes">
        <span onClick={() => navigate("/")}>
          {" "}
          <a>Inicio</a>
        </span>
        <span onClick={() => navigate("/login")} className="botaoSpan">
          {" "}
          <a>Entrar</a>
        </span>
      </div>
    </div>
  );
}

export default NavbarDeslogada;