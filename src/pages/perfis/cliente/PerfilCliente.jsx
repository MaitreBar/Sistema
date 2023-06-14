import PerfilCliente from "../../../components/perfis/PerfilCliente";
import NavbarLogada from "../../../components/navbar/NavbarLogada";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada></NavbarLogada>
      <PerfilCliente></PerfilCliente>
    </div>
  );
}
export default Index;
