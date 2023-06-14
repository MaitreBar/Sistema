import Login from "../../components/login/Login";
import NavbarDeslogada from "../../components/navbar/NavbarDeslogada";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarDeslogada></NavbarDeslogada>
      <Login></Login>
    </div>
  );
}
export default Index;
