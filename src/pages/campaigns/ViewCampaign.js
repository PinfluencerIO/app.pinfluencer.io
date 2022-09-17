import { Button, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getCampaign, updateCampaignState } from "../../api/api";
import { OBJECTIVES } from "../../api/data";
import { CategoriesAndValues } from "../../components/ChipDisplay";
import HeaderAndValue from "../../components/HeaderAndValue";
import isValidUUID from "../../components/uuidUtils";
import { BadUrl } from "../BadUrl";

export const ViewCampaign = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const validId = isValidUUID(id);
  const [campaign, setCampaign] = React.useState();
  const [loading, setLoading] = React.useState(false);
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
    <Stack spacing={3}>
      <Box display="flex" justifyContent="flex-end">
        {getAvailableActionsFor(campaign?.id, campaign?.status).map(
          (action) => {
            return (
              <Button
                sx={{ marginLeft: 1 }}
                key={action.label}
                variant={action.variant}
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            );
          }
        )}
      </Box>
      <Stack
        spacing={3}
        direction={{ xs: "column", sm: "column", md: "row" }}
        flexGrow={1}
        flexBasis={0}
        minWidth={0}
      >
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 5, md: 5 },
            flexGrow: 2,
            flexBasis: 0,
            minWidth: 0,
          }}
        >
          <Stack spacing={3}>
            <HeaderAndValue
              header="Campaign Details"
              value={campaign?.campaignTitle}
            />
            <HeaderAndValue
              header="Description"
              value={campaign?.campaignDescription}
            />

            <Stack
              spacing={3}
              direction={{ xs: "column", sm: "column", md: "row" }}
              justifyContent="space-between"
            >
              <Stack spacing={3}>
                <HeaderAndValue
                  header="Product Link"
                  value={campaign?.campaignProductLink}
                />
              </Stack>
              <Stack spacing={3}>
                <HeaderAndValue
                  header="Discount code"
                  value={campaign?.campaignDiscountCode}
                />
              </Stack>
              <Stack spacing={3}>
                <HeaderAndValue
                  header="Hashtag"
                  value={campaign?.campaignHashtag}
                />
              </Stack>
            </Stack>
            {/* <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={{ sm: 3, md: 7 }}
            >
              <ChipDisplay
                heading="Categories"
                items={campaign?.campaignCategories}
              />
              <ChipDisplay heading="Values" items={campaign?.campaignValues} />
            </Stack> */}
          </Stack>
        </Paper>
        <CategoriesAndValues
          categories={campaign.campaignCategories}
          values={campaign.campaignValues}
        />
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 5, md: 5 },
            flexGrow: 1,
            flexBasis: 0,
            minWidth: 0,
          }}
        >
          <Stack spacing={3}>
            <HeaderAndValue
              header="Campaign Objectives"
              value={
                OBJECTIVES.find((o) => o.key === campaign?.objective)?.label
              }
            />

            <HeaderAndValue
              header="What does success look like"
              value={campaign?.successDescription}
            />
          </Stack>
        </Paper>
      </Stack>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 5, md: 5 },
          flexBasis: 0,
          minWidth: 0,
        }}
      >
        <Stack
          spacing={3}
          direction={{ xs: "column", sm: "column", md: "row" }}
        >
          <Stack
            spacing={3}
            sx={{
              flexGrow: 2,
              flexBasis: 0,
              minWidth: 0,
            }}
          >
            <HeaderAndValue header="Product" value={campaign?.productTitle} />

            <HeaderAndValue
              header="Description"
              value={campaign?.productDescription}
            />
          </Stack>
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: 0,
              minWidth: 0,
            }}
          >
            <img
              alt="Product"
              src={campaign?.productImage1}
              width="250px"
              height="250px"
            />
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );

  function getAvailableActionsFor(id, status) {
    if (status === undefined) return [];

    const edit = {
      label: "Edit",
      variant: "contained",
      onClick: () => nav("edit"),
    };
    const draft = {
      label: "Launch",
      variant: "contained",
      onClick: () => {
        updateCampaignState(id, "ACTIVE");
        nav("/Campaigns?id=" + id);
      },
    };
    const deleteAction = {
      label: "Delete",
      variant: "outlined",
      onClick: () => {
        updateCampaignState(id, "DELETED");
        nav("/campaings");
      },
    };
    const close = {
      label: "Close",
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
};
