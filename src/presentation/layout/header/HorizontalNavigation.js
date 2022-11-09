import { Box } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";

const HorizontalNavigation = () => {
  const location = useLocation();
  const nav = useNavigate();

  const isActive = (path) => {
    return location.pathname.toLowerCase().includes(path.toLowerCase());
  };

  const item = (label, path) => {
    return (
      <Box
        sx={{ width: "fit-content", cursor: "pointer" }}
        onClick={() => nav(path)}
      >
        {label}
        <Box
          sx={{
            height: "3px",
            overflowY: "hidden",
            border: "0px solid pink",
            width: "100%",
            padding: 0,
            margin: 0,
          }}
        >
          <Box
            sx={{
              border: isActive(label) ? "solid 3px" : "none 0px",
              borderColor: (theme) => theme.palette.active.main,
              borderRadius: "3px",
              padding: 0,
              margin: 0,
            }}
          ></Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box display="flex">
      {/* {item("Dashboard", "dashboard")} */}
      {item("Listings", "listings")}
      {/* {item("Collaborations", "collaborations")} */}
    </Box>
  );
};
export default HorizontalNavigation;
