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
      callback("Error");
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
    <div className="auth-container">
      <Row className="row">
        <Col span={24}>
          {error ? <Alert description={error} type="error" /> : null}
          <Form
            className="login-form"
            name="normal_login"
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
                  message: "Please enter your username!",
                },
                {
                  type: "email",
                  message: "Inncorrect email!",
                },
              ]}
            >
              <Input
                style={{ borderRadius: "12px", height: "40px" }}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="  Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
                {
                  validator: validatePassword,
                },
              ]}
            >
              <Input
                style={{ borderRadius: "12px", height: "40px" }}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="  Password"
              />
            </Form.Item>

            <Form.Item>
              <Button id="login-button" type="primary" htmlType="submit">
                {isLoginForm ? "Log in" : "Sign up"}
              </Button>
              <br />
              {isLoginForm ? (
                <>
                  Or
                  <span
                    style={{
                      color: "white",
                      cursor: "pointer",
                      fontWeight: "bolder",
                    }}
                    onClick={() => setIsLoginForm(false)}
                  >
                    Register now!
                  </span>
                </>
              ) : (
                <div style={{ color: "white", fontSize: "15px" }}>
                  Have and account?
                  <span
                    style={{
                      fontWeight: "bolder",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => setIsLoginForm(true)}
                  >
                    Login
                  </span>
                </div>
              )}
            </Form.Item>
            <div className="div-google">
              <Button type="primary" onClick={handlesLogin}>
                Login with GOOGLE account
                <GoogleOutlined className="google" />
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Auth;
