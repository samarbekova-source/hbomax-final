import React, { useContext, useEffect } from "react";
import StartRating from "../StarRating/StartRating";
import { contextsMovie } from "../../context/contextsMovie";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { getOneMovie, oneMovie } = useContext(contextsMovie);
  const params = useParams();
  useEffect(() => {
    getOneMovie(params.id);
  }, []);
  console.log(oneMovie);

  return oneMovie ? (
    <>
      <div className="container-details">
        <div>
          <img src={oneMovie.image1} width="70%" alt="" />
          <div className="star-ch">
            <StartRating />
          </div>
        </div>

        <div>
          <h1 className="desc-ch-h1">{oneMovie.name}</h1>
          <p>{oneMovie.year} year</p>
          <h3 className="desc-ch-h3">{oneMovie.description}</h3>
        </div>
      </div>
      <div>
        <video
          src={oneMovie.video}
          muted
          autoPlay
          loop
          style={{ width: "90%", marginLeft: "50px", marginTop: "0px" }}
        ></video>
      </div>
    </>
  ) : (
    <span>Loading</span>
  );
};

export default Details;
