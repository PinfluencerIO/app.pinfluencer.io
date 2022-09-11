import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const HomePage = () => {
  return (
    <Box minHeight={500}>
      <Stack spacing={3}>
        <Typography variant="h4">Welcome to Pinfluencer</Typography>
        <Typography paddingTop="5px" variant="p">
          This will be the home page with details about what&apos;s going on
          with Pinfluencer App
        </Typography>
      </Stack>
    </Box>
  );
};
