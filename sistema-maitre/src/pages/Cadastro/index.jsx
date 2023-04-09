import './style.css';

function Cadastro() {
    return (
        <div class="containerzao">

            <div className="banner">
                




            </div>


            <div class="container-inputs">


                <h1> Cadastre - Se</h1>
             
                <p> Insira os dados abaixo:</p>

                <div class="single-input">

                <input type="text" placeholder='Nome Completo'></input>
                <input type="text" placeholder='CPF'></input>
                <input type="text" placeholder='RG'></input>
                <input type="text" placeholder='Data de Nascimento'></input>
                <input type="text" placeholder='E-mail'></input>
                <input type="text" placeholder='Telefone'></input>
                

            </div>


                <span class="msg-baixo"> Já possui conta ? <a href="login.html">Faça login</a></span>
                <button class="button-28">Cadastrar</button>
            </div>

        </div>





    );
}

export default Cadastro;
