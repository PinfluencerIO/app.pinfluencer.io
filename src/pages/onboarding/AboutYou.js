import React from "react";
import { Checkbox, FormControlLabel, Stack, TextField } from "@mui/material";
export const AboutYou = ({ data, handleChange }) => {
  return (
    <React.Fragment>
      <Stack spacing={1} display={{ md: "block" }}>
        <h3>Welcome to Pinfluencer</h3>
        <p>To get you started, please complete this quick onboarding process</p>
      </Stack>
      <TextField
        id="email"
        label="Email"
        name="email"
        variant="outlined"
        autoComplete="false"
        value={data.email}
        onChange={(event) => handleChange(event)}
      />
      <Stack spacing={2} direction={{ xs: "column", sm: "column", md: "row" }}>
        <TextField
          id="firstName"
          label="First Name"
          name="firstName"
          variant="outlined"
          autoComplete="false"
          value={data.firstName}
          onChange={(event) => handleChange(event)}
          sx={{ width: { sm: "100%", md: "50%" } }}
        />
        <TextField
          id="LastName"
          label="Last Name"
          name="lastName"
          variant="outlined"
          autoComplete="false"
          value={data.lastName}
          onChange={(event) => handleChange(event)}
          sx={{ width: { sm: "100%", md: "50%" } }}
        />
      </Stack>
      <FormControlLabel
        sx={{
          justifyContent: "start",
        }}
        labelPlacement="start"
        control={
          <Checkbox
            name="privacy"
            checked={data.privacy}
            onChange={(event) => handleChange(event)}
          />
        }
        label="You have read and agree to our privacy policy"
      />
    </React.Fragment>
  );
};
