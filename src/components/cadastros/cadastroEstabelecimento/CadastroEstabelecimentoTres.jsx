import NavbarDeslogada from "../../navbar/NavbarDeslogada";
import "../../../index.css";
import "./CadastroEstabelecimento.modules.css";
import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import ReactInputMask from "react-input-mask";

function CadastroEstabelecimentoTres() {
  const navigate = useNavigate();
  const { state: novoEstabelecimento2 } = useLocation();

  const [selectedButton, setSelectedButton] = useState(null);
  const diasDaSemana = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];

  const [inputHorarioAbertura, setInputHorarioAbertura] = useState();
  const [inputHorarioFechamento, setInputHorarioFechamento] = useState();
  const [inputNome, setInputNome] = useState();
  const [inputCNPJ, setInputCNPJ] = useState();
  const [inputDescricao, setInputDescricao] = useState();
  const [diasSelecionados, setDiasSelecionados] = useState([]);

  const handleDiaClick = (dia) => {
    if (diasSelecionados.includes(dia)) {
      setDiasSelecionados(diasSelecionados.filter((f) => f !== dia));
    } else {
      if (diasSelecionados.length < 7) {
        setDiasSelecionados([...diasSelecionados, dia]);
      }
    }
  };

  function cadastrar3(evento) {
    evento.preventDefault();
    const novoEstabelecimento3 = {
      email: novoEstabelecimento2.email,
      senha: novoEstabelecimento2.senha,
      cep: novoEstabelecimento2.cep,
      logradouro: novoEstabelecimento2.logradouro,
      numero: novoEstabelecimento2.numero,
      complemento: novoEstabelecimento2.complemento,
      horarioAbertura: inputHorarioAbertura,
      horarioFechamento: inputHorarioFechamento,
      nome: inputNome,
      cnpj: inputCNPJ,
      descricao: inputDescricao,
      diasDaSemana: diasSelecionados,
    };

    navigate("/cadastro/estabelecimento/quatro", {
      state: novoEstabelecimento3,
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
          <p className="txtDecisao">
            <b> 3 - 4</b>
          </p>
          <form
            onSubmit={(evento) => cadastrar3(evento)}
            className="formulario"
          >
            <div className="Alinhamento-de-inputs">
              <p className="colorBlack">Expediente</p>
              <input
                autoFocus
                className="formularioInput inputDuploAlinhado"
                type="time"
                placeholder="00:00"
              />
              <p className="colorBlack">ás</p>
              <input
                className="formularioInput inputDuploAlinhado"
                type="time"
                placeholder="00:00"
              />
            </div>
            <div>
              {diasDaSemana.map((dia, index) => (
                <button
                  key={index}
                  type="button"
                  className="btnDia btnSistema"
                  id={selectedButton === index ? "selecionado" : ""}
                  onClick={() => handleDiaClick(dia)}
                >
                  {dia}
                </button>
              ))}
            </div>
            <input
              className="formularioInput inputGrande"
              type="text"
              placeholder="Nome Estabelecimento"
            />
            <br></br>
            <input
              className="formularioInput inputGrande"
              type="text"
              placeholder="CNPJ"
            />
            <input
              className="formularioInput inputGrande inputLargo"
              type="text"
              placeholder="Descriçao do Estabelecimento"
            />
            <button type="submit" className=" btnSistema btnMedio">
              Proximo
            </button>
            <button
              onClick={() => {
                const novoEstabelecimento = {
                  email: novoEstabelecimento2.email,
                  senha: novoEstabelecimento2.senha,
                };
                navigate("/cadastro/estabelecimento/dois", {
                  state: novoEstabelecimento,
                });
              }}
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
export default CadastroEstabelecimentoTres;
