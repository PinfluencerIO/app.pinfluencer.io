import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box
      sx={{
        mx: "24px",
        pb: 3,
      }}
      flexDirection="row"
      display="flex"
      justifyContent="space-between"
      component="footer"
    >
      <Typography variant="p">Footer items</Typography>
      <Typography variant="p">&copy; 2022 Pinfluencer</Typography>
      <Typography variant="p">Social links</Typography>
    </Box>
  );
};
