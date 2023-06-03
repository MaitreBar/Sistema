function DetalhesReserva(props) {
  return (
    <div className="detalhes-da-reserva">
      <h3 className="h3-detalhes">Detalhes da reserva</h3>
      <span className="detalhes-texto"> Nome: {props.propriedade.usuario.nome} </span>
      <span className="detalhes-texto"> Data de nascimento: {props.propriedade.usuario.dtNasc} </span>
      <span className="detalhes-texto"> CPF: {props.propriedade.usuario.cpf} </span>
      <span className="detalhes-texto"> Data da reserva: {props.propriedade.reserva.dataReserva} </span>
      <span className="detalhes-texto"> Horario Escolhido: {props.propriedade.usuario.horaReserva} </span>
      <span className="detalhes-texto"> idAssento: {props.lugarSelecionado} </span>
      <span className="detalhes-texto">
        <button className="button-28-proximo">Proximo</button>
      </span>
    </div>
  );
}

export default DetalhesReserva;
