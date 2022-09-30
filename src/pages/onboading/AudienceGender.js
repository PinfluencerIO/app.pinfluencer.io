import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const AudienceGender = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="audienceGender"
          name="audienceGender"
          value={data.audienceGender}
          label="Audience Gender"
          variant="standard"
          aria-describedby="audience_gender-helper"
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
    </Box>
  );
};
