import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
export const AboutYou = ({ data, handleChange }) => {
  return (
    <Stack spacing={3} p={{ xs: 2, sm: 5, md: 5 }}>
      <Typography variant="h4">Welcome to Pinfluencer</Typography>
      <Typography variant="body1">
        To get you started, please complete this quick onboarding process
      </Typography>

      <TextField
        required
        type="email"
        id="email"
        label="Email"
        name="email"
        variant="outlined"
        autoComplete="false"
        value={data.email}
        onChange={(event) => handleChange(event)}
      />
      <Stack spacing={3} direction={{ xs: "column", sm: "row", md: "row" }}>
        <TextField
          required
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
          required
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
        label="You have read and agree to our privacy policy *"
      />
    </Stack>
  );
};
