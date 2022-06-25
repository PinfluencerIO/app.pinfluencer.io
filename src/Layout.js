import React from "react";
import { Container, Grid } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <ResponsiveAppBar />
        </Grid>

        <Grid item xs={12}>
          <Outlet />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "white",
          }}
        >
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};
