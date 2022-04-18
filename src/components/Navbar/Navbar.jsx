import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { authContext } from "../../context/authContext";

import {
  DesktopOutlined,
  HeartOutlined,
  ShoppingOutlined,
  MehOutlined,
} from "@ant-design/icons";
import { authContext } from "../../context/authContext";
import { contextsMovie } from "../../context/contextsMovie";

import "./Navbar.css";

function Navbar({ userImage }) {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const { currentUser, handleLogOut } = useContext(authContext);
  const navigate = useNavigate();
  const { getMovie } = useContext(contextsMovie);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSerach] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getMovie();
  }, []);
  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);
  useEffect(() => {
    getMovie();
  }, [searchParams]);

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
            style={{ width: "70%", margin: " 0  5%" }}
            src="https://play.hbomax.com/assets/images/branding/desktop/hbomax/dt-hbomax-logo-in_app.svg"
            alt=""
          />
        </Link>
      </a>
      <ul id="ul-t" className={active}>
        <li className="nav__item">
          <Link to="/all">
            <a href="#" className="nav__link">
              <DesktopOutlined className="icon-antd" />{" "}
              <h1 style={{ color: "white", marginTop: "15px" }}>TV</h1>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/favorites">
            <a href="#" className="nav__link">
              <HeartOutlined className="icon-antd" />
              <h1 style={{ color: "white", marginTop: "15px" }}>Favorites</h1>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/cart">
            <a href="#" className="nav__link">
              <ShoppingOutlined className="icon-antd" />
              <h1 style={{ color: "white", marginTop: "15px" }}>Cart</h1>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <input
              className="input-search"
              value={search}
              onChange={(e) => setSerach(e.target.value)}
              type="text"
              placeholder="search"
            />
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link">
            <Link to="/admin">
              <MehOutlined
                style={{ color: "white", marginTop: "10px" }}
                className="icon-antd"
              />
            </Link>
          </a>
        </li>
      </ul>

      <div className="user-main">
        <div className="user">
          {currentUser ? (
            <span className="user-email">

              <LogoutOutlined
                className="icon-antd"
                style={{ color: "white", marginLeft: "150px" }}
                onClick={handleLogOut}
              />
              <img src={userImage} onClick={handleLogOut} />

              <h4 className="user-name">{currentUser}</h4>
              <LogoutOutlined className="icon-antd" onClick={handleLogOut} />

            </span>
          ) : (
            <UserOutlined
              className="icon-antd"
              style={{ color: "white", marginLeft: "150px" }}
              onClick={() => navigate("/auth")}
            />
          )}
        </div>
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
