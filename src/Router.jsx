import { Routes, Route } from "react-router-dom";
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
import TelaReservaTres from "./pages/Reserva/reserva-tres";
import SiteInstitucional from "./pages/siteInstitucional";
import perfilUsuario from "./pages/profiles/Index";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={SiteInstitucional()} />
      <Route path="/cadastro" element={Cadastro()} />
      <Route path="/cadastro-estabelecimento-pt1" element={CadastroEstabelecimento1()} />
      <Route path="/cadastro-estabelecimento-pt2" element={CadastroEstabelecimento2()} />
      <Route path="/cadastro-estabelecimento-pt3" element={CadastroEstabelecimento3()} />
      <Route path="/cadastro-estabelecimento-pt4" element={CadastroEstabelecimento4()} />
      <Route path="/login" element={Login()} />
      <Route path="/perfil" element={perfilUsuario()} />
      <Route path="/catalogo" element={Catalogo()} />
      <Route path="/tela-reserva-um" element={TelaReservaUm()} />
      <Route path="/tela-reserva-dois" element={TelaReservaDois()} />
      <Route path="/tela-reserva-tres" element={TelaReservaTres()} />
      <Route path="/lista-reserva/bar" element={ListaReservaBarPages()} />
      <Route path="/lista-reserva/cliente" element={ListaReservaClientePages()} />
    </Routes>
  );
}
export default Routers;
