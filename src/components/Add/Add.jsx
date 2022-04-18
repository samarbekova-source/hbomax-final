import React, { useContext, useState } from "react";
import { Form, Input, Button, Modal, message } from "antd";
import "./Add.css";
import { contextsMovie } from "../../context/contextsMovie";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Add = () => {
  const { handleAddWatch } = useContext(contextsMovie);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [image1, setImage1] = useState("");
  const [video, setVideo] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const onFinish = (values) => {
    console.log(values);
  };

  function addWatch() {
    if (!image1 || !type || !name || !description || !year || !video) {
      return setTimeout(() => {
        message.error("Fill in all the fields!");
      }, 500);
    }
    let newWatch = {
      image1,
      name,
      year,
      description,
      video,
      price,
      type,
    };
    handleAddWatch(newWatch);
    handleOk();
    setImage1("");
    setName("");
    setPrice("");
    setDescription("");
    setType("");
    setPrice("");
    setYear("");
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <div className="Addmovie">
      <Button type="primary" onClick={showModal}>

        Add movie
      
      </Button>
      <Modal
        title="new movie"
        visible={isModalVisible}
        onOk={addWatch}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item label="name">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Description">
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Year">
            <Input value={year} onChange={(e) => setYear(e.target.value)} />
          </Form.Item>
          <Form.Item label="image">
            <Input value={image1} onChange={(e) => setImage1(e.target.value)} />
          </Form.Item>
          <Form.Item label="video">
            <Input value={video} onChange={(e) => setVideo(e.target.value)} />
          </Form.Item>

          <Form.Item label="Price">
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Type">
            <Input value={type} onChange={(e) => setType(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Add;
