import React from "react";
import { Container, Grid } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router";

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

        <Grid item xs={12} ml={3} mt={2} mb={2}>
          <Outlet />
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
