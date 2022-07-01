import { Button, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router";
import isValidUUID from "../../components/uuidUtils";
import { BadUrl } from "../BadUrl";

export const ViewCampaign = () => {
  let { id } = useParams();
  let campaignId = isValidUUID(id);
  if (!campaignId) {
    return <BadUrl />;
  }
  return (
    <Stack spacing={2}>
      <Box display="flex" flexDirection="row" justifyContent="end">
        <Button variant="contained" color="secondary">
          Edit
        </Button>
      </Box>
      <Stack spacing={2} direction="row">
        <Paper sx={{ flexGrow: 4 }}>Campaign Details</Paper>
        <Paper sx={{ flexGrow: 2 }}>Campaign Objectives</Paper>
      </Stack>
      <Paper>Product</Paper>
    </Stack>
  );
};
