import { Paper } from "@mui/material";
import React from "react";
import { listings } from "../api/data";
import { ListingRow } from "../presentation/ListingRow";

const Dev = () => {
  return (
    <Paper variant="outlined" sx={{ padding: 1 }}>
      <ListingRow
        key={listings[1].id}
        listingTitle={listings[1].title}
        productName={listings[1].name}
        month={listings[1].listingMonth}
        year={listings[1].listingYear}
        appliedCount={1}
        approvedCount={2}
        rejectedCount={0}
      />
    </Paper>
  );
};

export default Dev;
