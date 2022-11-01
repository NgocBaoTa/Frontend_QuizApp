import React from "react";
import "./login.css";
import GridViewIcon from "@mui/icons-material/GridView";

function Login() {
  return (
    <div className="bg">
      <div className="loginScreen">
        <div className="dashboard_logo">
          <GridViewIcon className="logo" />
          <div className="name">Dashboard Kit</div>
        </div>

        <div className="login">
          <div className="login_text">
            <div className="bold">Log In to Dashboard Kit</div>
            <div className="normal">Enter your email and password below</div>
          </div>

          <div className="login_input">
            <label className="email_label">EMAIL</label>
            <input
              className="email_input"
              type="email"
              placeholder="Email address"
            />
            <label className="password_label">PASSWORD</label>
            <input
              className="password_input"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="login_submit">Log In</div>

          <h4 className="login_forgot">
            Don't have an account?
            <span className="login_link">Sign up</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
