import React, { useContext, useState } from "react";
// import { authContext } from "../../context/authContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import { Avatar, Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { chatContext } from "../../context/chatContext";
import "./Chat.css";

const { TextArea } = Input;

const Chat = () => {
  const { auth, firestore } = useContext(chatContext);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  console.log(user);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  console.log(messages);

  if (loading) {
    return (
      <div className="container-spinner">
        <Spin indicator={antIcon} />
      </div>
    );
  }
  return (
    <div>
      <div className="container-kg">
        <div className="container-kg-message">
          {messages.map((message) => (
            <div
              style={{
                margin: 10,
                border:
                  user.uid === message.uid
                    ? "2px solid yellow"
                    : "2px solid blue",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 5,
                background: "grey",
                borderRadius: "15px",
              }}
            >
              <div>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </div>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <div className="container-chat">
          <input
            className="inp-massage"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="massage"
            autoSize={{ minRows: 2, maxRows: 2 }}
          />
          <button className="btn-send" type="primary" onClick={sendMessage}>
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
