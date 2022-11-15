import React, { useState, useContext } from "react";
import "./login.css";
import GridViewIcon from "@mui/icons-material/GridView";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { setLogin, setSignup, signup } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");

const handleLogin = async (e) => {
    e.preventDefault();
    setErrMessage("");
    
    try {
      const data = await handleSubmit(email, password);
      console.log(data);
      if (data.data && data.data.success !== true) {
        setErrMessage(data.data.message);
      } else {
        localStorage.setItem("user_token", JSON.stringify(data.data.accessToken));
        setLogin(true);
        navigate("/");
      }
    } catch (e) {
      if (e.response) {
        if (e.response.data) {
          setErrMessage(e.response.data.message);
        }
      }
      console.log("error", e.response);
    }
  };

  const handleSubmit = (email, password) => {
    return axios.post("https://backend-quiz-mindx.herokuapp.com/auth/login", {
      email,
      password,
    });
  };

  const clickSignup = (e) => {
    setSignup(!signup);
    navigate("/auth/register")
  };

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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value.trim());
              }}
            />
            <label className="password_label">PASSWORD</label>
            <input
              className="password_input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value.trim());
              }}
            />
          </div>

          <div className="err_message">{errMessage}</div>
          <div className="login_submit" onClick={handleLogin}>
            Log In
          </div>

          <h4 className="login_forgot">
            Don't have an account? {" "}
            <span className="login_link" onClick={clickSignup}>Sign up</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
