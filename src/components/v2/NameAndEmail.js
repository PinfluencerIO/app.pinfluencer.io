import { Box } from "@mui/material";
import React from "react";
import { BaseComponent } from "../../pages/BaseComponent";

export const NameAndEmail = ({ brand }) => {
  return (
    <Box sx={{ width: "100%" }} display="flex" flexDirection="column">
      <BaseComponent heading="Name" disableBorder>
        {brand.firstName} {brand.lastName}
      </BaseComponent>
      <BaseComponent heading="Email" disableBorder>
        {brand.email}
      </BaseComponent>
    </Box>
  );
};
