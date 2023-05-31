import NavbarLogadaPerfil from "./navbarPerfil/navbarPerfil";
import NavbarDeslogada from "./navbarDeslogada";

function Navbar() {

  if (sessionStorage.length === 0) {
    return <NavbarDeslogada />;
  } else {
    return <NavbarLogadaPerfil />;
  }
}

export default Navbar;
