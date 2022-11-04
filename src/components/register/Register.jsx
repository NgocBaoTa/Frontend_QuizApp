import axios from "axios";
import React from "react";
import { useState } from "react";
import "../../asset/css/register.css";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    Retype_password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }));
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const id = await axios.post("https://backend-quiz-mindx.herokuapp.com/admin/register", {
      email :user.email,
      username : user.username,
      password : user.password,
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="col-lg-12 login-title">ADMIN PANEL</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-control-label">EMAIL</label>
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
                  <label className="form-control-label">USERNAME</label>
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
                  <label className="form-control-label">PASSWORD</label>
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
                  <label className="form-control-label">RETYPE-PASSWORD</label>
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
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
