import "../style.css"

function AreaLogin() {
  return (
    <div className="inputs">
      <h2 className="titulo">Cadastre - se</h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="textos">
        <input className="campoTexto" type="text" placeholder="Nome Completo"></input>
        <br></br>
        <input className="campoTexto" type="text" placeholder="CPF"></input>
        <br></br>
        <input className="campoTexto" type="text" placeholder="RG"></input>
        <br></br>
        <input className="campoTexto" type="text" placeholder="Data de Nascimento"></input>
        <br></br>
        <input className="campoTexto" type="text" placeholder="Email"></input>
        <br></br>
        <input className="campoTexto" type="text" placeholder="Telefone"></input>
        <br></br>
        <button className="button-28">Cadastrar</button>
        <br></br>
      </div>
    </div>
  );
}

export default AreaLogin;