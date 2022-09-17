import { Box } from "@mui/material";
import React from "react";
import { BaseComponent } from "../../pages/BaseComponent";

export const ExternalDashboardLinks = ({ brand }) => {
  return (
    <Box sx={{ width: "100%" }} display="flex" flexDirection="column">
      <BaseComponent heading="Instagram Handle" disableBorder>
        {brand.instaHandle}
      </BaseComponent>
      <BaseComponent heading="Website icon" disableBorder>
        {brand.website}
      </BaseComponent>
    </Box>
  );
};
