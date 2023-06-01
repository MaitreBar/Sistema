import { useState } from "react";
import "./Atualizacao.modules.css";
import api from "../../api";
import { useLocation, useNavigate } from "react-router-dom";

function AtualizacaoEstabelecimentoUm() {
  const { state: usuarioLogado } = useLocation();

  const [inputNomeCompleto, setInputNomeCompleto] = useState(usuarioLogado.nome);
  const [inputCNPJ, setInputCNPJ] = useState(usuarioLogado.cnpj);
  const [inputCelular, setInputCelular] = useState(usuarioLogado.celular);
  const [InputLogradouro, setInputLogradouro] =useState(usuarioLogado.logradouro);
  const [InputNumero, setInputNumero] =useState(usuarioLogado.numero);
  const [InputComplemento, setInputComplemento] =useState(usuarioLogado.complemento);
  const [InputDescricao, setInputDescricao] =useState(usuarioLogado.descricao);
  const [inputEmail, setInputEmail] = useState(usuarioLogado.email);
  const [inputSenha, setInputSenha] = useState(usuarioLogado.senha);
  const [inputNovaSenha, setinputNovaSenha] = useState(usuarioLogado.senha);

  const navigate = useNavigate();

  console.log(usuarioLogado.senha);
  console.log(usuarioLogado);

  function atualizarEstabelecimento(evento) {
    evento.preventDefault();

    console.log(inputSenha !== inputNovaSenha);

    if (inputSenha != usuarioLogado.senha) {
      alert("Senha incorreta");
    }
    if (inputSenha == usuarioLogado.senha && inputSenha !== inputNovaSenha) {
      const atualizadoCadastro = {
        id: usuarioLogado.id,
        nome: inputNomeCompleto,
        numero: InputNumero,
        complemento: InputComplemento,
        descricao: InputDescricao,
        email: inputEmail,
        cnpj: inputCNPJ,
        celular: inputCelular,
        senha: inputNovaSenha,
        logradouro: InputLogradouro,
        dtNasc: usuarioLogado.dtNasc,
        assentos: usuarioLogado.assentos,
        reservas: usuarioLogado.reservas,
        tags: usuarioLogado.tags,
      };

      const id = usuarioLogado.id;

      api
        .put(`/estabelecimentos/${id}`, atualizadoCadastro)
        .then((response) => {
          console.log(response);
          console.log("Alterou");
          navigate("/perfil/estabelecimento", { state: atualizadoCadastro });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="background">
      <div className="containerAtualizacao">
        <p className="titulo">Atualizar perfil</p>
        <form className="formAtualizacao" onSubmit={atualizarEstabelecimento}>
          <input
            onChange={(evento) => setInputNomeCompleto(evento.target.value)}
            type="text"
            placeholder="Nome estabelecimento"
            className="inputAtualizar"
            defaultValue={usuarioLogado.nome}
          />
          <input
            onChange={(evento) => setInputCNPJ(evento.target.value)}
            type="text"
            placeholder="CNPJ"
            className="inputAtualizar"
            defaultValue={usuarioLogado.cnpj}
          />
          <input
            onChange={(evento) => setInputLogradouro(evento.target.value)}
            type="text"
            placeholder="Logradouro"
            className="inputAtualizar"
            defaultValue={usuarioLogado.logradouro}
          />
          <input
            onChange={(evento) => setInputNumero(evento.target.value)}
            type="text"
            placeholder="Número"
            className="inputAtualizar"
            defaultValue={usuarioLogado.numero}
          />
          <input
            onChange={(evento) => setInputComplemento(evento.target.value)}
            type="text"
            placeholder="Complemento"
            className="inputAtualizar"
            defaultValue={usuarioLogado.complemento}
          />
          <input
            onChange={(evento) => setInputCelular(evento.target.value)}
            type="text"
            placeholder="Celular"
            className="inputAtualizar"
            defaultValue={usuarioLogado.celular}
          />
          <input
            onChange={(evento) => setInputDescricao(evento.target.value)}
            type="text"
            placeholder="Descrição"
            className="inputAtualizar"
            defaultValue={usuarioLogado.descricao}
          />
          <input
            onChange={(evento) => setInputEmail(evento.target.value)}
            type="text"
            placeholder="E-mail"
            className="inputAtualizar"
            defaultValue={usuarioLogado.email}
          />
          <input
            onChange={(evento) => setInputSenha(evento.target.value)}
            type="text"
            placeholder="Senha antiga"
            className="inputAtualizar"
          />
          <input
            onChange={(evento) => setinputNovaSenha(evento.target.value)}
            type="text"
            placeholder="Nova senha"
            className="inputAtualizar"
          />

          <button className="btnAtualizar" type="submit">Atualizar</button>
        </form>
      </div>
    </div>
  );
}
export default AtualizacaoEstabelecimentoUm;
