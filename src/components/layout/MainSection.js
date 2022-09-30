import { Box } from "@mui/material";
import React from "react";

export const MainSection = (props) => {
  const { children } = props;
  return (
    <Box
      component="main"
      {...props}
      display="flex"
      // alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};
