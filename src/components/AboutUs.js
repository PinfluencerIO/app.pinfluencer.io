import { Paper, Typography } from "@mui/material";
import React from "react";

export const AboutUs = ({ brand }) => {
  return (
    <Paper elevation={3}>
      <Typography variant="h4" color="gray">
        Your details
      </Typography>
      <Typography variant="h6">Name</Typography>
      <Typography variant="body1">
        {brand.firstName} {brand.lastName}
      </Typography>
      <Typography variant="h6">Email</Typography>
      <Typography variant="body1">{brand.email}</Typography>
    </Paper>
  );
};
