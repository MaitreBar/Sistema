
import Navbar from "../../components/Institucional/navbar/Navbar";
import Home from "../../components/Institucional/home/Home";
import About from "../../components/Institucional/about/About";
import Historia from "../../components/Institucional/history/History";
import Equipe from "../../components/Institucional/team/Team";
import Footer from "../../components/Institucional/footer/Footer";

function SiteInstitucional() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Historia/>
        <Equipe/>
        <Footer/>
      </div>
    );
}
export default SiteInstitucional;