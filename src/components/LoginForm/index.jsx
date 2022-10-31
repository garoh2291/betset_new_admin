import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useWaitingButton } from "../../helpers/help-functions";
import { loginUserThunk } from "../../redux/userSlice/user-async";
import "./styles.css";

export const LoginForm = () => {
  const [loadings, enterLoading] = useWaitingButton();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cb = () => navigate("/", { replace: true });
  const { Title } = Typography;

  const loginHandler = (event) => {
    enterLoading(0);
    const { email, password } = event;
    const formData = {
      email: email.toLowerCase(),
      password,
    };
    dispatch(loginUserThunk({ formData, cb }));
  };

  return (
    <div className="login_page_container">
      <Title level={2}>Login</Title>
      <Form
        autoComplete="off"
        labelCol={{ span: 10 }}
        labelAlign={"left"}
        wrapperCol={{ span: 18 }}
        onFinish={loginHandler}
        onFinishFailed={(error) => {}}
      >
        <Form.Item
          name={"email"}
          label={"Email"}
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter valid email" },
          ]}
          hasFeedback
        >
          <Input placeholder="Type Your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your password" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="primary" htmlType="submit" loading={loadings[0]}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
