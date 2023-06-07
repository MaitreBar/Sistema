import "../Atualizacao.modules.css";

function AtualizacaoPerfilCliente() {

  return (
    <div className="backgroundBody">
      <div className="containerMarromClaro">
        <p className="tituloContainer">Atualizar perfil</p>
        <form onSubmit='' className='formulario'>
          <input
            type="text"
            placeholder="Nome completo"
            className='formularioInput inputGrande'
          />
          <input
            type="email"
            placeholder="E-mail"
            className='formularioInput inputGrande'
          />
          <input
            type="text"
            placeholder="RG"
            className='formularioInput inputGrande'
          />
          <input
            type="text"
            placeholder="CPF"
            className='formularioInput inputGrande'
          />
          <input
            type="tel"
            placeholder="Celular"
            className='formularioInput inputGrande'
          />
          <input
            type="password"
            placeholder="Senha antiga"
            className='formularioInput inputGrande'
          />
          <input
            type="password"
            placeholder="Senha nova"
            className='formularioInput inputGrande'
          />
          <button type="submit" className='btnSistema btnMedio'>Atualizar</button>
        </form>
      </div>
    </div>
  );
}
export default AtualizacaoPerfilCliente;