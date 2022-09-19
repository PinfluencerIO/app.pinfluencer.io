import { Box, TextField } from "@mui/material";
import React from "react";
import { BaseComponent } from "../../pages/BaseComponent";

export const BrandNameAndDescription = ({ isEdit, brand, handleChange }) => {
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
            onChange={(event) => handleChange(event)}
          />
        </Box>
        <Box marginTop={3}>
          <TextField
            sx={{ width: "100%" }}
            required
            id="brandDescription"
            label="Brand Description"
            name="brandDescription"
            variant="outlined"
            autoComplete="false"
            value={brand.brandDescription}
            onChange={(event) => handleChange(event)}
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
