import logo from '../../assets/logos/logo-marrom-escuro.png';

function NavbarLogada(){
    return(
        <div>
            <nav className="containerNavbar">
                <div className='cabecalhoNavbar'>
                    <img className='imagemNavbar' src={logo} alt="Logo maître" href=""/>
                    <p className='nomeNavbar' alt='nome do sistema'>MAÎTRE</p>
                </div>
                <div className='containerBotoesNavbar'>
                    <button className='btnSistema btnSemFundo' alt='botão perfil navbar'>Perfil</button>
                    <button className='btnSistema btnSemFundo' alt='botão início navbar'>Início</button>
                    <button className='btnSistema' alt='botão sair navbar'>Sair</button>
                </div>
            </nav>
        </div>
    );
}
export default NavbarLogada;