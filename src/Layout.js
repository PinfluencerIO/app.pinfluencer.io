import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Footer } from "./components/Footer";

export const Layout = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          sx={{ position: "sticky", top: 0, borderBottom: "1px solid" }}
        >
          <ResponsiveAppBar />
        </Grid>

        <Grid item xs={12} ml={0.2} mt={2} mb={2}>
          <Paper elevation={1}>MAIN PANEL</Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            position: "sticky",
            bottom: 0,
            borderTop: "1px solid",
            backgroundColor: "white",
          }}
        >
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};
