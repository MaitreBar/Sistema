
import CadastroFaseDois from "./cadastro-fase-dois";
import Navbar from "../navbar";
import CadastroFaseUm from "./cadastro-fase-um";

function CadastroEstabelecimento() {
    return (
      <div>
        <div className="navbar"><Navbar /></div>
        {/* <div className="CadastroFaseDois"><CadastroFaseDois/></div>  */}
        <div className="CadastroDaseUm"><CadastroFaseUm/></div>
      </div>
    );
}

export default CadastroEstabelecimento;