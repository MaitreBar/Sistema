import "../../index.css";
import React, { useState } from "react";
import "./Reserva.modules.css";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import ReactInputMask from "react-input-mask";
import CardPessoa from "./cardPessoa";

function ReservaEstabelecimentoDois() {
  const { state: propriedade } = useLocation();
  const navigate = useNavigate();

  const [date, setDate] = useState();
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();

  const [pessoas, setPessoas] = useState([propriedade.usuarioLogado]);

  function reserva2() {
    navigate("/reserva/tres", { state: propriedade });
  }

  function handleAdicionarPessoa() {
    const novaPessoa = {
      nome: nome,
      cpf: cpf,
      dtNasc: date,
    };

    setPessoas(...pessoas, novaPessoa);
  }

  return (
    <section>
      <div className="backgroundBody">
        <div className="containerMarromEscuro">
          <div className="alinhar-lado-a-lado">
            <div className="container-esquerda-reserva-2">
              <p
                className="tituloContainer colorWhite"
                alt="Cadastre seu estabelecimento"
              >
                Cadastrar pessoas
              </p>
              <input
                className="formularioInput inputGrande"
                type="text"
                placeholder="Nome completo"
                alt="campo nome completo"
                onChange={(evento) => setNome(evento.target.value)}
              />
              <input
                className="formularioInput inputGrande"
                type="date"
                placeholder="Data de nascimento"
                alt="campo data de nascimento"
                onChange={(evento) => setDate(evento.target.value)}
              />

              <ReactInputMask
                className="formularioInput inputGrande"
                type="text"
                placeholder="CPF"
                alt="campo CPF"
                mask={"999.999.999-99"}
                onChange={(evento) => setCpf(evento.target.value)}
              />
              <br></br>
              <button
                onClick={() => handleAdicionarPessoa()}
                className="btnSistema btnMedio"
              >
                Adicionar Pessoa
              </button>
            </div>
            <div className="container-direita-reserva-2">
              <p
                className="tituloContainer colorWhite"
                alt="Cadastre seu estabelecimento"
              >
                Pessoas cadastradas
              </p>
              <br></br>

              <div className="container-dados-cadastrados">
                <div className="alinhamento-dados">
                  {pessoas.map((pessoa, index) => {
                    return (
                      <CardPessoa pessoa={pessoa} index={index} key={index} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => reserva2()} className="btnSistema btnMedio">
            Próximo
          </button>
        </div>
      </div>
    </section>
  );
}
export default ReservaEstabelecimentoDois;
