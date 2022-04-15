import {
  BankOutlined,
  IdcardOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import Cards from "react-credit-cards";
import { Button } from "antd";
import { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import "../Orders/Orders.css";
import OrdersModal from "./OrdersModal";
import "react-credit-cards/es/styles-compiled.css";

const Orders = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="coniatner-main">
        <div className="order-form">
          <h2>Order form</h2>
          <div className="bills">
            <UserOutlined />
            <p>Full name</p>
          </div>
          <Input
            className="order-input"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Name and Surname"
          ></Input>

          <div className="bills">
            <MailOutlined />
            <p> Email</p>
          </div>
          <Input
            className="order-input"
            type="text"
            id="email"
            name="email"
            placeholder="example@example.com"
          ></Input>
          <div className="bills">
            <IdcardOutlined />
            <p>Address</p>
          </div>
          <Input
            className="order-input"
            type="text"
            id="address"
            name="address"
            placeholder="Adress"
          ></Input>
          <div className="bills">
            <BankOutlined />
            <p>City</p>
          </div>
          <Input
            className="order-input"
            type="text"
            id="city"
            name="city"
            placeholder="City"
          ></Input>
          <div className="bills">
            <p>Zip</p>
          </div>
          <Input
            className="order-input"
            type="text"
            id="zip"
            name="zip"
            placeholder="000000"
          ></Input>
        </div>

        <div className="payment-form">
          <h2>Payment</h2>
          <Cards
            cvc={data.cvc}
            expiry={data.expiry}
            focus={data.focus}
            name={data.name}
            number={data.number}
          />
          <form action="">
            <Input
              className="payment-input"
              type="number"
              name="cvc"
              placeholder="CVC"
              onChange={handleInputChange}
            />

            <Input
              className="payment-input"
              type="date"
              name="expiry"
              placeholder="Expire Date"
              onChange={handleInputChange}
            />
            <Input
              className="payment-input"
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleInputChange}
            />
            <Input
              className="payment-input"
              type="number"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
            />
            <Button
              className="payment-btn"
              onClick={() => setIsModalVisible(true)}
            >
              ORDER
            </Button>
          </form>
        </div>
      </div>
      <OrdersModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default Orders;
