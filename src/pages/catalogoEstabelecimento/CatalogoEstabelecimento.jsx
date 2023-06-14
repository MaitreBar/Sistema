import CatalogoEstabelecimento from "../../components/catalogoEstabelecimento/CatalogoEstabelecimento";
import NavbarLogada from "../../components/navbar/NavbarLogada";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada></NavbarLogada>
      <CatalogoEstabelecimento></CatalogoEstabelecimento>
    </div>
  );
}
export default Index;
