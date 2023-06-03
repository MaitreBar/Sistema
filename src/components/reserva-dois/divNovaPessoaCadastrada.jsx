function NovaPessoaCadastrada(props) {
  return (
    <div className="container-dados-cadastrados">
      <div className="dados">
        <div>
          <span>Nome:</span> <span>{props.cadastroNovo.nome}</span>
        </div>
        <div>
          <span>Data de nascimento:</span>
        </div>
        <div>
          <span>{props.cadastroNovo.dtNasc}</span>
        </div>
        <div>
          <span>RG/CPF:</span> <span>{props.cadastroNovo.cpf}</span>
        </div>
        <div>
          <span>ID:</span> <span>{props.id}</span>
        </div>
      </div>
    </div>
  );
}

export default NovaPessoaCadastrada;