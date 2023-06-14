import NavbarLogada from "../../components/navbar/NavbarLogada";
import AtualizarPerfilEstabelecimentoDois from "../../components/atualizacao/estabelecimento/AtualizacaoPerfilEstabelecimentoDois";
import VLibras from "@djpfs/react-vlibras";

function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada />
      <AtualizarPerfilEstabelecimentoDois />
    </div>
  );
}
export default Index;
