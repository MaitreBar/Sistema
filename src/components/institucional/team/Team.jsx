import styles from './Team.modules.css'

import beatriz from '../../../assets/integrantes/beatriz.jpeg'
import cesar from '../../../assets/integrantes/cesar.jpeg'
import gabriel from '../../../assets/integrantes/gabriel.jpeg'
import landim from '../../../assets/integrantes/landim.jpeg'
import mayla from '../../../assets/integrantes/mayla.jpeg'
import tamirez from '../../../assets/integrantes/tamirez.jpeg'


function Equipe(){
    return(
        <section class="team" id='team'>
            <h4>Nosso time</h4>
            <hr/>
            <div class="container-team">
                <div class="people">
                <img src={beatriz} alt="Beatriz"/>
                <span>Beatriz França Gusmão</span>
                <p>Front-End</p>
                </div>
                <div class="people">
                <img src={cesar} alt="Cesar"/>
                <span>Cesar de Sousa Lima</span>
                <p>Front-End</p>
                </div>
                <div class="people">
                <img src={gabriel} alt="Gabriel"/>
                <span>Gabriel Farias Sousa</span>
                <p>Back-End</p>
                </div>
                <div class="people">
                <img src={landim} alt="Lucas"/>
                <span>Lucas Landim Oliver Rodrigues</span>
                <p>Back-End</p>
                </div>
                <div class="people">
                <img src={mayla} alt="Mayla"/>
                <span>Mayla Ocleciano Bisacchi</span>
                <p>DBA</p>
                </div>
                <div class="people">
                <img src={tamirez} alt="Tamirez"/>
                <span>Tamirez Sousa Melo</span>
                <p>Negócios</p>
                </div>
            </div>
            <div className="citacao">
                <p class="quote">A nossa maior glória não reside no fato de nunca cairmos, mas sim em levantarmo-nos sempre depois de cada queda.</p><br/>
                <h4>- Oliver Goldsmith</h4>
            </div>
        </section>
    )
}
export default Equipe;