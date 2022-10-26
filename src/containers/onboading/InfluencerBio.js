import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const InfluencerBio = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="influencerBio"
          name="bio"
          value={data.bio}
          label="Influencer Bio"
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
