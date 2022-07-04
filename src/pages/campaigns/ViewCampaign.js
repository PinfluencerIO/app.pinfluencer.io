import { Button, Chip, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getAvailableActionsFor, getCampaign } from "../../api/api";
import { OBJECTIVES } from "../../api/data";
import isValidUUID from "../../components/uuidUtils";
import { BadUrl } from "../BadUrl";

export const ViewCampaign = () => {
  const { id } = useParams();
  const validId = isValidUUID(id);
  const [campaign, setCampaign] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getCampaign(id).then((c) => {
      setCampaign(c);
      setLoading(false);
    });
  }, [id]);
  if (!validId) {
    return <BadUrl />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={3}>
      {/* Buttons */}
      {actionButtons()}
      {/* Top Left Grid*/}
      {topLeftGrid()}
      {/* Top Right Grid*/}
      {topRightGrid()}
      {/* Bottom Grid*/}
      {bottomGrid()}
    </Grid>
  );

  function actionButtons() {
    return (
      <Grid
        item
        lg={12}
        display="flex"
        justifyContent="flex-end"
        sx={{ "& button": { ml: "15px" } }}
      >
        {getAvailableActionsFor(campaign?.status).map((action) => {
          return (
            <Button
              key={action.label}
              variant={action.variant}
              color={action.color}
            >
              {action.label}
            </Button>
          );
        })}
      </Grid>
    );
  }
  function topLeftGrid() {
    return (
      <Grid item display="flex" lg={8}>
        <Paper sx={paperStyle()}>
          <Typography className="lightLabel">Campaign Details</Typography>
          <Typography variant="h5">{campaign?.campaignTitle}</Typography>
          <Typography>Description</Typography>
          <Typography className="lightLabel">
            {campaign?.campaignDescription}
          </Typography>

          {linksTagsCodes()}

          {chips("Categories", campaign?.campaignCategories)}
          {chips("Values", campaign?.campaignValues)}
        </Paper>
      </Grid>
    );
  }
  function topRightGrid() {
    return (
      <Grid item display="flex" lg={4}>
        <Paper sx={paperStyle()}>
          <Typography className="lightLabel">Campaign Objectives</Typography>
          <Typography variant="h5">
            {OBJECTIVES.find((o) => o.key === campaign?.objective)?.label}
          </Typography>
          <Typography>What does success look like?</Typography>
          <Typography className="lightLabel">
            {campaign?.successDescription}
          </Typography>
        </Paper>
      </Grid>
    );
  }
  function linksTagsCodes() {
    return (
      <Grid container>
        <Grid item lg={12} my={3}>
          <Typography>Product Link</Typography>
          <Typography className="lightLabel">
            {campaign?.campaignProductLink}
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography>Discount code</Typography>
          <Typography className="lightLabel">
            {campaign?.campaignDiscountCode}
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography>Hashtag</Typography>
          <Typography className="lightLabel">
            {campaign?.campaignHashtag}
          </Typography>
        </Grid>
      </Grid>
    );
  }
  function chips(heading, items = []) {
    return (
      <Fragment>
        <Box marginY={3}>
          <Typography>{heading}</Typography>
          <Grid container>
            <Grid item>
              {items.map((item) => {
                return (
                  <Chip
                    key={item}
                    label={item}
                    sx={{
                      m: "10px",
                      border: "1px solid ",
                    }}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Fragment>
    );
  }
  function bottomGrid() {
    return (
      <Grid item lg={12}>
        <Paper sx={paperStyle()}>
          <Typography className="lightLabel">Product</Typography>
          <Typography variant="h5">{campaign?.productTitle}</Typography>
          <Typography>Description</Typography>
          <Typography className="lightLabel">
            {campaign?.productDescription}
          </Typography>
          <Grid container spacing={3} mt={3}>
            <Grid item>
              <img
                alt="Product 1"
                src={campaign?.productImage1}
                width="150px"
                height="150px"
              />
            </Grid>
            <Grid item>
              <img
                alt="Product 2"
                src={campaign?.productImage2}
                width="150px"
                height="150px"
              />
            </Grid>
            <Grid item>
              <img
                alt="Product 3"
                src={campaign?.productImage3}
                width="150px"
                height="150px"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
  function paperStyle() {
    return {
      alignSelf: "stretch",
      padding: "24px",
      "& p": {
        marginTop: "10px",
      },
      "& h5": {
        marginY: "25px",
      },
      "& .lightLabel": { color: "lightText" },
    };
  }
};
