import "./styleFaseUm.css";
function CadastroFaseUm() {
  return (
    <div className="body">
      <div className="inputs-cadastro">
        <h2 className="titulos">Cadastre seu estabelecimento</h2>
        <div className="textos">
          <br></br>
          <span className="subtitulo0"> 1 - 4 </span>
          <br></br>
          <br></br>
          <input className="campoTextoCadastro-cadastro" type="text" placeholder="Nome"></input>
          <br className="broken"></br>
          <input className="campoTextoCadastro-cadastro" type="text" placeholder="Senha"></input>
          <br className="broken"></br>
         
          <div className="imagem">
            <input className="" type="file"/>
            <br></br>
            <button className="button-27">Adicionar Imagem</button>
          </div>
            <br></br>
          <button className="button-28" >Proximo</button>
          <br></br>
        </div>
      </div>
    </div>

  );
}

export default CadastroFaseUm;