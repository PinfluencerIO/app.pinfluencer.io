// import MailIcon from "@mui/icons-material/Mail";
import {
  // Badge,
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listings as data, collaborations as collabs } from "../../api/data";
import { ListingRow } from "../../presentation/ListingRow";

export const AllListings = () => {
  const nav = useNavigate();

  const [listings, setListings] = React.useState([]);
  const [collaborations, setCollaborations] = React.useState([]);

  //TODO: Fixme: this won't be the way an api is called
  useEffect(() => {
    setListings(data);
    setCollaborations(collabs);
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
        <Box
          sx={{ overflow: "auto", height: 550 }}
          display="flex"
          flexDirection="column"
          gap={2}
          mt={1}
        >
          {listings
            .sort(
              (a, b) =>
                Date.parse(`${a.listingMonth} 1, ${a.listingYear}`) -
                Date.parse(`${b.listingMonth} 1, ${b.listingYear}`)
            )
            .map((listing) => {
              const c = collaborations.filter((c) => {
                return c.listing === listing.id;
              });

              const counts = groupBy(c, "state");
              return (
                <ListingRow
                  key={listing.id}
                  id={listing.id}
                  listingTitle={listing.title}
                  productName={listing.name}
                  productImage={listing.image}
                  month={listing.listingMonth}
                  year={listing.listingYear}
                  appliedCount={counts.APPLIED.length}
                  approvedCount={counts.APPROVED.length}
                  rejectedCount={counts.REJECTED.length}
                />
              );
            })}
        </Box>
      </Paper>
    </Box>
  );
};

function groupBy(objectArray, property) {
  return objectArray.reduce(
    function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    },
    { APPLIED: [], APPROVED: [], REJECTED: [] }
  );
}
