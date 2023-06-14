import NavbarDeslogada from "../../navbar/NavbarDeslogada";
import "../../../index.css";
import ReactInputMask from "react-input-mask";
import axios from "axios";
import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";

function CadastroEstabelicimentoDois() {
  const navigate = useNavigate();
  const { state: novoEstabelecimento } = useLocation();

  const [inputCEP, setInputCEP] = useState();
  const [inputLogradouro, setInputLogradouro] = useState();
  const [inputNumero, setInputNumero] = useState();
  const [inputComplemento, setInputComplemento] = useState();
  const [inputTelefone, setInputTelefone] = useState();

  function getEndereco() {
    axios
      .get(`https://viacep.com.br/ws/${inputCEP}/json/`)
      .then((response) => {
        console.log(response);
        const enderecoCompleto = response.data;
        setInputLogradouro(enderecoCompleto.logradouro);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function cadastrar2(evento) {
    evento.preventDefault();
    const novoEstabelecimento2 = {
      email: novoEstabelecimento.email,
      senha: novoEstabelecimento.senha,
      cep: inputCEP,
      logradouro: inputLogradouro,
      numero: inputNumero,
      complemento: inputComplemento,
    };

    navigate("/cadastro/estabelecimento/tres", {
      state: novoEstabelecimento2,
    });
  }

  return (
    <section>
      <NavbarDeslogada />
      <div className="backgroundBody">
        <div className="containerMarromClaro">
          <p
            className="tituloContainer colorBlack"
            alt="Cadastre seu estabelecimento"
          >
            Cadastre seu estabelecimento
          </p>
          <p className="txtOldTT">2 - 4</p>
          <form
            onSubmit={(evento) => cadastrar2(evento)}
            className="formulario"
          >
            <ReactInputMask
              mask={"99999-999"}
              className="formularioInput inputGrande"
              onChange={(evento) => {
                setInputCEP(evento.target.value);
              }}
              autoFocus
              onBlur={() => {
                getEndereco();
              }}
              type="title"
              placeholder="CEP"
              alt="campo cep"
            />
            <br></br>
            <input
              className="formularioInput inputGrande"
              type="title"
              onFocus={(evento) => (evento.target.value = inputLogradouro)}
              placeholder="Logradouro"
              alt="campo logradouro"
              onChange={(evento) => setInputLogradouro(evento.target.value)}
            />
            <br></br>
            <input
              className="formularioInput inputGrande"
              type="title"
              placeholder="Número"
              alt="campo numero"
              onChange={(evento) => setInputNumero(evento.target.value)}
            />
            <br></br>
            <input
              className="formularioInput inputGrande"
              type="title"
              placeholder="Complemento"
              alt="campo complemento"
              onChange={(evento) => setInputComplemento(evento.target.value)}
            />
            <br></br>
            <ReactInputMask
              className="formularioInput inputGrande"
              type="title"
              mask={"(99) 99999-9999"}
              placeholder="Telefone"
              alt="campo telefone"
              onChange={(evento) => setInputTelefone(evento.target.value)}
            />
            <br></br>
            <button type="submit" className=" btnSistema btnMedio">
              Proximo
            </button>
            <button
              onClick={() => navigate("/cadastro/estabelecimento/um")}
              className="btnSistema btnSemFundo"
            >
              Voltar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default CadastroEstabelicimentoDois;
