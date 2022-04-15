import React, { useState } from "react";
import { Modal, Button } from "antd";

const OrdersModal = ({ isModalVisible, setIsModalVisible }) => {
  //   const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        title="Last step"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4>Congratulations!</h4>
          <h3>Your purchase succeed!!!</h3>
        </div>
      </Modal>
    </>
  );
};

export default OrdersModal;
