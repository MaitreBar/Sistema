
import ListaReservaBar from "../../components/listaReservaBar";
import Navbar from "../../components/navbar";
import { useLocation } from "react-router";


function ListaReservaBarPages() {
  const { state: usuarioLogado } = useLocation();
  return (
    <div>
      <div className="navbar"><Navbar usuarioLogado={usuarioLogado} /></div>
      <div className="lista"><ListaReservaBar /></div>

    </div>
  );
}

export default ListaReservaBarPages;
