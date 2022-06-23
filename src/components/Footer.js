import { Container, Grid } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Container>
      <footer>
        <Grid container justifyContent={{ sm: "space-between", xs: "center" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{ textAlign: { md: "left", sm: "center", xs: "center" } }}
          >
            <p>Footer items</p>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ textAlign: "center" }}>
            <p>&copy; 2022 Pinfluencer</p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{ textAlign: { md: "right", sm: "center", xs: "center" } }}
          >
            <p>Social links</p>
          </Grid>
        </Grid>
      </footer>
    </Container>
  );
};
