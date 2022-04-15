import React from "react";
import Carusel from "../../carusel/Carusel";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="caruselka-t">
      <div>
        <img
          style={{ width: "200px", margin: "30px" }}
          src="https://play.hbomax.com/assets/images/branding/desktop/hbomax/dt-hbomax-logo-in_app.svg"
          alt=""
        />
      </div>
      <div className="history-hbo">
        <Carusel />
      </div>
    </div>
  );
};

export default HomePage;
