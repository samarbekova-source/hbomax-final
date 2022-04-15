import React from "react";
import { Link } from "react-router-dom";
import "./MoviesFilter.css";

const MoviesFilter = () => {
  return (
    <div className="movies-filter-container">
      <Link to="/all">
        {" "}
        <button>All</button>
      </Link>

      <Link to="/fantasy">
        <button>Fantasy</button>
      </Link>
      <Link to="/comedy">
        <button>Comedy</button>
      </Link>
      <Link to="/action">
        <button>Action</button>
      </Link>
    </div>
  );
};

export default MoviesFilter;
