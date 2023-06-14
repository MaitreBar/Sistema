import { format } from "date-fns";

function CardPessoa(props) {
  return (
    <div className="dados">
      <div>
        <span className="colorWhite">Nome:</span>
        <span className="colorWhite">{props.pessoa.nome}</span>
      </div>
      <div>
        <span className="colorWhite">Data de nascimento:</span>
      </div>
      <div>
        <span className="colorWhite">
          {props.pessoa.dtNasc}
        </span>
      </div>
      <div>
        <span className="colorWhite">RG/CPF:</span>
        <span className="colorWhite">{props.pessoa.cpf}</span>
      </div>
      <div>
        <span className="colorWhite">ID:</span>
        <span className="colorWhite">{props.index}</span>
      </div>
    </div>
  );
}

export default CardPessoa;
