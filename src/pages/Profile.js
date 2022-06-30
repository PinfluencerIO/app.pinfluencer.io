import { Box, Button, Chip, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import placeholdHeader from "../assets/placeholder-header.jpg";
import placeholderLogo from "../assets/brand-icon.jpg";
import LanguageIcon from "@mui/icons-material/Language";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useEffect } from "react";

import { getBrand } from "../api/api";
export const Profile = () => {
  const [brand, setBrand] = useState({});
  useEffect(() => {
    getBrand().then((brand) => setBrand(brand));
  }, []);

  function getHeaderOrPlacement() {
    if (brand.headerImage) {
      return "url(" + brand.headerImage + ")  center center no-repeat";
    } else {
      return "url(" + placeholdHeader + ")  center center no-repeat";
    }
  }

  function getLogoOrPlacement() {
    if (brand.logo) {
      return brand.logo;
    } else {
      return placeholderLogo;
    }
  }

  return (
    <Stack spacing={3}>
      <Paper sx={{ pb: "50px" }}>
        <Box
          sx={{
            height: { xs: "10vh", sm: "12vh", md: "14vh", lg: "16vh" },
            background: getHeaderOrPlacement(),
            backgroundSize: "cover",
            borderRadius: "5px",
          }}
        ></Box>
        <Box
          sx={{
            border: "1px solid",
            height: { xs: "50px", sm: "65px", md: "80px" },
            width: { xs: "50px", sm: "65px", md: "80px" },
            ml: { xs: "25px", sm: "30px", md: "35px", lg: "40px" },
            mt: { xs: "-35px", sm: "-40px", md: "-45px", lg: "-50px" },
          }}
        >
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src={getLogoOrPlacement()}
            alt="brand-logo"
          ></img>
        </Box>
        <Stack
          direction="row"
          sx={{
            mx: "20px",
            my: { xs: "5px", sm: "10px", md: "20px" },
          }}
        >
          <Stack direction="column" flexGrow="1">
            <h3>{brand.brandName}</h3>
            <Stack direction={{ xs: "column", md: "row" }}>
              <Box
                sx={{
                  flexGrow: { xs: 1, sm: 1, md: 8 },
                  maxHeight: "300px",
                  maxWidth: "800px",
                  overflowY: "scroll",
                  mr: { xs: "5px", sm: "10px", md: "50px", lg: "90px" },
                }}
              >
                {brand.brandDescription}
              </Box>
              <Box
                sx={{
                  flexGrow: 2,
                  minWidth: "200px",
                  mt: { xs: "20px", sm: "30px", md: "0" },
                }}
              >
                <Stack direction="row">
                  <LanguageIcon />
                  <Stack sx={{ ml: "15px" }}>
                    <div style={{ color: "gray" }}>Website</div>
                    <div>{brand.website}</div>
                  </Stack>
                </Stack>
                <Stack direction="row" sx={{ mt: "15px" }}>
                  <PhotoCameraIcon />
                  <Stack sx={{ ml: "15px" }}>
                    <div style={{ color: "gray" }}>Instagram name</div>
                    <div>{brand.instaHandle}</div>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Paper>

      <Stack spacing={3} direction={{ xs: "column", sm: "column", md: "row" }}>
        <Paper sx={{ px: "20px", flexGrow: 1, pb: "50px" }}>
          <h4>About us</h4>
          <Stack spacing={2}>
            <Stack direction="column">
              <Box style={{ color: "gray" }}>Name</Box>
              <Box>
                {brand.firstName} {brand.lastName}
              </Box>
            </Stack>
            <Stack direction="column">
              <Box style={{ color: "gray" }}>Email</Box>
              <Box>{brand.email}</Box>
            </Stack>
          </Stack>
        </Paper>
        <Paper sx={{ px: "20px", flexGrow: 3 }}>
          <Stack direction="column">
            <h4>Categories</h4>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              {brand.categories?.map((i) => (
                <Chip key={i} label={i} />
              ))}
            </Stack>
            <h4>Values</h4>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              {brand.values?.map((i) => (
                <Chip key={i} label={i} />
              ))}
            </Stack>
          </Stack>
        </Paper>
      </Stack>
      <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
        <Button variant="contained">Edit</Button>
      </Box>
    </Stack>
  );
};
