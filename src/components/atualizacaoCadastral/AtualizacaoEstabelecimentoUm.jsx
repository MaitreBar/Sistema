import './Atualizacao.modules.css';

function AtualizacaoEstabelecimentoUm (){
    return(
        <div className='background'>
            <div className='containerAtualizacao'>
                <p className='titulo'>Atualizar perfil</p>
                <form action="" className='formAtualizacao'>
                    <input type="text" placeholder='Nome estabelecimento' className='inputAtualizar' />
                    <input type="text" placeholder='CNPJ' className='inputAtualizar' />
                    <input type="text" placeholder='Logradouro' className='inputAtualizar' />
                    <input type="text" placeholder='Número' className='inputAtualizar' />
                    <input type="text" placeholder='Complemento' className='inputAtualizar' />
                    <input type="text" placeholder='Celular' className='inputAtualizar' />
                    <input type="text" placeholder='Descrição' className='inputAtualizar' />
                    <input type="text" placeholder='E-mail' className='inputAtualizar' />
                    <input type="text" placeholder='Senha antiga' className='inputAtualizar' />
                    <input type="text" placeholder='Nova senha' className='inputAtualizar' />
                    
                    <button className='btnAtualizar'>Atualizar</button>
                </form>
            </div>
        </div>
    );
}
export default AtualizacaoEstabelecimentoUm;