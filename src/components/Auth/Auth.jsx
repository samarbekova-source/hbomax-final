import { Form, Input, Button, Row, Col, Alert } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { chatContext } from "../../context/chatContext";

const Auth = () => {
  const { handleLogin, handleSignUp, error, login } = useContext(chatContext);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const navigate = useNavigate();
  function validatePassword(rule, value, callback) {
    let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    if (regex.test(value)) {
      callback();
    } else {
      callback(
        "Пароль должен содержать как минимум одну цифру, одну строчную, одну прописную, 8 из указанных символов."
      );
    }
  }
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { email, password } = values;
    if (isLoginForm) {
      handleLogin(email, password, navigate);
    } else {
      handleSignUp(email, password, navigate);
    }
  };

  function handlesLogin() {
    login(navigate);
  }

  return (
    <Row className="row">
      <Col span={24}>
        {error ? <Alert description={error} type="error" /> : null}
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите ваше имя пользователя!",
              },
              {
                type: "email",
                message: "Недействительный адрес электронной почты!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите Ваш пароль!",
              },
              {
                validator: validatePassword,
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isLoginForm ? "Log in" : "Sign in"}
            </Button>
            <br />
            {isLoginForm ? (
              <>
                Or
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setIsLoginForm(false)}
                >
                  Register now!
                </span>
              </>
            ) : (
              <>
                Have an account?
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setIsLoginForm(true)}
                >
                  Log in
                </span>
              </>
            )}
          </Form.Item>
          <div className="div-google">
            <Button
              type="primary"
              onClick={handlesLogin}
              style={{ cursor: "pointer" }}
            >
              Enter with GOOGLE
            </Button>
            <GoogleOutlined className="google" />
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Auth;
