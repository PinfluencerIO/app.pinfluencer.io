import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const InfluencerDetails = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="instaHandle"
          name="instaHandle"
          value={data.instaHandle}
          label="Instagram"
          variant="standard"
          aria-describedby="instagram-helper"
          onChange={(event) => handleChange(event)}
        />
        <TextField
          fullWidth
          id="website"
          name="website"
          value={data.website}
          label="Website"
          variant="standard"
          aria-describedby="website-helper"
          onChange={(event) => handleChange(event)}
        />
        <TextField
          fullWidth
          id="address"
          name="address"
          value={data.address}
          label="Address"
          variant="standard"
          aria-describedby="address-helper"
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
    </Box>
  );
};
