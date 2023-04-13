import imagem from '../../assets/maitre.png';
import './style.css';

function Navbar() {
  return (
    <div className='navbar'>
        <img id="logo" src={imagem} alt=""></img>
      <div id="botoes">
        <span>
          {" "}
          <a href="index.html">Inicio</a>
        </span>
        <span className="botaoSpan">
          {" "}
          <a href="login.html">Entrar</a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;