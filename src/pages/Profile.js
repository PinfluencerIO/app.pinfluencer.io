import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { getBrand } from "../api/api";
import { Loading } from "../components/Loading";
import { ChipDisplay } from "../components/v2/ChipDisplay";
import { ExternalDashboardLinks } from "../components/v2/ExternalDashboardLinks";
import { NameAndEmail } from "../components/v2/NameAndEmail";
import { BaseComponent } from "./BaseComponent.js";
import headerPlaceholder from "../assets/placeholder-header.jpg";

export const Profile = () => {
  const [brand, setBrand] = useState({});
  const [loading, setLoading] = React.useState(true);
  const externalHeaderPlaceHolder =
    "https://dummyimage.com/1200x200/de18de/222a99.jpg&text=Header+Placeholder";
  //TODO handle error
  useEffect(() => {
    getBrand()
      .then((brand) => setBrand(brand))
      .then(setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Box flex={{ xs: 0, md: 2 }} mb={3}>
        <Box display="flex" justifyContent="end" marginBottom={2}>
          <Button sx={{ width: 30 }} variant="contained">
            Edit
          </Button>
        </Box>
        <BaseComponent>
          <Box
            sx={{
              border: "0px solid",
              mb: 3,
              backgroundRepeat: "no-repeat",
              backgroundImage: externalHeaderPlaceHolder
                ? `url(${externalHeaderPlaceHolder})`
                : `url(${headerPlaceholder})`,
              backgroundSize: "cover",
              "& .logoImg": {
                width: { xs: 40, sm: 50, md: 60, lg: 80 },
                height: { xs: 40, sm: 50, md: 60, lg: 80 },
                borderRadius: "5px",
                top: 30,
                left: 10,
                position: "relative",
              },
            }}
          >
            <img
              className="logoImg"
              alt="logo"
              src="https://dummyimage.com/300x300/22de18/e02f5c.jpg&text=Logo"
            />
          </Box>
          <Stack direction={{ xs: "column", sm: "column", md: "row" }}>
            <Box flex={{ xs: 0, md: 2 }} mr={{ xs: 0, sm: 0, md: 10 }}>
              <BaseComponent heading={brand.brandName} disableBorder>
                <BaseComponent disableBorder>
                  {brand.brandDescription}
                </BaseComponent>
              </BaseComponent>
            </Box>
            <Box flex={{ xs: 0, md: 1 }}>
              <BaseComponent disableBorder heading="External Links">
                <ExternalDashboardLinks brand={brand} />
              </BaseComponent>
            </Box>
          </Stack>
        </BaseComponent>
      </Box>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={3}>
        <Box flex={{ xs: 0, md: 1 }}>
          <BaseComponent heading="About us">
            <NameAndEmail brand={brand} />
          </BaseComponent>
        </Box>
        <Box flex={{ xs: 0, md: 2 }}>
          <BaseComponent heading="Matching">
            <Stack direction="column">
              <BaseComponent heading="Categories" disableBorder>
                <ChipDisplay items={brand.categories} />
              </BaseComponent>
              <BaseComponent heading="Values" disableBorder>
                <ChipDisplay items={brand.values} />
              </BaseComponent>
            </Stack>
          </BaseComponent>
        </Box>
      </Stack>
    </>
  );
};

{
  /* <Box
            sx={{
              height: { xs: "10vh", sm: "12vh", md: "14vh", lg: "16vh" },

              background:
                "url(https://dummyimage.com/1400x200/09f/&text=long-header)",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              borderRadius: "5px",
              border: "0px solid",
            }}
          ></Box>
          <Box
            sx={{
              height: { xs: "50px", sm: "65px", md: "80px" },
              width: { xs: "50px", sm: "65px", md: "80px" },
              ml: { xs: "25px", sm: "30px", md: "35px", lg: "40px" },
              mt: { xs: "-35px", sm: "-40px", md: "-45px", lg: "-50px" },

              borderRadius: "5px",
              border: "0px solid",
            }}
          >
            <img
              style={{ maxWidth: "100%", height: "auto" }}
              src="https://dummyimage.com/300x300/&text=brand-logo"
              alt="brand-logo"
            ></img>
          </Box> */
}
// <Grid container spacing={1} marginX={2}>
//   <TopActions>
//     <Button variant="contained">Edit</Button>
//   </TopActions>

//   <Grid item>
//     <AboutUs brand={brand} />
//   </Grid>
//   <Grid item>
//     <CategoriesAndValues
//       categories={brand.categories}`
//     />
//   </Grid>
// </Grid>
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
