import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Dashboard = () => {
  return (
    <Box minHeight={500}>
      <Stack spacing={3}>
        <Typography variant="h4">Your Pinfluencer Dashboard</Typography>
        <Typography paddingTop="5px" variant="p">
          Details of what is going on with your Pinfluencer account
        </Typography>
        <Typography paddingTop="5px" variant="p">
          Widgets with metrics on your campaigns and progress on Collaborations
        </Typography>
      </Stack>
    </Box>
  );
};
