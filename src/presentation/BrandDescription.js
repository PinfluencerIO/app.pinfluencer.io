import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const BrandDescription = ({ data, handleChange, view }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          inputProps={{ readOnly: view ? "readonly" : "" }}
          fullWidth
          id="brandDescription"
          name="brandDescription"
          value={data.brandDescription}
          label="Brand Description"
          variant="standard"
          onChange={(event) => handleChange(event)}
          rows={4}
          multiline
          sx={{ mb: 1 }}
        />
      </FormControl>
    </Box>
  );
};
