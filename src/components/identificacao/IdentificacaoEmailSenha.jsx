function IdentificacaoEmailSenha(){
    return(
        <section>
            <div className='backgroundBody'>            
                <div className='containerMarromClaro'>
                    <p className='tituloContainer colorBlack' alt='Login'>O que deseja recuperar?</p>
                    <p className='txtDecisao'>Já possui cadastro? <a className='txtVerde' href=''>Realize o login</a></p>
                    <form onSubmit='' className='formulario'>
                        <button type="submit" className='btnSistema btnMedio'>E-mail</button>
                        <button type="submit" className='btnSistema btnMedio'>Senha</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default IdentificacaoEmailSenha;