function Login(){
    return(
            <div className='backgroundBody'>            
                <div className='containerMarromClaro'>
                    <p className='tituloContainer colorBlack' alt='Login'>Login</p>
                    <p className='txtDecisao'>Não possui login? <a className='txtVerde' href=''>Cadastre-se</a></p>
                    <form onSubmit='' className='formulario'>
                        <p className="textoAlerta">E-mail e/ou senha não conferem!</p>
                        <input className='formularioInput inputGrande' type="email" placeholder='E-mail' alt='campo e-mail'/>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <input className='formularioInput inputGrande' type="password" placeholder='Senha' alt='campo senha'/>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <p className='txtDecisao'>Esqueceu a senha ou o e-mail? <a className='txtVerde' href=''>Clique aqui!</a></p>
                        <button type="submit" className='btnSistema btnMedio'>Entrar</button>
                    </form>
                </div>
            </div>
    );
}
export default Login;