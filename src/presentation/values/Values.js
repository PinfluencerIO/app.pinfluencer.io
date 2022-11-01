import { Chip, Grid } from "@mui/material";
import React from "react";
import { VALUES } from "../../api/data";

export const Values = ({ data, handleChange, view, size }) => {
  const renderChip = (v) => {
    return (
      <Grid key={v} item>
        <Chip
          sx={{ fontSize: size ? size : "" }}
          label={v.toLowerCase()}
          color={data.values.includes(v) ? "success" : "default"}
          onClick={() => handleChange(v, "values")}
        />
      </Grid>
    );
  };
  const renderDisplayChip = (v) => {
    return (
      <Grid key={v} item>
        <Chip
          sx={{ fontSize: size ? size : "", cursor: "default" }}
          label={v.toLowerCase()}
          color={data.values.includes(v) ? "success" : "default"}
        />
      </Grid>
    );
  };
  return (
    <Grid container gap={1} margin="0 auto 0">
      {view
        ? data.values.map((v) => {
            return renderDisplayChip(v);
          })
        : VALUES.map((v) => {
            return renderChip(v);
          })}
    </Grid>
  );
};
