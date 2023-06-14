import NavbarLogada from "../../../components/navbar/NavbarLogada";
import ReservaEstabelecimentoTres from "../../../components/reservas/ReservaTres";
import VLibras from "@djpfs/react-vlibras";
function ReservaTresPages() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada></NavbarLogada>
      <ReservaEstabelecimentoTres></ReservaEstabelecimentoTres>
    </div>
  );
}
export default ReservaTresPages;
