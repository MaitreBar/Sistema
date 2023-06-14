import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

function IdentificacaoEmailSenha(){
    const navigate = useNavigate();

    return(
        <section>
            <div className='backgroundBody'>            
                <div className='containerMarromClaro'>
                    <p className='tituloContainer colorBlack' alt='Login'>O que deseja recuperar?</p>
                    <p className='txtDecisao'>Já possui cadastro? <a className='txtVerde' href=''>Realize o login</a></p>
                    <form onSubmit='' className='formulario'>
                        <button type="button" onClick={navigate("/recuperar/email")} className='btnSistema btnMedio'>E-mail</button>
                        <button type="button" onClick={navigate("/recuperar/senha")} className='btnSistema btnMedio'>Senha</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default IdentificacaoEmailSenha;