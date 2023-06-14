import RecuperarSenha from "../../../components/recuperacao/RecuperarSenha";
import NavbarDeslogada from "../../../components/navbar/NavbarDeslogada";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarDeslogada></NavbarDeslogada>
      <RecuperarSenha />
    </div>
  );
}
export default Index;
