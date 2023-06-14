import NavbarLogada from "../../components/navbar/NavbarLogada";
import AtualizacaoCliente from "../../components/atualizacao/cliente/AtualizacaoPerfilCliente";
import VLibras from "@djpfs/react-vlibras";

function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada />
      <AtualizacaoCliente />
    </div>
  );
}
export default Index;
