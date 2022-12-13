import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import PieChartIcon from "@mui/icons-material/PieChart";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import QuizIcon from "@mui/icons-material/Quiz";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <Link
          to="/"
          className="sidebar_top--logo"
          style={{ textDecoration: "none" }}
        >
          <GridViewIcon className="logo" />
          <div className="name">Dashboard Kit</div>
        </Link>
      </div>

      <div className="sidebar_content">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="sidebar_item--active">
              <PieChartIcon className="icon" />
              <span>Overview</span>
            </li>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon" />
              <span>Categories</span>
            </li>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <QuizIcon className="icon" />
              <span>Quizzes</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
