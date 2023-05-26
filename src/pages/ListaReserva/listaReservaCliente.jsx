
import Navbar from "../../components/navbar";
import ListaReservaCliente from "../../components/listaReservaCliente";
import { useLocation } from "react-router";

function ListaReservaClientePages() {
  const { state: usuarioLogado } = useLocation();
  return (
    <div>
      <div className="navbar"><Navbar usuarioLogado={usuarioLogado} /></div>
      <div className=""><ListaReservaCliente /></div>

    </div>
  );
}

export default ListaReservaClientePages;
