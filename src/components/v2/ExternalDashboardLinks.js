import { Box, TextField } from "@mui/material";
import React from "react";
import { BaseComponent } from "../../pages/BaseComponent";

export const ExternalDashboardLinks = ({ isEdit, brand }) => {
  return isEdit ? (
    <Box sx={{ width: "100%" }} display="flex" flexDirection="column">
      <BaseComponent disableBorder disableGutter>
        <TextField
          sx={{ width: "100%" }}
          id="instahandle"
          label="Instagram Name"
          name="instaHandle"
          variant="outlined"
          autoComplete="false"
          value={brand.instaHandle}
          // onChange={(event) => handleChange(event)}
        />
      </BaseComponent>
      <BaseComponent disableBorder disableGutter>
        <TextField
          sx={{ width: "100%" }}
          id="website"
          label="Website"
          name="website"
          variant="outlined"
          autoComplete="false"
          value={brand.website}
          // onChange={(event) => handleChange(event)}
        />
      </BaseComponent>
    </Box>
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
