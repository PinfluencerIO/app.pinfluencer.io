import { Box, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export const BackLink = ({ backLocation = -1 }) => {
  const nav = useNavigate();
  return (
    <Box display="flex" flexDirection="row">
      <Link
        underline="none"
        onClick={() => {
          nav(backLocation);
        }}
        sx={{ marginLeft: -1 }}
      >
        ⬅ Back
      </Link>
    </Box>
  );
};
