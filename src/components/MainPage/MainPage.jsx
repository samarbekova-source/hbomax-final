import React from "react";
import "./MainPage.css";
import harry from "../MainPage/assets/harry.jpeg";
import action from "../MainPage/assets/action.jpeg";
import romantic from "../MainPage/assets/romantic.jpeg";
import blacklady from "../MainPage/assets/blacklady.jpeg";
import night from "../MainPage/assets/night.jpeg";
import tokyo from "../MainPage/assets/tokyo.jpeg";
import trinity from "../MainPage/assets/trinity.jpeg";
import close from "../MainPage/assets/close.jpeg";
import harry8 from "../MainPage/assets/harry8.jpeg";
import dunc from "../MainPage/assets/dunc.jpeg";
import eyes from "../MainPage/assets/eyes.jpeg";
import moonshoot from "../MainPage/assets/moonshoot.jpeg";
import tony from "../MainPage/assets/tony.jpeg";
import death from "../MainPage/assets/death.jpeg";
import euphoria from "../MainPage/assets/euphoria.jpeg";
import batman from "../MainPage/assets/batman.jpeg";
import beast from "../MainPage/assets/beast.jpeg";
import lord from "../MainPage/assets/lord.jpeg";
import king from "../MainPage/assets/king.jpeg";
import halloween from "../MainPage/assets/halloween.jpeg";
import shrek from "../MainPage/assets/shrek.jpeg";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

const MainPage = () => {
  return (
    <div className="wrapper">
      <HomePage />

      <div className="container-ch">
        <div>
          <h1 id="h1-t">Explore Collections</h1>
        </div>
        <div className="main-explore">
          <div className="imgs">
            <Link to="/fantasy">
              <img src={harry} alt="" />
            </Link>
            <div>
              <h1 className="filter-third">FANTASY</h1>
            </div>
          </div>

          <div className="imgs">
            <Link to="/comedy">
              <img src={romantic} alt="" />
            </Link>
            <div>
              <h1 className="filter-third">ROMANTIC</h1>
            </div>
          </div>
          <div className="imgs">
            <Link to="/action">
              <img src={action} alt="" />
            </Link>
            <div>
              <h1 className="filter-third">ACTION</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="main-popular">
        <div>
          <h1 id="h1-t">Popular Searches</h1>
        </div>
        <div className="div-imgsa">
          <div className="imgsa">
            <img src={blacklady} alt="" />
          </div>
          <div className="imgsa">
            <img src={night} alt="" />
          </div>
          <div className="imgsa">
            <img src={tokyo} alt="" />
          </div>
          <div className="imgsa">
            <img src={trinity} alt="" />
          </div>
          <div className="imgsa">
            <img src={close} alt="" />
          </div>
          <div className="imgsa">
            <img src={harry8} alt="" />
          </div>
        </div>
        <div className="div-imgsa">
          <div className="imgsa">
            <img src={dunc} alt="" />
          </div>
          <div className="imgsa">
            <img src={eyes} alt="" />
          </div>

          <div className="imgsa">
            <img src={moonshoot} alt="" />
          </div>

          <div className="imgsa">
            <img src={tony} alt="" />
          </div>
          <div className="imgsa">
            <img src={death} alt="" />
          </div>
          <div className="imgsa">
            <img src={euphoria} alt="" />
          </div>
        </div>
        <div className="div-imgsa">
          <div className="imgsa">
            <img src={batman} alt="" />
          </div>
          <div className="imgsa">
            <img src={beast} alt="" />
          </div>
          <div className="imgsa">
            <img src={lord} alt="" />
          </div>
          <div className="imgsa">
            <img src={king} alt="" />
          </div>
          <div className="imgsa">
            <img src={halloween} alt="" />
          </div>
          <div className="imgsa">
            <img src={shrek} alt="" />
          </div>
        </div>
        {/* <input type="file" />
        <input type="file" name="" id="" />
        hey there надо добавить c video src url с back*/}
      </div>
    </div>
  );
};

export default MainPage;
