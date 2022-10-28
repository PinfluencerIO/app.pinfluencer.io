import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const HorizontalNavigation = () => {
  const nav = useNavigate();

  const isActive = (path) => {
    return location.hash.toLowerCase().includes(path.toLowerCase());
  };

  return (
    <Box display="flex">
      <Box
        px={2}
        sx={{ width: "fit-content", cursor: "pointer" }}
        onClick={() => nav("dashboard")}
      >
        Dashboard
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
              border: isActive("dashboard") ? "solid 3px" : "none 0px",
              borderColor: (theme) => theme.palette.active.main,
              borderRadius: "3px",
              padding: 0,
              margin: 0,
            }}
          ></Box>
        </Box>
      </Box>
      <Box
        px={2}
        sx={{ width: "fit-content", cursor: "pointer" }}
        onClick={() => nav("collaborations")}
      >
        Collaborations
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
              border: isActive("Collaborations") ? "solid 3px" : "none 0px",
              borderColor: (theme) => theme.palette.active.main,
              borderRadius: "3px",
              padding: 0,
              margin: 0,
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
export default HorizontalNavigation;
