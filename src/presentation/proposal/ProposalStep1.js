import { Box, Stack } from "@mui/material";
import React from "react";

export const ProposalStep1 = () => {
  return (
    <Stack spacing={2}>
      <Box>Title [Short text description]</Box>
      <Box>
        Objective [Longer description of what the Brand is looking for. Eg. Wear
        a halloween costume while drinking our new autumn cocktail]
      </Box>
    </Stack>
  );
};
