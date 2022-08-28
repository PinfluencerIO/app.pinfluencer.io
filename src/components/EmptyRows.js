import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import HeaderAndValue from "./HeaderAndValue";

export default function EmptyRows({ header, value }) {
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <HeaderAndValue header={header} value={value} />
        </CardContent>
      </Card>
    </Grid>
  );
}
