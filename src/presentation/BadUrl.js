import { Stack, Typography } from "@mui/material";
import React from "react";

export const BadUrl = () => {
  return (
    <Stack rowGap={2}>
      <Typography variant="body1">There&apos;s nothing here!</Typography>
      <Typography variant="body1">
        The feature you wanted might not be ready yet
      </Typography>
      <Typography variant="body1">
        Not to worry, click Pinfluencer in the header to go to the home page 👌
      </Typography>
    </Stack>
  );
};
