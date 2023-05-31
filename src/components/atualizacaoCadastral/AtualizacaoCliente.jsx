import { useState } from "react";
import api from "../../api";
import "./Atualizacao.modules.css";
import { useLocation, useNavigate } from "react-router";

function AtualizacaoCliente() {
  const { state: usuarioLogado } = useLocation();

  const [inputNomeCompleto, setInputNomeCompleto] = useState(sessionStorage.email);
  const [inputRG, setInputRG] = useState(sessionStorage.rg);
  const [inputCPF, setInputCPF] = useState(sessionStorage.cpf);
  const [inputCelular, setInputCelular] = useState(sessionStorage.celular);
  const [inputEmail, setInputEmail] = useState(sessionStorage.email);
  const [inputSenha, setInputSenha] = useState();
  const [inputNovaSenha, setinputNovaSenha] = useState();

  const navigate = useNavigate();

  function atualizaUsuario(evento) {
    evento.preventDefault();    

    console.log(inputSenha !== inputNovaSenha);

    if (inputSenha !== inputNovaSenha) {
      const atualizadoCadastro = {
        nome: inputNomeCompleto,
        email: inputEmail,
        rg: inputRG,
        cpf: inputCPF,
        celular: inputCelular,
        senha: inputNovaSenha
      };

      const id = usuarioLogado.id;

      api
        .put(`/usuarios/${id}`, atualizadoCadastro)
        .then((response) => {
          console.log(response);
          console.log("Alterou");
          navigate("/perfil/usuario", { state: usuarioLogado });
          usuarioLogado = atualizadoCadastro;
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
            defaultValue={inputNomeCompleto}
          />
          <input
            onChange={(evento) => setInputEmail(evento.target.value)}
            type="text"
            placeholder="E-mail"
            className="inputAtualizar"
            defaultValue={inputEmail}
          />
          <input
            onChange={(evento) => setInputRG(evento.target.value)}
            type="text"
            placeholder="RG"
            className="inputAtualizar"
            defaultValue={inputRG}
          />
          <input
            onChange={(evento) => setInputCPF(evento.target.value)}
            type="text"
            placeholder="CPF"
            className="inputAtualizar"
            defaultValue={inputCPF}
          />
          <input
            onChange={(evento) => setInputCelular(evento.target.value)}
            type="text"
            placeholder="Celular"
            className="inputAtualizar"
            defaultValue={inputCelular}
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
