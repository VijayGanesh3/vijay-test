/* eslint-disable no-use-before-define */

import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, notification, Popover, Typography } from "antd";
//   import get from "lodash/get";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//   import { forgotPassword, forgotPasswordSubmit } from "../services/auth";
import * as constants from "../utils/Constants";
import { passwordPolicy } from "../utils/PasswordPolicy";

const { Text } = Typography;

const ForgotPasswordForm = () => {
  const [forgotPasswordForm] = Form.useForm();
  const [sendCode, setSendCode] = useState(false);
  const [email, setEmail] = useState("");
  const [validatingStatus, setValidatingStatus] = useState("");
  const [validatingStatusConfirm, setValidatingStatusConfirm] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [validateVisible, setValidateVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  /** Validating and Submitting Forgot Password and Veryfying Code (OTP)*/
  // const validateCreds = () => {
  //   forgotPasswordForm.validateFields().then(async (creds) => {
  //     if (!sendCode) {
  //       setEmail(creds.email);
  //     }
  //     console.log(loading);
  //     // eslint-disable-next-line no-unused-vars
  //     const res = !sendCode
  //       ? await forgotPassword(creds.email)
  //       : validatingStatus == "success"
  //       ? validatingStatusConfirm == "success"
  //         ? await forgotPasswordSubmit(
  //             email,
  //             creds.verficationCode,
  //             creds.newPassword
  //           )
  //         : notification.warning({
  //             message: "The password and confirmation password does not match!",
  //           })
  //       : notification.warning({
  //           message: "Your password does not match Password policy!",
  //         });
  //     setSendCode(true);
  //   });
  // };

  // const reSendCode = async () => {
  //   if (email) {
  //     await forgotPassword(email);
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 500);
  //   } else {
  //     notification.warn({
  //       message: "User Not Found. Please try again with valid email address.",
  //     });
  //     setSendCode(false);
  //   }
  // };

  // /** Validating Entered Password with password policy */
  // const validateToNextPassword = (e) => {
  //   const value = e.target.value;
  //   if (!value) {
  //     setValidateVisible(false);
  //   }
  //   if (value) {
  //     setNewPassword(value);
  //     setValidatingStatus("validating");
  //     setTimeout(() => {
  //       if (value.length > 7 && constants.PASSWORD_PATTERN.test(value)) {
  //         setValidatingStatus("success");
  //         if (confirmPassword.length > 7 && confirmPassword === value) {
  //           setValidatingStatusConfirm("success");
  //         } else {
  //           setValidatingStatusConfirm("warning");
  //         }
  //         setValidateVisible(false);
  //       } else {
  //         setValidatingStatus("warning");
  //         setValidateVisible(true);
  //       }
  //     }, 500);
  //   }
  // };

  // /** Checking Entered Password and Confirmation password to match */
  // const validateToFirstPassword = (e) => {
  //   const value = e.target.value;

  //   if (value) {
  //     setValidatingStatusConfirm("validating");
  //     setConfirmPassword(value);
  //     setTimeout(() => {
  //       if (value.length > 7 && value === newPassword) {
  //         setValidatingStatusConfirm("success");
  //       } else {
  //         setValidatingStatusConfirm("warning");
  //       }
  //     }, 500);
  //   } else {
  //     setValidatingStatusConfirm("");
  //   }
  // };

  return (
    <div className="login-form">
      {sendCode ? (
        <>
          <LockOutlined
            className="mb-4"
            style={{ fontSize: "40px", paddingRight: "20px" }}
          />
          <h1 className="mb-4 text-center"> Reset Password</h1>
        </>
      ) : (
        <>
          <h1 className="mb-6 text-center">Pipefitter Application</h1>
          <LockOutlined
            className="mb-4"
            style={{ fontSize: "40px", paddingRight: "20px" }}
          />
          <h1 className="mb-4 text-center"> Forgot password</h1>
        </>
      )}

      <Form
        className="forgotPswdForm"
        form={forgotPasswordForm}
        name="normal_login"
        initialValues={{
          remember: true,
        }}
      >
        {!sendCode ? (
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your registered email!",
              },
              {
                pattern: constants.EMAIL_PATTERN,
                message: "Provide a valid email.",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your registered email"
              onChange={(e) => setEmail(e.target.value)}
              className="custom-placeholder"
            />
          </Form.Item>

        ) : (
          <>
            <Popover
              placement="bottomRight"
              title={constants.TITLE}
              content={passwordPolicy}
              trigger="focus"
              visible={validateVisible}
            >
              <Form.Item
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your new password!",
                  },
                ]}
                hasFeedback
              //   validateStatus={validatingStatus}
              >
                <Input.Password
                  size="large"
                  type="password"
                  placeholder="New Password"
                  // onChange={validateToNextPassword}
                  iconRender={(visible) =>
                    visible ? (
                      <EyeOutlined className="password_icon" />
                    ) : (
                      <EyeInvisibleOutlined className="password_icon" />
                    )
                  }
                />
              </Form.Item>
            </Popover>
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your confirm password!",
                },
              ]}
              hasFeedback
            // validateStatus={validatingStatusConfirm}
            >
              <Input.Password
                size="large"
                type="password"
                placeholder="Confirm New Password"
                //   onChange={validateToFirstPassword}
                iconRender={(visible) =>
                  visible ? (
                    <EyeOutlined className="password_icon" />
                  ) : (
                    <EyeInvisibleOutlined className="password_icon" />
                  )
                }
              />
            </Form.Item>
            {sendCode ? (
              <p className="resetPassword  mb-4 text-center">
                <Text>Please enter the code sent to your email</Text>
              </p>
            ) : null}
            <Form.Item
              name="verficationCode"
              rules={[
                {
                  required: true,
                  message: "Please input your verfication code!",
                },
              ]}
              style={{ marginLeft: "20px" }}
            >
              {/* <OtpInput
                className="verificationCode"
                isInputNum
                numInputs={6}
                size="large"
                separator={
                  <span
                    style={{ fontWeight: "bolder", paddingBottom: "8px" }}
                    className="sperator"
                  >
                    _
                  </span>
                }
              /> */}
            </Form.Item>
          </>
        )}
        <Form.Item>
          <Button
            size="large"
            shape="round"
            block
            htmlType="submit"
            className="login-form-button"
          //   onClick={validateCreds}
          >
            {sendCode ? "Verify" : "Send Reset Code"}
          </Button>
        </Form.Item>
        {sendCode && (
          <div style={{ position: "relative", bottom: "16px" }}>
            {" "}
            <Text className="" style={{ display: "inline-flex" }}>
              Didn&#39;t receive the mail?
              <Button
                size="large"
                shape="round"
                className="login-form-button resendBtn"
              //   onClick={reSendCode}
              // loading={loading}
              >
                Resend Code
              </Button>
            </Text>
          </div>
        )}
        <Button
          // size="large"
          // shape="round"
          block
          htmlType="submit"
          className="login-form-button"
        >
          <Link to="/">Back to Login</Link>
        </Button>
      </Form>
      <span className="login_copy">
        Pioneered by CRC Evans &copy;{constants.CURR_YEAR} |{" "}
        <a href={constants.TERMS_AND_USE} rel="noreferrer" target="_blank">
          Terms & Conditions
        </a>{" "}
        |{" "}
        <a href={constants.PRIVACY_LINK} rel="noreferrer" target="_blank">
          Privacy Policy
        </a>
      </span>
    </div>
  );
};

//   const mapStateToProps = ({ auth }) => {
//     const isLogin = get(auth, "isLogin", false);
//     return {
//       isLogin,
//     };
//   };

//   export default connect(mapStateToProps)(ForgotPasswordForm);
export default ForgotPasswordForm;
