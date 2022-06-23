import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Footer } from "./components/Footer";

export const Layout = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ResponsiveAppBar />
        </Grid>

        <Grid item xs={12} sx={{ height: "100vh" }}>
          <Paper elevation={4}>MAIN PANEL</Paper>
        </Grid>
        <Grid item xs={12} sx={{ position: "sticky", bottom: 0 }}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};
