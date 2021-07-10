import React,{useState} from "react";
import "./Navbar.scss";
import "../Switch/Switch.scss";
import Switch from '../Switch/Switch'

import { Link, NavLink } from "react-router-dom";

function Navbar(){
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
    <div className="navbar">
      <div className="logo">
      <Link to="" className="navbar-logo" onClick={closeMobileMenu}>Mohammed Qureshi</Link>
      </div>
      <div className="menu">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-links"
                  exact={true}
                  activeClassName="is-active"
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/experience"
                  className="nav-links"
                  activeClassName="is-active"
                  onClick={closeMobileMenu}
                >
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className="nav-links"
                  activeClassName="is-active"
                  onClick={closeMobileMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-links"
                  activeClassName="is-active"
                  onClick={closeMobileMenu}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
        <Switch />
        <div className="menu-icon" onClick={clickHandler}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
    </div>
  )
}

export default Navbar