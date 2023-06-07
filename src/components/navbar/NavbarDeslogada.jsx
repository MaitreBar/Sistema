import logo from '../../assets/logos/logo-marrom-escuro.png';

function NavbarDeslogada(){
    return(
        <div>
            <nav className="containerNavbar">
                <div className='cabecalhoNavbar'>
                    <img className='imagemNavbar' src={logo} alt="Logo maître" href=""/>
                    <p className='nomeNavbar' alt='nome do sistema'>MAÎTRE</p>
                </div>
                <div className='containerBotoesNavbar'>
                    <button className='btnSistema' alt='botão sair navbar'>Voltar</button>
                </div>
            </nav>
        </div>
    );
}
export default NavbarDeslogada;