import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const YourDetails = ({ data, handleChange, view }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          inputProps={{ readOnly: view ? "readonly" : "" }}
          fullWidth
          id="first-name"
          name={data.firstName ? "firstName" : "givenName"}
          value={data.firstName || data.givenName}
          label="First name"
          variant="standard"
          aria-describedby="first-name-helper"
          onChange={(event) => handleChange(event)}
          sx={{ mb: 1 }}
        />
        <TextField
          inputProps={{ readOnly: view ? "readonly" : "" }}
          fullWidth
          id="last-name"
          name={data.lastName ? "lastName" : "familyName"}
          value={data.lastName || data.familyName}
          label="Last name"
          variant="standard"
          aria-describedby="last-name-helper"
          onChange={(event) => handleChange(event)}
          sx={{ mb: 1 }}
        />
        <TextField
          inputProps={{ readOnly: view ? "readonly" : "" }}
          fullWidth
          id="email"
          name="email"
          value={data.email}
          label="Email"
          variant="standard"
          aria-describedby="email-helper"
          type="email"
          onChange={(event) => handleChange(event)}
          sx={{ mb: 1 }}
        />
      </FormControl>
    </Box>
  );
};
