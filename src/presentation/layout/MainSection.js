import { Box } from "@mui/material";
import React from "react";

const MainSection = (props) => {
  const { children } = props;
  return (
    <Box component="main" {...props}>
      {children}
    </Box>
  );
};
export default MainSection;
