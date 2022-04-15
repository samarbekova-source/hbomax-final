import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/cartContext";
import { Button, List } from "antd";
import "./Cart.css";

const Cart = () => {
  const { getCart, cart, deleteFromCart } = useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <div id="container-t">
      <div
        style={{
          width: "300px",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "space-around",
        }}
      >
        <List
          style={{}}
          className="container-t-t"
          itemLayout="horizontal"
          dataSource={cart.movies}
          renderItem={(item) => (
            <List.Item
              extra={<img src={item.item.image1} alt="img" width={272} />}
            >
              <List.Item.Meta
                description={
                  <>
                    <div className="btn-cart">
                      <Button
                        className="btn-t-a"
                        onClick={() => deleteFromCart(item.item.id)}
                      >
                        Del movie
                      </Button>
                      <Button className="btn-t-a">Buy</Button>
                    </div>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Cart;
