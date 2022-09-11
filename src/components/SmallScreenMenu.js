import { Box } from "@mui/material";
import React from "react";
import { LinkedToolTip } from "./LinkedToolTip";
import logo from "../assets/main-logo.png";

export const SmallScreenMenu = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", sm: "none" },
        justifyContent: "center",
      }}
    >
      <LinkedToolTip title="Home" route="/">
        <img style={{ width: "2rem", height: "2rem" }} src={logo} alt="logo" />
      </LinkedToolTip>
    </Box>
  );
};
