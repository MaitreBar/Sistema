import "./Perfil.modules.css";

import logo from "../../assets/logos/logo-marrom-escuro.png";
import { useLocation, useNavigate } from "react-router";

function PerfilCliente() {
  const { state: usuarioLogado } = useLocation();
  const navigate = useNavigate();
  console.log(usuarioLogado);

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
                <b>{usuarioLogado.nome}</b>
                <p>CPF: {usuarioLogado.cpf}</p>
                <p>RG: {usuarioLogado.rg}</p>
                <p>Data de nascimento: {usuarioLogado.dtNasc}</p>
                <p>E-mail: {usuarioLogado.email}</p>
                <p>Celular: {usuarioLogado.celular}</p>
                <div className="botoesDetails">
                  <button
                    className="btnSistema"
                    onClick={() =>
                      navigate("/perfil/cliente/atualizar", {
                        state: usuarioLogado,
                      })
                    }
                    type="submit"
                  >
                    Editar
                  </button>
                  <button className="btnSistema bgRed" type="submit">
                    Excluir
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <button
                type="submit"
                onClick={() => navigate("/reservas/cliente")}
                className="btnSistema"
              >
                <b>Consultar reservas</b>
                <p>Confira suas reservas já feitas</p>
              </button>
              <button
                type="submit"
                onClick={() => navigate("/catalogo")}
                className="btnSistema"
              >
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
