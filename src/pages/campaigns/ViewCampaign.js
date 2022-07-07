import { Button, Chip, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getCampaign, updateCampaignState } from "../../api/api";
import { OBJECTIVES } from "../../api/data";
import isValidUUID from "../../components/uuidUtils";
import { BadUrl } from "../BadUrl";

export const ViewCampaign = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const validId = isValidUUID(id);
  const [campaign, setCampaign] = useState();
  const [loading, setLoading] = useState(false);
  //TODO handle error
  useEffect(() => {
    getCampaign(id).then((c) => {
      if (!c.status) c.status = "DRAFT";
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
        xs={12}
        display="flex"
        justifyContent="flex-end"
        sx={{ "& button": { ml: "15px" } }}
      >
        {getAvailableActionsFor(campaign?.id, campaign?.status).map(
          (action) => {
            return (
              <Button
                key={action.label}
                variant={action.variant}
                color={action.color}
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            );
          }
        )}
      </Grid>
    );
  }
  function getAvailableActionsFor(id, status) {
    if (status === undefined) return [];

    const edit = {
      label: "Edit",
      color: "secondary",
      variant: "contained",
      onClick: () => nav("edit"),
    };
    const draft = {
      label: "Launch",
      color: "primary",
      variant: "contained",
      onClick: () => {
        updateCampaignState(id, "ACTIVE");
        nav("/Campaigns?id=" + id);
      },
    };
    const deleteAction = {
      label: "Delete",
      color: "red",
      variant: "outlined",
      onClick: () => {
        updateCampaignState(id, "DELETED");
        nav("/campaings");
      },
    };
    const close = {
      label: "Close",
      color: "black",
      variant: "contained",
      onClick: () => {
        updateCampaignState(id, "CLOSED");
        nav("/campaings");
      },
    };
    const actions = [
      {
        status: "DRAFT",
        actions: [edit, draft, deleteAction],
      },
      {
        status: "ACTIVE",
        actions: [edit, close],
      },
      {
        status: "CLOSED",
        actions: [close],
      },
    ];
    const response = actions.find((i) => {
      return i.status === status;
    });
    return response.actions;
  }
  function topLeftGrid() {
    return (
      <Grid item display="flex" lg={8} xs={12}>
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
      <Grid item display="flex" lg={4} xs={12}>
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
      <Grid item lg={12} xs={12}>
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
      flexGrow: 1,
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
