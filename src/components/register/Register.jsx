import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import "../../asset/css/register.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { setSignup, signup } = useContext(LoginContext);
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    Retype_password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const respond = await axios.post(
      "https://backendquiz.onrender.com/admin/register",
      {
        email: user.email,
        username: user.username,
        password: user.password,
      }
    );

    console.log(respond);
    navigate("/auth/login");
  };

  const clickLogin = (e) => {
    setSignup(!signup);
    navigate("/auth/login")
  };
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 login-box">
            <div className="dashboard_logo">
              <GridViewIcon className="logo" />
              <div className="name">Dashboard Kit</div>
            </div>
            <div className="login_text">
              <div className="bold">Register to Dashboard Kit</div>
              <div className="normal">
                Enter your email , username and password below
              </div>
            </div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={user.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">
                      Retype-password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="Retype_password"
                      value={user.Retype_password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text text-danger"></div>
                    <div className="login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">
                        Register
                      </button>
                    </div>
                  </div>

                  <h4 className="question">
                    Already have an account?{" "}
                    <span className="login_link"  onClick={clickLogin}>Login</span>
                  </h4>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
