import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CollaborationStateLink = ({ label, count, color, path }) => {
  return (
    <Link
      to={path}
      style={{ textDecoration: "none" }}
      title={`${count} ${label} collaboration`}
    >
      <Typography
        ml={{ xs: 0, sm: 1 }}
        mr={{ xs: 1, sm: 0 }}
        color={color}
      >{`${label}(${count})`}</Typography>
    </Link>
  );
};

export default CollaborationStateLink;
