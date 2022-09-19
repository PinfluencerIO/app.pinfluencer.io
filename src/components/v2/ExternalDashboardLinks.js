import { Box, TextField } from "@mui/material";
import React from "react";
import { BaseComponent } from "../../pages/BaseComponent";

export const ExternalDashboardLinks = ({ isEdit, brand, handleChange }) => {
  return isEdit ? (
    <BaseComponent disableBorder disableGutter>
      <Box display="flex" flexDirection="column">
        <Box>
          <TextField
            sx={{ width: "100%" }}
            id="instahandle"
            label="Instagram Name"
            name="instaHandle"
            variant="outlined"
            autoComplete="false"
            value={brand.instaHandle}
            onChange={(event) => handleChange(event)}
          />
        </Box>
        <Box marginTop={3}>
          <TextField
            sx={{ width: "100%" }}
            id="website"
            label="Website"
            name="website"
            variant="outlined"
            autoComplete="false"
            value={brand.website}
            onChange={(event) => handleChange(event)}
          />
        </Box>
      </Box>
    </BaseComponent>
  ) : (
    <Box sx={{ width: "100%" }} display="flex" flexDirection="column">
      <BaseComponent heading="Instagram Handle" disableBorder disableGutter>
        {brand.instaHandle}
      </BaseComponent>
      <BaseComponent heading="Website icon" disableBorder disableGutter>
        {brand.website}
      </BaseComponent>
    </Box>
  );
};
