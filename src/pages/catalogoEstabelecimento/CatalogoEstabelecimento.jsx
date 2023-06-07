import CatalogoEstabelecimento from '../../components/catalogoEstabelecimento/CatalogoEstabelecimento';
import NavbarLogada from '../../components/navbar/NavbarLogada';

function  Index(){
    return(
        <div>
            <NavbarLogada></NavbarLogada>
            <CatalogoEstabelecimento></CatalogoEstabelecimento>
        </div>
    );
}
export default Index;