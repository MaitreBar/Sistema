import { useLocation, useNavigate } from "react-router";
import "../Atualizacao.modules.css";
import InputMask from "react-input-mask";
import { useState } from "react";

function AtualizacaoPerfilEstabelecimentoUm() {
  const { state: usuarioLogado } = useLocation();
  const navigate = useNavigate();

  const [inputNome, setInputNome] = useState(usuarioLogado.nome);
  const [inputCNPJ, setInputCNPJ] = useState(usuarioLogado.cnpj);
  const [inputCEP, setInputCEP] = useState(usuarioLogado.cep);
  const [inputLogradouro, setInputLogradouro] = useState(
    usuarioLogado.logradouro
  );
  const [inputNumero, setInputNumero] = useState(usuarioLogado.numero);
  const [inputComplemento, setInputComplemento] = useState(
    usuarioLogado.complemento
  );
  const [inputDescricao, setInputDescricao] = useState(usuarioLogado.descricao);
  const [inputEmail, setInputEmail] = useState(usuarioLogado.email);
  const [inputSenha, setInputSenha] = useState(usuarioLogado.senha);
  const [inputNovaSenha, setInputNovaSenha] = useState();

  function atualizarEstabelecimento(evento) {
    evento.preventDefault();
    if (
      inputSenha !== inputNovaSenha &&
      inputSenha === usuarioLogado.senha &&
      inputNovaSenha !== undefined &&
      inputNovaSenha !== ""
    ) {
      const usuarioAtualizado = {
        id: usuarioLogado.id,
        nome: inputNome,
        senha: inputNovaSenha,
        logradouro: inputLogradouro,
        numero: inputNumero,
        complemento: inputComplemento,
        cep: inputCEP,
        diasDaSemana: usuarioLogado.diasDaSemana,
        faixaDePreco: usuarioLogado.faixaDePreco,
        cnpj: inputCNPJ,
        horarioAbertura: usuarioLogado.horarioAbertura,
        horarioFechamento: usuarioLogado.horarioFechamento,
        descricao: inputDescricao,
        email: inputEmail,
        tags: usuarioLogado.tags,
      };

      console.log("Passou alterando senha");
      navigate("/perfil/estabelecimento/atualizar/dois", {
        state: usuarioAtualizado,
      });
    } else if (
      (inputSenha === "" || inputSenha === usuarioLogado.senha) &&
      (inputNovaSenha === "" || inputNovaSenha === undefined)
    ) {
      const usuarioAtualizado = {
        id: usuarioLogado.id,
        nome: inputNome,
        senha: usuarioLogado.senha,
        logradouro: inputLogradouro,
        numero: inputNumero,
        complemento: inputComplemento,
        cep: inputCEP,
        diasDaSemana: usuarioLogado.diasDaSemana,
        faixaDePreco: usuarioLogado.faixaDePreco,
        cnpj: inputCNPJ,
        horarioAbertura: usuarioLogado.horarioAbertura,
        horarioFechamento: usuarioLogado.horarioFechamento,
        descricao: inputDescricao,
        email: inputEmail,
        tags: usuarioLogado.tags,
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
            defaultValue={usuarioLogado.nome}
          />
          <InputMask
            onChange={(evento) => setInputCNPJ(evento.target.value)}
            type="text"
            mask={"99.999.999/9999-99"}
            placeholder="CNPJ"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.cnpj}
          />
          <InputMask
            onChange={(evento) => setInputCEP(evento.target.value)}
            type="text"
            mask={"99999-999"}
            placeholder="CEP"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.cep}
          />
          <input
            onChange={(evento) => setInputLogradouro(evento.target.value)}
            type="text"
            placeholder="Logradouro"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.logradouro}
          />
          <input
            onChange={(evento) => setInputNumero(evento.target.value)}
            type="text"
            placeholder="Número"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.numero}
          />
          <input
            onChange={(evento) => setInputComplemento(evento.target.value)}
            type="text"
            placeholder="Complemento"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.complemento}
          />
          <input
            onChange={(evento) => setInputDescricao(evento.target.value)}
            type="text"
            placeholder="Descrição"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.descricao}
          />
          <input
            onChange={(evento) => setInputEmail(evento.target.value)}
            type="email"
            placeholder="E-mail"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.email}
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
