import IdentificacaoEmailSenha from "../../../components/identificacao/IdentificacaoEmailSenha";
import NavbarDeslogada from "../../../components/navbar/NavbarDeslogada";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarDeslogada></NavbarDeslogada>
      <IdentificacaoEmailSenha />
    </div>
  );
}
export default Index;
