import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const BrandHeader = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="brandHeader"
          name="brandHeader"
          value={data.brandHeader}
          label="Brand Header"
          variant="standard"
          aria-describedby="brand-header-helper"
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
    </Box>
  );
};
