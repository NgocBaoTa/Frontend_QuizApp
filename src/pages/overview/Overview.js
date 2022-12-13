import React from "react";
import "./overview.css";
import Header from "../../components/overview_container/header/Header";
import Sidebar from "../../components/sideBar/Sidebar";
import Box from "../../components/overview_container/statisticBox/Box";
import Chart from "../../components/overview_container/chart/Chart";
import BoxChart from "../../components/overview_container/chart/BoxChart";
import CategoryBox from "../../components/overview_container/bottom_box/categories/CategoryBox";
import QuestionBox from "../../components/overview_container/bottom_box/questions/QuestionBox";
import axios from "axios";

function Overview() {
  const handleSubmit = () => {
    return axios
      .get("https://backendquizapp.onrender.com/overview")
      .then(function (response) {
        console.log(response);
      });
  };
  return (
    <div className="overview">
      <Sidebar />
      <div className="overview_container">
        <Header />
        <div className="overview_boxes">
          <Box name="Admins" counter="20" type="unactive" onClick={handleSubmit } />
          <Box name="Users" counter="300" type="active" />
          <Box name="Categories" counter="30" type="unactive" />
          <Box name="Quizzes" counter="500" type="unactive" />
        </div>

        <div className="overview_charts">
          <Chart />
          <div className="boxes_chart">
            <BoxChart name="Answered questions" value="100" />
            <BoxChart name="Users answering questions" value="20" />
            <BoxChart name="Average respond time" value="10s" />
          </div>
        </div>

        <div className="overview_bottomBoxes">
          <CategoryBox />
          <QuestionBox />
        </div>
      </div>
    </div>
  );
}

export default Overview;
