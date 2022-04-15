import React, { useState } from "react";
import {
  IoMdChatboxes,
  IoMdClose,
  IoMdHome,
  IoMdImage,
  IoMdMenu,
  IoMdPerson,
  IoMdCart,
  IoMdTv,
  IoMdVideocam,
} from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  const activateNav = () => {
    setActive(!active);
  };

  return (
    <div className={active ? "header" : "header-mobile"}>
      <div className="menu-icon" onClick={activateNav}>
        {!active ? (
          <IoMdMenu className="menu" />
        ) : (
          <IoMdClose className="menu" />
        )}
      </div>

      <nav>
        <ul className={active ? "ul-item" : "ul-item oicon"}>
          <li>
            <IoMdHome className="icon" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <IoMdTv className="icon" />
            <Link to="/fantasy">Fantasy</Link>
          </li>
          <li>
            <IoMdTv className="icon" />

            <Link to="/action">Comedy</Link>
          </li>
          <li>
            <IoMdTv className="icon" />

            <Link to="/action">Action</Link>
          </li>
          <li>
            <IoMdImage className="icon" />
            <Link to="/add">add</Link>
          </li>
          <li>
            <MdFavoriteBorder className="icon" />
            <Link to="/favorites">Favorites</Link>
          </li>

          <li>
            <IoMdCart className="icon" />
            <Link to="/cart">cart</Link>
          </li>
          <li>
            <FaMoneyCheck className="icon" />
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
