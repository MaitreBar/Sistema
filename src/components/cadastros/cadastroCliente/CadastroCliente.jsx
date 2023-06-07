import NavbarDeslogada from '../../navbar/NavbarDeslogada';
import '../../../index.css';

function CadastroCliente(){
    return(
        <section>
            <NavbarDeslogada/>
            <div className='backgroundBody'>            
                <div className='containerMarromClaro'>
                    <p className='tituloContainer colorBlack' alt='Cadastre-se'>Cadastre-se</p>
                    <p className='txtDecisao'>Já possui cadastro? <a className='txtVerde' href=''>Entre</a></p>
                    <form onSubmit='' className='formulario'>
                        <input className='formularioInput inputGrande' type="text" placeholder='Nome completo' alt='campo nome'/>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <input className='formularioInput inputGrande' type="date" placeholder='Data de nascimento' alt='campo data de nascimento'/>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <p className="textoAlerta">Data inválida!</p>
                        <input className='formularioInput inputGrande' type="text" placeholder='RG' alt='campo rg'/>
                        <p className="textoAlerta">RG inválido!</p>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <input className='formularioInput inputGrande' type="text" placeholder='CPF' alt='campo cpf'/>
                        <p className="textoAlerta">CPF inválido!</p>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <input className='formularioInput inputGrande' type="tel"placeholder='Celular' alt='campo celular'/>
                        <p className="textoAlerta">Número inválido!</p>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <input className='formularioInput inputGrande' type="email" placeholder='E-mail' alt='campo e-mail'/>
                        <p className="textoAlerta">Esse e-mail não existe!</p>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <input className='formularioInput inputGrande' type="password" placeholder='Senha' alt='campo senha'/>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <input className='formularioInput inputGrande' type="password" placeholder='Repetir senha' alt='campo repetir senha'/>
                        <p className="textoAlerta">Senhas não conferem!</p>
                        <button type="submit" className='btnSistema btnMedio'>Cadastrar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default CadastroCliente;