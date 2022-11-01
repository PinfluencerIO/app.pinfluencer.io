import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MovieIcon from "@mui/icons-material/Movie";

import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { collaborations as data, influencers, proposals } from "../../api/data";
import { BackLink } from "../../presentation/BackLink";
import { Categories } from "../../presentation/categories/Categories";
import { IconNumber } from "../../presentation/IconNumber";
import { Image } from "../../presentation/image/Image";
import { Values } from "../../presentation/values/Values";
export const CollaborationList = ({ state }) => {
  const params = useParams();
  const [openListing, setOpenListing] = React.useState(true);
  const [collaborations, setCollaborations] = React.useState([]);
  const [proposal, setProposal] = React.useState(undefined);
  useEffect(() => {
    const filtered = data.filter((c) => {
      return params.id === c.proposal && c.state === state;
    });
    setCollaborations(filtered);
    const prop = proposals.find((p) => {
      return p.id === params.id;
    });
    setProposal(prop);
  }, [state, params]);

  if (collaborations.length === 0)
    return `No ${state} collaborations available`;
  if (!proposal) return "Loading...";
  const influencer = (id) => {
    return influencers.find((f) => f.id === id);
  };
  const formatState = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const toggleOpenListing = () => {
    setOpenListing(!openListing);
  };
  return (
    <>
      <BackLink />

      <Stack direction="row" alignItems="center" sx={{ mt: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Listing Details
        </Typography>
        <Typography
          variant="h5"
          fontWeight="900"
          pt={1}
          onClick={toggleOpenListing}
        >
          {openListing ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </Typography>
      </Stack>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          display: openListing ? "none" : "flex",
        }}
      >
        <Box gap={3} display="flex" sx={{ alignItems: "center" }}>
          <Avatar src={proposal.image} />
          <Typography sx={{ fontWeight: 800 }}>{proposal.title}</Typography>
          <Typography sx={{ fontWeight: 800 }}>{proposal.name}</Typography>
        </Box>
      </Paper>
      <Paper
        variant="outlined"
        sx={{ p: 2, display: openListing ? "block" : "none" }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box display="flex" gap={2}>
              <Box>
                <Image
                  id="image"
                  data={proposal}
                  width="170px"
                  height="170px"
                  view
                />
              </Box>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box>{proposal.title}</Box>
                <Box>{proposal.name}</Box>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex">
              <Box>
                <Box>
                  <Typography sx={{ fontWeight: 700 }} variant="body1">
                    Categories
                  </Typography>
                  <Categories size="0.5rem" data={proposal} view />
                </Box>
                <Box sx={{ mt: 1 }}>
                  <Typography sx={{ fontWeight: 700 }} variant="body1">
                    Values
                  </Typography>
                  <Values size="0.5rem" data={proposal} view />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Typography variant="h5" sx={{ my: 2, fontWeight: 700 }}>
        Influencers that have {formatState(state)}
      </Typography>

      <Paper variant="outlined" sx={{ px: 2, overflow: "auto" }}>
        {collaborations.map((c) => {
          const creator = influencer(c.influencer);
          return (
            <Box
              key={c.id}
              sx={{
                my: "10px",
                gap: 10,
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={2}
              >
                <Avatar src={creator.image} />
                <Box
                  sx={{
                    fontWeight: 900,
                    flex: "0 0 150px",
                    verticalAlign: "top",
                  }}
                >{`${creator.givenName} ${creator.familyName}`}</Box>

                <IconNumber
                  icon={<CameraAltIcon sx={{ verticalAlign: "top" }} />}
                  number={c.application.posts}
                />
                <IconNumber
                  icon={<MovieIcon sx={{ verticalAlign: "top" }} />}
                  number={c.application.reels}
                />
                <Box sx={text}>{c.application.details}</Box>
                <Box flexGrow={1} display="flex" justifyContent="end">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Paper>
    </>
  );
};
const text = {
  overflow: "hidden",
  flexGrpw: 1,
  display: { md: "-webkit-box", sm: "-webkit-box", xs: "none" },
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": "2",
};
