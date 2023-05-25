
import ListaReservaBar from "../../components/listaReservaBar";
import Navbar from "../../components/navbar/navbarDeslogada";


function ListaReservaBarPages() {
  return (
    <div>
      <div className="navbar"><Navbar /></div>
      <div className="lista"><ListaReservaBar /></div>

    </div>
  );
}

export default ListaReservaBarPages;
