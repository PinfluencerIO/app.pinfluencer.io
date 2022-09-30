import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const BrandDescription = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="brandDescription"
          name="brandDescription"
          value={data.brandDescription}
          label="Brand Description"
          variant="standard"
          aria-describedby="brand-description-helper"
          onChange={(event) => handleChange(event)}
          rows={4}
          multiline
        />
      </FormControl>
    </Box>
  );
};
