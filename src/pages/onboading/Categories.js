import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const Categories = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="categories"
          name="categories"
          value={data.categories}
          label="Categories"
          variant="standard"
          aria-describedby="categories-helper"
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
    </Box>
  );
};
