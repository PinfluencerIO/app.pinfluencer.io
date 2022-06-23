import { Container, Grid } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Container sx={{ borderTop: "1px solid" }}>
      <footer>
        <Grid container justifyContent={{ sm: "space-between", xs: "center" }}>
          <Grid
            item
            sm={12}
            md={4}
            sx={{ textAlign: { md: "left", sm: "center" } }}
          >
            <p>Footer items</p>
          </Grid>
          <Grid item sm={12} md={4} sx={{ textAlign: "center" }}>
            <p>&copy; 2022 Pinfluencer</p>
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            sx={{ textAlign: { md: "right", sm: "center" } }}
          >
            <p>Social links</p>
          </Grid>
        </Grid>
      </footer>
    </Container>
  );
};
