import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { BackLink } from "../../components/displayTypes/BackLink";
import { Categories } from "../../presentation/categories/Categories";
import { Values } from "../../presentation/values/Values";

export const BrandPublicView = ({ data }) => {
  return (
    <Stack width="100%" rowGap={2} mt={-5}>
      <BackLink backLocation="/profile" />
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
