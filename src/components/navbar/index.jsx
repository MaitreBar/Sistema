import { useNavigate } from 'react-router-dom';
import imagem from '../../assets/logo/maitre.png';
import './style.css';

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <img id="logo" src={imagem} alt=""></img>
        <div className='nome'> <p>MAÎTRE </p></div>
      <div id="botoes">
        <span>
          {" "}
          <a onClick={() => navigate("/")}>Inicio</a>
        </span>
        <span className="botaoSpan">
          {" "}
          <a onClick={() => navigate("/login")}>Entrar</a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;