import './Profile.modules.css';

import logo from '../../assets/images/icon/logo.png'
import { useLocation, useNavigate } from 'react-router-dom';

function ProfileClient(){

    const { state: usuarioLogado } = useLocation();
    const navigate = useNavigate();

    return(
        // nav
        <div className='container'>
            <div className='container-profile'>
                <p className='frase'>Meu perfil</p>
                <div className='container-card'>
                    <div className='card-details'>
                        <div className='photo'><img src={logo} alt="logo" /></div>
                        <div className='details'>
                            <b>{usuarioLogado.nome}</b>
                            <p>CNPJ:{usuarioLogado.cnpj}</p>
                            <p>Endereço:{usuarioLogado.logradouro}</p>
                            <p>Descrição:{usuarioLogado.descricao}</p>
                            <p>Horário de funcionamento:{usuarioLogado.horarioAbertura} às {usuarioLogado.horaioFechamento}</p>
                            <p>Tags:{usuarioLogado.tags}</p>
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