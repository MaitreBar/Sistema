import { Routes, Route } from "react-router-dom";

// Importação do institucional
import Institucional from "./pages/institucional/Institucional";

// Importação do login
import Login from "./pages/login/Login";

// Importacao do processo esqueci a senha/email
import IdentificacaoSenhaEmail from "./pages/identificacao/alterarEmailSenha/IdentificacaoEmailSenha";
import RecuperarSenha from "./pages/recuperacao/senha/RecuperarSenha";
import RecuperarEmail from "./pages/recuperacao/email/RecuperarEmail";

// Importação do processo de cadastro
import IdentificacaoCadastro from "./pages/identificacao/cadastro/IdentificacaoCadastro";
import CadastroCliente from "./pages/cadastroCliente/CadastroCliente";

import CadastroEstabelecimentoUm from "./pages/cadastroEstabelecimento/cadastroEstabelecimentoUm";
import CadastroEstabelecimentoDois from "./pages/cadastroEstabelecimento/cadastroEstabelecimentoDois";
import CadastroEstabelecimentoTres from "./pages/cadastroEstabelecimento/cadastroEstabelecimentoTres";
import CadastroEstabelecimentoQuatro from "./pages/cadastroEstabelecimento/cadastroEstabelecimentoQuatro";

// Importação do preocesso de atualização
import PerfilCliente from "./pages/perfis/cliente/PerfilCliente";
import AtualizarPerfilCliente from "./pages/atualizacaoCliente/AtualizacaoCliente";

import PerfilEstabelecimento from "./pages/perfis/estabelecimento/PerfilEstabelecimento";
import AtualizarPerfilEstabelecimentoUm from "./pages/atualizacaoEstabelecimento/AtualizacaoUm";
import AtualizarPerfilEstabelecimentoDois from "./pages/atualizacaoEstabelecimento/AtualizacaoDois";

// Importação do processo de reserva
import CatalogoEstabelecimento from "./pages/catalogoEstabelecimento/CatalogoEstabelecimento";
import DetalheEstabelecimento from "./pages/detalheEstabelecimento/DetalheEstabelecimento";
import ModalFila from "./pages/modais/modalFila/ModalFila";
import ModalVez from "./pages/modais/modalVez/ModalVez";

import ReservaUm from "./pages/reservas/reservaUm/ReservaUm";
import ReservaDois from "./pages/reservas/reservaDois/ReservaDois";
import ReservaTres from "./pages/reservas/reservaTres/ReservaTres";

// Importação do processo de ver listas de reserva
import ListaReservaCliente from "./pages/listaReserva/listaReservaCliente/ListaReservaCliente";
import ListaReservaEstabelecimento from "./pages/listaReserva/listaReservaEstabelecimento/ListaReservaEstabelecimento";

// Importação do processo de feedback
import Feedback from "./pages/feedback/Feedback";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={Institucional()} />
      <Route path="/login" element={Login()} />
      <Route path="/recuperar" element={IdentificacaoSenhaEmail()} />
      <Route path="/recuperar/senha" element={RecuperarSenha()} />
      <Route path="/recuperar/email" element={RecuperarEmail()} />
      <Route path="/cadastro" element={IdentificacaoCadastro()} />
      <Route path="/cadastro/cliente" element={CadastroCliente()} />
      <Route path="/cadastro/estabelecimento/um" element={CadastroEstabelecimentoUm()}/>
      <Route path="/cadastro/estabelecimento/dois" element={CadastroEstabelecimentoDois()}/>
      <Route path="/cadastro/estabelecimento/tres" element={CadastroEstabelecimentoTres()}/>
      <Route path="/cadastro/estabelecimento/quatro" element={CadastroEstabelecimentoQuatro()}/>
      <Route path="/perfil/cliente" element={PerfilCliente()} />
      <Route path="/perfil/cliente/atualizar" element={AtualizarPerfilCliente()}/>
      <Route path="/perfil/estabelecimento" element={PerfilEstabelecimento()} />
      <Route path="/perfil/estabelecimento/atualizar/um" element={AtualizarPerfilEstabelecimentoUm()}/>
      <Route path="/perfil/estabelecimento/atualizar/dois" element={AtualizarPerfilEstabelecimentoDois()}/>
      <Route path="/catalogo" element={CatalogoEstabelecimento()} />
      <Route path="/catalogo/detalhes" element={DetalheEstabelecimento()} />
      <Route path="/reserva/um" element={ReservaUm()} />
      <Route path="/reserva/dois" element={ReservaDois()} />
      <Route path="/reserva/tres" element={ReservaTres()} />
      <Route path="/reservas/cliente" element={ListaReservaCliente()} />
      <Route path="/reservas/estabelecimento" element={ListaReservaEstabelecimento()}/>
      <Route path="/reservas/cliente/feedback" element={Feedback()} />
    </Routes>
  );
}
export default Routers;
