import React from "react";
import "./AddCard.css";
const AddCard = ({ item }) => {
  return (
    <div className="card-t">
      <img
        style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        src={item.image1}
        alt="image"
      />
    </div>
  );
};

export default AddCard;
