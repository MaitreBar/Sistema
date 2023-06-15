import Navbar from "../../components/institucional/navbar/Navbar";
import Home from "../../components/institucional/home/Home";
import About from "../../components/institucional/about/About";
import Historia from "../../components/institucional/history/History";
import Equipe from "../../components/institucional/team/Team";
import Footer from "../../components/institucional/footer/Footer";
import VLibras from "@djpfs/react-vlibras";
function Institucional() {
  return (
    <div>
      <VLibras />
      <Navbar />
      <Home />
      <About />
      <Historia />
      <Equipe />
      <Footer />
    </div>
  );
}
export default Institucional;
