import { useState } from "react";
import logo from "../../../assets/images/icon/logo.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.modules.css";

function Navb() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setState(!state);
  }

  return (
    <nav className="navbarInstitucional">
      <div className="iconNav">
        <a href="">
          <img src={logo} alt="logo maître" />
        </a>
        <p>MAÎTRE</p>
      </div>
      <div>
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
          <li
            onClick={() => {
              if (sessionStorage.length === 0) {
                navigate("/login");
              } else {
                navigate("/catalogo");
              }
            }}
          >
            <a className="btnReserva">Reservar</a>
          </li>
        </ul>
      </div>
      <div className="mobile" onClick={handleClick}>
        <i id="bar" className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
}

export default Navb;