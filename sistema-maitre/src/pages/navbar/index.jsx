import imagem from '../../assets/logo/maitre.png';
import './style.css';

function Navbar() {
  return (
    <div className='navbar'>
        <img id="logo" src={imagem} alt=""></img>
        <div className='nome'> <p>MAÎTRE </p></div>
      <div id="botoes">
        <span>
          {" "}
          <a href="">Inicio</a>
        </span>
        <span className="botaoSpan">
          {" "}
          <a href="">Entrar</a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;