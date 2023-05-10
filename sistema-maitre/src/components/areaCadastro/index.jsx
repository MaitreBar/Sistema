import "./styleCadastro.css";

function AreaCadastro() {
  return (
    <div className="bg">
    <div className="input-cadastro">
      <h2 className="titulos-cad">CADASTRE - SE</h2>
      <div className="textos">
      <span className="subtitulo1"> Estabelecimento<br></br><a href="../../Cadastro">Login</a> <p className="ou">ou</p> <a href="../../Cadastro"> Cadastre - se</a></span>
      <br></br>
      <span className="subtitulo2">
          Ja possui cadastro?  <a href="../../Cadastro"> Fazer login</a>
        </span>
        <br></br>
        <input className="campoTextoCadastro" type="text" placeholder="Nome Completo"></input>
        <br className="broken"></br>  
        <input className="campoTextoCadastro" type="text" placeholder="Data de nascimento"></input>
        <br className="broken"></br>
        <input className="campoTextoCadastro" type="text" placeholder="RG"></input>
        <br className="broken"></br>
        <input className="campoTextoCadastro" type="text" placeholder="CPF"></input>
        <br className="broken"></br>
        <input className="campoTextoCadastro" type="text" placeholder="Celular"></input>
        <br className="broken"></br>
        <input className="campoTextoCadastro" type="email" placeholder="E-mail"></input>
        <br className="broken"></br>
        <input className="campoTextoCadastro" type="password" placeholder="Senha"></input>
        <br className="broken"></br>
        <input className="campoTextoCadastro" type="password" placeholder="Repetir senha"></input>
        <br className="broken"></br>
        <button className="button-28">Cadastrar</button>
        <br></br>
      </div>
    </div>
    </div>
  );
}

export default AreaCadastro;