import { Box } from "@mui/material";
import React from "react";

export const ExternalDashboardLinks = () => {
  return (
    <Box
      sx={{ border: "1px solid red", width: "100%" }}
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" border={1} borderColor="blue">
        <Box mr={3}>insta icon</Box>
        <Box>handle</Box>
      </Box>
      <Box display="flex" border={1} borderColor="blue">
        <Box mr={3}>website icon</Box>
        <Box>link</Box>
      </Box>
    </Box>
  );
};
