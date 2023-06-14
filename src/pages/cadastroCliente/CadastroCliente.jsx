import CadastroCliente from "../../components/cadastros/cadastroCliente/CadastroCliente";
import VLibras from "@djpfs/react-vlibras";
function CadastroClientePage() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <CadastroCliente></CadastroCliente>
    </div>
  );
}
export default CadastroClientePage;
