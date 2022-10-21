import LanguageIcon from "@mui/icons-material/Language";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { BackLink } from "../../components/displayTypes/BackLink";
import { Categories } from "../../presentation/categories/Categories";
import { Values } from "../../presentation/values/Values";

export const InfluencerPublicView = ({ data }) => {
  return (
    <Stack width="100%" rowGap={2} mt={-5}>
      <BackLink backLocation="/profile" />
      <Box
        sx={{
          margin: "auto",
          minHeight: "150px",
          width: "150px",
          border: "1px solid",
          borderRadius: "5px",
          background: "url(" + data.image + ") center center no-repeat",
          backgroundSize: "cover",
        }}
      />

      <Typography variant="h3" sx={{ margin: "auto" }}>
        {data.instaHandle}
      </Typography>
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Typography variant="h5">Bio</Typography>
        <Typography variant="body1">{data.bio}</Typography>
      </Paper>

      <Paper sx={{ padding: 2 }} variant="outlined">
        <Box display="flex" flexDirection="row">
          <LanguageIcon />
          <Typography ml={1} variant="body1">
            {data.website}
          </Typography>
        </Box>
      </Paper>
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Typography variant="h5" mb={1}>
          Instagram Posts/Stories/Reels
        </Typography>
        {"//TODO implement this card"}
      </Paper>
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Typography variant="h5" mb={1}>
          Audience Age Details
        </Typography>
        {"//TODO implement this card"}
      </Paper>
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Typography variant="h5" mb={1}>
          Audience Gender Details
        </Typography>
        {"//TODO implement this card"}
      </Paper>
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Typography variant="h5" mb={1}>
          Brands I&apos;ve worked with
        </Typography>
        {"//TODO implement this card"}
      </Paper>
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Typography variant="h5" mb={1}>
          Values
        </Typography>
        <Values data={data} view />
      </Paper>
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Typography variant="h5" mb={1}>
          Categories
        </Typography>
        <Categories data={data} view />
      </Paper>
    </Stack>
  );
};
