import { Link } from "react-router-dom";
import "./style.css"

function Navbar(){
return(
    <nav className="navbar">
    <ul className=" row navbar-menu">
      <li className="col-6 col-lg-6 navbar-item">
        <Link to={`/`} className=" navbar-link">
          <i className="fa fa-home" />
        </Link>
      </li>

      <li className="col-6 col-lg-6 navbar-item ">
        <div className="navbar-link">
          <i className="fa fa-tag" /> Tags
        </div>
      </li>
    </ul>
  </nav>
);
}

export default Navbar;