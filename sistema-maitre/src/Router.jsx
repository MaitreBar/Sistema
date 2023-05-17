import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import CadastroEstabelecimento1 from "./pages/cadastroEstabelecimento/cadastroFaseUm";
import CadastroEstabelecimento2 from "./pages/cadastroEstabelecimento/cadastroFaseDois";
import CadastroEstabelecimento3 from "./pages/cadastroEstabelecimento/cadastroFaseTres";
import CadastroEstabelecimento4 from "./pages/cadastroEstabelecimento/cadastroFaseQuatro";
import Catalogo from "./pages/Catalogo";

function Routers () {
    return (
            <Routes>
                <Route path="/" element={Catalogo()} />
                <Route path="/cadastrar" element={Cadastro()} />
                <Route path="/login" element={Login()} />    
                <Route path="/cadastroEstabelecimento1" element={CadastroEstabelecimento1()} />
                <Route path="/cadastroEstabelecimento2" element={CadastroEstabelecimento2()} />
                <Route path="/cadastroEstabelecimento3" element={CadastroEstabelecimento3()} />
                <Route path="cadastroEstabelecimento4" element={CadastroEstabelecimento4()} />
            </Routes>
         );
}
export default Routers;