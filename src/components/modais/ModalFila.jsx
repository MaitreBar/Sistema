import styles from './Modal.modules.css'

function ModalFila (){
    return(
        <div className='background'>
            <div className='modal'>
                <p>Sua posição na fila é:</p>
                <div className='position'>
                    <p>10</p>
                </div>
                <p>Por favor, aguarde na fila!</p>
            </div>
        </div>
    );
}
export default ModalFila;