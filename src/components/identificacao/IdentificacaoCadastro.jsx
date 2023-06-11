import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

function IdentificacaoCadastro() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromClaro">
          <p className="tituloContainer colorBlack" alt="Login">
            Identificação para cadastro
          </p>
          <p className="txtDecisao">
            Já possui cadastro?{" "}
            <a className="txtVerde" href="/login">
              Realize o login
            </a>
          </p>
          <form onSubmit="" className="formulario">
            <button
              onClick={() => navigate("/cadastro/cliente")}
              className="btnSistema btnMedio"
            >
              Cliente
            </button>
            <button
              onClick={() => navigate("/cadastro/estabelecimento/um")}
              className="btnSistema btnMedio"
            >
              Estabelecimento
            </button>
            <p className="txtDecisao">
              Esqueceu a senha ou o e-mail?{" "}
              <a className="txtVerde" href="/recuperar">
                Clique aqui!
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
export default IdentificacaoCadastro;
