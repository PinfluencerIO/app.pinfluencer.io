// import { Box, Button, Paper, Stack } from "@mui/material";
// import LanguageIcon from "@mui/icons-material/Language";
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
// import placeholdHeader from "../assets/placeholder-header.jpg";
// import placeholderLogo from "../assets/brand-icon.jpg";
import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { getBrand } from "../api/api";
import { AboutUs } from "../components/AboutUs";
import { CategoriesAndValues } from "../components/ChipDisplay";
import { Loading } from "../components/Loading";
import { TopActions } from "../components/v2/TopActions";

export const Profile = () => {
  const [brand, setBrand] = useState({});
  const [loading, setLoading] = React.useState(true);

  //TODO handle error
  useEffect(() => {
    getBrand()
      .then((brand) => setBrand(brand))
      .then(setLoading(false));
  }, []);

  // function getHeaderOrPlacement() {
  //   if (brand.headerImage) {
  //     return "url(" + brand.headerImage + ")  center center no-repeat";
  //   } else {
  //     return "url(" + placeholdHeader + ")  center center no-repeat";
  //   }
  // }

  // function getLogoOrPlacement() {
  //   if (brand.logo) {
  //     return brand.logo;
  //   } else {
  //     return placeholderLogo;
  //   }
  // }

  if (loading) {
    return <Loading />;
  }

  return (
    <Grid container spacing={1} marginX={2}>
      <TopActions>
        <Button variant="contained">Edit</Button>
      </TopActions>

      <Grid item>
        <AboutUs brand={brand} />
      </Grid>
      <Grid item>
        <CategoriesAndValues
          categories={brand.categories}
          values={brand.values}
        />
      </Grid>
    </Grid>
    // <Stack spacing={3}>
    //   <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
    //     <Button variant="contained">Edit</Button>
    //   </Box>
    //   <Paper elevation={3}>
    //     <Box
    //       sx={{
    //         height: { xs: "10vh", sm: "12vh", md: "14vh", lg: "16vh" },
    //         background: getHeaderOrPlacement(),
    //         backgroundSize: "cover",
    //         borderRadius: "5px",
    //       }}
    //     ></Box>
    //     <Box
    //       sx={{
    //         border: "1px solid",
    //         height: { xs: "50px", sm: "65px", md: "80px" },
    //         width: { xs: "50px", sm: "65px", md: "80px" },
    //         ml: { xs: "25px", sm: "30px", md: "35px", lg: "40px" },
    //         mt: { xs: "-35px", sm: "-40px", md: "-45px", lg: "-50px" },
    //       }}
    //     >
    //       <img
    //         style={{ maxWidth: "100%", height: "auto" }}
    //         src={getLogoOrPlacement()}
    //         alt="brand-logo"
    //       ></img>
    //     </Box>
    //     <Stack
    //       direction="row"
    //       sx={{
    //         mx: "20px",
    //         my: { xs: "5px", sm: "10px", md: "20px" },
    //       }}
    //     >
    //       <Stack direction="column" flexGrow="1">
    //         <h3>{brand.brandName}</h3>
    //         <Stack direction={{ xs: "column", md: "row" }}>
    //           <Box
    //             sx={{
    //               flexGrow: { xs: 1, sm: 1, md: 8 },
    //               maxHeight: "300px",
    //               maxWidth: "800px",
    //               overflowY: "scroll",
    //               mr: { xs: "5px", sm: "10px", md: "50px", lg: "90px" },
    //             }}
    //           >
    //             {brand.brandDescription}
    //           </Box>
    //           <Box
    //             sx={{
    //               flexGrow: 2,
    //               minWidth: "200px",
    //               mt: { xs: "20px", sm: "30px", md: "0" },
    //             }}
    //           >
    //             <Stack direction="row">
    //               <LanguageIcon />
    //               <Stack sx={{ ml: "15px" }}>
    //                 <div style={{ color: "gray" }}>Website</div>
    //                 <div>{brand.website}</div>
    //               </Stack>
    //             </Stack>
    //             <Stack direction="row" sx={{ mt: "15px" }}>
    //               <PhotoCameraIcon />
    //               <Stack sx={{ ml: "15px" }}>
    //                 <div style={{ color: "gray" }}>Instagram name</div>
    //                 <div>{brand.instaHandle}</div>
    //               </Stack>
    //             </Stack>
    //           </Box>
    //         </Stack>
    //       </Stack>
    //     </Stack>
    //   </Paper>

    // </Stack>
  );
};
