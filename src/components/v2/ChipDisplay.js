import { Chip, Grid } from "@mui/material";
import React from "react";

export const ChipDisplay = ({ items }) => {
  if (!items) items = [];
  return (
    <Grid container spacing={1}>
      {items.map((item) => {
        return (
          <Grid item key={item}>
            <Chip
              label={item}
              sx={{
                border: "1px solid",
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
