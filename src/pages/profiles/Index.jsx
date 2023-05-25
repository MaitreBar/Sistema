import Navbar from "../../components/navbar";
import PerfilCliente from "../../components/profiles/ProfileClient";
import PerfilUsuario from "../../components/profiles/ProfileUser";

function perfilUsuario() {

  return (
    <div className="App">
      <Navbar/>
      <PerfilCliente></PerfilCliente>
      <PerfilUsuario></PerfilUsuario>
    </div>
  );
}

export default perfilUsuario;
