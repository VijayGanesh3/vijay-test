import {
  UserOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  CloseOutlined,
  // SettingOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Avatar,
  Button,
  notification,
  Typography,
  Modal,
  Col,
  Row,
  Popover,
  Input,
  Form,
  Tooltip,
} from "antd";
import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import logoCrc from "../assets/logoCrc.png";
import smartLync from "../assets/smartLync.png";
//   import { signOut } from "../redux/actions/authActions";
//   import { switchTheme, toggleTheme } from "../redux/application/actions";
//   import { changeProfilePassword } from "../services/auth";
import history from "../services/History";
import * as constants from "../utils/Constants";
import { passwordPolicy } from "../utils//PasswordPolicy";

const { Sider } = Layout;
const Sidebar = () => {
  // const { onSignout } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);
  const [validatingStatus, setValidatingStatus] = useState("");
  const [validatingStatusConfirm, setValidatingStatusConfirm] = useState("");
  const [validateVisible, setValidateVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loadBtn, setLoadBtn] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  const [changePasswordForm] = Form.useForm();

  const onCollapse = (collapse: any) => {
    setCollapsed(collapse);
  };

  // const dispatch = useDispatch();
  // const reducerList = useSelector((state) => state);
  // const switchThemeState = reducerList?.switchThemeReducer?.switchTheme;

  useEffect(() => {
    const handleResize = () => {
      // Update collapsed state based on window width
      if (window.innerWidth <= 879) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const user = JSON.parse(localStorage.getItem('CognitoIdentityServiceProvider.584pe71ujm7l94dqj0emdefnjt.4835dcc2-01c6-4d4c-b876-5811ccdee87f.userData'));
  // const user = JSON.parse(localStorage.getItem("user"));

  // useEffect(() => {
  //   const element = document.getElementById("body-wrapper");
  //   const theme = sessionStorage.getItem("theme");
  //   if (theme === "True") {
  //     element.classList.add("light-theme");
  //     dispatch(switchTheme(true));
  //     setIsLightTheme(true);
  //   } else {
  //     element.classList.remove("light-theme");
  //     setIsLightTheme(false);
  //   }
  // }, [switchThemeState]);

  // const toggleThemeIcon = () => {
  //   const element = document.getElementById("body-wrapper");
  //   if (sessionStorage.getItem("theme") === "True") {
  //     sessionStorage.setItem("theme", "False");
  //     element.classList.remove("light-theme");
  //     setIsLightTheme(false);
  //   } else {
  //     sessionStorage.setItem("theme", "True");
  //     element.classList.add("light-theme");
  //     setIsLightTheme(true);
  //   }
  //   dispatch(toggleTheme());
  // };

  /** Validating Entered Password with password policy */
  const validateToNextPassword = (e: any) => {
    const value = e.target.value;
    if (!value) {
      setValidateVisible(false);
      setValidatingStatus("");
    }
    if (value) {
      setNewPassword(value);
      setValidatingStatus("validating");
      setTimeout(() => {
        if (value.length > 7 && constants.PASSWORD_PATTERN.test(value)) {
          setValidatingStatus("success");
          if (confirmPassword.length > 7 && confirmPassword === value) {
            setValidatingStatusConfirm("success");
          } else {
            setValidatingStatusConfirm("warning");
          }
          setValidateVisible(false);
        } else {
          setValidatingStatus("warning");
          setValidateVisible(true);
        }
      }, 500);
    }
  };

  /** Checking Entered Password and Confirmation password to match */
  const validateToFirstPassword = (e: any) => {
    const value = e.target.value;

    if (value) {
      setValidatingStatusConfirm("validating");
      setConfirmPassword(value);
      setTimeout(() => {
        if (value.length > 7 && value === newPassword) {
          setValidatingStatusConfirm("success");
        } else {
          setValidatingStatusConfirm("warning");
        }
      }, 500);
    } else {
      setValidatingStatusConfirm("");
    }
  };

  // const changeProfileCred = () => {
  //   changePasswordForm.validateFields().then(async (data) => {
  //     if (validatingStatus == "success") {
  //       if (validatingStatusConfirm == "success") {
  //         await changeProfilePassword(data.currentPassword, data.newPassword);
  //         setLoadBtn(true);
  //         setTimeout(() => {
  //           setLoadBtn(false);
  //           changePasswordForm.resetFields();
  //           setChangePasswordVisible(false);
  //         }, 1000);
  //       } else {
  //         notification.warning({
  //           message: "The New password and confirmation password do not match!",
  //         });
  //       }
  //     } else {
  //       notification.warning({
  //         message: "Your password does not match Password policy!",
  //       });
  //     }
  //   });
  // };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{ height: "100vh" }}
      className="sidebar-nav"
    >
      <div className="d-flex h-100 flex-column">
        <div className="flex-auto logo-container">
          <div className="logo-wrapper pe-3">
            <a href="" className="aside-logo-large">
              <img className="logo-white" src={logoCrc} alt="logo" />
              {/* <img className="logo-black" src={PoweredBy} alt="logo" /> */}
            </a>
            <a href="" className="aside-logo-small">
              <img src={logoCrc} alt="logo" />
            </a>
          </div>
          <div className="py-4 user-name d-flex justify-content-center">
            <Tooltip title="Profile" placement="right">
              <div
                className="text-center user-logo"
                onClick={() => setProfileVisible(true)}
              >
                <Avatar style={{ backgroundColor: "#FFFFFF99" }} size={44}>
                  <span className="icon-18 mr-2">
                    <svg>
                      <use xlinkHref="#user" />
                    </svg>
                  </span>
                </Avatar>
                {/* Long Name */}
                {/* {user &&
                  user["custom:first_name"] &&
                  user["custom:last_name"] ? (
                    <p className="pt-3 full-name">
                      {" "}
                      {user["custom:first_name"] + " " + user["custom:last_name"]}
                    </p>
                  ) : user && user["custom:first_name"] ? (
                    <p className="pt-3 full-name"> {user["custom:first_name"]}</p>
                  ) : (
                    ""
                  )} */}
                {/* Short Name */}
                {/* {user &&
                  user["custom:first_name"] &&
                  user["custom:last_name"] ? (
                    <p className="pt-3 first-last-letter">
                      {" "}
                      {user["custom:first_name"]
                        .split(" ")
                        .shift()
                        .charAt(0)
                        .toUpperCase() +
                        user["custom:last_name"]
                          .split(" ")
                          .shift()
                          .charAt(0)
                          .toUpperCase()}{" "}
                    </p>
                  ) : user && user["custom:first_name"] ? (
                    <p className="pt-3 first-last-letter">
                      {user["custom:first_name"]
                        .split(" ")
                        .shift()
                        .charAt(0)
                        .toUpperCase()}
                    </p>
                  ) : (
                    ""
                  )} */}
              </div>
            </Tooltip>
          </div>
          {/* {!collapsed && user && user.name && (
              <span className="username">
                <p>{user.name}</p>
              </span>
            )} */}
        </div>
        <div className="flex-fill  overflow-auto">
          <Menu
            className="border-0 pb-4 left-menu"
            defaultSelectedKeys={["1"]}
            mode="inline"
          >
            <Menu.Item key="1">
              <Button
                type="link"
                onClick={() => {
                  history.push("/pipefitter-home");
                }}
              >
                <span className="icon-14 me-2">
                  <svg>
                    <use xlinkHref="#dashboard" />
                  </svg>
                </span>
                <span className="menu-content"> Dashboard</span>
              </Button>
            </Menu.Item>
            <Menu.Item key="2">
              <Button
                type="link"
                onClick={() => {
                  history.push("/log-report");
                }}
              >
                <span className="icon-14 me-2">
                  <svg>
                    <use xlinkHref="#notifications" />
                  </svg>
                </span>
                <span className="menu-content">Notifications</span>
              </Button>
            </Menu.Item>
          </Menu>
        </div>
        <div className="flex-auto">
          <Menu
            className="border-0 pb-4 left-menu"
            defaultSelectedKeys={[""]}
            mode="inline"
          >
            <Menu.Item key="3">
              <Button
                type="link"
                //   onClick={toggleThemeIcon}
                className="switchTheme"
              >
                <span className="icon-14 me-2">
                  {isLightTheme ? (
                    <MoonOutlined className="theme-icon" />
                  ) : (
                    <SunOutlined className="theme-icon" />
                  )}
                </span>
                <span className="menu-content">Switch Theme</span>
              </Button>
            </Menu.Item>
            <Menu.Item key="4">
              <Button
                type="link"
                onClick={() => {
                  // onSignout();
                  // userSignOut();
                  notification.destroy();
                  // clearTokens();
                  history.push("/login");
                  localStorage.clear();
                  sessionStorage.clear();
                  notification.success({
                    duration: 3,
                    message: "Successfully Logged Out",
                    description: "",
                  });
                }}
              >
                <span className="icon-14 me-2">
                  <svg>
                    <use xlinkHref="#logout" />
                  </svg>
                </span>
                <span className="menu-content"> Logout</span>
              </Button>
            </Menu.Item>
          </Menu>
          <div
            className="poweredby d-flex justify-content-center"
            style={{ position: "relative", right: "18px" }}
          >
            <div>
              <p className="small mb-1">Pioneered by</p>
              <img
                src={smartLync}
                height={40}
                alt="logo"
                style={{ position: "relative", right: "0px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        width="45vw"
        className="pipeline-modal"
        title={`Profile`}
        centered
        open={profileVisible}
        footer={[
          <Button
            key="cancel"
            onClick={() => {
              setProfileVisible(false);
              setChangePasswordVisible(false);
              changePasswordForm.resetFields();
              setValidatingStatus("");
              setValidatingStatusConfirm("");
            }}
          >
            Close
          </Button>,
        ]}
      >
        <div>
          <Row gutter={16}>
            <Col span={6}>
              <UserOutlined className="user_photo" />
            </Col>
            <Col span={18} style={{ display: "grid" }}>
              {/* <Typography.Text className="profile_text">
                  {user && user["custom:first_name"]
                    ? user["custom:first_name"] +
                      " " +
                      (user["custom:last_name"] ? user["custom:last_name"] : "")
                    : ""}
                </Typography.Text>
                <Typography.Text className="profile_text">
                  {user ? user.email : ""}
                </Typography.Text> */}
              <hr />
              <div>
                <Typography.Text
                  className="change_profile_password"
                  onClick={() => setChangePasswordVisible(true)}
                >
                  Change Password
                </Typography.Text>
                {changePasswordVisible && (
                  <Tooltip title="close" placement="right">
                    <CloseOutlined
                      className="close_password"
                      onClick={() => {
                        setChangePasswordVisible(false);
                        changePasswordForm.resetFields();
                        setValidateVisible(false);
                        setValidatingStatus("");
                        setValidatingStatusConfirm("");
                      }}
                    />
                  </Tooltip>
                )}
              </div>

              <Row className="profilePassowrd_form">
                {changePasswordVisible && (
                  <Col span={24}>
                    <Form
                      className="forgotPswdForm"
                      form={changePasswordForm}
                      name="normal_login"
                      initialValues={{
                        remember: true,
                      }}
                    >
                      <Form.Item
                        name="currentPassword"
                        rules={[
                          {
                            required: true,
                            message: "Please input your current password!",
                          },
                        ]}
                      >
                        <Input.Password
                          size="large"
                          type="password"
                          placeholder="Current Password"
                          iconRender={(visible) =>
                            visible ? (
                              <EyeOutlined className="password_icon" />
                            ) : (
                              <EyeInvisibleOutlined className="password_icon" />
                            )
                          }
                        />
                      </Form.Item>
                      <Popover
                        placement="bottomRight"
                        title={constants.TITLE}
                        content={passwordPolicy}
                        trigger="focus"
                        open={validateVisible}
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
                        // validateStatus={validatingStatus}
                        >
                          <Input.Password
                            size="large"
                            type="password"
                            placeholder="New Password"
                            onChange={validateToNextPassword}
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
                      //   validateStatus={validatingStatusConfirm}
                      >
                        <Input.Password
                          size="large"
                          type="password"
                          placeholder="Confirm New Password"
                          onChange={validateToFirstPassword}
                          iconRender={(visible) =>
                            visible ? (
                              <EyeOutlined className="password_icon" />
                            ) : (
                              <EyeInvisibleOutlined className="password_icon" />
                            )
                          }
                        />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          size="large"
                          shape="round"
                          block
                          htmlType="submit"
                          className="profile_password_button"
                          // onClick={changeProfileCred}
                          loading={loadBtn}
                        >
                          Change Password
                        </Button>
                      </Form.Item>
                    </Form>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </Modal>
    </Sider>
  );
};

Sidebar.propTypes = {
  onSignout: func.isRequired,
};

//   const mapDispatchToProps = {
//     onSignout: signOut,
//   };

export default Sidebar;
