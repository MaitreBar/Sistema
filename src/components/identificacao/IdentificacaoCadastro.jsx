function IdentificacaoCadastro(){
    return(
        <section>
            <div className='backgroundBody'>            
                <div className='containerMarromClaro'>
                    <p className='tituloContainer colorBlack' alt='Login'>Identificação para cadastro</p>
                    <p className='txtDecisao'>Já possui cadastro? <a className='txtVerde' href=''>Realize o login</a></p>
                    <form onSubmit='' className='formulario'>
                        <button type="submit" className='btnSistema btnMedio'>Cliente</button>
                        <button type="submit" className='btnSistema btnMedio'>Estabelecimento</button>
                        <p className='txtDecisao'>Esqueceu a senha ou o e-mail? <a className='txtVerde' href=''>Clique aqui!</a></p>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default IdentificacaoCadastro;