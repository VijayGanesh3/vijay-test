import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Layout, Button, Form, Input, notification } from "antd";
// import get from "lodash/get";
// import { bool, func } from "prop-types";
// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";

import { Link } from "react-router-dom";

import logoCrc from "../assets/logoCrc.png";

// import { signIn } from "../../redux/actions/authActions";
// import history from "../../services/history";
import * as constants from "../utils/Constants";

const Login = () => {
  const [loginForm] = Form.useForm();
  // const [credential, setCredentials] = useState();

  //   const validateCreds = () => {
  //     loginForm.validateFields().then(async (creds) => {
  //       await login(creds);
  //     });
  //   };
  //   const login = async (credentials) => {
  //     setCredentials(credentials);
  //     try {
  //       await onSignIn(credentials);
  //     } catch (error) {
  //       notification.destroy();
  //       notification.error({
  //         message: error.message,
  //       });
  //     }
  //   };

  //   useEffect(() => {
  //     if (authChallenge !== "") {
  //       if (authChallenge === constants.CHALLENGE_NAME) {
  //         history.push("/reset-password", {
  //           email: credential ? credential.username : "",
  //           isRedirectedFromLogin: true,
  //         });
  //       }
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [authChallenge]);

  return (
    <Layout.Content className="h-100">
      <div className="d-flex h-100 w-100 overflow-hidden">
        <div className="d-fill overflow-auto w-50 login-bg">
          <div className="p-4 position-relative ">
            <a href="aside-logo" className="login-logo">
              <img src={logoCrc} alt="logo" className="logo_main" />
            </a>
          </div>
        </div>
        <div className="d-fill w-50 overflow-auto">
          <div className="login-form">
            <h1 className="mb-7 text-center">Pipefitter Application</h1>
            <h1 className="mb-4 text-center">Sign in to Your Account</h1>

            <Form
              form={loginForm}
              name="normal_login"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your email address!",
                  },
                  {
                    pattern: constants.EMAIL_PATTERN,
                    message: "Provide a valid email.",
                  },
                ]}
                style={{ color: "#ef314c", fontSize: "14px" }}
              >
                <Input
                  size="large"
                  placeholder="Email address"
                  className="transparent-input"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
                style={{ color: "#ef314c", fontSize: "14px", marginBottom: 0 }}
              >
                <Input.Password
                  size="large"
                  type="password"
                  placeholder="Password"
                  className="transparent-input"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeOutlined className="password_icon" />
                    ) : (
                      <EyeInvisibleOutlined className="password_icon" />
                    )
                  }
                />
              </Form.Item>
              <div className="d-flex pb-4 fgt-pswd">
                <Form.Item noStyle>
                  <Link className="login-form-forgot fw-bold" to="/forgot-password">
                    Forgot password?
                  </Link>
                </Form.Item>
              </div>
              <Form.Item>
                <Button
                  size="large"
                  shape="round"
                  block
                  htmlType="submit"
                  className="login-form-button"
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>


            <span className="login_copy">
              Pioneered by CRC Evans &copy;{constants.CURR_YEAR} |{" "}
              <a
                href={constants.TERMS_AND_USE}
                rel="noreferrer"
                target="_blank"
              >
                Terms & Conditions
              </a>{" "}
              |{" "}
              <a href={constants.PRIVACY_LINK} rel="noreferrer" target="_blank">
                Privacy Policy
              </a>
            </span>
          </div>
        </div>
      </div>
    </Layout.Content>
  );
};

// Login.propTypes = {
//   onSignIn: func.isRequired,
//   showLoader: bool.isRequired,
// };

// const mapStateToProps = ({ auth }) => {
//   const showLoader = get(auth, "isLoginLoading", false);
//   const authChallenge = get(auth, "challengeName", "");
//   return {
//     showLoader,
//     authChallenge,
//   };
// };

// const mapDispatchToProps = {
//   onSignIn: signIn,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;