import { Stack, Typography } from "@mui/material";
import React from "react";

export const Dashboard = ({user}) => {
  return (
    <Stack rowGap={2}>
      <Typography variant="body1">
        Hi {user.given_name} - This is details of what is going on with your
        Pinfluencer account.  Widgets with metrics and all that good stuff.
      </Typography>
      
    </Stack>
  );
};
