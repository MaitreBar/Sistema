function RecuperarSenha(){
    return(
        <section>
            <div className='backgroundBody'>            
                <div className='containerMarromClaro'>
                    <p className='tituloContainer colorBlack' alt='Login'>Esqueci minha senha</p>
                    <p className='txtDecisao'>Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
                    <form onSubmit='' className='formulario'>
                        <input className='formularioInput inputGrande' type="email" placeholder='E-mail' alt='campo e-mail'/>
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
export default RecuperarSenha;