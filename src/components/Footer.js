import { Container, Grid } from "@mui/material";
import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <Container>
      <footer>
        <Grid
          container
          justifyContent={{ sm: "space-between", xs: "center" }}
          spacing={{ xs: 0, sm: 1, md: 4 }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{
              textAlign: { md: "left", sm: "center", xs: "center" },
            }}
          >
            <p>Footer items</p>
          </Grid>
          <Grid item xs={12} sm={4} md={4} sx={{ textAlign: "center" }}>
            <p>&copy; 2022 Pinfluencer</p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
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
