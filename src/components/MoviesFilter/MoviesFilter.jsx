import React from "react";
import { Link } from "react-router-dom";
import "./MoviesFilter.css";

const MoviesFilter = () => {
  return (
    <div className="movies-filter-container">
      <Link to="/all">
        {" "}
        <button className="btn-filter-tt">All</button>
      </Link>

      <Link to="/fantasy">
        <button className="btn-filter-tt">Fantasy</button>
      </Link>
      <Link to="/comedy">
        <button className="btn-filter-tt">Comedy</button>
      </Link>
      <Link to="/action">
        <button className="btn-filter-tt">Action</button>
      </Link>
    </div>
  );
};

export default MoviesFilter;
