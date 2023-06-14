import RecuperarEmail from "../../../components/recuperacao/RecuperarEmail";
import NavbarDeslogada from "../../../components/navbar/NavbarDeslogada";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarDeslogada></NavbarDeslogada>
      <RecuperarEmail />
    </div>
  );
}
export default Index;
