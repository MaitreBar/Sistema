import IdentificacaoCadastro from "../../../components/identificacao/IdentificacaoCadastro";
import NavbarDeslogada from "../../../components/navbar/NavbarDeslogada";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarDeslogada></NavbarDeslogada>
      <IdentificacaoCadastro />
    </div>
  );
}
export default Index;
