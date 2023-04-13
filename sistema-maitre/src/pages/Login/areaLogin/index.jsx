import "../style.css"

function AreaLogin() {
  return (
    <div className="inputs">
      <h2 className="titulo">Faça o login</h2>
      <div className="textos">
        <span>Usuario</span>
        <br></br>
        <input className="campoTexto" type="text"></input>
        <br></br>
        <span>Senha</span>
        <br></br>
        <input className="campoTexto" type="password"></input>
        <br></br>
        <button className="button-28">Entrar</button>
        <br></br>
        <span className="subtitulo">
          É sua primeira vez por aqui? <br></br>
          <a href="cadastro.html">Crie uma conta</a>
        </span>
      </div>
    </div>
  );
}

export default AreaLogin;