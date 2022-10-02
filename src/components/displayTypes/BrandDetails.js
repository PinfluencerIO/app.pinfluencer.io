import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const BrandDetails = ({ data, handleChange, view }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          inputProps={{ readOnly: view ? "readonly" : "" }}
          fullWidth
          id="brandName"
          name="brandName"
          value={data.brandName}
          label="BrandName"
          variant="standard"
          aria-describedby="brand-name-helper"
          onChange={(event) => handleChange(event)}
          sx={{ mb: 1 }}
        />
        <TextField
          inputProps={{ readOnly: view ? "readonly" : "" }}
          fullWidth
          id="instaHandle"
          name="instaHandle"
          value={data.instaHandle}
          label="Instagram"
          variant="standard"
          aria-describedby="instagram-helper"
          onChange={(event) => handleChange(event)}
          sx={{ mb: 1 }}
        />
        <TextField
          inputProps={{ readOnly: view ? "readonly" : "" }}
          fullWidth
          id="website"
          name="website"
          value={data.website}
          label="Website"
          variant="standard"
          aria-describedby="email-helper"
          type="url"
          onChange={(event) => handleChange(event)}
          sx={{ mb: 1 }}
        />
      </FormControl>
    </Box>
  );
};
