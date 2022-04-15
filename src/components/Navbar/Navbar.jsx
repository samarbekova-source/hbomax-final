import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <Link to="/">
          <img
            style={{ width: "200px", margin: "30px" }}
            src="https://play.hbomax.com/assets/images/branding/desktop/hbomax/dt-hbomax-logo-in_app.svg"
            alt=""
          />
        </Link>
      </a>
      <ul id="ul-t" className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <Link to="/action"> Action</Link>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <Link to="/fantasy">Fantasy</Link>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <Link to="/comedy"> Comedy</Link>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <Link to="/favorites">Favorites</Link>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <Link to="/cart">cart</Link>
          </a>
        </li>
      </ul>
      <div style={{ width: "10%" }}>
        <button></button>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
