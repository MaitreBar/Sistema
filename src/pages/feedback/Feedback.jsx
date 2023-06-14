import NavbarLogada from "../../components/navbar/NavbarLogada";
import Feedback from "../../components/feedback/Feedback";
import VLibras from "@djpfs/react-vlibras";
function Index() {
  return (
    <div>
      <VLibras forceOnload={true} />
      <NavbarLogada />
      <Feedback />
    </div>
  );
}
export default Index;
