import {
  ShoppingOutlined,
  HeartOutlined,
  MoreOutlined,
  FileSearchOutlined,
  FireOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import React, { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { favoritesContext } from "../../context/favoritesContext";
import { Button, Card } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { contextsMovie } from "../../context/contextsMovie";
import "./ProductCard.css";
import { chatContext } from "../../context/chatContext";
import { ADMIN_EMAIL } from "../../helpers/const";
const { Meta } = Card;

const contentStyle = {
  width: "100%",
  // height: "540px",
  // height: "100%",
  // color: "#fff",
  textAlign: "center",
  // background: "#364d79",
  // borderRadius: "5%",
  // marginBottom: "1rem",
};

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const { addProductToFavorite, checkItemInFavorite } =
    useContext(favoritesContext);
  const [checkItem2, setCheckItem2] = useState(checkItemInFavorite(item.id));
  const { upDataMovie, deleteMovie } = useContext(contextsMovie);
  const { currentUser } = useContext(chatContext);
  const navigate = useNavigate();
  return (
    <section>
      <div className="card-container-t">
        <div className="card-box-t">
          <div className="card-tt" sx={{ border: "none" }}>
            <Card
              // hoverable
              style={{
                // border: 0,
                width: "200px",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gridColumnGap: "1rem",
                gridRowGap: "0px",

                // border,
              }}
              cover={
                <div className="img-ch">
                  <img
                    className="img-ch"
                    style={contentStyle}
                    src={item.image1}
                  />
                </div>
              }
            />

            {/* <Card /> */}
          </div>
          <div className="content-bx">
            <div>
              <h1>{item.name}</h1>
              <h4>{item.description}</h4>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <HeartOutlined
                className="icons-ch"
                onClick={() => {
                  addProductToFavorite(item);
                  setCheckItem2(checkItemInFavorite(item.id));
                }}
                style={{
                  margin: "10px",
                  fontSize: "25px",
                  color: checkItem2 ? "white" : "grey",
                }}
              />
              <ShoppingOutlined
                className="icons-ch"
                onClick={() => {
                  addProductToCart(item);
                  setCheckItem(checkItemInCart(item.id));
                }}
                style={{
                  margin: "10px",
                  fontSize: "25px",
                  color: checkItem ? "white" : "grey",
                }}
              />
              {/* <Link key="file" to={`/details/${item.id}`}> */}
              <VideoCameraOutlined
                onClick={() => navigate(`/details/${item.id}`)}
                className="icons-ch"
                style={{
                  margin: "10px",
                  fontSize: "25px",
                  color: checkItem ? "white" : "grey",
                }}
              />
            </div>

            {currentUser === ADMIN_EMAIL ? (
              <div>
                <Link to={`/edit/${item.id}`}>
                  <button
                    className="btn-crud"
                    onClick={() => upDataMovie(item.id)}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className="btn-crud"
                  onClick={() => deleteMovie(item.id)}
                >
                  Delete
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
//
export default ProductCard;
<FireOutlined />;
