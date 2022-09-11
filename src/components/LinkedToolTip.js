import { Tooltip, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const LinkedToolTip = ({ title, route, children }) => {
  const theme = useTheme();
  return (
    <Tooltip title={title}>
      <Link
        to={route}
        style={{ textDecoration: "none", color: theme.palette.primary.main }}
      >
        {children}
      </Link>
    </Tooltip>
  );
};
