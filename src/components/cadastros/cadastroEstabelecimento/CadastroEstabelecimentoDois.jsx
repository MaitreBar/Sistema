import NavbarDeslogada from '../../navbar/NavbarDeslogada';
import '../../../index.css';

function CadastroEstabelicimentoDois(){
    return(
        <section>
            <NavbarDeslogada/>
            <div className='backgroundBody'>            
                <div className='containerMarromClaro'>
                    <p className='tituloContainer colorBlack' alt='Cadastre seu estabelecimento'>Cadastre seu estabelecimento</p>
                    <p className='txtOldTT'>2 - 4</p>
                    <form onSubmit='' className='formulario'>
                        <input className='formularioInput inputGrande' type="title" placeholder='CEP' alt='campo cep'/>
                        <br></br>
                        <input className='formularioInput inputGrande' type="title" placeholder='Logradouro ' alt='campo logradouro'/>
                        <br></br>
                        <input className='formularioInput inputGrande' type="title" placeholder='Número' alt='campo numero'/>
                        <br></br>
                        <input className='formularioInput inputGrande' type="title" placeholder='Complemento' alt='campo complemento'/>
                        <br></br>
                        <input className='formularioInput inputGrande' type="title" placeholder='Telefone' alt='campo telefone'/>
                        <br></br>
                        <button type="submit" className=' btnSistema btnMedio'>Proximo</button>
                        <button type="submit" className='btnSistema btnSemFundo'>Voltar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default CadastroEstabelicimentoDois;