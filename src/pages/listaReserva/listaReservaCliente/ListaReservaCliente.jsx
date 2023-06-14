import NavbarLogada from "../../../components/navbar/NavbarLogada";
import ListaReservaCliente from "../../../components/reservas/listasReservas/listaReservaCliente/ListaReservaCliente";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada></NavbarLogada>
      <ListaReservaCliente></ListaReservaCliente>
    </div>
  );
}
export default Index;
