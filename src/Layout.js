import React from "react";
import { Container, Grid } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router";
import { useTheme } from "@emotion/react";
import { BreadcrumbComponent } from "./components/Breadcrumbs";

export const Layout = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: theme.palette.background.pinfluencerLightGreen }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <ResponsiveAppBar />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "20px",
            marginBottom: "5px",
            marginLeft: "20px",
            minHeight: "45px",
          }}
        >
          <BreadcrumbComponent />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            minHeight: "50vh",
            marginBottom: "20px",
          }}
        >
          <Outlet />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: theme.palette.background.pinfluencerLightGreen,
          }}
        >
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};
