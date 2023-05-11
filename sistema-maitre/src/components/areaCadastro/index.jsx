import "./styleCadastro.css";

import api from "../../api";
import { useState } from "react";

function AreaCadastro() {
  const [inputNomeCompleto, setInputNomeCompleto] = useState();
  const [inputDataDeNascimento, setInputDataDeNascimento] = useState();
  const [inputRG, setInputRG] = useState();
  const [inputCPF, setInputCPF] = useState();
  const [inputCelular, setInputCelular] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputSenha, setInputSenha] = useState();
  const [inputRepetirSenha, setInputRepetirSenha] = useState();
  const [inputTipoBebida, setInputTipoBebida] = useState();
  const [inputTipoComida, setInputTipoComida] = useState();
  const [inputTipoMusica, setInputTipoMusica] = useState();

  function cadastrar() {
    if (inputSenha === inputRepetirSenha) {
      const novoCadastro = {
        nome: inputNomeCompleto,
        email: inputEmail,
        cpf: inputCPF,
        dtNasc: inputDataDeNascimento,
        rg: inputRG,
        senha: inputSenha,
        tipoComida: inputTipoComida,
        tipoBebida: inputTipoBebida,
        tipoMusica: inputTipoMusica
      };
      console.log("deu certin, mandando pra api");
      api.post("/usuarios", novoCadastro).then((response) => console.log(response).catch((err) => console.error(err)));
      console.log("Novo cadastro:", novoCadastro);
    } else {
      // cesar crie uma mensagem de erro ou div sei lá tu se vira sz assinado: Lando
      console.log("senhas incorretas");
    }
  }

  return (
    <div className="bg">
      <div className="input-cadastro">
        <h2 className="titulos-cad">CADASTRE - SE</h2>
        <div className="textos">
          <span className="subtitulo1">
            {" "}
            Estabelecimento<br></br>
            <a href="../../Cadastro">Login</a> <p className="ou">ou</p>{" "}
            <a href="../../Cadastro"> Cadastre - se</a>
          </span>
          <br></br>
          <span className="subtitulo2">
            Ja possui cadastro? <a href="../../Cadastro"> Fazer login</a>
          </span>
          <br></br>
          <input
            onChange={(evento) => setInputNomeCompleto(evento.target.value)}
            className="campoTextoCadastro"
            type="text"
            placeholder="Nome Completo"
          ></input>
          <br className="broken"></br>
          <input
            onChange={(evento) => setInputDataDeNascimento(evento.target.value)}
            className="campoTextoCadastro"
            type="text"
            placeholder="Data de nascimento"
          ></input>
          <br className="broken"></br>
          <input
            onChange={(evento) => setInputRG(evento.target.value)}
            className="campoTextoCadastro"
            type="text"
            placeholder="RG"
          ></input>
          <br className="broken"></br>
          <input
            onChange={(evento) => setInputCPF(evento.target.value)}
            className="campoTextoCadastro"
            type="text"
            placeholder="CPF"
          ></input>
          <br className="broken"></br>
          <input
            onChange={(evento) => setInputCelular(evento.target.value)}
            className="campoTextoCadastro"
            type="text"
            placeholder="Celular"
          ></input>
          <br className="broken"></br>
          <input
            onChange={(evento) => setInputEmail(evento.target.value)}
            className="campoTextoCadastro"
            type="email"
            placeholder="E-mail"
          ></input>
          <br className="broken"></br>
          <input
            onChange={(evento) => setInputSenha(evento.target.value)}
            className="campoTextoCadastro"
            type="password"
            placeholder="Senha"
          ></input>
          <br className="broken"></br>
          <input
            onChange={(evento) => setInputRepetirSenha(evento.target.value)}
            className="campoTextoCadastro"
            type="password"
            placeholder="Repetir senha"
          ></input>
          <br className="broken"></br>
          <input
            onChange={(evento) => setInputTipoBebida(evento.target.value)}
            className="campoTextoCadastro"
            type="text"
            placeholder="Bebidas Alcoolicas, Refrigerantes ou Sucos?"
          ></input>
          <br className="broken"></br>
          <input
            onChange={(evento) => setInputTipoComida(evento.target.value)}
            className="campoTextoCadastro"
            type="text"
            placeholder="Insira seu tipo de comida favorito"
          ></input>
          <br className="broken"></br>
          <input
            onChange={(evento) => setInputTipoMusica(evento.target.value)}
            className="campoTextoCadastro"
            type="text"
            placeholder="Insira seu tipo de música favorito"
          ></input>
          <br className="broken"></br>
          <button onClick={cadastrar} className="button-28">Cadastrar</button>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default AreaCadastro;
