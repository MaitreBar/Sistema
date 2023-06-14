import DetalheEstabelecimento from "../../components/detalhesEstabelecimento/DetalheEstabelecimento";
import NavbarLogada from "../../components/navbar/NavbarLogada";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada />
      <DetalheEstabelecimento />
    </div>
  );
}
export default Index;
