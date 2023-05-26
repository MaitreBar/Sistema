
import Navbar from "../../components/navbar";
import ReservaTres from "../../components/reserva-tres";
import { useLocation } from "react-router";

function TelaReservaTres() {
    const { state: usuarioLogado } = useLocation();
    return (
        <div>
            <div className="navbar"><Navbar usuarioLogado={usuarioLogado}/></div>
            <div className="reserva"><ReservaTres/></div>
        </div>
    );


}
export default TelaReservaTres;

