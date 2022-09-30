import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const InfluencerBio = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="influencerBio"
          name="influencerBio"
          value={data.influencerBio}
          label="Influencer Bio"
          variant="standard"
          aria-describedby="influencer-bio-helper"
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
    </Box>
  );
};
