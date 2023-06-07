import NavbarLogada from '../../../components/navbar/NavbarLogada';
import ListaReservaCliente from '../../../components/reservas/listasReservas/listaReservaCliente/ListaReservaCliente';

function Index(){
    return(
        <div>
            <NavbarLogada></NavbarLogada>
            <ListaReservaCliente></ListaReservaCliente>
        </div>
    );
}
export default Index;