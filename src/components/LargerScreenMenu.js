import { Typography } from "@mui/material";
import React from "react";
import { LinkedToolTip } from "./LinkedToolTip";

export const LargerScreenMenu = ({ navItems }) => {
  console.log(navItems);
  return (
    <React.Fragment>
      <LinkedToolTip title="Home" route="/">
        <Typography
          variant="h6"
          sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
        >
          Pinfluencer
        </Typography>
      </LinkedToolTip>
    </React.Fragment>
  );
};
