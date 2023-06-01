import { useState } from "react";
import api from "../../api";
import "./Atualizacao.modules.css";
import { useLocation, useNavigate } from "react-router";

function AtualizacaoCliente() {
  const { state: usuarioLogado } = useLocation();

  const [inputNomeCompleto, setInputNomeCompleto] = useState(usuarioLogado.nome);
  const [inputRG, setInputRG] = useState(usuarioLogado.rg);
  const [inputCPF, setInputCPF] = useState(usuarioLogado.cpf);
  const [inputCelular, setInputCelular] = useState(usuarioLogado.celular);
  const [inputEmail, setInputEmail] = useState(usuarioLogado.email);
  const [inputSenha, setInputSenha] = useState(usuarioLogado.senha);
  const [inputNovaSenha, setinputNovaSenha] = useState(usuarioLogado.senha);

  const navigate = useNavigate();
  console.log(usuarioLogado.senha)

  function atualizaUsuario(evento) {
    evento.preventDefault();    

    console.log(inputSenha !== inputNovaSenha);

    if(inputSenha != usuarioLogado.senha){
      alert('Senha incorreta')
    }
    if (inputSenha == usuarioLogado.senha && inputSenha !== inputNovaSenha) {
      const atualizadoCadastro = {
        id: usuarioLogado.id,
        nome: inputNomeCompleto,
        email: inputEmail,
        rg: inputRG,
        cpf: inputCPF,
        celular: inputCelular,
        senha: inputNovaSenha,
        dtNasc: usuarioLogado.dtNasc,
        reservas: usuarioLogado.reservas,
        tags: usuarioLogado.tags
      };

      const id = usuarioLogado.id;

      api
        .put(`/usuarios/${id}`, atualizadoCadastro)
        .then((response) => {
          console.log(response);
          console.log("Alterou");
          navigate("/perfil/usuario", { state: atualizadoCadastro });
          // usuarioLogado += atualizadoCadastro;
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
        <form onSubmit={atualizaUsuario}>
          <input
            onChange={(evento) => setInputNomeCompleto(evento.target.value)}
            type="text"
            placeholder="Nome completo"
            className="inputAtualizar"
            defaultValue={usuarioLogado.nome}
          />
          <input
            onChange={(evento) => setInputEmail(evento.target.value)}
            type="text"
            placeholder="E-mail"
            className="inputAtualizar"
            defaultValue={usuarioLogado.email}
          />
          <input
            onChange={(evento) => setInputRG(evento.target.value)}
            type="text"
            placeholder="RG"
            className="inputAtualizar"
            defaultValue={usuarioLogado.rg}
          />
          <input
            onChange={(evento) => setInputCPF(evento.target.value)}
            type="text"
            placeholder="CPF"
            className="inputAtualizar"
            defaultValue={usuarioLogado.cpf}
          />
          <input
            onChange={(evento) => setInputCelular(evento.target.value)}
            type="text"
            placeholder="Celular"
            className="inputAtualizar"
            defaultValue={usuarioLogado.celular}
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
            placeholder="Senha nova"
            className="inputAtualizar"
          />
          <button className="btnAtualizar" type="submit">
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
}
export default AtualizacaoCliente;
