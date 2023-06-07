import NavbarDeslogada from '../navbar/NavbarDeslogada';
import NavbarLogada from '../navbar/NavbarLogada';

function NomePaginaFormulario(){
    return(
        <section>
            {/* inserir navbar respectiva aqui */}
            <NavbarDeslogada></NavbarDeslogada>
            <NavbarLogada></NavbarLogada>

            <div className='backgroundBody'>            
                <div className='containerMarromClaro'>
                    <p className='tituloContainer colorBlack' alt='Titulo'>Título</p>
                    <p className='tituloEtapa'><b className='tituloEtapa'>1</b> - 4</p>
                    <form onSubmit='' className='formulario'>
                        <input className='formularioInput inputGrande' type="text" placeholder='Nome do campo' alt='Input nome do campo'/>
                        <div className='containerInput'>
                            <input className='formularioInput inputDuplo' type="text" placeholder='Nome do campo' alt='Input nome do campo'/>
                            <input className='formularioInput inputDuplo' type="text" placeholder='Nome do campo' alt='Input nome do campo'/>
                        </div>
                        <input className='formularioInput inputGrande' type="text" placeholder='Nome do campo' alt='Input nome do campo'/>
                        <input className='formularioInput inputGrande' type="text" placeholder='Nome do campo' alt='Input nome do campo'/>
                        <button type="submit" className='btnSistema btnSemFundo btnColorBlack'>Nome</button>
                        <button type="submit" className='btnSistema btnSemFundo'>Nome</button>
                        <button type="submit" className='btnSistema btnMedio'>Nome</button>
                        <button type="submit" className='btnSistema btnMedio btnSemFundo btnColorBlack'>Nome</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default NomePaginaFormulario;