import styles from './About.modules.css'

import coquetel from '../../../assets/images/icon/coquetel.png'
import comentario from '../../../assets/images/icon/comentarios.png'
import balcao from '../../../assets/images/icon/balcao-de-bar.png'


function Sobre(){
    return(
        <section class="service" id='service'>
            <span class="titleG">RESERVE <span class="txtColor">&</span> DIVIRTA-SE</span>
            <div class="containerService">
                <div class="serviceBox">
                <img src={coquetel} alt=""/>
                <p>Um dia liguei para o meu pai e pedi um lego para brincar mas pisei em cima e doeu</p>
                </div>
                <div class="serviceBox">
                <img src={comentario} alt=""/>
                <p>Um dia liguei para o meu pai e pedi um lego para brincar mas pisei em cima e doeu</p>
                </div>
                <div class="serviceBox">
                <img src={balcao} alt=""/>
                <p>Um dia liguei para o meu pai e pedi um lego para brincar mas pisei em cima e doeu</p>
                </div>
            </div>
            <div class="serviceBtn">
                <button>Conhecer mais</button>
                <button>Entrar em contato</button>
            </div>
        </section>
    )
}
export default Sobre;