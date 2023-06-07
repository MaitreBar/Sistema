function RecuperarEmail(){
    return(
        <section>
            <div className='backgroundBody'>            
                <div className='containerMarromClaro'>
                    <p className='tituloContainer colorBlack' alt='Login'>Esqueci meu e-mail</p>
                    <p className='txtDecisao'>Para redefinir seu e-mail, informe o CPF ou CNPJ cadastrado e lhe enviaremos um link com as instruções.</p>
                    <form onSubmit='' className='formulario'>
                        <input className='formularioInput inputGrande' type="text" placeholder='CPF ou CNPJ' alt='campo cpf ou cnpj'/>
                        <p className="textoAlerta">Esse e-mail não existe!</p>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <button type="submit" className='btnSistema btnMedio'>Enviar</button>
                        <button type="submit" className='btnSistema btnSemFundo btnColorBlack'>Cancelar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default RecuperarEmail;