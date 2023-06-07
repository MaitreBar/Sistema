import "./Perfil.modules.css";

import logo from "../../assets/logos/logo-marrom-escuro.png";

function PerfilCliente() {

  return (
    <div className="backgroundBody">
      <div className="containerMarromEscuro">
        <p className="tituloContainer colorWhite">Meu perfil</p>
        <div className="container-profile">
          <div className="container-card">
            <div className="card-details">
              <div className="photo">
                <img src={logo} alt="logo" />
              </div>
              <div className="details">
                <b>nome</b>
                <p>CPF:</p>
                <p>RG:</p>
                <p>Data de nascimento:</p>
                <p>E-mail:</p>
                <p>Celular:</p>
                <div className="botoesDetails">
                    <button className="btnSistema" type="submit">Editar</button>
                    <button className="btnSistema bgRed" type="submit">Exluir</button>
                  </div>
              </div>
            </div>
            <div className="card">
              <button type="submit" className="btnSistema">
                <b>Consultar reservas</b>
                <p>Confira suas reservas já feitas</p>
              </button>
              <button type="submit" className="btnSistema">
                <b>Reservar agora</b>
                <p>Reserve sua mesa para uma ocasião especial</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PerfilCliente;