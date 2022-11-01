import { Chip, Grid } from "@mui/material";
import React from "react";
import { CATEGORIES } from "../../api/data";

export const Categories = ({ data, handleChange, view, size }) => {
  const renderChip = (c) => {
    return (
      <Grid key={c} item>
        <Chip
          sx={{ fontSize: size ? size : "" }}
          label={c.toLowerCase()}
          color={data.categories.includes(c) ? "success" : "default"}
          onClick={() => handleChange(c, "categories")}
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
          color={data.categories.includes(v) ? "success" : "default"}
        />
      </Grid>
    );
  };
  return (
    <Grid container gap={1} margin="0 auto 0">
      {view
        ? data.categories.map((c) => {
            return renderDisplayChip(c);
          })
        : CATEGORIES.map((c) => {
            return renderChip(c);
          })}
    </Grid>
  );
};
