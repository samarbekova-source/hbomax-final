import React, { useContext, useEffect, useState } from "react";

import { contextsMovie } from "../../context/contextsMovie";
import { useParams } from "react-router-dom";
import "./Details.css";
import { authContext } from "../../context/authContext";
import { Rate } from "antd";

const Details = () => {
  const { getOneMovie, oneMovie } = useContext(contextsMovie);
  const { currentUser } = useContext(authContext);
  const { updateRating } = useContext(contextsMovie);
  const [createRating, setCreateRating] = useState(null);
  const params = useParams();
  useEffect(() => {
    getOneMovie(params.id);
  }, []);
  console.log(oneMovie);
  function saveRaiting(id, newRating) {
    let rating = {
      rating: newRating,
      name: currentUser,
      id: Date.now(),
    };
    updateRating(id, rating);
    let userRatings = oneMovie.ratings.some(
      (item) => item.user === currentUser
    );
    if (userRatings) {
      let filteredRatings = oneMovie.ratings.filter((item) => {
        return item.user !== currentUser;
      });
      updateRating(params.id, filteredRatings);
    } else {
      let ratings = [...oneMovie.ratings, rating];
      updateRating(params.id, ratings);
    }
  }

  return oneMovie ? (
    <>
      <div className="container-details">
        <div className="container-details">
          <div>
            <img src={oneMovie.image1} width="70%" alt="" />
            <Rate
              className="star-ch"
              allowHalf
              defaultValue={2.5}
              onChange={(e) => saveRaiting(oneMovie.id, e)}
            />
          </div>

          <div>
            <h1 className="desc-ch-h1">{oneMovie.name}</h1>
            <p>{oneMovie.year} year</p>
            <h3 className="desc-ch-h3">{oneMovie.description}</h3>
          </div>
        </div>
      </div>
      <div>
        <video
          src={oneMovie.video}
          muted
          // autoPlay
          loop
          controls
          style={{ width: "90%", marginLeft: "50px", marginTop: "0px" }}
        ></video>
      </div>
    </>
  ) : (
    <span>Loading</span>
  );
};

export default Details;
