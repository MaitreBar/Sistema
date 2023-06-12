function CardFeedback(props) {
  return (
    <div className="avaliacoes">
      <b>{props.reserva.usuario.nome}</b>
      <p>
        {props.reserva.feedback}
      </p>
    </div>
  );
}

export default CardFeedback;