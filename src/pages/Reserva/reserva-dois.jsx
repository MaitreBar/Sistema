import Navbar from "../../components/navbar";
import ReservaDois from "../../components/reserva-dois";
import { useLocation } from "react-router";

function TelaReservaDois() {
    const { state: usuarioLogado } = useLocation();
    return (
        <div>
            <div className="navbar"><Navbar usuarioLogado={usuarioLogado} /></div>
            <div className="reserva"><ReservaDois /></div>

        </div>
    );


}
export default TelaReservaDois;

