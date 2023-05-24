import styles from './Team.modules.css'

import beatriz from '../../../assets/images/team/beatriz.jpeg'
import cesar from '../../../assets/images/team/cesar.jpeg'
import gabriel from '../../../assets/images/team/gabriel.jpeg'
import landim from '../../../assets/images/team/landim.jpeg'
import mayla from '../../../assets/images/team/mayla.jpeg'
import tamirez from '../../../assets/images/team/tamirez.jpeg'


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
                <p class="quote">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p><br/>
                <h4>- Nistro Niministro</h4>
            </div>
        </section>
    )
}
export default Equipe;