import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-inherit shadow-none">
      <Toolbar className="w-full">
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          My Navbar
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About Us</Button>
        </Box>
        <Box
          sx={{
            position: "relative",
            border: 1,
            borderRadius: 1,
            borderColor: "white",
            ml: 2,
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
