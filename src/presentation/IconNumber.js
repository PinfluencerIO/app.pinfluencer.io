import { Box } from "@mui/system";
import React from "react";

export const IconNumber = ({ icon, number }) => {
  return (
    <Box sx={{ verticalAlign: "top" }}>
      {icon}
      <Box
        style={{ textAlign: "center", verticalAlign: "top", height: "10px" }}
      >
        {number}
      </Box>
    </Box>
  );
};
