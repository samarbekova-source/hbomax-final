import React, { useContext, useEffect } from "react";
import { contextsMovie } from "../../context/contextsMovie";
import ProductCard from "../ProductCard/ProductCard";
import "./AddList.css";

const AddList = () => {
  const { movie, getMovie } = useContext(contextsMovie);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="add-card-t">
      {movie.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AddList;
