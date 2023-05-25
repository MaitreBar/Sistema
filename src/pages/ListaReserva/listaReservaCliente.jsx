
import Navbar from "../../components/navbar/navbarDeslogada";
import ListaReservaCliente from "../../components/listaReservaCliente";

function ListaReservaClientePages() {
  return (
    <div>
      <div className="navbar"><Navbar /></div>
      <div className=""><ListaReservaCliente /></div>

    </div>
  );
}

export default ListaReservaClientePages;
