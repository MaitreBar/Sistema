import NavbarLogada from "../../components/navbar/NavbarLogada";
import AtualizarPerfilEstabelecimentoUm from "../../components/atualizacao/estabelecimento/AtualizacaoPerfilEstabelecimentoUm";
import VLibras from "@djpfs/react-vlibras";

function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada />
      <AtualizarPerfilEstabelecimentoUm />
    </div>
  );
}
export default Index;
