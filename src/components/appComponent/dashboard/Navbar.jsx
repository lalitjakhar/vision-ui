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
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ReorderSharpIcon from "@mui/icons-material/ReorderSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Input } from "@/components/ui/input";

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
        <Input className="w-56" placeholder="Type here..." />
        <IconButton sx={{ ml: 2, color: "white" }} onClick={handleOpenUserMenu}>
          <AccountCircleIcon />
        </IconButton>
        <Menu
          sx={{ mt: "50px", width: "600px" }}
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
          <Typography className="flex justify-center">Task Pilot</Typography>
          <Divider />
          <MenuItem onClick={handleCloseUserMenu}>
            <LockOpenIcon sx={{ mr: 1 }} />
            Sign In
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <PersonAddIcon sx={{ mr: 1 }} />
            Sign Up
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <AccountCircleIcon sx={{ mr: 1 }} />
            Profile
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
