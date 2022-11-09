import { Typography } from "@mui/material";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const CollaborationStateLink = ({ label, count, color, path }) => {
  let [searchParams] = useSearchParams();

  let filter = searchParams.get("filter");

  return count > 0 ? (
    <Link
      to={path}
      style={style(filter, label)}
      title={`${count} ${label} collaboration`}
    >
      {text(label, color, count)}
    </Link>
  ) : (
    text(label, color, count)
  );
};

const text = (label, color, count) => {
  return (
    <Typography
      ml={{ xs: 0, sm: 1 }}
      mr={{ xs: 1, sm: 0 }}
      color={color}
    >{`${label}(${count})`}</Typography>
  );
};

const style = (filter, label) => {
  if (filter && filter.toLowerCase() === label.toLowerCase())
    return {
      textDecoration: "underline",
      textDecorationColor: "green",
      textDecorationStyle: "solid",
      textDecorationThickness: "3px",
      textUnderlineOffset: "5px",
    };
  return { textDecoration: "none" };
};

export default CollaborationStateLink;
