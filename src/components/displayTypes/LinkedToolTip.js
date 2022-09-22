import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const LinkedToolTip = (props) => {
  const { title, route, style, children } = props;
  return (
    <Tooltip title={title}>
      <Link to={route} style={style}>
        {children}
      </Link>
    </Tooltip>
  );
};
