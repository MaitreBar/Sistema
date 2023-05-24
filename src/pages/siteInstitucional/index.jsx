
import Navb from "../../components/Institucional/navbar/Navbar";
import Home from "../../components/Institucional/home/Home";
import About from "../../components/Institucional/about/About";
import Historia from "../../components/Institucional/history/History";
import Equipe from "../../components/Institucional/team/Team";
import Footer from "../../components/Institucional/footer/Footer";

function SiteInstitucional() {
    return (
      <div>
        <div className="navbar"><Navb /></div>
        <div className="home"><Home /></div>
        <div className="about"><About /></div>
        <div className="historia"><Historia /></div>
        <div className="equipe"><Equipe /></div>
        <div className="footer"><Footer /></div>
      </div>
    );
}
export default SiteInstitucional;