import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const BrandLogo = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="brandLogo"
          name="brandLogo"
          value={data.brandLogo}
          label="Brand Logo"
          variant="standard"
          aria-describedby="brand-logo-helper"
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
    </Box>
  );
};
