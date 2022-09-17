import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import React from "react";

export const HamburgerMenu = ({ handleDrawerToggle }) => {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: "block" }}
    >
      <MenuIcon />
    </IconButton>
  );
};
