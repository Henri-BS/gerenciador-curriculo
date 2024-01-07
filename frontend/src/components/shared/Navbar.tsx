import { Link } from "react-router-dom";
import "./assets/css/navbar.css";

function Navbar(){
return(
    <nav className="navbar">
    <ul className=" row navbar-menu">
      <li className=" navbar-item">
        <Link to={`/`} className="navbar-link">
          <i className="fa fa-home" /> Início
        </Link>
      </li>

      <li className="col-6 col-lg-2 navbar-item ">
        <div className="navbar-link">
          <i className="fa fa-tag" /> Tags
        </div>
      </li>
    </ul>
  </nav>
);
}

export default Navbar;