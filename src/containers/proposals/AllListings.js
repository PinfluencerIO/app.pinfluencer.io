// import MailIcon from "@mui/icons-material/Mail";
import { Box, Button, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collaborations as collabs, listings as data } from "../../api/data";
import { ListingRow } from "../../presentation/ListingRow";
import groupBy from "../collaborations/groupByCollaborationState";

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
      <Box display="flex" justifyContent="flex-end" mb={1}>
        <Button
          size="small"
          sx={{
            fontSize: { xs: ".7rem", sm: ".9rem", md: "1rem" },
            fontWeight: 600,
          }}
          variant="outlined"
          onClick={() => nav("/listings/new")}
        >
          New Listing
        </Button>
      </Box>

      <Paper variant="outlined" sx={{ px: 1, pt: 1 }}>
        <Box display="flex" flexDirection="column" gap={2}>
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
