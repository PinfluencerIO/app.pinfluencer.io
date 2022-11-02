// import MailIcon from "@mui/icons-material/Mail";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  // Badge,
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collaborations, listings as data } from "../../api/data";
import { CollaborationsStateCounts } from "../../presentation/CollaborationsStateCounts";
const text = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
export const AllListings = () => {
  const nav = useNavigate();

  const [listings, setListings] = React.useState([]);

  const handleClick = (listing) => {
    nav("/listings/view/" + listing.id);
  };
  useEffect(() => {
    setListings(data);
  }, []);
  return (
    <Box>
      <Box display="flex" justifyContent="end" pb={1}>
        <Button variant="outlined" onClick={() => nav("/listings/new")}>
          New Listing
        </Button>
      </Box>
      <Paper variant="outlined" sx={{ padding: 1 }}>
        <Typography variant="h5">My Listings ({listings.length})</Typography>
        <Box sx={{ overflow: "auto", height: "200px" }}>
          {listings
            .sort(
              (a, b) =>
                Date.parse(`${a.listingMonth} 1, ${a.listingYear}`) -
                Date.parse(`${b.listingMonth} 1, ${b.listingYear}`)
            )
            .map((p) => {
              return (
                <Box
                  key={p.id}
                  style={{
                    display: "flex",
                    marginTop: "10px",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <Box
                    onClick={() => handleClick(p)}
                    style={{ whiteSpace: "nowrap", marginRight: "10px" }}
                  >
                    <Avatar src={p.image} />
                  </Box>
                  <Box
                    style={{
                      minWidth: "100px",
                      overflow: "hidden",
                      marginRight: "10px",
                      flexGrow: 1,
                    }}
                  >
                    <Box onClick={() => handleClick(p)} sx={text}>
                      {p.title}
                    </Box>
                    <Box onClick={() => handleClick(p)} sx={text}>
                      {p.name}
                    </Box>
                    <Box p={0} m={0}>
                      <CollaborationsStateCounts
                        hideTitle
                        collaborations={collaborations}
                        listingId={p.id}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: { xs: "none", sm: "block" } }}
                    alignSelf="center"
                  >
                    {p.listingMonth} {p.listingYear}
                  </Box>
                  <IconButton onClick={() => handleClick(p)}>
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Box>
              );
            })}
        </Box>
      </Paper>
    </Box>
  );
};
