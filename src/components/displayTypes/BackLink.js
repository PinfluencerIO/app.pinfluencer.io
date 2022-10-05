import { Box, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export const BackLink = () => {
  const nav = useNavigate();
  return (
    <Box display="flex" flexDirection="row">
      <Link
        underline="none"
        onClick={() => {
          nav(-1);
        }}
        sx={{ marginLeft: -1 }}
      >
        ⬅ Back
      </Link>
    </Box>
  );
};
