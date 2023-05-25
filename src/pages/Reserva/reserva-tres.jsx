
import Navbar from "../../components/navbar/navbarDeslogada";
import ReservaDois from "../../components/reserva-dois";
import ReservaTres from "../../components/reserva-tres";

function TelaReservaTres() {
    return (
        <div>
            <div className="navbar"><Navbar></Navbar></div>
            <div className="reserva"><ReservaTres /></div>

        </div>
    );


}
export default TelaReservaTres;

