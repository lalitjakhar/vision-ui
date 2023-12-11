import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
  MenuItem,
  Menu,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ReorderSharpIcon from "@mui/icons-material/ReorderSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="bg-inherit shadow-none">
      <Toolbar className="w-full p-0">
        <ReorderSharpIcon sx={{ display: { xs: "flex", lg: "none" } }} />
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          My Navbar
        </Typography>
        <Box
          sx={{
            position: "relative",
            border: 1,
            borderRadius: 1,
            borderColor: "white",
            p: "2px",
          }}
        >
          <IconButton sx={{ p: "5px", color: "white" }}>
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ flex: 1, color: "white" }}
            placeholder="Type here..."
          />
        </Box>
        <IconButton
          sx={{ ml: 2, color: "white" }}
          onClick={handleOpenUserMenu}
        >
          <AccountCircleIcon />
        </IconButton>
        <Menu
          sx={{ mt: "50px", width:"600px" }}
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
          <Typography>dgsdsdsgfdfs</Typography>
          <MenuItem onClick={handleCloseUserMenu}>
            <LockOpenIcon sx={{ mr: 2 }} />
            Sign In
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <PersonAddIcon sx={{ mr: 2 }} />
            Sign Up
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <AccountCircleIcon sx={{ mr: 2 }} />
            Profile
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
