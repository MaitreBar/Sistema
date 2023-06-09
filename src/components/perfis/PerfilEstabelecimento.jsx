import "./Perfil.modules.css";

import logo from "../../assets/logos/logo-marrom-escuro.png";
import { useLocation, useNavigate } from "react-router";

function PerfilEstabelecimento() {
  const { state: usuarioLogado } = useLocation();
  const navigate = useNavigate();

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
                  <b>Nome: {usuarioLogado.nome}</b>
                  <p>CNPJ: {usuarioLogado.cnpj}</p>
                  <p>
                    Endereço: {usuarioLogado.logradouro}, {usuarioLogado.numero}
                  </p>
                  <p>Descrição: {usuarioLogado.descricao}</p>
                  <p>
                    Horário de funcionamento: {usuarioLogado.horarioAbertura} às{" "}
                    {usuarioLogado.horarioFechamento}0
                  </p>
                  <p>Tags: {usuarioLogado.tags}</p>
                  <div className="botoesDetails">
                    <button
                      onClick={() =>
                        navigate("/perfil/estabelecimento/atualizar/um", {
                          state: usuarioLogado,
                        })
                      }
                      className="btnSistema"
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
                  onClick={() =>
                    navigate("/reservas/estabelecimento", {
                      state: usuarioLogado,
                    })
                  }
                  className="btnSistema"
                >
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
