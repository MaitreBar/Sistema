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
import perfilUsuario from "./pages/perfilUsuario";
import perfilEstabelecimento from "./pages/perfilEstabelecimento";
import atualizarUsuario from "./pages/atualizarPerfilUsuario";
import atualizarEstabelecimento from "./pages/atualizarPerfilEstabelecimento";
import DetalhesEstabelecimentoPages from "./pages/detalhesEstabelecimento/detalheEstabPage";
import atualizarEstabelecimentoDois from "./pages/atualizarPerfilEstabelecimento/atualizarCadastroDois";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={SiteInstitucional()} />
      <Route path="/cadastro" element={Cadastro()} />
      <Route path="/cadastro/estabelecimento/1" element={CadastroEstabelecimento1()} />
      <Route path="/cadastro/estabelecimento/2" element={CadastroEstabelecimento2()} />
      <Route path="/cadastro/estabelecimento/3" element={CadastroEstabelecimento3()} />
      <Route path="/cadastro/estabelecimento/4" element={CadastroEstabelecimento4()} />
      <Route path="/login" element={Login()} />
      <Route path="/perfil/usuario" element={perfilUsuario()} />
      <Route path="/perfil/estabelecimento" element={perfilEstabelecimento()} />
      <Route path="/detalhes/estabelecimento" element={DetalhesEstabelecimentoPages()} />
      <Route path="/perfil/usuario/atualizar" element={atualizarUsuario()} />
      <Route path="/perfil/estabelecimento/atualizar/1" element={atualizarEstabelecimento()} />
      <Route path="/perfil/estabelecimento/atualizar/2" element={atualizarEstabelecimentoDois()} />
      <Route path="/catalogo" element={Catalogo()} />
      <Route path="/reserva/nova/1" element={TelaReservaUm()} />
      <Route path="/reserva/nova/2" element={TelaReservaDois()} />
      <Route path="/reserva/nova/3" element={TelaReservaTres()} />
      <Route path="/reserva/bar" element={ListaReservaBarPages()} />
      <Route path="/reserva/cliente" element={ListaReservaClientePages()} />
    </Routes>
  );
}
export default Routers;