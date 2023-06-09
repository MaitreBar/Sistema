import { useLocation, useNavigate } from "react-router";
import "../Atualizacao.modules.css";
import { useState } from "react";
import api from "../../../api";
import InputMask from "react-input-mask";

function AtualizacaoPerfilCliente() {
  const { state: usuarioLogado } = useLocation();

  const [inputNomeCompleto, setInputNomeCompleto] = useState(
    usuarioLogado.nome
  );
  const [inputRG, setInputRG] = useState(usuarioLogado.rg);
  const [inputCPF, setInputCPF] = useState(usuarioLogado.cpf);
  const [inputCelular, setInputCelular] = useState(usuarioLogado.celular);
  const [inputEmail, setInputEmail] = useState(usuarioLogado.email);
  const [inputSenha, setInputSenha] = useState(usuarioLogado.senha);
  const [inputNovaSenha, setinputNovaSenha] = useState(usuarioLogado.senha);

  const navigate = useNavigate();
  console.log(usuarioLogado.senha);

  function atualizaUsuario(evento) {
    evento.preventDefault();
    const atualizadoCadastro = undefined;

    if (inputSenha != usuarioLogado.senha) {
      alert("Senha incorreta");
    } else {
      if (inputSenha === usuarioLogado.senha && inputSenha !== inputNovaSenha) {
        atualizadoCadastro = {
          id: usuarioLogado.id,
          nome: inputNomeCompleto,
          email: inputEmail,
          rg: inputRG,
          cpf: inputCPF,
          celular: inputCelular,
          senha: inputNovaSenha,
          dtNasc: usuarioLogado.dtNasc,
          reservas: usuarioLogado.reservas,
          tags: usuarioLogado.tags,
        };
      } else if ((inputSenha === "" || inputSenha === undefined) && (inputNovaSenha === "" || inputNovaSenha === undefined)) {
        atualizadoCadastro = {
          id: usuarioLogado.id,
          nome: inputNomeCompleto,
          email: inputEmail,
          rg: inputRG,
          cpf: inputCPF,
          celular: inputCelular,
          senha: usuarioLogado.senha,
          dtNasc: usuarioLogado.dtNasc,
          reservas: usuarioLogado.reservas,
          tags: usuarioLogado.tags,
        };
      }

      const id = usuarioLogado.id;

      api
        .put(`/usuarios/${id}`, atualizadoCadastro)
        .then((response) => {
          console.log(response);
          console.log("Alteração okay");
          navigate("/perfil/cliente", { state: atualizadoCadastro });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="backgroundBody">
      <div className="containerMarromClaro">
        <p className="tituloContainer">Atualizar perfil</p>
        <form onSubmit={atualizaUsuario} className="formulario">
          <input
            onChange={(evento) => setInputNomeCompleto(evento.target.value)}
            type="text"
            placeholder="Nome completo"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.nome}
          />
          <input
            onChange={(evento) => setInputEmail(evento.target.value)}
            type="email"
            placeholder="E-mail"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.email}
          />
          <InputMask
            onChange={(evento) => setInputRG(evento.target.value)}
            type="text"
            mask={"99.999.999-9"}
            placeholder="RG"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.rg}
          />
          <InputMask
            onChange={(evento) => setInputCPF(evento.target.value)}
            type="text"
            mask={"999.999.999-99"}
            placeholder="CPF"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.cpf}
          />
          <InputMask
            onChange={(evento) => setInputCelular(evento.target.value)}
            type="tel"
            mask={"(99) 99999-9999"}
            placeholder="Celular"
            className="formularioInput inputGrande"
            defaultValue={usuarioLogado.celular}
          />
          <input
            onChange={(evento) => setInputSenha(evento.target.value)}
            type="password"
            placeholder="Senha antiga"
            className="formularioInput inputGrande"
          />
          <input
            onChange={(evento) => setinputNovaSenha(evento.target.value)}
            type="password"
            placeholder="Senha nova"
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
export default AtualizacaoPerfilCliente;
