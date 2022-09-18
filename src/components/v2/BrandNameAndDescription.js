import { Box, TextField } from "@mui/material";
import React from "react";
import { BaseComponent } from "../../pages/BaseComponent";

export const BrandNameAndDescription = ({ isEdit, brand }) => {
  return isEdit ? (
    <BaseComponent disableBorder disableGutter>
      <Box display="flex" flexDirection="column">
        <Box>
          <TextField
            sx={{ width: "100%" }}
            required
            id="brandName"
            label="Brand Name"
            name="brandName"
            variant="outlined"
            autoComplete="false"
            value={brand.brandName}
          />
        </Box>
        <Box marginTop={3}>
          <TextField
            sx={{ width: "100%" }}
            required
            id="brand.brandDescription"
            label="Brand Description"
            name="brand.brandDescription"
            variant="outlined"
            autoComplete="false"
            value={brand.brandDescription}
            // onChange={(event) => handleChange(event)}
            multiline
            rows={6}
          />
        </Box>
      </Box>
    </BaseComponent>
  ) : (
    <BaseComponent heading={brand.brandName} disableBorder disableGutter>
      {brand.brandDescription}
    </BaseComponent>
  );
};
