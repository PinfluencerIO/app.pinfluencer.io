import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function LinkedToolTip({ title, route, style, children }) {
  return (
    <Tooltip title={title}>
      <Link to={route} style={style} role="link">
        {children}
      </Link>
    </Tooltip>
  );
}
