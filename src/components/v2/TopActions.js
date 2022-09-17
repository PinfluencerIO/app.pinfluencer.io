import { Grid } from "@mui/material";
import React from "react";
import { BreadcrumbComponent } from "../Breadcrumbs";

export const TopActions = ({ children }) => {
  return (
    <Grid container justifyContent="space-between" marginX={2}>
      <BreadcrumbComponent />
      {children}
    </Grid>
  );
};
