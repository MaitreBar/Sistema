import "./style.css";
import AreaLogin from "./areaLogin";
import Navbar from "../navbar";
import Background from "../Background";

function Login() {
    return (
      <div>
        
        <div className="background"><Background/></div>
        <div className="navbar"><Navbar /></div>
        <div className="areaLogin"><AreaLogin/></div>
      </div>
    );
}

export default Login;
