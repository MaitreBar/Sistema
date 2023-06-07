import "../Atualizacao.modules.css";

function AtualizacaoPerfilEstabelecimentoUm() {
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
          />
          <input
            onChange="
            "
            type="text"
            placeholder="CNPJ"
            className='formularioInput inputGrande'
          />
          <input
            onChange=""
            type="text"
            placeholder="Logradouro"
            className='formularioInput inputGrande'
          />
          <input
            onChange=""
            type="text"
            placeholder="Número"
            className='formularioInput inputGrande'
          />
          <input
            onChange=""
            type="text"
            placeholder="Complemento"
            className='formularioInput inputGrande'
          />
          <input
            onChange=""
            type="text"
            placeholder="Celular"
            className='formularioInput inputGrande'
          />
          <input
            onChange=""
            type="text"
            placeholder="Descrição"
            className='formularioInput inputGrande'
          />
          <input
            onChange=""
            type="email"
            placeholder="E-mail"
            className='formularioInput inputGrande'
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
