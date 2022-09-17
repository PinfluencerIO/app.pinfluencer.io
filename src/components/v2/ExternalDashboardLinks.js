import { Box } from "@mui/material";
import React from "react";
import { BaseComponent } from "../../pages/BaseComponent";

export const ExternalDashboardLinks = () => {
  return (
    <Box sx={{ width: "100%" }} display="flex" flexDirection="column">
      <BaseComponent heading="Instagram Handle" disableBorder>
        <Box>handle</Box>
      </BaseComponent>
      <BaseComponent heading="Website icon" disableBorder>
        <Box>Link</Box>
      </BaseComponent>
    </Box>
  );
};
