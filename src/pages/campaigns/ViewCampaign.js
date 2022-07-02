import {
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getCampaign } from "../../api/api";
import { OBJECTIVES } from "../../api/data";
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
  false &&
    console.log(nav, campaign, Button, Chip, Paper, Stack, Typography, Box);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={8}>
        <Paper
          sx={{
            padding: "24px",
            "& p:not(:first-child)": { mt: "10px" },
          }}
        >
          <Typography sx={{ color: "lightText" }}>Campaign Details</Typography>
          <Typography sx={{ fontSize: "1.5rem" }}>
            {campaign?.campaignTitle}
          </Typography>
          <Typography sx={{}}>Description</Typography>
          <Typography sx={{ color: "lightText" }}>
            {campaign?.campaignDescription}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Paper
          sx={{
            padding: "24px",
            "& p:not(:first-child)": { mt: "10px" },
          }}
        >
          <Typography component="p" sx={{ color: "lightText" }}>
            Campaign Objectives
          </Typography>
          <Typography sx={{ fontSize: "1.5rem" }}>
            {OBJECTIVES.find((o) => o.key === campaign?.objective)?.label}
          </Typography>
          <Typography component="p">What does success look like?</Typography>
          <Typography sx={{ color: "lightText" }}>
            {campaign?.successDescription}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            padding: "24px",
            "& p:not(:first-child)": { mt: "10px" },
          }}
        >
          <Typography sx={{ color: "lightText" }}>Product</Typography>
        </Paper>
      </Grid>
    </Grid>
  );

  // (

  // <Stack spacing={2} border={1}>
  //   <Box display="flex" flexDirection="row" justifyContent="end">
  //     <Button
  //       variant="contained"
  //       color="secondary"
  //       onClick={() => {
  //         nav("edit");
  //       }}
  //     >
  //       Edit
  //     </Button>
  //   </Box>
  //   <Stack spacing={2} direction="row" border={1}>
  //     <Paper sx={{ padding: "24px", lineHeight: "1rem" }}>
  //       <Typography sx={{ color: "lightText" }}>Campaign Details</Typography>
  //       <Typography>{campaign?.campaignTitle}</Typography>
  //       <Typography>Campaign Details</Typography>
  //       <Box overflow="auto">
  //         <Typography sx={{ color: "lightText" }}>
  //           {campaign?.campaignDescription}
  //         </Typography>
  //       </Box>
  //       <Stack direction="row" spacing={10}>
  //         <Stack>
  //           <Typography>Product Link</Typography>
  //           <Typography sx={{ color: "lightText" }} component="span">
  //             {campaign?.campaignProductLink}
  //           </Typography>
  //         </Stack>
  //         <Stack>
  //           <Typography>Discount code</Typography>
  //           <Typography sx={{ color: "lightText" }} component="span">
  //             {campaign?.campaignDiscountCode}
  //           </Typography>
  //         </Stack>
  //         <Stack>
  //           <Typography>Hashtag</Typography>
  //           <Typography sx={{ color: "lightText" }} component="span">
  //             {campaign?.campaignHashtag}
  //           </Typography>
  //         </Stack>
  //       </Stack>
  //       <Typography component="p" sx={{ color: "lightText", mt: "24px" }}>
  //         Categories
  //       </Typography>
  //       {campaign?.campaignCategories.map((c) => {
  //         return (
  //           <Chip
  //             key={c}
  //             label={c}
  //             sx={{
  //               m: "10px",
  //               border: "1px solid ",
  //             }}
  //           />
  //         );
  //       })}
  //       <Typography component="p" sx={{ color: "lightText" }}>
  //         Values
  //       </Typography>
  //       {campaign?.campaignValues.map((v) => {
  //         return (
  //           <Chip
  //             key={v}
  //             label={v}
  //             sx={{
  //               m: "10px",
  //               border: "1px solid ",
  //             }}
  //           />
  //         );
  //       })}
  //     </Paper>
  //     <Paper sx={{ padding: "24px" }}>
  //       <Typography component="p" sx={{ color: "lightText" }}>
  //         Campaign Objectives
  //       </Typography>
  //       <Typography>{campaign?.campaignTitle}</Typography>
  //     </Paper>
  //   </Stack>
  //   <Paper sx={{ padding: "24px" }}>Product</Paper>
  // </Stack>
  // );
};
