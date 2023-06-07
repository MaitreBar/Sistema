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
      <Route
        path="/login/identificacao-email-senha"
        element={IdentificacaoSenhaEmail()}
      />
      <Route
        path="/identificacao-email-senha/recuperacao-senha"
        element={RecuperarSenha()}
      />
      <Route
        path="/identificacao-email-senha/recuperacao-email"
        element={RecuperarEmail()}
      />
      <Route
        path="/login/identificacao-cadastro"
        element={IdentificacaoCadastro()}
      />
      <Route
        path="/identificacao-cadastro/cadastro-cliente"
        element={CadastroCliente()}
      />
      <Route
        path="/identificacao-cadastro/cadastro-estabelecimento-um"
        element={CadastroEstabelecimentoUm()}
      />
      <Route
        path="/identificacao-cadastro/cadastro-estabelecimento-dois"
        element={CadastroEstabelecimentoDois()}
      />
      <Route
        path="/identificacao-cadastro/cadastro-estabelecimento-tres"
        element={CadastroEstabelecimentoTres()}
      />
      <Route
        path="/identificacao-cadastro/cadastro-estabelecimento-quatro"
        element={CadastroEstabelecimentoQuatro()}
      />
      <Route path="/perfil-cliente" element={PerfilCliente()} />
      <Route
        path="/perfil-cliente/atualizar-perfil-cliente"
        element={AtualizarPerfilCliente()}
      />
      <Route path="/perfil-estabelecimento" element={PerfilEstabelecimento()} />
      <Route
        path="/perfil-estabelecimento/atualizar-perfil-estabelecimento-um"
        element={AtualizarPerfilEstabelecimentoUm()}
      />
      <Route
        path="/perfil-estabelecimento/atualizar-perfil-estabelecimento-dois"
        element={AtualizarPerfilEstabelecimentoDois()}
      />
      <Route
        path="/login/catalogo-estabelecimento"
        element={CatalogoEstabelecimento()}
      />
      <Route
        path="/catalogo-estabelecimento/detalhe-estabelecimento"
        element={DetalheEstabelecimento()}
      />
      <Route path="/detalhe-estabelecimento/modal-fila" element={ModalFila()} />
      <Route path="/detalhe-estabelecimento/modal-vez" element={ModalVez()} />
      <Route path="/detalhe-estabelecimento/reserva-um" element={ReservaUm()} />
      <Route
        path="/detalhe-estabelecimento/reserva-dois"
        element={ReservaDois()}
      />
      <Route
        path="/detalhe-estabelecimento/reserva-tres"
        element={ReservaTres()}
      />
      <Route
        path="/perfil-cliente/lista-reserva-cliente"
        element={ListaReservaCliente()}
      />
      <Route
        path="/perfil-estabelecimento/lista-reserva-estabelecimento"
        element={ListaReservaEstabelecimento()}
      />
      <Route path="/lista-reserva-cliente/feedback" element={Feedback()} />
    </Routes>
  );
}
export default Routers;