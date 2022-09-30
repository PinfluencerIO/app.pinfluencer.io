import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const YourDetails = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          fullWidth
          id="first-name"
          name="firstName"
          value={data.firstName}
          label="First name"
          variant="standard"
          aria-describedby="first-name-helper"
          onChange={(event) => handleChange(event)}
        />
        <TextField
          fullWidth
          id="last-name"
          name="lastName"
          value={data.lastName}
          label="Last name"
          variant="standard"
          aria-describedby="last-name-helper"
          onChange={(event) => handleChange(event)}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          value={data.email}
          label="Email"
          variant="standard"
          aria-describedby="email-helper"
          type="email"
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
    </Box>
  );
};
