import PerfilEstabelecimento from "../../../components/perfis/PerfilEstabelecimento";
import NavbarLogada from "../../../components/navbar/NavbarLogada";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada></NavbarLogada>
      <PerfilEstabelecimento></PerfilEstabelecimento>
    </div>
  );
}
export default Index;
