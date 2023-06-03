import "./Profile.modules.css";

import logo from "../../assets/images/icon/logo.png";
import Navbar from "../navbar";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileUser() {

  const { state: usuarioLogado } = useLocation();
  const navigate = useNavigate();
  console.log(usuarioLogado);

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
                <b>{usuarioLogado.nome}</b>
                <p>CPF:{usuarioLogado.cpf}</p>
                <p>RG:{usuarioLogado.rg}</p>
                <p>Data de nascimento:{usuarioLogado.dtNasc}</p>
                <p>E-mail:{usuarioLogado.email}</p>
                <p>Celular:{usuarioLogado.celular}</p>
                <a className="btnEditar" onClick={() => navigate("/perfil/usuario/atualizar")}>
                  Editar
                </a>
              </div>
            </div>
            <div className="card">
              <a onClick={() => navigate('/reserva/cliente', {state: usuarioLogado})}>
                <b>Consultar reservas</b>
                <p>Confira suas reservas já feitas</p>
              </a>
              <a onClick={() => navigate('/catalogo', {state: usuarioLogado})}>
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
