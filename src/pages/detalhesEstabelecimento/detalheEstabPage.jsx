import DetalhesEstabelecimento from "../../components/detalhes-estabelecimento/detalhesEstabelecimento";
import Navbar from "../../components/navbar";

function DetalhesEstabelecimentoPages() {

    return (
        <div>
            <div className="navbar"><Navbar /></div>
            <div className="lista"><DetalhesEstabelecimento /></div>

        </div>
    );
}

export default DetalhesEstabelecimentoPages;
