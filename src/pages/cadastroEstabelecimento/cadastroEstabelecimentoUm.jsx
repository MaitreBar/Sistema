import CadastroEstabelicimentoUm from "../../components/cadastros/cadastroEstabelecimento/CadastroEstabelecimentoUm";
import VLibras from "@djpfs/react-vlibras";
function CadastroEstabelecimentoUmPages() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <CadastroEstabelicimentoUm />
    </div>
  );
}
export default CadastroEstabelecimentoUmPages;
