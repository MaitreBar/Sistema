import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
import ReservaUm from "../../components/reserva-um";


function TelaReservaUm() {
    
  const { state: estabelecimento } = useLocation();
    
    return (
        <div>
            <div className="navbar"><Navbar /></div>
            <div className="reserva"><ReservaUm estabelecimento={estabelecimento} /></div>

        </div>
    );
}
export default TelaReservaUm;

