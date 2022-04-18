import { useContext, useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { authContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const { handleLogin, handleSignUp, error } = useContext(authContext);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { email, password } = values;
    if (isLogin) {
      handleLogin(email, password, navigate);
    } else {
      handleSignUp(email, password, navigate);
    }
  };
  return (
    <div className="auth-container">
      {/* <div className="auth-box">
        <h1>New here?</h1>
        <p>Sign up and enjoy watching our movies!</p>
      </div> */}
      <div className="auth-form-main">
        {error ? <Alert description={error} type="error" /> : null}
        <div className="auth-form">
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your username" },
                {
                  type: "email",
                  message: "It is not valid email",
                },
              ]}
            >
              <Input
                className="auth-input"
                prefix={<UserOutlined />}
                placeholder="   Username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input
                className="auth-input"
                prefix={<LockOutlined />}
                type="password"
                placeholder="   Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {isLogin ? "Log in" : "Sign up"}
              </Button>
              <br />
              {isLogin ? (
                <div className="auth-signup">
                  Or <span onClick={() => setIsLogin(false)}>Sign up</span>
                </div>
              ) : (
                <div className="auth-text">
                  Have an account?{" "}
                  <span onClick={() => setIsLogin(true)}>Log in</span>
                </div>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
