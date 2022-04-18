import React from "react";
import Carusel from "../../carusel/Carusel";
import Cinematica from "../Cinematica/Cinematica";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="caruselka-t">
      <Cinematica />
      <div className="history-hbo">
        <Carusel />
      </div>
    </div>
  );
};

export default HomePage;
