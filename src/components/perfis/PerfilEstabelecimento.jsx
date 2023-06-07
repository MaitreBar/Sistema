import "./Perfil.modules.css";

import logo from "../../assets/logos/logo-marrom-escuro.png";

function PerfilEstabelecimento() {

  return (
    <div>
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
                  <b>Nome</b>
                  <p>CNPJ:</p>
                  <p>Endereço:</p>
                  <p>Descrição:</p>
                  <p>
                    Horário de funcionamento: 0 às 0
                    0
                  </p>
                  <p>Tags:</p>
                  <div className="botoesDetails">
                    <button className="btnSistema" type="submit">Editar</button>
                    <button className="btnSistema bgRed" type="submit">Exluir</button>
                  </div>
                </div>
              </div>
              <div className="card">
                <button type="submit" className="btnSistema">
                  <b>Consultar reservas</b>
                  <p>Confira as reservas dos seus cliente</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PerfilEstabelecimento;