import { Chip, Grid } from "@mui/material";
import React from "react";
import { VALUES } from "../../api/data";

export const Values = ({ data, handleChange }) => {
  return (
    <Grid container spacing={1}>
      {VALUES.map((v) => {
        return (
          <Grid key={v} item>
            <Chip
              label={v.toLowerCase()}
              color={data.values.includes(v) ? "success" : "default"}
              onClick={() => handleChange(v, "values")}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
