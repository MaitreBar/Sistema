import { useState } from "react";
import logo from '../../../assets/logos/logo-marrom-escuro.png';
// import { useNavigate } from "react-router-dom";
import style from "./Navbar.modules.css";

function Navbar() {
  const [state, setState] = useState(false);
  // const navigate = useNavigate();

  function handleClick() {
    setState(!state);
  }

  return (
    <nav className="containerNavbar">
      <div className="cabecalhoNavbar">
        <img src={logo} alt="logo maître" className="imagemNavbar"/>
        <p className="nomeNavbar">MAÎTRE</p>
      </div>
      <div className="containerBotoesNavbar">
        <ul id="navbar" className={state ? "#navbar active" : "#navbar"}>
          <li>
            <a className="active a">Início</a>
          </li>
          <li>
            <a className="a">Sobre</a>
          </li>
          <li>
            <a className="a">Parceiros</a>
          </li>
          <li>
            <a className="a">Contate-nos</a>
          </li>
          <li>
            <button className="btnReserva" >Reservar</button>
          </li>
        </ul>
        <div className="mobile" onClick={handleClick}>
        <i id="bar" className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// onClick={() => {
//   if(sessionStorage.length === 0){
//   navigate("/login");
// } else {
//   navigate("/catalogo");
// }
// }}