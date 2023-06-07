import NavbarDeslogada from "../../navbar/NavbarDeslogada";
import "../../../index.css";
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import { format } from "date-fns";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

function CadastroCliente() {
  const [inputNome, setInputNome] = useState();
  const [inputDataDeNascimento, setInputDataDeNascimento] = useState();
  const [inputRG, setInputRG] = useState();
  const [inputCPF, setInputCPF] = useState();
  const [inputCelular, setInputCelular] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputSenha, setInputSenha] = useState();
  const [inputRepetirSenha, setInputRepetirSenha] = useState();

  const refValidacaoNome = useRef(null);
  const refValidacaoDtNasc = useRef(null);
  const refValidacaoDtNascInv = useRef(null);
  const refValidacaoRg = useRef(null);
  const refValidacaoRgInv = useRef(null);
  const refValidacaoCpf = useRef(null);
  const refValidacaoCpfInv = useRef(null);
  const refValidacaoCelular = useRef(null);
  const refValidacaoCelularInv = useRef(null);
  const refValidacaoEmail = useRef(null);
  const refValidacaoEmailInv = useRef(null);
  const refValidacaoSenha = useRef(null);
  const refValidacaoSenhaInv = useRef(null);

  const navigate = useNavigate();

  function Cadastrar(evento) {
    evento.preventDefault();
    if (inputNome === "" || inputNome === undefined) {
      refValidacaoNome.current.style.display = "block";
    } else {
      refValidacaoNome.current.style.display = "none";
      if (inputDataDeNascimento === "" || inputDataDeNascimento === undefined) {
        refValidacaoDtNasc.current.style.display = "block";
      } else {
        refValidacaoDtNasc.current.style.display = "none";
        if (inputRG === "" || inputRG === undefined) {
          refValidacaoRg.current.style.display = "block";
        } else {
          refValidacaoRg.current.style.display = "none";
          if (inputRG.length !== 12) {
            refValidacaoRgInv.current.display = "block";
          } else {
            refValidacaoRgInv.current.style.display = "none";
            if (inputCPF === "" || inputCPF === undefined) {
              refValidacaoCpf.current.style.display = "block";
            } else {
              refValidacaoCpf.current.style.display = "none";
              if (inputCPF.length !== 14) {
                refValidacaoCpfInv.current.display = "block";
              } else {
                refValidacaoCpfInv.current.style.display = "none";
                if (inputCelular === "" || inputCelular === undefined) {
                  refValidacaoCelular.current.style.display = "block";
                } else {
                  refValidacaoCelular.current.style.display = "none";
                  if (inputCelular.length < 10) {
                    refValidacaoCelularInv.current.display = "block";
                  } else {
                    refValidacaoCelularInv.current.style.display = "none";
                    if (inputEmail === "" || inputEmail === undefined) {
                      refValidacaoEmail.current.style.display = "block";
                    } else {
                      refValidacaoEmail.current.style.display = "none";
                      if (inputSenha === "" || inputSenha === undefined) {
                        refValidacaoSenha.current.style.display = "block";
                      } else {
                        refValidacaoSenha.current.style.display = "none";
                        if (inputSenha !== inputRepetirSenha) {
                          refValidacaoSenhaInv.current.style.display = "block";
                        } else {
                          refValidacaoSenhaInv.current.style.display = "none";

                          const novoCadastro = {
                            nome: inputNome,
                            email: inputEmail,
                            cpf: inputCPF,
                            celular: inputCelular,
                            dtNasc: inputDataDeNascimento,
                            rg: inputRG,
                            senha: inputSenha,
                          }

                          console.log("Entrando no POST");
                          api
                            .post(`/usuarios`, novoCadastro)
                            .then((response) => {
                              console.log("Enviando os dados para a API");
                              console.log(response);
                              console.log("API recebeu os dados corretamente");
                              console.log("Novo cadastro:", novoCadastro);
                              navigate("/login");
                            })
                            .catch((err) => {
                              console.error(err);
                            });
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return (
    <section>
      <NavbarDeslogada />
      <div className="backgroundBody">
        <div className="containerMarromClaro">
          <p className="tituloContainer colorBlack" alt="Cadastre-se">
            Cadastre-se
          </p>
          <p className="txtDecisao">
            Já possui cadastro?{" "}
            <a className="txtVerde" href="/login">
              Entre
            </a>
          </p>
          <form onSubmit={(evento) => Cadastrar(evento)} className="formulario">
            <input
              onChange={(evento) => setInputNome(evento.target.value)}
              className="formularioInput inputGrande"
              type="text"
              placeholder="Nome completo"
              maxLength={60}
              alt="campo nome"
            />
            <p
              ref={refValidacaoNome}
              id="validacaoNome"
              className="textoAlerta"
            >
              Esse campo não pode ser vazio!
            </p>
            <input
              onChange={(evento) =>
                setInputDataDeNascimento(evento.target.value)
              }
              className="formularioInput inputGrande"
              type="date"
              placeholder="Data de nascimento"
              alt="campo data de nascimento"
            />
            <p
              ref={refValidacaoDtNasc}
              id="validacaoDtNasc"
              className="textoAlerta"
            >
              Esse campo não pode ser vazio!
            </p>
            <p
              ref={refValidacaoDtNascInv}
              id="validacaoDtNascInv"
              className="textoAlerta"
            >
              Data inválida!
            </p>
            <InputMask
              onChange={(evento) => setInputRG(evento.target.value)}
              className="formularioInput inputGrande"
              type="text"
              placeholder="RG"
              mask="99.999.999-9"
              alt="campo rg"
            />
            <p
              ref={refValidacaoRgInv}
              id="validacaoRgInv"
              className="textoAlerta"
            >
              RG inválido!
            </p>
            <p ref={refValidacaoRg} id="validacaoRg" className="textoAlerta">
              Esse campo não pode ser vazio!
            </p>
            <InputMask
              onChange={(evento) => setInputCPF(evento.target.value)}
              className="formularioInput inputGrande"
              type="text"
              placeholder="CPF"
              mask="999.999.999-99"
              alt="campo cpf"
            />
            <p
              ref={refValidacaoCpfInv}
              id="validacaoCpfInv"
              className="textoAlerta"
            >
              CPF inválido!
            </p>
            <p ref={refValidacaoCpf} id="validacaoCpf" className="textoAlerta">
              Esse campo não pode ser vazio!
            </p>
            <InputMask
              onChange={(evento) => setInputCelular(evento.target.value)}
              className="formularioInput inputGrande"
              type="tel"
              mask="(99) 99999-9999"
              placeholder="Celular"
              alt="campo celular"
            />
            <p
              ref={refValidacaoCelularInv}
              id="validacaoCelularInv"
              className="textoAlerta"
            >
              Número inválido!
            </p>
            <p
              ref={refValidacaoCelular}
              id="validacaoCelular"
              className="textoAlerta"
            >
              Esse campo não pode ser vazio!
            </p>
            <input
              onChange={(evento) => setInputEmail(evento.target.value)}
              className="formularioInput inputGrande"
              type="email"
              placeholder="E-mail"
              maxLength={100}
              alt="campo e-mail"
            />
            <p
              ref={refValidacaoEmailInv}
              id="validacaoEmailInv"
              className="textoAlerta"
            >
              Esse e-mail não existe!
            </p>
            <p
              ref={refValidacaoEmail}
              id="validacaoEmail"
              className="textoAlerta"
            >
              Esse campo não pode ser vazio!
            </p>
            <input
              onChange={(evento) => setInputSenha(evento.target.value)}
              className="formularioInput inputGrande"
              type="password"
              placeholder="Senha"
              maxLength={20}
              alt="campo senha"
            />
            <p
              ref={refValidacaoSenha}
              id="validacaoSenha"
              className="textoAlerta"
            >
              Esse campo não pode ser vazio!
            </p>
            <input
              onChange={(evento) => setInputRepetirSenha(evento.target.value)}
              className="formularioInput inputGrande"
              type="password"
              placeholder="Repetir senha"
              maxLength={20}
              alt="campo repetir senha"
            />
            <p
              ref={refValidacaoSenhaInv}
              id="validacaoSenhaInv"
              className="textoAlerta"
            >
              Senhas não conferem!
            </p>
            <button type="submit" className="btnSistema btnMedio">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default CadastroCliente;
