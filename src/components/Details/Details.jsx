import React, { useContext, useEffect, useState } from "react";

import { contextsMovie } from "../../context/contextsMovie";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { Badge, List, message, Rate } from "antd";
import { chatContext } from "../../context/chatContext";
import { LikeOutlined } from "@ant-design/icons";

const Details = () => {
  const { getOneMovie, oneMovie, editOneCommit, item, editOneLike } =
    useContext(contextsMovie);
  const { currentUser } = useContext(chatContext);
  const { updateRating } = useContext(contextsMovie);
  const [createRating, setCreateRating] = useState(null);
  const [userCommit, setUserCommit] = useState({ comment: "" });
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
  function addCommit(newCommit) {
    let newCom = {
      ...newCommit,
      user: currentUser,
      id: Date.now(),
    };

    let news = [...oneMovie.comments, newCom];
    currentUser
      ? editOneCommit(params.id, news)
      : setTimeout(() =>
          message.warning(
            "Чтобы оставить комментарий нужно зарегистрироваться!"
          )
        );

    setUserCommit("");
  }
  // function saveLikes(newLike) {
  //   let like = {
  //     user: currentUser,
  //     id: Date.now(),
  //   };
  //   let userLikes = oneMovie.likes.some((item) => item.user === currentUser);
  //   if (userLikes) {
  //     let filteredLikes = oneMovie.likes.filter((item) => {
  //       return item.user !== currentUser;
  //     });
  //     updateLikes(params.id, filteredLikes);
  //   } else {
  //     let likes = [...oneProduct.likes, like];
  //     updateLikes(params.id, likes);
  //   }
  // }

  function saveLikes() {
    let like = {
      user: currentUser,
      id: Date.now(),
    };
    let userLikes = oneMovie.likes.some((elem) => elem.user === currentUser);

    if (userLikes) {
      let filteredLikes = oneMovie.likes.filter((item) => {
        return item.user !== currentUser;
      });
      editOneLike(params.id, filteredLikes);
    } else {
      let likes = [...oneMovie.likes, like];
      editOneLike(params.id, likes);
    }
  }

  return oneMovie ? (
    <>
      <div className="container-details">
        <div className="container-details">
          <div className="img-kino">
            <img src={oneMovie.image1} width="90%" alt="" />
            <Rate
              className="star-ch"
              allowHalf
              defaultValue={2.5}
              onChange={(e) => saveRaiting(oneMovie.id, e)}
            />
          </div>

          <div className="kino-desc">
            <h1 className="desc-ch-h1">{oneMovie.name}</h1>
            <p>{oneMovie.year} year</p>
            <h3 className="desc-ch-h3">{oneMovie.description}</h3>
            {/* {currentUser ? (
              <>
                <LikeOutlined
                  onClick={() => saveLikes()}
                  style={{ fontSize: "40px" }}
                />
                <span>{oneMovie.likes.length}</span>{" "}
              </>
            ) : (
              <Link to="/auth">
                <LikeOutlined
                  onClick={() => saveLikes()}
                  style={{ fontSize: "40px", textAlign: "left" }}
                />
              </Link>
            )} */}
            <Badge count={oneMovie.likes.length}>
              <LikeOutlined
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  currentUser
                    ? saveLikes()
                    : setTimeout(() =>
                        message.warning("Вам надо зарегистрироваться!")
                      )
                }
              />
            </Badge>
          </div>

          <div className="comment-cont">
            <div>
              <div className="div-block-com">
                <List
                  dataSource={oneMovie.comments}
                  renderItem={(item) => (
                    <div className="div-commit">
                      <span style={{ color: "grey" }}> {item.user.email}</span>:{" "}
                      <p style={{ color: "white" }}>{item.comment}</p>
                    </div>
                  )}
                />
              </div>
            </div>
            <input
              value={userCommit.comment}
              name="comment"
              onChange={(e) =>
                setUserCommit({
                  ...userCommit,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <button onClick={() => addCommit(userCommit)}>save</button>
          </div>
        </div>
      </div>

      <div className="kino-t">
        <video
          src={oneMovie.video}
          muted
          loop
          controls
          style={{ width: "100%" }}
        ></video>
      </div>
    </>
  ) : (
    <span>Loading</span>
  );
};

export default Details;
