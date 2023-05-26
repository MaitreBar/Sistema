import Navbar from "../../components/navbar";
import PerfilCliente from "../../components/profiles/ProfileClient";
import PerfilUsuario from "../../components/profiles/ProfileUser";
import { useLocation } from "react-router";

function perfilUsuario() {
  const { state: usuarioLogado } = useLocation();

  return (
    <div className="App">
      <Navbar usuarioLogado={usuarioLogado}/>
      <PerfilCliente usuarioLogado={usuarioLogado}/>
      <PerfilUsuario usuarioLogado={usuarioLogado}/>
    </div>
  );
}

export default perfilUsuario;
