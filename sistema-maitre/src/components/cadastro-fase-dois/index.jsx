import "./styleFaseDois.css";
function CadastroFaseDois() {
    return (
      <div className="body">
      <div className="inputs-cadastro">
        <h2 className="titulos">Cadastre seu estabelecimento</h2>
        <div className="textos">
            <br></br>
        <span className="subtitulo0"> 2 - 4 </span>
          <br></br>
          <br></br>
          <input className="campoTextoCadastro" type="text" placeholder="Logradouro"></input>
          <br className="broken"></br>
          <input className="campoTextoCadastro" type="text" placeholder="Número"></input>
          <br className="broken"></br>
          <input className="campoTextoCadastro" type="text" placeholder="Complemento"></input>
          <br className="broken"></br>
          <input className="campoTextoCadastro" type="text" placeholder="Telefone"></input>
          <br className="broken"></br>
          <button className="button-28">Proximo</button>
          <br></br>
        </div>
      </div>
      </div>
    
    );
  }
  
  export default CadastroFaseDois;