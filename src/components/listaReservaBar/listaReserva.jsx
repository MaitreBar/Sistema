import api from "../../api";
import { useNavigate } from "react-router-dom";
import format from "date-fns/format";
import { useEffect, useState } from "react";

function ListaReserva(props) {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function checkIn(reserva) {
    const check_in = {
      checkIn: true,
      checkOut: false,
      dtHoraCheckIn: format(currentTime, "yyyy-MM-dd'T'HH:mm:ss.S"),
    };

    api
      .put(`/reservas/${reserva.id}`, check_in)
      .then((response) => {
        console.log("Enviando os dados para a API");
        console.log(response);
        console.log("API recebeu os dados corretamente");
        console.log(
          "Check-in feito em:",
          format(currentTime, "yyyy-MM-dd'T'HH:mm:ss.S")
        );
        navigate("/listaReservaBarPages");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function checkOut(reserva) {
    if (reserva.checkIn) {
      const check_out = {
        checkIn: true,
        checkOut: true,
        dtHoraCheckIn: reserva.dtHoraCheckIn,
        dtHoraCheckOut: format(currentTime, "yyyy-MM-dd'T'HH:mm:ss.S"),
      };

      api
        .put(`/reservas/${reserva.id}`, check_out)
        .then((response) => {
          const check_out_assento = {
            disponivel: true,
          };

          api
            .put(
              `/assentos/${
                reserva.assentos.find((assento) => assento.id).id
              }`,
              check_out_assento
            )
            .then((response) => {
              console.log("Enviando os dados para a API");
              console.log(response);
              console.log("API recebeu os dados corretamente");
              console.log(
                "Assento de id " +
                  reserva.assentos.find((assento) => assento.id).id +
                  " agora está disponível"
              );
              navigate("/listaReservaBarPages");
            })
            .catch((err) => {
              console.error(err);
            });
          console.log("Enviando os dados para a API");
          console.log(response);
          console.log("API recebeu os dados corretamente");
          console.log(
            "Check-out feito em:",
            format(currentTime, "yyyy-MM-dd'T'HH:mm:ss.S")
          );
          props.atualizar();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.warn("Precisa ter sido feito o check-in antes de fazer o check-out")
    }
  }

  return (
    <div className="container-reserva">
      <div className="dia-reserva">
        <span> Dia: {props.reserva.dtReserva} </span>
      </div>

      <div className="nome-reserva">
        <span> Nome do cliente: {props.usuario.nome}</span>
      </div>

      <div className="horario-reserva">
        <span> Horário: {props.reserva.horaReserva}</span>
      </div>

      <div className="mesa-reserva">
        <span>
          {" "}
          Assento: {props.reserva.assentos.find((assento) => assento.id).id}
        </span>
      </div>

      <div className="Quantidade-reserva">
        <span>Quantidade pessoal: 1</span>
      </div>
      <div className="button-checkin-reserva">
        <button
          onClick={() => checkIn(props.reserva)}
          className="button-checkin"
        >
          {" "}
          CHECK-IN{" "}
        </button>
      </div>
      <div className="button-checkout-reserva">
        <button
          onClick={() => checkOut(props.reserva)}
          className="button-checkout"
        >
          {" "}
          CHECK-OUT{" "}
        </button>
      </div>
    </div>
  );
}

export default ListaReserva;
