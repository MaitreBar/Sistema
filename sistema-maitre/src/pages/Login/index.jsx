import "./style.css";

import ImagemLateral from "./imagemLateralLogin";
import AreaLogin from "./areaLogin";
import Navbar from "../navbar";

function Login() {
    return (
      <div>
        <div className="cadastrese"><AreaLogin /></div>
        <div className="navbar"><Navbar /></div>
        <div className="banner"><ImagemLateral /></div>
      </div>
    );

//   return (
//     <div>
//       <div className="cadastrese">
//         <div className="inputs">
//           <p> inputs here</p>
//         </div>
//       </div>
//       <div className="banner">
//         <p>foto</p>
//       </div>
//     </div>
//   );
}

export default Login;
