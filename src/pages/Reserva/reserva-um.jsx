import Navbar from "../../components/navbar";
import ReservaUm from "../../components/reserva-um";
import { useLocation } from "react-router";


function TelaReservaUm() {
    const { state: usuarioLogado } = useLocation();
    return (
        <div>
            <div className="navbar"><Navbar usuarioLogado={usuarioLogado} /></div>
            <div className="reserva"><ReservaUm /></div>

        </div>
    );


}
export default TelaReservaUm;

