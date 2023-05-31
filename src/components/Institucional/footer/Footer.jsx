import styles from './Footer.modules.css'

import facebook from '../../../assets/images/icon/facebook.png'
import instagram from '../../../assets/images/icon/instagram.png'
import twitter from '../../../assets/images/icon/twitter.png'

function Footer(){
    return(
        <footer id='footer'>
        <h4>Onde nos encontrar?</h4>
        <hr/>
        <div class="container-footer">
            <div class="footer-box">
            <span>Contate-nos</span>
            <p>Rua Haddock Lobo, n° 595 - Cerqueira César, São Paulo - SP</p>
            <p>maitre@email.com</p>
            </div>
            <div class="footer-box">
            <span>2023</span>
            <div>
                <img src={facebook} alt=""/>
                <img src={twitter} alt=""/>
                <img src={instagram} alt=""/>
            </div>
            </div>
        </div>
        <p>Copyright © 2023 Maître</p>
        </footer>
    )
}
export default Footer;