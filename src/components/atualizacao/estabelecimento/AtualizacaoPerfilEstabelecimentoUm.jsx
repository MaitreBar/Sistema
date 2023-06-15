import { useLocation, useNavigate } from "react-router";
import "../Atualizacao.modules.css";
import InputMask from "react-input-mask";
import { useState } from "react";

function AtualizacaoPerfilEstabelecimentoUm() {
  const { state: estabelecimentoLogado } = useLocation();
  const navigate = useNavigate();

  console.log(estabelecimentoLogado)

  const [inputNome, setInputNome] = useState(estabelecimentoLogado.nome);
  const [inputCNPJ, setInputCNPJ] = useState(estabelecimentoLogado.cnpj);
  const [inputCEP, setInputCEP] = useState(estabelecimentoLogado.cep);
  const [inputLogradouro, setInputLogradouro] = useState(
    estabelecimentoLogado.logradouro
  );
  const [inputNumero, setInputNumero] = useState(estabelecimentoLogado.numero);
  const [inputComplemento, setInputComplemento] = useState(
    estabelecimentoLogado.complemento
  );
  const [inputDescricao, setInputDescricao] = useState(
    estabelecimentoLogado.descricao
  );
  const [inputEmail, setInputEmail] = useState(estabelecimentoLogado.email);
  const [inputSenha, setInputSenha] = useState(estabelecimentoLogado.senha);
  const [inputNovaSenha, setInputNovaSenha] = useState();

  function atualizarEstabelecimento(evento) {
    evento.preventDefault();
    if (
      inputSenha !== inputNovaSenha &&
      inputSenha === estabelecimentoLogado.senha &&
      inputNovaSenha !== undefined &&
      inputNovaSenha !== ""
    ) {
      const usuarioAtualizado = {
        id: estabelecimentoLogado.idEstabelecimento,
        nome: inputNome,
        senha: inputNovaSenha,
        logradouro: inputLogradouro,
        numero: inputNumero,
        complemento: inputComplemento,
        cep: inputCEP,
        diasDaSemana: estabelecimentoLogado.diasDaSemana,
        faixaDePreco: estabelecimentoLogado.faixaDePreco,
        cnpj: inputCNPJ,
        horarioAbertura: estabelecimentoLogado.horarioAbertura,
        horarioFechamento: estabelecimentoLogado.horarioFechamento,
        descricao: inputDescricao,
        email: inputEmail,
        tags: estabelecimentoLogado.tags,
      };

      console.log("Passou alterando senha");
      navigate("/perfil/estabelecimento/atualizar/dois", {
        state: usuarioAtualizado,
      });
    } else if (
      (inputSenha === "" || inputSenha === estabelecimentoLogado.senha) &&
      (inputNovaSenha === "" || inputNovaSenha === undefined)
    ) {
      const usuarioAtualizado = {
        id: estabelecimentoLogado.idEstabelecimento,
        nome: inputNome,
        senha: estabelecimentoLogado.senha,
        logradouro: inputLogradouro,
        numero: inputNumero,
        complemento: inputComplemento,
        cep: inputCEP,
        diasDaSemana: estabelecimentoLogado.diasDaSemana,
        faixaDePreco: estabelecimentoLogado.faixaDePreco,
        cnpj: inputCNPJ,
        horarioAbertura: estabelecimentoLogado.horarioAbertura,
        horarioFechamento: estabelecimentoLogado.horarioFechamento,
        descricao: inputDescricao,
        email: inputEmail,
        tags: estabelecimentoLogado.tags,
      };

      console.log("Passou sem senha");
      navigate("/perfil/estabelecimento/atualizar/dois", {
        state: usuarioAtualizado,
      });
    } else {
      console.log("burrão erro a senha ou senhas tão iguais");
    }
  }

  return (
    <div className="backgroundBody">
      <div className="containerMarromClaro">
        <p className="tituloContainer">Atualizar perfil</p>
        <form
          className="formulario"
          onSubmit={(evento) => atualizarEstabelecimento(evento)}
        >
          <input
            onChange={(evento) => setInputNome(evento.target.value)}
            type="text"
            placeholder="Nome estabelecimento"
            className="formularioInput inputGrande"
            defaultValue={estabelecimentoLogado.nome}
          />
          <InputMask
            onChange={(evento) => setInputCNPJ(evento.target.value)}
            type="text"
            mask={"99.999.999/9999-99"}
            placeholder="CNPJ"
            className="formularioInput inputGrande"
            defaultValue={estabelecimentoLogado.cnpj}
          />
          <InputMask
            onChange={(evento) => setInputCEP(evento.target.value)}
            type="text"
            mask={"99999-999"}
            placeholder="CEP"
            className="formularioInput inputGrande"
            defaultValue={estabelecimentoLogado.cep}
          />
          <input
            onChange={(evento) => setInputLogradouro(evento.target.value)}
            type="text"
            placeholder="Logradouro"
            className="formularioInput inputGrande"
            defaultValue={estabelecimentoLogado.logradouro}
          />
          <input
            onChange={(evento) => setInputNumero(evento.target.value)}
            type="text"
            placeholder="Número"
            className="formularioInput inputGrande"
            defaultValue={estabelecimentoLogado.numero}
          />
          <input
            onChange={(evento) => setInputComplemento(evento.target.value)}
            type="text"
            placeholder="Complemento"
            className="formularioInput inputGrande"
            defaultValue={estabelecimentoLogado.complemento}
          />
          <input
            onChange={(evento) => setInputDescricao(evento.target.value)}
            type="text"
            placeholder="Descrição"
            className="formularioInput inputGrande"
            defaultValue={estabelecimentoLogado.descricao}
          />
          <input
            onChange={(evento) => setInputEmail(evento.target.value)}
            type="email"
            placeholder="E-mail"
            className="formularioInput inputGrande"
            defaultValue={estabelecimentoLogado.email}
          />
          <input
            onChange={(evento) => setInputSenha(evento.target.value)}
            type="password"
            placeholder="Senha antiga"
            className="formularioInput inputGrande"
          />
          <input
            onChange={(evento) => setInputNovaSenha(evento.target.value)}
            type="password"
            placeholder="Nova senha"
            className="formularioInput inputGrande"
          />
          <button type="submit" className="btnSistema btnMedio">
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
}
export default AtualizacaoPerfilEstabelecimentoUm;
