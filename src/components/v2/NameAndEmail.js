import { Box } from "@mui/material";
import React from "react";
import { BaseComponent } from "../../pages/BaseComponent";

export const NameAndEmail = () => {
  return (
    <Box sx={{ width: "100%" }} display="flex" flexDirection="column">
      <BaseComponent heading="Name" disableBorder>
        <Box>User Name</Box>
      </BaseComponent>
      <BaseComponent heading="Email" disableBorder>
        <Box>Email Address</Box>
      </BaseComponent>
    </Box>
  );
};
