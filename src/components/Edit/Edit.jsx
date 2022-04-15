import { Button, Form, Input, Spin } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contextsMovie } from "../../context/contextsMovie";

const Edit = () => {
  const { getOneMovie, upDataMovie, oneMovie } = useContext(contextsMovie);
  const params = useParams();
  const navigate = useNavigate();
  const [edit, setEdit] = useState("");

  useEffect(() => {
    getOneMovie(params.id);
  }, []);

  useEffect(() => {
    setEdit(oneMovie);
  }, [oneMovie]);

  function handleValue(e) {
    let edited = {
      ...edit,
      [e.target.name]: e.target.value,
    };
    setEdit(edited);
  }

  function save() {
    upDataMovie(params.id, edit);
    navigate("/action");
  }

  return edit ? (
    <div>
      <Input
        type="text"
        value={edit.name}
        name="name"
        onChange={handleValue}
        placeholder="Name"
      />
      <Input
        type="text"
        value={edit.description}
        name="description"
        onChange={handleValue}
        placeholder="Descripion"
      />
      <Input type="text" value={edit.year} name="year" onChange={handleValue} />
      <Input
        type="text"
        value={edit.image1}
        name="image1"
        onChange={handleValue}
        placeholder="Image"
      />
      <Input
        type="text"
        value={edit.video}
        name="video"
        onChange={handleValue}
        placeholder="Video"
      />
      <Input
        type="number"
        value={edit.price}
        name="price"
        onChange={handleValue}
        placeholder="Price"
      />
      <Input
        type="text"
        value={edit.type}
        name="type"
        onChange={handleValue}
        placeholder="Type"
      />
      <Button onClick={save}>Save</Button>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Edit;
