import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const AudienceAge = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="audienceAge"
          name="audienceAge"
          value={data.audienceAge}
          label="Audience Age"
          variant="standard"
          aria-describedby="audience-age-helper"
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
    </Box>
  );
};
