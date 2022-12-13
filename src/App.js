import React, { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Overview from "./pages/overview/Overview";
import { LoginContext } from "./context/AuthContext";

function App() {
  const { login } = useContext(LoginContext);
  return (
    <div className="App">
      <Routes>
        {/* {login ? (
          <Route path="/" element={<Overview />} />
        ) : (
          <>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </>
        )} */}

        {/* <Route
          path="/"
          element={login === true ? <Overview /> : <Login />}
        ></Route> */}
        <Route path="/" element={<Overview />} />
        <Route path="/auth/login" element={<Login />} />

        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
