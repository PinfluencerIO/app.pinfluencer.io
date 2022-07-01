import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getCampaign } from "../../api/api";
import isValidUUID from "../../components/uuidUtils";
import { BadUrl } from "../BadUrl";

export const ViewCampaign = () => {
  const nav = useNavigate();
  const { id } = useParams();
  let campaignId = isValidUUID(id);
  const [campaign, setCampaign] = useState();
  useEffect(() => {
    getCampaign(campaignId).then((c) => setCampaign(c));
  }, [campaignId]);
  if (!campaignId) {
    return <BadUrl />;
  }

  return (
    <Stack spacing={2}>
      <Box display="flex" flexDirection="row" justifyContent="end">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            nav("edit");
          }}
        >
          Edit
        </Button>
      </Box>
      <Stack spacing={2} direction="row">
        <Paper sx={{ flexGrow: 1 }}>
          <Typography component="h3" sx={{ color: "lightText" }}>
            Campaign Details
          </Typography>
          <Typography variant="h4">{campaign?.campaignTitle}</Typography>
          <Typography variant="h5">Campaign Details</Typography>
          <Typography sx={{ color: "lightText" }}>
            {/* {campaign?.campaignDescription} */}
          </Typography>
          <Stack direction="row" spacing={10}>
            <Stack>
              <Typography variant="h5">Product Link</Typography>
              <Typography sx={{ color: "lightText" }} component="span">
                {campaign?.campaignProductLink}
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h5">Discount code</Typography>
              <Typography sx={{ color: "lightText" }} component="span">
                {campaign?.campaignDiscountCode}
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h5">Hashtag</Typography>
              <Typography sx={{ color: "lightText" }} component="span">
                {campaign?.campaignHashtag}
              </Typography>
            </Stack>
          </Stack>
          <Typography component="h3" sx={{ color: "lightText" }}>
            Categories
          </Typography>
          {campaign?.campaignCategories.map((c) => {
            return (
              <Chip
                key={c}
                label={c}
                sx={{
                  m: "10px",
                  border: "1px solid ",
                }}
              />
            );
          })}
          <Typography component="h3" sx={{ color: "lightText" }}>
            Values
          </Typography>
          {campaign?.campaignValues.map((v) => {
            return (
              <Chip
                key={v}
                label={v}
                sx={{
                  m: "10px",
                  border: "1px solid ",
                }}
              />
            );
          })}
        </Paper>
        <Paper sx={{ flexGrow: 2 }}>
          <Typography component="h3" sx={{ color: "lightText" }}>
            Campaign Objectives
          </Typography>
          <Typography variant="h4">{campaign?.campaignTitle}</Typography>
        </Paper>
      </Stack>
      <Paper>Product</Paper>
    </Stack>
  );
};
