import styles from './Home.module.css'


function Home(){
    return(
        <div className={styles.home}>
            <span className={styles.banner}>
                <div className='txtAbout'>
                    <p >Escolha onde quer se sentar</p>
                    <p className={styles.tituloHome}>Tem lugar <span className={styles.tituloHomeMarrom}>aí?</span></p>
                    <p>Encontre o lugar que mais combina com você!</p>
                </div>
            </span>
        </div>
    )
}
export default Home;