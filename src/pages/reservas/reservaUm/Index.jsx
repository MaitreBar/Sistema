import NavbarLogada from "../../../components/navbar/NavbarLogada";
import ReservaEstabelecimentoUm from "../../../components/reservas/ReservaUm";
import VLibras from "@djpfs/react-vlibras";
function ReservaUmPages() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada></NavbarLogada>
      <ReservaEstabelecimentoUm></ReservaEstabelecimentoUm>
    </div>
  );
}
export default ReservaUmPages;
