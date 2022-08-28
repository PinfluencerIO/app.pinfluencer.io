import { Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function HeaderAndValue({ header, value }) {
  if (value)
    return (
      <Grid item sx={{ pb: "20px" }}>
        <Typography
          sx={{
            color: "lightText",
            display: { xs: "none", sm: "block" },
          }}
        >
          {header}
        </Typography>
        <Typography variant="h5">{value}</Typography>
      </Grid>
    );
  return <Fragment />;
}
