
import Navbar from "../../components/navbar";
import CadastroFaseUm from "../../components/cadastro-fase-um";
import CadastroFaseDois from "../../components/cadastro-fase-dois";
function CadastroEstabelecimento() {
    return (
      <div>
        <div className="navbar"><Navbar /></div>
        <div className="CadastroDaseUm"><CadastroFaseUm/></div>
        {/* <div className="CadastroFaseDois"><CadastroFaseDois/></div>  */}

      </div>
    );
}

export default CadastroEstabelecimento;