import { Layout } from "antd";
// import React from "react";

import Logo from "../assets/logoCrc.png";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <Layout.Content className="h-100">
      <div className="d-flex h-100 w-100 overflow-hidden">
        <div className="d-fill overflow-auto w-50 login-bg">
          <div className="pt-4 ps-4 position-relative ">
            <a href="aside-logo" className="login-logo">
              <img src={Logo} alt="logo" className="logo_main" />
            </a>
          </div>
        </div>
        <div className="d-fill w-50 overflow-auto">
          <ForgotPasswordForm />
        </div>
      </div>
    </Layout.Content>
  );
};

export default ForgotPassword;
