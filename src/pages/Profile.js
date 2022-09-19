import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getBrand } from "../api/api";
import headerPlaceholder from "../assets/placeholder-header.jpg";
import { Loading } from "../components/Loading";
import { BrandNameAndDescription } from "../components/v2/BrandNameAndDescription";
import { ExternalDashboardLinks } from "../components/v2/ExternalDashboardLinks";
import { NameAndEmail } from "../components/v2/NameAndEmail";
import { ProfileActions } from "../components/v2/ProfileActions";
import { ProfileMatchingDetails } from "../components/v2/ProfileMatchingDetails";
import { BaseComponent } from "./BaseComponent.js";

export const Profile = () => {
  const [brand, setBrand] = useState({});
  const [loading, setLoading] = React.useState(true);
  const externalHeaderPlaceHolder =
    "https://dummyimage.com/1200x200/de18de/222a99.jpg&text=Header+Placeholder";

  const location = useLocation();
  const isEdit = location.pathname.includes("edit");
  //TODO handle error
  useEffect(() => {
    getBrand()
      .then((brand) => setBrand(brand))
      .then(setLoading(false));
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBrand((currentState) => {
      return { ...currentState, [name]: value };
    });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Box flex={{ xs: 0, md: 2 }} mb={3}>
        {/* Action row */}
        <Box display="flex" justifyContent="space-between" marginBottom={2}>
          <ProfileActions isEdit={isEdit} brand={brand} />
        </Box>

        {/* Top Row Details */}
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
              borderRadius: "5px",
              "& .logoImg": {
                width: { xs: 40, sm: 50, md: 80, lg: 80 },
                height: { xs: 40, sm: 50, md: 80, lg: 80 },
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
            <Box
              flex={{ xs: 0, md: 2 }}
              mr={{ xs: 0, sm: 0, md: 3 }}
              marginTop={1}
            >
              <BrandNameAndDescription
                isEdit={isEdit}
                brand={brand}
                handleChange={handleChange}
              />
            </Box>
            <Box flex={{ xs: 0, md: 1 }} marginTop={1}>
              <ExternalDashboardLinks
                isEdit={isEdit}
                brand={brand}
                handleChange={handleChange}
              />
            </Box>
          </Stack>
        </BaseComponent>
      </Box>
      {/* Bottom row details */}
      <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={3}>
        <Box flex={{ xs: 0, md: 1 }}>
          <BaseComponent heading={isEdit ? "" : "About us"}>
            <NameAndEmail
              isEdit={isEdit}
              brand={brand}
              handleChange={handleChange}
            />
          </BaseComponent>
        </Box>
        <Box flex={{ xs: 0, md: 2 }}>
          <BaseComponent heading={isEdit ? "" : "Matching"}>
            <ProfileMatchingDetails
              isEdit={isEdit}
              brand={brand}
              handleChange={handleChange}
            />
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
