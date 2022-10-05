import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { getBrand } from "../../api/brandApi";
import { BackLink } from "../../components/displayTypes/BackLink";
import { Categories } from "../../components/displayTypes/Categories";
import { Values } from "../../components/displayTypes/Values";
export const PublicView = () => {
  const [data, setData] = React.useState();
  useEffect(() => {
    getBrand().then((brand) => setData(brand));
  }, []);

  if (!data) return "Loading...";

  return (
    <Stack width="100%" rowGap={2} mt={-5}>
      <BackLink />
      <Box
        sx={{
          minHeight: "100px",
          width: "100%",
          border: "1px solid",
          borderRadius: "5px",
          background: "url(" + data.headerImage + ") center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            minHeight: "50px",
            width: "50px",
            border: "1px solid",
            borderRadius: "50px",
            background: "url(" + data.logo + ") center center no-repeat",
            backgroundSize: "cover",
            position: "relative",
            top: 60,
            left: 10,
          }}
        ></Box>
      </Box>
      <Typography variant="h3">{data.brandName}</Typography>
      <Box>
        <Paper sx={{ padding: 2 }} variant="outlined">
          <Typography variant="h5">About us</Typography>
          <Typography variant="body1">{data.brandDescription}</Typography>
        </Paper>
      </Box>
      <Box>
        <Paper sx={{ padding: 2 }} variant="outlined">
          <Typography variant="h5" mb={1}>
            Campaigns
          </Typography>
          <Typography variant="body1">
            Campaigns view not implemented yet
          </Typography>
        </Paper>
      </Box>
      <Box>
        <Paper sx={{ padding: 2 }} variant="outlined">
          <Typography variant="h5">Products</Typography>
          <Typography variant="body1">
            Campaigns view not implemented yet
          </Typography>
        </Paper>
      </Box>
      <Box>
        <Paper sx={{ padding: 2 }} variant="outlined">
          <Box display="flex" flexDirection="row" mb={1}>
            <InstagramIcon />
            <Typography ml={1} variant="body1">
              {data.instaHandle}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row">
            <LanguageIcon />
            <Typography ml={1} variant="body1">
              {data.website}
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box>
        <Paper sx={{ padding: 2 }} variant="outlined">
          <Typography variant="h5" mb={1}>
            Our Values
          </Typography>
          <Values data={data} view />
        </Paper>
      </Box>
      <Box>
        <Paper sx={{ padding: 2 }} variant="outlined">
          <Typography variant="h5" mb={1}>
            Our Categories
          </Typography>
          <Categories data={data} view />
        </Paper>
      </Box>
    </Stack>
  );
};
