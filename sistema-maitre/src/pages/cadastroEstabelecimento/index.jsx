
import Navbar from "../../components/navbar";
import CadastroFaseUm from "../../components/cadastro-fase-um";
import CadastroFaseDois from "../../components/cadastro-fase-dois";
import CadastroFaseTres from "../../components/cadastro-fase-tres";
import CadastroFaseQuatro from "../../components/cadastro-fase-quatro";
function CadastroEstabelecimento() {
  return (
    <div>
      <div className="Navbar"><Navbar/> </div>
      {/* <div className="CadastroFaseUm"><CadastroFaseUm/></div> */}
      {/* <div className="CadastroFaseDois"><CadastroFaseDois/></div>  */}
      {/* <div className="CadastroFaseTres"><CadastroFaseTres/></div> */}
      <div className="CadastroFaseQuatro"><CadastroFaseQuatro /></div>
    </div>
  );
}

export default CadastroEstabelecimento;