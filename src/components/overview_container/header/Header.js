import React, { useContext, useState } from "react";
import "./header.css";
import { LoginContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

// AVATAR
function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: name.split(" ")[1]
      ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
      : `${name.split(" ")[0][0]}`,
  };
}

function Header() {
  const navigate = useNavigate();
  const { setLogin, login } = useContext(LoginContext);
  const adminName = localStorage.getItem("username")
  const username = adminName.replaceAll('"', "");
  console.log(typeof username)

  //Drop down
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setLogin(false);
    navigate("/auth/login");
    localStorage.removeItem("user_token")
    localStorage.removeItem("username");
  };

  const navigateToLogin = () => {
    navigate("/auth/login")
  }
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
        {login ? (
          <div>
            <div className="header_item">
              <div className="header_item--nickname">{ username }</div>
            </div>

            <div className="header_item">
              {/* <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          /> */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar(username)} />
                    </Stack>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/* <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem> */}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={handleLogout}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </div>
          </div>
        ) : (
          <button className="btn_login" onClick={navigateToLogin}>Log in</button>
        )}
      </div>
    </div>
  );
}

export default Header;
