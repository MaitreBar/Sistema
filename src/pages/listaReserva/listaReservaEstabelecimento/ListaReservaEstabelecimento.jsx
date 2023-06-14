import NavbarLogada from "../../../components/navbar/NavbarLogada";
import ListaReservaEstabelecimento from "../../../components/reservas/listasReservas/listaReservaEstabelecimento/ListaReservaEstabelecimento";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada></NavbarLogada>
      <ListaReservaEstabelecimento></ListaReservaEstabelecimento>
    </div>
  );
}
export default Index;
