import React, { useEffect, useState } from "react";
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
  const [statisticBox, setStatisticBox] = useState();
  
  useEffect(() => {
    fetch("https://backendquizapp.onrender.com/overview")
    .then((response) => response.json())
    .then((json) => {
      setStatisticBox(json);
    });  
  }, [])
    console.log(statisticBox);

  return (
    <div className="overview">
      <Sidebar />
      <div className="overview_container">
        <Header />
        <div className="overview_boxes">
          <Box
            name="Admins"
            counter={statisticBox.totalAdmins}
            type="unactive"
          />
          <Box
            name="Users"
            counter={statisticBox.totalCategories}
            type="active"
          />
          <Box
            name="Categories"
            counter={statisticBox.totalQuizes}
            type="unactive"
          />
          <Box
            name="Quizzes"
            counter={statisticBox.totalUsers}
            type="unactive"
          />
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
