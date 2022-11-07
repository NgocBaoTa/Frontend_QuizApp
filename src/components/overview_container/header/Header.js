import React from "react";
import "./header.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Header() {
  return (
    <div className="header_wrapper">
      <div className="header_name">Overview</div>

      <div className="header_right">
        <div className="header_search header_item">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>

        <div className="header_item">
          <NotificationsNoneIcon className="header_item--icon" />
          <div className="header_item--counter">1</div>
        </div>

        <div className="header_item">
          <div className="header_item--nickname">Jone</div>
        </div>

        <div className="header_item">
          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
