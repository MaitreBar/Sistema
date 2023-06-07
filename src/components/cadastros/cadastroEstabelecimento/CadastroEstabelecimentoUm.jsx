import NavbarDeslogada from '../../navbar/NavbarDeslogada';
import '../../../index.css';

function CadastroEstabelicimentoUm(){
    return(
        <section>
            <NavbarDeslogada/>
            <div className='backgroundBody'>            
                <div className='containerMarromClaro'>
                    <p className='tituloContainer colorBlack' alt='Cadastre seu estabelecimento'>Cadastre seu estabelecimento</p>
                    <p className='txtOldTT'>1 - 4</p>
                    <form onSubmit='' className='formulario'>
                        <input className='formularioInput inputGrande' type="email" placeholder='E-mail' alt='campo e-mail'/>
                        <p className="textoAlerta">Esse e-mail inválido!</p>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <input className='formularioInput inputGrande' type="password" placeholder='Senha' alt='campo e-mail'/>
                        <p className="textoAlerta">Esse campo não pode ser vazio!</p>
                        <br/><br/>
                        <input className="" type="file" />
                        <br></br>
                        <button className="btnSistema btnMedio">Adicionar Imagem</button>
                        <button type="submit" className=' btnSistema btnMedio'>Proximo</button>
                        <button type="submit" className='btnSistema btnSemFundo'>Voltar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default CadastroEstabelicimentoUm;