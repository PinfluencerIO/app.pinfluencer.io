import { Grid, Link, Typography } from "@mui/material";
import React from "react";

export const SmallScreenFooter = () => {
  return (
    <Grid
      container
      sx={{
        bottom: 0,
        left: 0,
        "& p": {
          fontSize: "0.75rem",
          fontWeight: 400,
          letterSpacing: "0.025em",
          color: (theme) => theme.palette.grey[600],
          cursor: "pointer",
        },
        "& a:hover": {
          textDecoration: (theme) => "1px underline " + theme.palette.grey[600],
          textUnderlineOffset: 1,
        },
      }}
    >
      <Grid textAlign="center" item xs={4}>
        <Link underline="none">
          <Typography variant="body1">Terms</Typography>
        </Link>
      </Grid>
      <Grid textAlign="center" item xs={4}>
        <Link underline="none">
          <Typography variant="body1">Privacy</Typography>
        </Link>
      </Grid>
      <Grid textAlign="center" item xs={4}>
        <Link underline="none">
          <Typography variant="body1">About</Typography>
        </Link>
      </Grid>

      <Grid textAlign="center" item xs={12}>
        <Typography variant="body1">&copy; 2022 Pinfluencer</Typography>
      </Grid>
    </Grid>
  );
};
