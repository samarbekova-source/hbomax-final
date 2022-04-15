import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

const StartRating = () => {
  const [rating, setRating] = useState(null);
  return (
    <>
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar className="star" size={100} />
            </label>
          );
        })}
      </div>
    </>
  );
};

export default StartRating;
