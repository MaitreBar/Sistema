import { useNavigate } from 'react-router-dom';
import imagem from '../../assets/logo/maitre.png';
import './navbarLogada.css';

function NavbarLogada() {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img id="logo" src={imagem} alt=""></img>
      <div className='nome'> <p>MAÎTRE </p></div>
      <div id="botoes">
        <span className='botaoVoltar'>
          {" "}
          <a onClick={() => navigate("/")}>Voltar</a>
        </span>
        <span className="botaoSpan-logado">
          {" "}
          <a onClick={() => navigate("/sair")}>Sair</a>
        </span>
      </div>
    </div>
  );
}

export default NavbarLogada;