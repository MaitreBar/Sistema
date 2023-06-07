import styles from './Modal.modules.css'

function ModalVez (){
    return(
        <div className='background'>
            <div className='modal'>
                <p>Sua posição na fila é:</p>
                <div className='position'>
                    <p>0</p>
                </div>
                <p>Por favor, dirija-se a recepção!</p>
            </div>
        </div>
    );
}
export default ModalVez;