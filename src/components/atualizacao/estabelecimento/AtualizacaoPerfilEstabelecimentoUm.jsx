import { useLocation } from "react-router";
import "../Atualizacao.modules.css";
import InputMask from "react-input-mask";

function AtualizacaoPerfilEstabelecimentoUm() {

  const { state: usuarioLogado } = useLocation();

  return (
    <div className="backgroundBody">
      <div className="containerMarromClaro">
        <p className="tituloContainer">Atualizar perfil</p>
        <form className="formulario" onSubmit="">
          <input
            onChange="
            "
            type="text"
            placeholder="Nome estabelecimento"
            className='formularioInput inputGrande'
            defaultValue={usuarioLogado.nome}
          />
          <InputMask
            onChange="
            "
            type="text"
            mask={"99.999.999/9999-99"}
            placeholder="CNPJ"
            className='formularioInput inputGrande'
            defaultValue={usuarioLogado.cnpj}
          />
          <input
            onChange=""
            type="text"
            placeholder="Logradouro"
            className='formularioInput inputGrande'
            defaultValue={usuarioLogado.logradouro}
          />
          <input
            onChange=""
            type="text"
            placeholder="Número"
            className='formularioInput inputGrande'
            defaultValue={usuarioLogado.numero}
          />
          <input
            onChange=""
            type="text"
            placeholder="Complemento"
            className='formularioInput inputGrande'
            defaultValue={usuarioLogado.complemento}
          />
          <InputMask
            onChange=""
            type="text"
            mask={"(99) 99999-9999"}
            placeholder="Celular"
            className='formularioInput inputGrande'
            defaultValue={usuarioLogado.celular}
          />
          <input
            onChange=""
            type="text"
            placeholder="Descrição"
            className='formularioInput inputGrande'
            defaultValue={usuarioLogado.descricao}
          />
          <input
            onChange=""
            type="email"
            placeholder="E-mail"
            className='formularioInput inputGrande'
            defaultValue={usuarioLogado.email}
          />
          <input
            onChange=""
            type="password"
            placeholder="Senha antiga"
            className='formularioInput inputGrande'
          />
          <input
            onChange=""
            type="password"
            placeholder="Nova senha"
            className='formularioInput inputGrande'
          />
          <button type="submit" className='btnSistema btnMedio'>Atualizar</button>
        </form>
      </div>
    </div>
  );
}
export default AtualizacaoPerfilEstabelecimentoUm;
