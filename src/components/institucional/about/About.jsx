import './About.modules.css';
// import { useNavigate } from "react-router-dom";

import coquetel from '../../../assets/icons/coquetel.png'
import comentario from '../../../assets/icons/comentarios.png'
import balcao from '../../../assets/icons/balcao-de-bar.png'


function Sobre() {
    // const navigate = useNavigate();
    return (
        <section class="service" id='service'>
            <div className='txtAbout'>
            <span class="titleG">RESERVE <span class="titleG txtColor">&</span> DIVIRTA-SE</span>
            </div>
            <div class="containerService">
                <div class="serviceBox">
                    <img src={coquetel} alt="" />
                    <p>Encontre o estabelecimento que mais se encaixa com seus gostos.</p>
                </div>
                <div class="serviceBox">
                    <img src={comentario} alt="" />
                    <p>Dê um match entre seu pefil de cliente e entre seu perfil de estabelecimento.</p>
                </div>
                <div class="serviceBox">
                    <img src={balcao} alt="" />
                    <p>Melhore seu atendimento com uma melhor gestão do seu espaço.</p>
                </div>
            </div>
            <div class="serviceBtn">
                <button
                >Conhecer mais</button>
                <button>Entrar em contato</button>
            </div>
        </section>
    )
}
export default Sobre;

// onClick={() => {
//     if(sessionStorage.length === 0){
//     navigate("/login");
//   } else {
//     navigate("/catalogo");
//   }
//   }
//   }