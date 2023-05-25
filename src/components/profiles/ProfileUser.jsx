import "./Profile.modules.css";

import logo from "../../assets/images/icon/logo.png";
import Navbar from "../navbar";

function ProfileUser() {
  return (
    <div className="body">
      <Navbar />
      <div className="container">
        <div className="container-profile">
          <p className="frase">Meu perfil</p>
          <div className="container-card">
            <div className="card-details">
              <div className="photo">
                <img src={logo} alt="logo" />
              </div>
              <div className="details">
                <b>$nome$</b>
                <p>CPF:</p>
                <p>RG:</p>
                <p>Data de nascimento:</p>
                <p>E-mail:</p>
                <p>Celular:</p>
                <a className="btnEditar" href="">
                  Editar
                </a>
              </div>
            </div>
            <div className="card">
              <a href="">
                <b>Consultar reservas</b>
                <p>Confira suas reservas já feitas</p>
              </a>
              <a href="">
                <b>Reservar agora</b>
                <p>Reserve sua mesa para uma ocasião especial</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileUser;
