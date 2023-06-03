import { useLocation, useNavigate } from "react-router-dom";
import "./styleReservaDois.css";
import React, { useState } from "react";
import NovaPessoaCadastrada from "./divNovaPessoaCadastrada";

function ReservaDois() {
  const [nome, setNome] = useState("");
  const [dataDeNascimento, setDataDeNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const navigate = useNavigate();

  const { state: propriedades } = useLocation();
  console.warn(propriedades);
  const [listaPessoas, setListaPessoas] = useState([]);

  function cadastrarPessoa() {
    const cadastroNovo = {
      nome: nome,
      dtNasc: dataDeNascimento,
      cpf: cpf,
    };

    setListaPessoas([...listaPessoas, cadastroNovo]);
  }

  function reserva() {
    const propriedade = {
      estabelecimento: propriedades.estabelecimento,
      reserva: propriedades.reserva,
      listaPessoas: listaPessoas,
    }

    navigate(
      "/reserva/nova/3",
      { state: propriedade }
    );
  }

  return (
    <div className="body">
      <div className="container-lista">
        <div className="title-head">
          <h1> Cadastrar Pessoas </h1>
        </div>
        <div className="inputs-container">
          <input
            onChange={(evento) => setNome(evento.target.value)}
            className="campoTextoCadastro-reserva"
            type="text"
            placeholder="Nome completo"
          ></input>
          <input
            onChange={(evento) => setDataDeNascimento(evento.target.value)}
            className="campoTextoCadastro-reserva"
            type="text"
            placeholder="Data de Nascimento"
          ></input>
          <input
            onChange={(evento) => setCpf(evento.target.value)}
            className="campoTextoCadastro-reserva"
            type="text"
            placeholder="RG/CPF"
          ></input>
          <button
            onClick={() => {
              cadastrarPessoa();
            }}
            className="button-28-proximo"
          >
            Cadastrar
          </button>
        </div>

        <div className="title-head-2">
          <h1> Pessoas Cadastradas </h1>
        </div>
        {listaPessoas.map((cadastro, index) => {
          return (
            <NovaPessoaCadastrada
              cadastroNovo={cadastro}
              id={index}
              key={index}
            />
          );
        })}

        <button
          onClick={() => {
            reserva();
          }}
          className="button-28-proximo"
        >
          Proximo
        </button>
      </div>
    </div>
  );
}

export default ReservaDois;
