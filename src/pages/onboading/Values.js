import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const Values = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="values"
          name="values"
          value={data.values}
          label="Values"
          variant="standard"
          aria-describedby="values-helper"
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
    </Box>
  );
};
