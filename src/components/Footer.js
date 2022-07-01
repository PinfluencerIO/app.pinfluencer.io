import { Box } from "@mui/material";
import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          mx: "24px",
          pb: 3,
        }}
        flexDirection="row"
        display="flex"
        justifyContent="space-between"
      >
        <p>Footer items</p>
        <p>&copy; 2022 Pinfluencer</p>
        <p>Social links</p>
      </Box>
    </footer>
  );
};
