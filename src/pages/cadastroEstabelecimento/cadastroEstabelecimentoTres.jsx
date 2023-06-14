import CadastroEstabelicimentoTres from "../../components/cadastros/cadastroEstabelecimento/CadastroEstabelecimentoTres";
import VLibras from "@djpfs/react-vlibras";
function CadastroEstabelecimentoTresPages() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <CadastroEstabelicimentoTres />
    </div>
  );
}
export default CadastroEstabelecimentoTresPages;
