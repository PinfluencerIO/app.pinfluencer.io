import { Box, TextField } from "@mui/material";
import React from "react";
import { BaseComponent } from "../../pages/BaseComponent";

export const NameAndEmail = ({ isEdit, brand, handleChange }) => {
  return isEdit ? (
    <BaseComponent disableBorder disableGutter>
      <Box display="flex" flexDirection="column">
        <Box>
          <TextField
            sx={{ width: "100%" }}
            required
            id="firstName"
            label="First Name"
            name="firstName"
            variant="outlined"
            autoComplete="false"
            value={brand.firstName}
            onChange={(event) => handleChange(event)}
          />
        </Box>
        <Box marginTop={3}>
          <TextField
            sx={{ width: "100%" }}
            required
            id="LastName"
            label="Last Name"
            name="lastName"
            variant="outlined"
            autoComplete="false"
            value={brand.lastName}
            onChange={(event) => handleChange(event)}
          />
        </Box>
        <Box marginTop={3}>
          <TextField
            sx={{ width: "100%" }}
            required
            type="email"
            id="email"
            label="Email"
            name="email"
            variant="outlined"
            autoComplete="false"
            value={brand.email}
            onChange={(event) => handleChange(event)}
          />
        </Box>
      </Box>
    </BaseComponent>
  ) : (
    <Box sx={{ width: "100%" }} display="flex" flexDirection="column">
      <BaseComponent heading="Name" disableBorder disableGutter>
        {brand.firstName} {brand.lastName}
      </BaseComponent>
      <BaseComponent heading="Email" disableBorder disableGutter>
        {brand.email}
      </BaseComponent>
    </Box>
  );
};
