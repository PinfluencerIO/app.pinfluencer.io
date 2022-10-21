import { Chip, Grid } from "@mui/material";
import React from "react";
import { VALUES } from "../../api/data";

export const Values = ({ data, handleChange, view }) => {
  const renderChip = (v) => {
    return (
      <Grid key={v} item>
        <Chip
          label={v.toLowerCase()}
          color={data.values.includes(v) ? "success" : "default"}
          onClick={() => handleChange(v, "values")}
        />
      </Grid>
    );
  };
  return (
    <Grid container spacing={1} marginTop={2}>
      {view
        ? data.values.map((v) => {
            return renderChip(v);
          })
        : VALUES.map((v) => {
            return renderChip(v);
          })}
    </Grid>
  );
};
