import NavbarLogada from "../../../components/navbar/NavbarLogada";
import ReservaEstabelecimentoDois from "../../../components/reservas/ReservaDois";
import VLibras from "@djpfs/react-vlibras";
function ReservaDoisPages() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada></NavbarLogada>
      <ReservaEstabelecimentoDois></ReservaEstabelecimentoDois>
    </div>
  );
}
export default ReservaDoisPages;
