import "../style.css"

function AreaLogin() {
  return (
    <div className="inputs">
      <h2 className="titulo">LOGIN</h2>
      <div className="textos">
        <span className="subtitulo">
          Não possui login?  <a href="."> Cadastre-se</a>
        </span>
        <input className="campoTexto" type="text" placeholder=" E-mail"></input>
        <br></br>
        <input className="campoTexto" type="password" placeholder="Senha"></input>
        <br></br>
        <button className="button-28">Entrar</button>
        <br></br>

      </div>
    </div>
  );
}

export default AreaLogin;