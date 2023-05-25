import './Profile.modules.css';

import logo from '../../assets/images/icon/logo.png'

function ProfileClient(){
    return(
        // nav
        <div className='container'>
            <div className='container-profile'>
                <p className='frase'>Meu perfil</p>
                <div className='container-card'>
                    <div className='card-details'>
                        <div className='photo'><img src={logo} alt="logo" /></div>
                        <div className='details'>
                            <b>$nomeEstabelecimento$</b>
                            <p>CNPJ:</p>
                            <p>Endereço:</p>
                            <p>Telefone:</p>
                            <p>Horário de funcionamento:</p>
                            <p>Tags:</p>
                            <a className='btnEditar' href="">Editar</a>
                        </div>
                    </div>
                    <div className='card'>
                        <a href=""><b>Mapear seus clientes</b><p>Mapeie reservas e quem já está aqui.</p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileClient;