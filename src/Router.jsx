import {
    Routes,
    Route
} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import CadastroEstabelecimento1 from "./pages/cadastroEstabelecimento/cadastroFaseUm";
import CadastroEstabelecimento2 from "./pages/cadastroEstabelecimento/cadastroFaseDois";
import CadastroEstabelecimento3 from "./pages/cadastroEstabelecimento/cadastroFaseTres";
import CadastroEstabelecimento4 from "./pages/cadastroEstabelecimento/cadastroFaseQuatro";
import ListaReservaClientePages from "./pages/ListaReserva/listaReservaCliente";

import Catalogo from "./pages/Catalogo";
import ListaReservaBarPages from "./pages/ListaReserva/listaReservaBar";
import TelaReservaUm from "./pages/Reserva/reserva-um";
import TelaReservaDois from "./pages/Reserva/reserva-dois";
import SiteInstitucional from "./pages/siteInstitucional";


function Routers() {
    return (
        <Routes>
            <Route path="/" element={SiteInstitucional()} />
            <Route path="/catalogo" element={Catalogo()} />
            <Route path="/cadastro" element={Cadastro()} />
            <Route path="/login" element={Login()} />
            <Route path="/cadastroEstabelecimento1" element={CadastroEstabelecimento1()} />
            <Route path="/cadastroEstabelecimento2" element={CadastroEstabelecimento2()} />
            <Route path="/cadastroEstabelecimento3" element={CadastroEstabelecimento3()} />
            <Route path="/cadastroEstabelecimento4" element={CadastroEstabelecimento4()} />
            <Route path="/listaReservaClientePages" element={ListaReservaClientePages()} />
            <Route path="/listaReservaBarPages" element={ListaReservaBarPages()} />
            <Route path="/TelareservaUm" element={TelaReservaUm()} />
            <Route path="/TelareservaDois" element={TelaReservaDois()} />
        </Routes>
    );
}
export default Routers;