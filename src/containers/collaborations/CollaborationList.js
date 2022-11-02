import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MovieIcon from "@mui/icons-material/Movie";

import {
  Avatar,
  Box,
  Grid,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { collaborations as data, influencers, listings } from "../../api/data";
import { BackLink } from "../../presentation/BackLink";
import { Categories } from "../../presentation/categories/Categories";
import { IconNumber } from "../../presentation/IconNumber";
import { Image } from "../../presentation/image/Image";
import { Values } from "../../presentation/values/Values";
export const CollaborationList = ({ state }) => {
  const params = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openListing, setOpenListing] = React.useState(true);
  const [collaborations, setCollaborations] = React.useState([]);
  const [listing, setListing] = React.useState(undefined);
  useEffect(() => {
    const filtered = data.filter((c) => {
      return params.id === c.listing && c.state === state;
    });
    setCollaborations(filtered);
    const prop = listings.find((p) => {
      return p.id === params.id;
    });
    setListing(prop);
  }, [state, params]);

  if (collaborations.length === 0)
    return `No ${state} collaborations available`;
  if (!listing) return "Loading...";
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
      {/* Listing heading and open/close control */}
      <Stack direction="row" alignItems="center" sx={{ mt: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
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

      {/* Listing details closed [summary]  */}
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          display: openListing ? "none" : "flex",
        }}
      >
        <Box
          gap={3}
          display="flex"
          sx={{
            alignItems: "center",
            "&>p": {
              fontWeight: 600,
              "&::first-letter": {
                textTransform: "capitalize",
              },
            },
          }}
        >
          <Avatar src={listing.image} />
          <Typography>{listing.title}</Typography>
          <Typography>{listing.name}</Typography>
          <Typography>
            {listing.listingMonth} {listing.listingYear}
          </Typography>
        </Box>
      </Paper>

      {/* Listing details open [full]  */}
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
                  data={listing}
                  width="170px"
                  height="170px"
                  view
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={1}
                sx={{
                  "&>p": {
                    "&::first-letter": {
                      textTransform: "capitalize",
                    },
                  },
                }}
              >
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  {listing.title}
                </Typography>
                <Typography>{listing.name}</Typography>
                <Typography>
                  {listing.listingMonth} {listing.listingYear}
                </Typography>
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
                  <Categories size="0.5rem" data={listing} view />
                </Box>
                <Box sx={{ mt: 1 }}>
                  <Typography sx={{ fontWeight: 700 }} variant="body1">
                    Values
                  </Typography>
                  <Values size="0.5rem" data={listing} view />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Collaboration heading  */}
      <Typography variant="h5" sx={{ my: 2, fontWeight: 800 }}>
        Influencers that have {formatState(state)}
      </Typography>

      {/* Collaboration table  */}
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
              onClick={handleOpen}
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
                  {open ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowRightIcon />
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Paper>

      {/* Collaboration details [full]  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Application Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The full details will be displayed here
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
const text = {
  overflow: "hidden",
  flexGrpw: 1,
  display: { md: "-webkit-box", sm: "-webkit-box", xs: "none" },
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
