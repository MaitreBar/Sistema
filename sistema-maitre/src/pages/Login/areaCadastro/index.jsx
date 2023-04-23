
function AreaCadastro() {
  return (
    <div className="body">
    <div className="inputs-cadastro">
      <h2 className="titulos">LOGIN</h2>
      <div className="textos">
      <span className="subtitulo2">
          Não possui cadastro?  <a href="../../Cadastro"> cadastre-se</a>
        </span>
        <br></br>
        <input className="campoTextoCadastro" type="text" placeholder="Digite o seu email"></input>
        <br className="broken"></br>
        <input className="campoTextoCadastro" type="text" placeholder="Digite sua senha"></input>
        <br className="broken"></br>
        <span className="subtitulo1"> Esqueceu a senha ou email?<a href="../../Cadastro"> clique aqui</a></span>
        <br></br>
        <button className="button-28">Cadastrar</button>
        <br></br>
      </div>
    </div>
    </div>
  );
}

export default AreaCadastro;