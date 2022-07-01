import React from "react";
import { Container, Grid } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router";
import { BreadcrumbComponent } from "./components/Breadcrumbs";

export const Layout = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: "background.pinfluencerLightGreen" }}
    >
      <ResponsiveAppBar />
      <BreadcrumbComponent />
      <Grid
        item
        sx={{
          mx: "24px",
          minHeight: "50vh",
          marginBottom: "20px",
        }}
      >
        <Outlet />
      </Grid>
      <Footer />
    </Container>
  );
};
