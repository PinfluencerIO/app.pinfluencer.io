import { Chip, Grid } from "@mui/material";
import React from "react";
import { CATEGORIES } from "../../api/data";

export const Categories = ({ data, handleChange, view }) => {
  const renderChip = (c) => {
    return (
      <Grid key={c} item>
        <Chip
          label={c.toLowerCase()}
          color={data.categories.includes(c) ? "success" : "default"}
          onClick={() => handleChange(c, "categories")}
        />
      </Grid>
    );
  };
  return (
    <Grid container spacing={1}>
      {view
        ? data.categories.map((c) => {
            return renderChip(c);
          })
        : CATEGORIES.map((c) => {
            return renderChip(c);
          })}
    </Grid>
  );
};
