import styles from './Home.module.css'


function Home(){
    return(
        <div className={styles.home}>
            <span className={styles.banner}>
                <p>Escolha onde quer se sentar</p><br/><br/>
                <span className={styles.titleG}>Tem lugar <span className={styles.txtColor}>aí?</span></span><br/>
                <p>Encontre o lugar que mais combina com você!</p>
            </span>
            
            {/* <img src={banner} alt={nome} class={styles.banner}></img> */}
            {/* "./images/banner/banner.jpg" */}
        </div>
    )
}
export default Home;