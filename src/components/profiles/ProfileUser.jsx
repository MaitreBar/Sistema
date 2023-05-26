import "./Profile.modules.css";

import logo from "../../assets/images/icon/logo.png";
import Navbar from "../navbar";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileUser(props) {

  const { state: usuarioLogado } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="body">
      <Navbar usuarioLogado={props.usuarioLogado}/>
      <div className="container">
        <div className="container-profile">
          <p className="frase">Meu perfil</p>
          <div className="container-card">
            <div className="card-details">
              <div className="photo">
                <img src={logo} alt="logo" />
              </div>
              <div className="details">
                <b>{props.usuarioLogado.nome}</b>
                <p>CPF:{props.usuarioLogado.cpf}</p>
                <p>RG:{props.usuarioLogado.rg}</p>
                <p>Data de nascimento:{props.usuarioLogado.dtNasc}</p>
                <p>E-mail:{props.usuarioLogado.email}</p>
                <p>Celular:{props.usuarioLogado.celular}</p>
                <a className="btnEditar" href="">
                  Editar
                </a>
              </div>
            </div>
            <div className="card">
              <a onClick={() => navigate('/lista-reserva/cliente', {state: props.usuarioLogado})}>
                <b>Consultar reservas</b>
                <p>Confira suas reservas já feitas</p>
              </a>
              <a onClick={() => navigate('/catalogo', {state: props.usuarioLogado})}>
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
