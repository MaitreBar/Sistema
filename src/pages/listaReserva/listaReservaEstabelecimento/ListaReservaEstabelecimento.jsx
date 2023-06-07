import NavbarLogada from '../../../components/navbar/NavbarLogada';
import ListaReservaEstabelecimento from '../../../components/reservas/listasReservas/listaReservaEstabelecimento/ListaReservaEstabelecimento';

function Index(){
    return(
        <div>
            <NavbarLogada></NavbarLogada>
            <ListaReservaEstabelecimento></ListaReservaEstabelecimento>
        </div>
    );
}
export default Index;