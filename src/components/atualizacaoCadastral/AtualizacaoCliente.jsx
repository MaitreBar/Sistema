import styles from './Atualizacao.modules.css';

function AtualizacaoCliente (){
    return(
        <div className='background'>
            <div className='containerAtualizacao'>
                <p className='titulo'>Atualizar perfil</p>
                <form action="" className='formAtualizacao'>
                    <input type="text" placeholder='Nome completo' className='inputAtualizar' />
                    <input type="text" placeholder='E-mail' className='inputAtualizar' />
                    <input type="text" placeholder='RG' className='inputAtualizar' />
                    <input type="text" placeholder='CPF' className='inputAtualizar' />
                    <input type="text" placeholder='Celular' className='inputAtualizar' />
                    <input type="text" placeholder='Senha antiga' className='inputAtualizar' />
                    <input type="text" placeholder='Senha nova' className='inputAtualizar' />
                    <button className='btnAtualizar'>Atualizar</button>
                </form>
            </div>
        </div>
    );
}
export default AtualizacaoCliente;