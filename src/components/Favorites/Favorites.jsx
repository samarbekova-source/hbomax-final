import { Button, InputNumber, List } from "antd";
import React, { useContext, useEffect } from "react";
import "./Favorites.css";
import { favoritesContext } from "../../context/favoritesContext";

const Favorites = () => {
  const { getFavorite, favorite, deleteFromFavorite, changeProductCountFav } =
    useContext(favoritesContext);

  useEffect(() => {
    getFavorite();
  }, []);
  //   console.log(favorite);

  return (
    <div
      className="container"
      style={{
        width: "300px",
        display: "flex",
        padding: "20px",
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={favorite.movies}
        renderItem={(item) => (
          <List.Item
            extra={<img src={item.item.image1} alt="img" width={272} />}
          >
            <List.Item.Meta
              description={
                <>
                  {/* <div>{item.item.description}</div> */}

                  <Button
                    className="btn-x"
                    onClick={() => deleteFromFavorite(item.item.id)}
                  >
                    X
                  </Button>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default Favorites;
