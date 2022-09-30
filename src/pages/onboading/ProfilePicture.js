import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const ProfilePicture = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="profilePicture"
          name="profilePicture"
          value={data.profilePicture}
          label="Profile Picture"
          variant="standard"
          aria-describedby="profile-picture-helper"
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
    </Box>
  );
};
