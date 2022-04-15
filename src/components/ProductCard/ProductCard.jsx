import {
  ShoppingOutlined,
  HeartOutlined,
  MoreOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

import React, { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { favoritesContext } from "../../context/favoritesContext";
import { Card } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { contextsMovie } from "../../context/contextsMovie";
import "./ProductCard.css";
const { Meta } = Card;

const contentStyle = {
  width: "100%",
  // height: "540px",
  // height: "100%",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "5%",
  // marginBottom: "1rem",
};

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const { addProductToFavorite, checkItemInFavorite } =
    useContext(favoritesContext);
  const [checkItem2, setCheckItem2] = useState(checkItemInFavorite(item.id));
  const { deleteMovie } = useContext(contextsMovie);
  const navigate = useNavigate();
  return (
    <div className="card-tt">
      <Card
        hoverable
        style={{
          width: "20vw",
          margin: "5px ",
          borderRadius: "1rem",
          background: "black",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridColumnGap: "1rem",

          // gridRowGap: "2rem",
        }}
        cover={
          <div className="img-ch" style={{ borderRadius: "10%" }}>
            <img className="img-ch" style={contentStyle} src={item.image1} />
          </div>
        }
      />
      <Meta
        style={{
          marginTop: "5px",
          textAlign: "center",
          color: "rgb(221, 212, 212);",
        }}
        title={
          <>
            <h4 style={{ color: "white" }}>{item.name}</h4>
          </>
        }
      />
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

        <FileSearchOutlined
          onClick={() => navigate(`/details/${item.id}`)}
          className="icons-ch"
          style={{
            margin: "10px",
            fontSize: "25px",
            color: checkItem ? "white" : "grey",
          }}
        />
      </div>

      {/* <div className="desc-t">
        <Link to={`/edit/${item.id}`}>
          <button>Edit</button>
        </Link>
        <button>mov</button>
        <button onClick={() => deleteMovie(item.id)}>Delete</button>
      </div> */}
      <Card />
    </div>
  );
};

export default ProductCard;
