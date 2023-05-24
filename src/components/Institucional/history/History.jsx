import styles from './History.modules.css'

function Historia (){
    return(
        <section class="history" id='history'>
            <h4>Nossa história</h4>
            <hr/>
            <div class="container-history">
                <div class="history-box">
                <span>2023</span>
                <p>Criada em Fevereiro de 2023 como parte do projeto de Pesquisa & Inovação.</p>
                </div>
                <div class="history-box">
                <span>Por que?</span>
                <p>Nosso propósito é trazer melhor acesso à bares e restaurantes da Grande São Paulo.</p>
                </div>
            </div>
        </section>
    )
}
export default Historia;