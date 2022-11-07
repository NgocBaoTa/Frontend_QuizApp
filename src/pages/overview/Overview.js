import React from "react";
import './overview.css';
import Header from "../../components/overview_container/header/Header";
import Sidebar from "../../components/sideBar/Sidebar";

function Overview() {
  return (
    <div className="overview">
      <Sidebar />
      <div className="overview_container">
        <Header />
      </div>
    </div>
  );
}

export default Overview;
