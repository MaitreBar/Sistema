
function AreaCadastro() {
  return (
    <div className="inputs-cadastro">
      <h2 className="titulos">CADASTRE - SE</h2>
      <div className="textos">
      <span className="subtitulo">
          Ja possui cadastro?  <a href="../../Cadastro"> Fazer login</a>
        </span>
        <input className="campoTextoCadastro" type="text" placeholder="Nome Completo"></input>
        <br className="broken"></br>  
        <input className="campoTextoCadastro" type="text" placeholder="CPF"></input>
        <br className="broken"></br>
        <input className="campoTextoCadastro" type="text" placeholder="RG"></input>
        <br className="broken"></br>
        <input className="campoTextoCadastro" type="text" placeholder="Data de Nascimento"></input>
        <br className="broken"></br>
        <input className="campoTextoCadastro" type="text" placeholder="Email"></input>
        <br className="broken"></br>
        <input className="campoTextoCadastro" type="text" placeholder="Telefone"></input>
        <br className="broken"></br>
        <button className="button-28">Cadastrar</button>
        <br></br>
      </div>
    </div>
  );
}

export default AreaCadastro;